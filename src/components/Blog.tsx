import { For, createSignal } from 'solid-js';

interface BlogPost {
    id: number;
    date: string;
    title: string;
    excerpt: string;
    tags: string[];
    readTime: number;
}

const posts: BlogPost[] = [
    {
        id: 1,
        date: '2025-02-14',
        title: 'Building High-Performance WebGL with SolidJS',
        excerpt: '深度解析如何结合 WebGL 的原始性能和 SolidJS 的细粒度响应性，打造丝滑的可视化效果。',
        tags: ['WebGL', 'SolidJS', 'Performance'],
        readTime: 12
    },
    {
        id: 2,
        date: '2025-01-20',
        title: 'Why I Switched from React to Astro',
        excerpt: '从客户端到岛屿架构的范式转变，以及它对现代 Web 开发的影响。',
        tags: ['Astro', 'React', 'Architecture'],
        readTime: 8
    },
    {
        id: 3,
        date: '2024-12-15',
        title: 'The Art of Motion in UI Design',
        excerpt: '如何通过精心设计的动画将用户体验从功能性升华到令人愉悦，配有代码示例。',
        tags: ['Design', 'Animation', 'UX'],
        readTime: 10
    },
    {
        id: 4,
        date: '2024-12-01',
        title: '从零构建设计系统的完整指南',
        excerpt: '150+ 组件库、完整设计规范和工程化实践，让团队效率提升 3 倍。',
        tags: ['Design System', 'Engineering', 'Scalability'],
        readTime: 15
    },
    {
        id: 5,
        date: '2024-11-30',
        title: 'Designing for EV Interfaces',
        excerpt: '汽车座舱 HMI 设计的独特约束与机遇。从概念到量产的设计实战分享。',
        tags: ['Automotive', 'UX', 'Design'],
        readTime: 15
    },
    {
        id: 6,
        date: '2024-11-15',
        title: 'WebGL 和 Three.js 最佳实践',
        excerpt: '如何优化 WebGL 渲染性能，避免常见的陷阱，打造 60fps 的交互体验。',
        tags: ['WebGL', 'Three.js', 'Optimization'],
        readTime: 14
    }
];

export default function Blog() {
    const [hoveredId, setHoveredId] = createSignal<number | null>(null);

    return (
        <section class="max-w-4xl mx-auto px-6 py-24 border-t border-[#222]">
            <div class="flex justify-between items-baseline mb-12">
                <h2 class="font-mono text-gray-500 text-sm">./thoughts</h2>
                <a href="#" class="text-xs font-mono text-green-500 hover:text-green-400 transition-colors">
                    view all →
                </a>
            </div>
            
            <div class="space-y-1">
                <For each={posts}>
                    {(post) => (
                        <a 
                            href="#" 
                            class="group block"
                            onMouseEnter={() => setHoveredId(post.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div class="p-4 rounded-lg border border-[#222] hover:border-[#333] transition-all hover:bg-[#0a0a0a] group">
                                <div class="flex items-start justify-between gap-4 mb-2">
                                    <div class="flex-1">
                                        <div class="flex items-baseline gap-3 mb-2">
                                            <span class="text-gray-600 font-mono text-xs whitespace-nowrap">{post.date}</span>
                                            <h3 class="text-gray-200 group-hover:text-green-400 transition-colors font-semibold">
                                                {hoveredId() === post.id && (
                                                    <span class="text-green-500 mr-2">→</span>
                                                )}
                                                {post.title}
                                            </h3>
                                        </div>
                                        <p class="text-gray-500 text-sm pl-0">{post.excerpt}</p>
                                    </div>
                                    <span class="text-xs text-gray-600 font-mono whitespace-nowrap">{post.readTime} min</span>
                                </div>
                                <div class="flex flex-wrap gap-1.5 mt-3">
                                    <For each={post.tags}>
                                        {(tag) => (
                                            <span class="text-[10px] font-mono text-gray-600 px-2 py-0.5 rounded bg-[#111] border border-[#222]">
                                                #{tag}
                                            </span>
                                        )}
                                    </For>
                                </div>
                            </div>
                        </a>
                    )}
                </For>
            </div>
        </section>
    );
}
