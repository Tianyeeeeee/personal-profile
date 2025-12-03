import { onMount } from 'solid-js';

export default function Hero() {
    onMount(() => {
        // ... (此处填入之前的 Canvas 粒子代码，保持不变，但将粒子颜色改为 rgba(255,255,255,0.3) 以适应黑底) ...
        const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
        // 简略：确保粒子颜色适配 Dark Mode
    });

    return (
        <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div class="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                 style={{ "background-image": "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", "background-size": "50px 50px" }}>
            </div>
            
            <canvas id="hero-canvas" class="absolute inset-0 z-0"></canvas>

            <div class="relative z-10 text-center space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#333] bg-[#0a0a0a]/50 backdrop-blur font-mono text-xs text-green-500 mb-4">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    System Online
                </div>

                <h1 class="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                    TIANYE<span class="text-green-500">_</span>
                </h1>

                <div class="font-mono text-sm md:text-base text-gray-400 max-w-lg mx-auto leading-relaxed">
                    <p class="mb-2"><span class="text-blue-500">const</span> <span class="text-yellow-500">role</span> = <span class="text-orange-400">'Creative Developer'</span>;</p>
                    <p class="mb-2"><span class="text-blue-500">const</span> <span class="text-yellow-500">location</span> = <span class="text-orange-400">'Leapmotor, Hangzhou'</span>;</p>
                    <p class="text-gray-500">// I build interfaces that feel alive.</p>
                </div>
            </div>
        </section>
    );
}