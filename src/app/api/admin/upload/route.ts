import { NextResponse } from 'next/server';
import { access, readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const slug = formData.get('slug') as string;
        const description = formData.get('description');

        if (!file || !slug) {
            return NextResponse.json(
                { message: 'Arquivo e slug são obrigatórios.' },
                { status: 400 }
            );
        }

        if (!description || typeof description !== 'string' || !description.trim()) {
            return NextResponse.json(
                { message: 'Descrição é obrigatória.' },
                { status: 400 }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Ensure directory exists
        const demosDir = path.join(process.cwd(), 'public', 'demos');
        await mkdir(demosDir, { recursive: true });

        const metaPath = path.join(demosDir, 'demos.json');
        let meta: Array<{ name: string; description: string }> = [];
        try {
            const raw = await readFile(metaPath, 'utf-8');
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                meta = parsed;
            }
        } catch (err) {
            // Ignore missing or invalid meta file.
        }

        // Save file
        const filePath = path.join(demosDir, `${slug}.html`);
        try {
            await access(filePath);
            return NextResponse.json(
                { message: 'Já existe uma demo com esse nome.' },
                { status: 409 }
            );
        } catch (err) {
            // File does not exist, continue.
        }
        await writeFile(filePath, buffer);

        const nextMeta = [
            { name: slug, description: description.trim() },
            ...meta.filter((demo) => demo.name !== slug),
        ];
        await writeFile(metaPath, JSON.stringify(nextMeta, null, 2));

        return NextResponse.json({ success: true, path: `/demos/${slug}.html` });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { message: 'Erro ao salvar arquivo.' },
            { status: 500 }
        );
    }
}
