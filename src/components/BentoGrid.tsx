import { For } from 'solid-js';

// 定义接口，防止 TS 报错
interface ProjectItem {
    id: number;
    title: string;
    desc: string;
    tech: string[];
    size: 'large' | 'small' | 'tall'; // 控制格子大小
    color: string;
}

const items: ProjectItem[] = [
    {
        id: 1,
        title: "Leapmotor HMI",
        desc: "Next-gen EV dashboard interface - production ready",
        tech: ["React", "Canvas", "WebSocket"],
        size: "large", // 占据 2x2
        color: "bg-gradient-to-br from-blue-900/20 to-black"
    },
    {
        id: 2,
        title: "WebGL Experiments",
        desc: "Interactive particle systems and real-time graphics",
        tech: ["Three.js", "GLSL", "Solid"],
        size: "small",
        color: "bg-[#111]"
    },
    {
        id: 3,
        title: "Design System",
        desc: "100+ components with complete documentation",
        tech: ["Tailwind", "TypeScript", "Storybook"],
        size: "small",
        color: "bg-[#0d1117]"
    },
    {
        id: 4,
        title: "Generative Art",
        desc: "AI-powered creative coding platform",
        tech: ["WebGL", "WASM", "Node.js"],
        size: "small",
        color: "bg-gradient-to-br from-pink-900/20 to-black"
    }
];

export default function BentoGrid() {
    return (
        <section id="bento" class="max-w-6xl mx-auto px-6 py-24">
            <h2 class="font-mono text-gray-500 mb-8 text-sm">./selected_work</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
                <For each={items}>
                    {(item) => (
                        <div class={`
                            group relative overflow-hidden rounded-lg border border-[#222] p-5 transition-all duration-500 hover:border-green-500/50 hover:bg-[#0a0a0a]
                            ${item.color}
                            ${item.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}
                        `}>
                            {/* Hover Reveal Effect */}
                            <div class="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div class="flex flex-wrap gap-1 mb-3">
                                        <For each={item.tech}>
                                            {(t) => <span class="text-[9px] font-mono border border-[#333] px-1 py-0.5 rounded text-gray-500">{t}</span>}
                                        </For>
                                    </div>
                                    <h3 class={`font-semibold text-white ${item.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
                                        {item.title}
                                    </h3>
                                    <p class="text-gray-400 text-xs mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                                
                                {/* 装饰性箭头 */}
                                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-500 font-mono text-xs">
                                    → View
                                </div>
                            </div>
                            
                            {/* 背景微交互 */}
                            <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
}