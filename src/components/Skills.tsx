import { For } from 'solid-js';

interface Skill {
    category: string;
    items: string[];
}

const skills: Skill[] = [
    {
        category: 'Frontend',
        items: ['React', 'Solid.js', 'Astro', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Canvas API']
    },
    {
        category: 'Backend',
        items: ['Node.js', 'Python', 'SQL', 'GraphQL', 'REST API', 'Microservices', 'Docker']
    },
    {
        category: 'Tools & Dev',
        items: ['Git', 'Docker', 'CI/CD', 'Webpack', 'Vite', 'Testing', 'Performance Optimization']
    },
    {
        category: 'Design & Creative',
        items: ['Figma', 'UI/UX', 'Motion Design', 'Design Systems', 'WebGL', 'GLSL', 'Generative Art']
    },
    {
        category: 'Soft Skills',
        items: ['Team Leadership', 'Communication', 'Problem Solving', 'User Empathy', 'Mentoring']
    }
];

export default function Skills() {
    return (
        <section class="max-w-5xl mx-auto px-6 py-24 border-t border-[#222]">
            <h2 class="font-mono text-gray-500 mb-12 text-sm">./tech_stack</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <For each={skills}>
                    {(skillGroup) => (
                        <div class="border border-[#222] rounded-xl p-6 hover:border-[#333] transition-all group hover:bg-[#0a0a0a]/50">
                            <h3 class="font-mono text-green-500 text-sm mb-4 group-hover:text-green-400 transition-colors">
                                // {skillGroup.category}
                            </h3>
                            <div class="flex flex-wrap gap-2">
                                <For each={skillGroup.items}>
                                    {(skill) => (
                                        <div class="px-3 py-1.5 rounded bg-[#111] border border-[#222] text-gray-300 text-xs font-mono hover:border-green-500/30 hover:text-green-400 transition-all hover:bg-green-500/5 cursor-pointer">
                                            {skill}
                                        </div>
                                    )}
                                </For>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
}
