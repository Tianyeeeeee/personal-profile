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
        title: "Neon Future WebGL",
        desc: "Interactive particle system with physics engine.",
        tech: ["Three.js", "Solid"],
        size: "large", // 占据 2x2
        color: "bg-gradient-to-br from-purple-900 to-black"
    },
    {
        id: 2,
        title: "Leapmotor HMI",
        desc: "Car dashboard interface.",
        tech: ["React", "Canvas"],
        size: "small",
        color: "bg-[#111]"
    },
    {
        id: 3,
        title: "Github Activity",
        desc: "Real-time contribution graph.",
        tech: ["API", "SVG"],
        size: "small", // 模拟 Github 热力图
        color: "bg-[#0d1117]"
    },
    {
        id: 4,
        title: "Design System",
        desc: "Component library.",
        tech: ["Tailwind", "Storybook"],
        size: "tall", // 竖长条
        color: "bg-[#111]"
    }
];

export default function BentoGrid() {
    return (
        <section id="bento" class="max-w-6xl mx-auto px-6 py-24">
            <h2 class="font-mono text-gray-500 mb-8 text-sm">./projects/selected_work</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                <For each={items}>
                    {(item) => (
                        <div class={`
                            group relative overflow-hidden rounded-2xl border border-[#222] p-6 transition-all duration-500 hover:border-[#444]
                            ${item.color}
                            ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                            ${item.size === 'tall' ? 'md:row-span-2' : ''}
                        `}>
                            {/* Hover Reveal Effect */}
                            <div class="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div class="flex gap-2 mb-3">
                                        <For each={item.tech}>
                                            {(t) => <span class="text-[10px] font-mono border border-[#333] px-1.5 py-0.5 rounded text-gray-400">{t}</span>}
                                        </For>
                                    </div>
                                    <h3 class={`font-bold text-white ${item.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                                        {item.title}
                                    </h3>
                                    <p class="text-gray-400 text-sm mt-2">{item.desc}</p>
                                </div>
                                
                                {/* 装饰性箭头 */}
                                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-green-500 font-mono text-xs">
                                    &gt; View Case Study
                                </div>
                            </div>
                            
                            {/* 背景微交互 */}
                            <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
}