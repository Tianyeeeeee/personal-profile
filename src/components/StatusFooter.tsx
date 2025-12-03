import { createSignal, onMount, onCleanup } from 'solid-js';

export default function StatusFooter() {
    const [time, setTime] = createSignal('');

    // 实时时间 (Singapore)
    const updateTime = () => {
        const now = new Date();
        setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore', hour12: false }));
    };

    onMount(() => {
        updateTime();
        const timer = setInterval(updateTime, 1000);
        onCleanup(() => clearInterval(timer));
    });

    return (
        <footer class="border-t border-[#222] bg-[#050505] text-gray-500 font-mono text-[10px] md:text-xs">
            <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                
                {/* Left: Copyright */}
                <div>
                    © 2025 TIANYE.DEV <span class="hidden md:inline">|</span> MIT LICENSE
                </div>

                {/* Right: Status Indicators */}
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-2" title="Lighthouse Performance Score">
                        <span class="text-yellow-500">⚡</span>
                        <span>100%</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <span>All Systems Normal</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <span>📍</span>
                        <span>SIN {time()}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}