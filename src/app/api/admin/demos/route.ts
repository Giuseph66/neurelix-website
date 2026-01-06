import { NextResponse } from 'next/server';
import { readdir, readFile, stat, unlink, writeFile } from 'fs/promises';
import path from 'path';

const readMeta = async (metaPath: string) => {
    try {
        const raw = await readFile(metaPath, 'utf-8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            return parsed as Array<{ name: string; description?: string }>;
        }
    } catch (error) {
        // Ignore missing or invalid file.
    }
    return [];
};

export async function GET() {
    try {
        const demosDir = path.join(process.cwd(), 'public', 'demos');
        const metaPath = path.join(demosDir, 'demos.json');
        const meta = await readMeta(metaPath);
        const files = await readdir(demosDir);
        const metaMap = new Map(meta.map((demo) => [demo.name, demo.description || '']));
        const entries = files
            .filter((entry) => entry.endsWith('.html'))
            .map((entry) => {
                const name = entry.replace(/\.html$/, '');
                return {
                    name,
                    description: metaMap.get(name) || '',
                };
            });

        const demos = await Promise.all(
            entries.map(async (entry) => {
                const filePath = path.join(demosDir, `${entry.name}.html`);
                let date = '';
                try {
                    const info = await stat(filePath);
                    date = info.mtime.toLocaleDateString('pt-BR');
                } catch (err) {
                    // Ignore missing file date.
                }
                return {
                    name: entry.name,
                    description: entry.description || '',
                    url: `/demos/${entry.name}.html`,
                    status: 'active',
                    date,
                };
            })
        );

        return NextResponse.json({ demos: demos.filter((demo) => demo.date) });
    } catch (error) {
        console.error('Erro ao listar demos:', error);
        return NextResponse.json({ demos: [] }, { status: 200 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const name = searchParams.get('name');
        if (!name) {
            return NextResponse.json(
                { message: 'Nome da demo é obrigatório.' },
                { status: 400 }
            );
        }

        const demosDir = path.join(process.cwd(), 'public', 'demos');
        const metaPath = path.join(demosDir, 'demos.json');
        const filePath = path.join(demosDir, `${name}.html`);

        try {
            await unlink(filePath);
        } catch (err) {
            // Ignore if file does not exist.
        }

        const meta = await readMeta(metaPath);
        const nextMeta = meta.filter((demo) => demo.name !== name);
        await writeFile(metaPath, JSON.stringify(nextMeta, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Erro ao remover demo:', error);
        return NextResponse.json(
            { message: 'Erro ao remover demo.' },
            { status: 500 }
        );
    }
}
