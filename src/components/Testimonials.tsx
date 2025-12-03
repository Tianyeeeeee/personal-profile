import { For } from 'solid-js';

interface Testimonial {
    id: number;
    text: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: '天业的代码质量和设计思维真的超出预期。他不仅能快速实现功能，还能提出更优雅的架构方案。',
        author: '李明',
        role: '产品经理',
        company: 'Leapmotor',
        avatar: '👨‍💼'
    },
    {
        id: 2,
        text: '少见的既能搞艺术的工程师。他的 WebGL 动画不仅炫酷，性能也优化得很好。团队都很喜欢和他配合。',
        author: '王欣',
        role: '技术主管',
        company: 'Web3 Studios',
        avatar: '👨‍💻'
    },
    {
        id: 3,
        text: '最欣赏他的是执行力和主动性。不仅把需求做好，还会主动发现问题、优化方案。这样的工程师不多。',
        author: '赵琪',
        role: 'CEO',
        company: 'Startup Labs',
        avatar: '👩‍💼'
    }
];

export default function Testimonials() {
    return (
        <section class="max-w-5xl mx-auto px-6 py-24 border-t border-[#222]">
            <h2 class="font-mono text-gray-500 mb-12 text-sm">./推荐评价</h2>
            
            <div class="grid md:grid-cols-3 gap-6">
                <For each={testimonials}>
                    {(testimonial) => (
                        <div class="group relative overflow-hidden rounded-xl border border-[#222] p-6 hover:border-[#444] transition-all duration-500 hover:bg-[#0f0f0f]">
                            {/* Star rating */}
                            <div class="flex gap-1 mb-4">
                                {'⭐⭐⭐⭐⭐'.split('').map(() => (
                                    <span class="text-yellow-500">★</span>
                                ))}
                            </div>
                            
                            {/* Quote */}
                            <p class="text-gray-300 text-sm leading-relaxed mb-4 italic">
                                "{testimonial.text}"
                            </p>
                            
                            {/* Author */}
                            <div class="flex items-center gap-3 pt-4 border-t border-[#222]">
                                <div class="text-3xl">{testimonial.avatar}</div>
                                <div>
                                    <div class="font-semibold text-white text-sm">{testimonial.author}</div>
                                    <div class="text-gray-500 text-xs">{testimonial.role} @ {testimonial.company}</div>
                                </div>
                            </div>
                            
                            {/* Hover effect */}
                            <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
}
