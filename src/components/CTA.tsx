import { For } from 'solid-js';

interface Link {
    label: string;
    url: string;
    icon: string;
    category: string;
}

const links: Link[] = [
    { label: 'GitHub', url: '#', icon: '🐙', category: 'social' },
    { label: 'Twitter', url: '#', icon: '𝕏', category: 'social' },
    { label: 'LinkedIn', url: '#', icon: '💼', category: 'social' },
    { label: 'Email', url: 'mailto:hello@tianye.dev', icon: '✉️', category: 'contact' },
    { label: 'Resume', url: '#', icon: '📄', category: 'docs' }
];

export default function CTA() {
    return (
        <section class="max-w-4xl mx-auto px-6 py-24 border-t border-[#222]">
            <div class="text-center space-y-8">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        Let's create something <span class="text-green-500">extraordinary</span>
                    </h2>
                    <p class="text-gray-400 max-w-2xl mx-auto">
                        Whether you have an idea, need technical guidance, or just want to chat about 
                        the future of web technologies—I'm always excited to connect.
                    </p>
                </div>

                <div class="flex flex-wrap justify-center gap-3">
                    <For each={links}>
                        {(link) => (
                            <a 
                                href={link.url}
                                class="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#222] text-gray-300 font-mono text-sm hover:border-green-500/50 hover:text-green-400 transition-all hover:bg-green-500/5"
                            >
                                <span>{link.icon}</span>
                                <span>{link.label}</span>
                            </a>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
}
