import { For } from 'solid-js';

export default function About() {
    const traits = [
        { icon: '⚡', text: 'Performance Obsessed', desc: '毫秒级思维' },
        { icon: '🎨', text: 'Design Minded', desc: '像素级精细' },
        { icon: '🚀', text: 'Builder', desc: '做出来比想出来重要' },
        { icon: '🎭', text: 'Creative Coder', desc: 'WebGL、生成艺术、随机试验' },
        { icon: '🧠', text: 'Problem Solver', desc: '系统思维 > 快速修复' },
        { icon: '💡', text: 'Always Learning', desc: '新技术 → 新方案 → 新可能' },
    ];

    return (
        <section class="max-w-4xl mx-auto px-6 py-24 border-t border-[#222]">
            <div class="grid md:grid-cols-2 gap-12">
                {/* Left: Introduction */}
                <div>
                    <h2 class="font-mono text-gray-500 mb-8 text-sm">./about</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed text-sm">
                        <p>
                            我是一个痴迷于构建优雅、高性能体验的前端工程师。
                        </p>
                        <p>
                            现在在 Leapmotor 打造新能源汽车的未来交互界面。曾探索过 WebGL、实时系统、设计工具的边界。
                        </p>
                        <p class="text-gray-400 text-xs">
                            业余时间喜欢尝试生成艺术、creative coding，以及各种奇奇怪怪的小项目。
                        </p>
                    </div>
                </div>

                {/* Right: Traits Grid */}
                <div class="space-y-3">
                    <h3 class="font-mono text-gray-500 text-sm mb-6">TRAITS</h3>
                    <For each={traits}>
                        {(item) => (
                            <div class="flex items-start gap-3 p-3 rounded border border-[#222] hover:border-green-500/50 transition-all hover:bg-[#0a0a0a] cursor-pointer group">
                                <span class="text-lg flex-shrink-0">{item.icon}</span>
                                <div class="flex-1">
                                    <div class="text-gray-300 group-hover:text-green-500 transition-colors text-sm font-medium">{item.text}</div>
                                    <div class="text-gray-600 text-xs mt-0.5">{item.desc}</div>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
}
