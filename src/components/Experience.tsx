import { For } from 'solid-js';

interface ExperienceItem {
    year: string;
    title: string;
    company: string;
    description: string;
    highlights: string[];
}

const experiences: ExperienceItem[] = [
    {
        year: '2023 - Now',
        title: 'Senior Frontend Engineer',
        company: 'Leapmotor',
        description: 'EV dashboard & HMI systems',
        highlights: ['React', 'Canvas', 'WebSocket']
    },
    {
        year: '2022 - 2023',
        title: 'Creative Developer',
        company: 'Web3 Studios',
        description: 'Interactive experiences & digital art',
        highlights: ['WebGL', 'Three.js', 'GLSL']
    }
];

export default function Experience() {
    return (
        <section class="max-w-4xl mx-auto px-6 py-24 border-t border-[#222]">
            <h2 class="font-mono text-gray-500 mb-12 text-sm">./experience</h2>
            
            <div class="relative">
                {/* Timeline vertical line */}
                <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 to-green-500/0 md:left-8"></div>
                
                <div class="space-y-8 md:space-y-12">
                    <For each={experiences}>
                        {(exp, idx) => (
                            <div class="md:pl-20 relative">
                                {/* Timeline dot */}
                                <div class="absolute left-0 top-1 w-4 h-4 bg-green-500 rounded-full ring-4 ring-[#050505] md:left-2"></div>
                                
                                <div class="group cursor-pointer">
                                    <div class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                                        <span class="font-mono text-green-500 text-sm font-bold">{exp.year}</span>
                                        <h3 class="text-lg md:text-xl font-bold text-white group-hover:text-green-500 transition-colors">
                                            {exp.title}
                                        </h3>
                                        <span class="text-gray-500 font-mono text-xs">@ {exp.company}</span>
                                    </div>
                                    
                                    <p class="text-gray-400 text-sm mb-3">{exp.description}</p>
                                    
                                    <div class="flex flex-wrap gap-2">
                                        <For each={exp.highlights}>
                                            {(highlight) => (
                                                <span class="text-xs font-mono border border-green-500/30 text-green-400 px-2 py-1 rounded bg-green-500/5">
                                                    {highlight}
                                                </span>
                                            )}
                                        </For>
                                    </div>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
}
