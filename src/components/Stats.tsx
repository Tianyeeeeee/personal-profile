import { For, createSignal, onMount } from 'solid-js';

interface Stat {
    label: string;
    value: string;
    suffix: string;
    icon: string;
}

const stats: Stat[] = [
    { label: '项目完成', value: '50+', suffix: '', icon: '🚀' },
    { label: '代码质量', value: '98', suffix: '%', icon: '⭐' },
    { label: '团队协作', value: '5', suffix: '年', icon: '👥' },
    { label: '用户满意度', value: '99', suffix: '%', icon: '💯' }
];

export default function Stats() {
    const [isVisible, setIsVisible] = createSignal(false);

    onMount(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });

        const section = document.getElementById('stats-section');
        if (section) observer.observe(section);
    });

    return (
        <section id="stats-section" class="max-w-5xl mx-auto px-6 py-24">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <For each={stats}>
                    {(stat, idx) => (
                        <div class="group relative overflow-hidden rounded-xl border border-[#222] p-6 hover:border-green-500/50 transition-all duration-500 hover:bg-[#0a0a0a]"
                             style={{
                                 "animation": isVisible() ? `slideUp 0.5s ease-out ${idx() * 0.1}s both` : 'none'
                             }}>
                            <style>{`
                                @keyframes slideUp {
                                    from {
                                        opacity: 0;
                                        transform: translateY(20px);
                                    }
                                    to {
                                        opacity: 1;
                                        transform: translateY(0);
                                    }
                                }
                            `}</style>
                            
                            {/* Background glow effect */}
                            <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div class="relative z-10">
                                <div class="text-3xl mb-2">{stat.icon}</div>
                                <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {stat.value}<span class="text-green-500">{stat.suffix}</span>
                                </div>
                                <div class="text-gray-500 text-sm font-mono">{stat.label}</div>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
}
