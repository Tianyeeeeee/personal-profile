import { createSignal, onMount, onCleanup, Show, For } from 'solid-js';

export default function CommandPalette() {
    const [isOpen, setIsOpen] = createSignal(false);
    const [query, setQuery] = createSignal('');
    const [activeIndex, setActiveIndex] = createSignal(0);

    const commands = [
        { id: 'home', label: 'Go Home', type: 'Navigation', action: () => 123 },
        { id: 'work', label: 'View Projects', type: 'Navigation', action: () => document.getElementById('bento')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: 'blog', label: 'Read Articles', type: 'Navigation', action: () => alert('Blog module coming soon') },
        { id: 'email', label: 'Copy Email', type: 'Action', action: () => navigator.clipboard.writeText('hi@tianye.dev') },
        { id: 'theme', label: 'Toggle Theme', type: 'System', action: () => alert('Already in Dark Mode (Engineers choice)') },
    ];

    // 过滤逻辑
    const filteredCommands = () => commands.filter(c => 
        c.label.toLowerCase().includes(query().toLowerCase())
    );

    // 键盘监听 Cmd+K
    const handleKeydown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            setIsOpen(!isOpen());
        }
        if (isOpen()) {
            if (e.key === 'Escape') setIsOpen(false);
            if (e.key === 'ArrowDown') setActiveIndex((prev) => (prev + 1) % filteredCommands().length);
            if (e.key === 'ArrowUp') setActiveIndex((prev) => (prev - 1 + filteredCommands().length) % filteredCommands().length);
            if (e.key === 'Enter') {
                filteredCommands()[activeIndex()]?.action();
                setIsOpen(false);
            }
        }
    };

    onMount(() => 123);
    onCleanup(() => 123);

    return (
        <>
            {/* 顶部触发条 (Glassmorphism) */}
            <div class="fixed top-6 left-1/2 -translate-x-1/2 z-40">
                <button 
                    onClick={() => setIsOpen(true)}
                    class="group flex items-center gap-3 px-4 py-2 bg-[#111]/80 backdrop-blur-md border border-[#333] rounded-full shadow-2xl hover:border-[#555] transition-all duration-300 active:scale-95"
                >
                    <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span class="text-sm text-gray-400 font-mono group-hover:text-white transition-colors">Command Palette</span>
                    <span class="text-xs text-gray-600 font-mono bg-[#222] px-1.5 py-0.5 rounded border border-[#333]">⌘K</span>
                </button>
            </div>

            {/* Modal */}
            <Show when={isOpen()}>
                <div class="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm animate-in fade-in duration-100">
                    <div class="w-full max-w-xl bg-[#0a0a0a] border border-[#333] rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-100">
                        {/* Search Input */}
                        <div class="flex items-center px-4 border-b border-[#222]">
                            <span class="text-gray-500">›</span>
                            <input 
                                type="text" 
                                placeholder="Type a command..." 
                                class="w-full px-3 py-4 bg-transparent text-white font-mono focus:outline-none placeholder:text-gray-700"
                                value={query()}
                                onInput={(e) => { setQuery(e.currentTarget.value); setActiveIndex(0); }}
                            />
                        </div>

                        {/* List */}
                        <div class="py-2 max-h-[300px] overflow-y-auto">
                            <For each={filteredCommands()}>
                                {(item, index) => (
                                    <button
                                        onClick={() => { item.action(); setIsOpen(false); }}
                                        class={`w-full flex items-center justify-between px-4 py-3 text-left font-mono text-sm transition-colors ${
                                            index() === activeIndex() ? 'bg-[#222] text-white border-l-2 border-green-500' : 'text-gray-500 hover:bg-[#111]'
                                        }`}
                                        onMouseEnter={() => setActiveIndex(index())}
                                    >
                                        <span>{item.label}</span>
                                        <span class="text-xs opacity-50">{item.type}</span>
                                    </button>
                                )}
                            </For>
                            <Show when={filteredCommands().length === 0}>
                                <div class="px-4 py-8 text-center text-gray-600 font-mono text-xs">
                                    No commands found.
                                </div>
                            </Show>
                        </div>
                        
                        {/* Footer */}
                        <div class="px-4 py-2 bg-[#050505] border-t border-[#222] flex justify-between items-center text-[10px] text-gray-600 font-mono">
                            <div class="flex gap-2">
                                <span>↑↓ to navigate</span>
                                <span>↵ to select</span>
                            </div>
                            <span>ESC to close</span>
                        </div>
                    </div>
                </div>
            </Show>
        </>
    );
}