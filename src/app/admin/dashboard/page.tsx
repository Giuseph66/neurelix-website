'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Upload,
    FileText,
    ExternalLink,
    Trash2,
    LogOut,
    LayoutDashboard,
    Plus,
    Search,
    CheckCircle,
    AlertCircle,
    X,
    BarChart3,
    Activity,
    Globe
} from 'lucide-react';
import NeurelixLogo from '@/components/NeurelixLogo';
import styles from './page.module.css';

export default function AdminDashboard() {
    const [file, setFile] = useState<File | null>(null);
    const [slug, setSlug] = useState('');
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [description, setDescription] = useState('');

    const [demos, setDemos] = useState<Array<{ name: string; url: string; status: string; date: string; description?: string }>>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    useEffect(() => {
        if (!file) {
            setPreviewUrl((prevUrl) => {
                if (prevUrl) {
                    URL.revokeObjectURL(prevUrl);
                }
                return null;
            });
            return;
        }

        const nextUrl = URL.createObjectURL(file);
        setPreviewUrl((prevUrl) => {
            if (prevUrl) {
                URL.revokeObjectURL(prevUrl);
            }
            return nextUrl;
        });
        return () => {
            URL.revokeObjectURL(nextUrl);
        };
    }, [file]);

    useEffect(() => {
        const loadDemos = async () => {
            try {
                const res = await fetch('/api/admin/demos');
                if (!res.ok) return;
                const data = await res.json();
                if (Array.isArray(data.demos)) {
                    setDemos(data.demos);
                }
            } catch (err) {
                console.warn('Falha ao carregar demos', err);
            }
        };

        loadDemos();
    }, []);

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file || !slug || !description.trim()) return;

        setUploading(true);
        setMessage('');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('slug', slug);
        formData.append('description', description.trim());

        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('Upload realizado com sucesso!');
                setDemos((prev) => ([{
                    name: slug,
                    url: `/demos/${slug}.html`,
                    status: 'active',
                    date: new Date().toLocaleDateString('pt-BR'),
                    description: description.trim(),
                }, ...prev]));
                setFile(null);
                setSlug('');
                setDescription('');
                setPreviewUrl(null);
                setTimeout(() => {
                    setMessage('');
                    setIsUploadModalOpen(false);
                }, 2000);
            } else {
                setMessage(data.message || 'Erro no upload');
            }
        } catch (err) {
            setMessage('Erro de conexão');
        } finally {
            setUploading(false);
        }
    };

    const handleDeleteDemo = async (name: string) => {
        try {
            const res = await fetch(`/api/admin/demos?name=${encodeURIComponent(name)}`, {
                method: 'DELETE',
            });
            if (!res.ok) {
                const data = await res.json().catch(() => null);
                setMessage(data?.message || 'Erro ao remover demo.');
                return;
            }
            setDemos((prev) => prev.filter((demo) => demo.name !== name));
        } catch (err) {
            setMessage('Erro ao remover demo.');
        }
    };

    const statCards = [
        { label: 'Total de Demos', value: demos.length, sub: '+2 este mês', icon: Globe, valueClass: styles.statValueBlue },
        { label: 'Visualizações', value: '124', sub: 'hoje', icon: BarChart3, valueClass: styles.statValueGreen },
        { label: 'Status do Core', value: 'Online', sub: 'Estável', icon: Activity, valueClass: styles.statValueEmerald }
    ];

    return (
        <div className={`${styles.dashboardPage} neural-grid`}>
            {/* Sidebar removed */}

            {/* Main Content */}
            <main className={styles.main}>
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.header}
                >
                    <div>
                        <h1 className={styles.headerTitle}>Centro de Comando</h1>
                        <p className={styles.headerSubtitle}>Gerencie suas demonstrações e acompanhe resultados.</p>
                    </div>

                    <div className={styles.headerActions}>
                        <div className={styles.searchBox}>
                            <Search className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Buscar demos..."
                                className={styles.searchInput}
                            />
                        </div>
                        <button
                            onClick={() => window.location.href = '/'}
                            className={styles.logoutButton}
                        >
                            <LogOut className={styles.logoutIcon} />
                            <span className={styles.logoutText}>Sair</span>
                        </button>
                    </div>
                </motion.header>

                <div className={styles.sectionStack}>
                    {/* Stats Cards - Cohesive Redesign */}
                    <div className={styles.statsGrid}>
                        {statCards.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className={styles.statCard}
                            >
                                <div className={styles.statIcon}>
                                    <stat.icon size={60} />
                                </div>
                                <div>
                                    <h3 className={styles.statLabel}>{stat.label}</h3>
                                    <div className={styles.statValueRow}>
                                        <p className={`${styles.statValue} ${stat.valueClass}`}>{stat.value}</p>
                                        <span className={styles.statSub}>{stat.sub}</span>
                                    </div>
                                </div>
                                <div className={styles.statUnderline} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Demos Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={styles.tableCard}
                    >
                        <div className={styles.tableHeader}>
                            <div>
                                <h2 className={styles.tableTitle}>Demonstrações Ativas</h2>
                                <p className={styles.tableSubtitle}>Gerencie o ciclo de vida de suas demos.</p>
                            </div>
                            <button
                                onClick={() => setIsUploadModalOpen(true)}
                                className={styles.tableActionButton}
                            >
                                <Plus size={16} />
                                Adicionar Nova
                            </button>
                        </div>

                        <div className={styles.demoGrid}>
                            {demos.map((demo, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.05 }}
                                    className={styles.demoCard}
                                >
                                    <div className={styles.demoPreview}>
                                        <iframe
                                            title={`Prévia ${demo.name}`}
                                            src={demo.url}
                                            className={styles.demoFrame}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className={styles.demoContent}>
                                        <div className={styles.demoHeader}>
                                            <div className={styles.projectCell}>
                                                <div className={styles.projectIcon}>
                                                    <FileText />
                                                </div>
                                                <span className={styles.projectName}>{demo.name}</span>
                                            </div>
                                            <div className={styles.statusCell}>
                                                <div className={styles.statusDot} />
                                                <span className={styles.statusText}>Ativo</span>
                                            </div>
                                        </div>
                                        <a
                                            href={demo.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.demoLink}
                                        >
                                            {demo.url} <ExternalLink size={12} />
                                        </a>
                                        {demo.description && (
                                            <p className={styles.demoDescription}>{demo.description}</p>
                                        )}
                                        <div className={styles.demoMeta}>
                                            <span className={styles.demoDate}>{demo.date}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteDemo(demo.name)}
                                                className={styles.actionButton}
                                            >
                                                <Trash2 />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Upload Modal - Cohesive Redesign */}
            <AnimatePresence>
                {isUploadModalOpen && (
                    <div className={styles.modalRoot}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => !uploading && setIsUploadModalOpen(false)}
                            className={styles.modalBackdrop}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 20 }}
                            className={styles.modalCard}
                        >
                            {/* Decorative Glows - Minimal */}
                            <div className={styles.modalGlow} />
                            <div className={styles.modalHeader}>
                                <button
                                    type="button"
                                    onClick={() => !uploading && setIsUploadModalOpen(false)}
                                    className={styles.modalCloseButton}
                                >
                                    <X size={20} />
                                </button>
                                <div className={styles.modalHeaderIcon}>
                                    <Upload size={20} />
                                </div>
                                <h2 className={styles.modalTitle}>Lançar Demonstração</h2>
                                <p className={styles.modalDescription}>Configure os parâmetros e envie o arquivo estático do projeto.</p>
                            </div>

                            <form onSubmit={handleUpload} className={styles.modalForm}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        Identificador (Slug)
                                    </label>
                                    <div className={styles.inputGroup}>
                                        <span className={styles.inputPrefix}>
                                            /demos/
                                        </span>
                                        <input
                                            type="text"
                                            value={slug}
                                            onChange={(e) => setSlug(e.target.value)}
                                            className={styles.textInput}
                                            placeholder="ex: projeto-alpha"
                                            required
                                            disabled={uploading}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        Descrição
                                    </label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className={styles.textArea}
                                        placeholder="Descreva brevemente a demo..."
                                        required
                                        disabled={uploading}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        Arquivo de Origem
                                    </label>
                                    <div
                                        className={file ? `${styles.dropzone} ${styles.dropzoneActive}` : styles.dropzone}
                                    >
                                        <input
                                            type="file"
                                            accept=".html"
                                            onChange={handleFileChange}
                                            className={styles.dropzoneInput}
                                            required
                                            disabled={uploading}
                                        />
                                        
                                        <div className={styles.dropzoneContent}>
                                            <AnimatePresence mode="wait">
                                                {!file ? (
                                                    <motion.div 
                                                        key="empty"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        className={styles.dropzoneState}
                                                    >
                                                        <div className={styles.dropzoneIconWrapper}>
                                                            <FileText className={styles.dropzoneIcon} />
                                                        </div>
                                                        <p className={styles.dropzoneTitle}>Arraste o arquivo</p>
                                                        <p className={styles.dropzoneSubtitle}>ou clique para selecionar</p>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div 
                                                        key="selected"
                                                        initial={{ opacity: 0, scale: 0.95, y: 5 }}
                                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                                        exit={{ opacity: 0, scale: 0.95, y: 5 }}
                                                        className={styles.dropzoneState}
                                                    >
                                                        <div className={`${styles.dropzoneIconWrapper} ${styles.dropzoneIconWrapperActive}`}>
                                                            <CheckCircle className={styles.dropzoneIconActive} />
                                                        </div>
                                                        <p className={styles.dropzoneFileName}>{file.name}</p>
                                                        <p className={styles.dropzoneFileMeta}>{(file.size / 1024).toFixed(1)} KB • Pronto</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>

                                {previewUrl && (
                                    <div className={styles.modalPreview}>
                                        <div className={styles.modalPreviewHeader}>
                                            <span className={styles.modalPreviewTitle}>Pré-visualização</span>
                                        </div>
                                        <div className={styles.modalPreviewFrame}>
                                            <iframe
                                                title="Pré-visualização da página"
                                                src={previewUrl}
                                                className={styles.demoFrame}
                                            />
                                        </div>
                                    </div>
                                )}

                                <AnimatePresence>
                                    {uploading && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className={styles.progressBlock}
                                        >
                                            <div className={styles.progressHeader}>
                                                <span>Processando</span>
                                                <span className={styles.pulse}>Aguarde...</span>
                                            </div>
                                            <div className={styles.progressTrack}>
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    transition={{ duration: 2.5, ease: "easeInOut" }}
                                                    className={styles.progressBar}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence>
                                    {message && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className={`${styles.message} ${message.includes('sucesso') ? styles.messageSuccess : styles.messageError}`}
                                        >
                                            <div className={`${styles.messageIcon} ${message.includes('sucesso') ? styles.messageIconSuccess : styles.messageIconError}`}>
                                                {message.includes('sucesso') ? <CheckCircle /> : <AlertCircle />}
                                            </div>
                                            <p className={styles.messageText}>{message}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className={styles.buttonRow}>
                                    <button
                                        type="button"
                                        onClick={() => !uploading && setIsUploadModalOpen(false)}
                                        disabled={uploading}
                                        className={styles.cancelButton}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={uploading || !file || !slug}
                                        className={styles.submitButton}
                                    >
                                        {uploading ? 'Enviando...' : 'Lançar'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
