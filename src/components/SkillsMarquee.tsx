import { For } from 'solid-js'

export default function SkillsMarquee() {
    // 复制两份以实现无缝滚动
    const skills = [
        'React', 'SolidJS', 'TypeScript', 'Tailwind CSS', 'Three.js', 'WebGL', 'Next.js', 'Astro', 'Figma', 'Git',
        'React', 'SolidJS', 'TypeScript', 'Tailwind CSS', 'Three.js', 'WebGL', 'Next.js', 'Astro', 'Figma', 'Git'
    ]

    return (
        <section class="py-20 overflow-hidden bg-black text-white">
            <div class="relative flex overflow-x-hidden group">
                <div class="animate-scroll whitespace-nowrap flex gap-12 items-center">
                    <For each={skills}>
                        {(skill) => (
                            <span class="text-4xl md:text-6xl font-black uppercase text-transparent stroke-text hover:text-white transition-colors cursor-default" 
                                  style={{ "-webkit-text-stroke": "1px rgba(255,255,255,0.3)" }}>
                                {skill}
                            </span>
                        )}
                    </For>
                </div>
            </div>
            
            {/* 补充一句 Slogan */}
            <div class="text-center mt-8 text-gray-500 text-sm font-mono">
                // ALWAYS LEARNING & EXPLORING
            </div>
        </section>
    )
}