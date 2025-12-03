import { For } from 'solid-js';

interface FeaturedWork {
    id: number;
    title: string;
    category: string;
    description: string;
    tech: string[];
    impact: string;
    year: string;
}

const works: FeaturedWork[] = [
    {
        id: 1,
        title: 'Leapmotor HMI Dashboard',
        category: 'Product Design',
        description: '为新能源汽车设计的智能座舱交互界面，支持多点触控和语音控制。',
        tech: ['React', 'Canvas', 'WebGL'],
        impact: '支持 50+ 万台车辆上路',
        year: '2023-2024'
    },
    {
        id: 2,
        title: 'Generative Art Platform',
        category: 'Creative Coding',
        description: '基于 Three.js 的交互式生成艺术平台，支持实时渲染和参数调整。',
        tech: ['Three.js', 'GLSL', 'Solid.js'],
        impact: '10K+ 月度活跃用户',
        year: '2023'
    },
    {
        id: 3,
        title: 'Design System V2',
        category: 'System Design',
        description: '企业级 UI 组件库，包含 150+ 个组件和完整的设计规范。',
        tech: ['Tailwind', 'Storybook', 'TypeScript'],
        impact: '50+ 个项目使用',
        year: '2022-2024'
    }
];

export default function FeaturedWorks() {
    return (
        <section class="max-w-5xl mx-auto px-6 py-24 border-t border-[#222]">
            <h2 class="font-mono text-gray-500 mb-12 text-sm">./精选项目</h2>
            
            <div class="space-y-6">
                <For each={works}>
                    {(work) => (
                        <div class="group relative overflow-hidden rounded-xl border border-[#222] p-8 hover:border-green-500/50 transition-all duration-500 hover:bg-[#0a0a0a]/50">
                            <div class="flex flex-col md:flex-row justify-between md:items-start gap-6">
                                <div class="flex-1">
                                    <div class="flex items-center gap-3 mb-3">
                                        <span class="text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded">
                                            {work.category}
                                        </span>
                                        <span class="text-xs font-mono text-gray-600">{work.year}</span>
                                    </div>
                                    
                                    <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                                        {work.title}
                                    </h3>
                                    
                                    <p class="text-gray-400 text-sm mb-4 leading-relaxed max-w-2xl">
                                        {work.description}
                                    </p>
                                    
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <For each={work.tech}>
                                            {(tech) => (
                                                <span class="text-xs font-mono border border-[#333] text-gray-400 px-2 py-1 rounded hover:border-green-500/50 hover:text-green-400 transition-colors cursor-pointer">
                                                    {tech}
                                                </span>
                                            )}
                                        </For>
                                    </div>
                                </div>
                                
                                <div class="md:text-right whitespace-nowrap">
                                    <div class="text-xs text-gray-600 mb-2">业务影响</div>
                                    <div class="text-lg font-bold text-green-500">{work.impact}</div>
                                </div>
                            </div>
                            
                            {/* Background effect */}
                            <div class="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
}
