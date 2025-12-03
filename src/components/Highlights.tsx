import { For } from 'solid-js';

interface Highlight {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
}

const highlights: Highlight[] = [
    {
        id: 1,
        title: 'Performance First',
        description: '页面加载速度 < 1s，98+ Lighthouse 分数',
        icon: '⚡',
        color: 'from-yellow-500/20 to-transparent'
    },
    {
        id: 2,
        title: 'Design-Driven',
        description: '像素完美实现，每个交互都经过深思熟虑',
        icon: '🎨',
        color: 'from-pink-500/20 to-transparent'
    },
    {
        id: 3,
        title: 'Type-Safe',
        description: '100% TypeScript，完整的类型推导和提示',
        icon: '🔒',
        color: 'from-blue-500/20 to-transparent'
    },
    {
        id: 4,
        title: 'Production-Ready',
        description: '经过充分测试和优化，可以直接上线',
        icon: '✅',
        color: 'from-green-500/20 to-transparent'
    },
    {
        id: 5,
        title: 'Accessible',
        description: 'WCAG 2.1 AA 标准，确保所有人都能使用',
        icon: '♿',
        color: 'from-purple-500/20 to-transparent'
    },
    {
        id: 6,
        title: 'Creative Coding',
        description: 'WebGL、Canvas、动画库等前沿技术应用',
        icon: '🎭',
        color: 'from-orange-500/20 to-transparent'
    }
];

export default function Highlights() {
    return (
        <section class="max-w-5xl mx-auto px-6 py-24 border-t border-[#222]">
            <h2 class="font-mono text-gray-500 mb-12 text-sm">./核心优势</h2>
            
            <div class="grid md:grid-cols-3 gap-4">
                <For each={highlights}>
                    {(item) => (
                        <div class={`group relative overflow-hidden rounded-xl border border-[#222] p-6 hover:border-[#444] transition-all duration-500 hover:bg-[#0f0f0f] cursor-pointer`}>
                            {/* Gradient background */}
                            <div class={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            <div class="relative z-10">
                                <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p class="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            
                            {/* Border highlight effect */}
                            <div class="absolute inset-0 border border-transparent group-hover:border-[#333] rounded-xl transition-colors duration-500"></div>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
}
