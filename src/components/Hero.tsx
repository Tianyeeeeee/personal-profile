import { onMount, createSignal } from 'solid-js';

export default function Hero() {
    const [mouseX, setMouseX] = createSignal(0);
    const [mouseY, setMouseY] = createSignal(0);
    const [easterEggFound, setEasterEggFound] = createSignal(false);

    onMount(() => {
        // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
        const konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        let konamiIndex = 0;

        document.addEventListener('keydown', (e) => {
            if (e.key === konamiCode[konamiIndex] || e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    triggerPixelEasterEgg();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });

        // Particle system
        const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
            decay: number;
        }> = [];

        // Create initial particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                decay: Math.random() * 0.001 + 0.0005
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, idx) => {
                p.x += p.vx;
                p.y += p.vy;
                p.opacity -= p.decay;

                // Bounce off walls
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Wrap around
                p.x = (p.x + canvas.width) % canvas.width;
                p.y = (p.y + canvas.height) % canvas.height;

                if (p.opacity <= 0) {
                    particles[idx] = {
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                        size: Math.random() * 2 + 0.5,
                        opacity: Math.random() * 0.5 + 0.3,
                        decay: Math.random() * 0.001 + 0.0005
                    };
                }

                ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw connecting lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.strokeStyle = `rgba(34, 197, 94, ${(1 - dist / 150) * 0.3 * particles[i].opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        // Mouse tracking for parallax
        document.addEventListener('mousemove', (e) => {
            setMouseX((e.clientX / window.innerWidth - 0.5) * 20);
            setMouseY((e.clientY / window.innerHeight - 0.5) * 20);
        });

        // Handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const triggerPixelEasterEgg = () => {
        setEasterEggFound(true);
        const egg = document.getElementById('pixel-egg');
        if (egg) {
            egg.style.display = 'block';
            egg.style.animation = 'pixelBounce 0.6s ease-in-out';
            setTimeout(() => {
                egg.style.animation = 'pixelFadeOut 1s ease-out forwards';
                setTimeout(() => {
                    egg.style.display = 'none';
                    setEasterEggFound(false);
                }, 1000);
            }, 600);
        }
    };

    return (
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
            <style>{`
                @keyframes pixelBounce {
                    0% { transform: scale(0) rotate(0deg); opacity: 1; }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                @keyframes pixelFadeOut {
                    0% { opacity: 1; }
                    100% { opacity: 0; }
                }
                .pixel-char {
                    font-family: 'Courier New', monospace;
                    font-size: 48px;
                    font-weight: bold;
                    line-height: 1;
                    letter-spacing: 2px;
                }
            `}</style>

            {/* Background Grid */}
            <div
                class="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    "background-image": "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                    "background-size": "50px 50px"
                }}>
            </div>

            {/* Gradient orbs */}
            <div class="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div class="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ "animation-delay": "1s" }}></div>

            <canvas id="hero-canvas" class="absolute inset-0 z-0"></canvas>

            {/* Pixel Easter Egg */}
            <div id="pixel-egg" class="fixed inset-0 pointer-events-none z-50 hidden flex items-center justify-center">
                <div class="text-center">
                    <div class="pixel-char text-green-500 mb-4">
                        ▓▓▓▓▓<br />
                        ▓░▓░▓<br />
                        ▓▓▓▓▓<br />
                        ▓░░░▓<br />
                        ▓▓▓▓▓
                    </div>
                    <div class="font-mono text-green-500 text-xl">YOU FOUND ME!</div>
                </div>
            </div>

            <div class="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center space-y-8">
                {/* Main Heading */}
                <div class="flex justify-center mb-6">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>Welcome My World</span>
                    </div>
                </div>
                <div class="space-y-4">
                    <h1 class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-600 leading-none">
                        TIANYE
                    </h1>
                    <div class="h-1 w-24 bg-gradient-to-r from-green-500 to-transparent mx-auto"></div>
                </div>

                {/* Code Block - Simplified */}
                <div class="font-mono text-xs md:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed space-y-1 bg-[#0a0a0a]/50 border border-[#222] rounded-lg p-6 backdrop-blur">
                    <div><span class="text-blue-500">const</span> <span class="text-yellow-500">me</span> = <span class="text-orange-400">{'{}'}</span>;</div>
                    <div><span class="text-green-500">me</span>.<span class="text-yellow-500">role</span> = <span class="text-orange-400">'Frontend Engineer'</span>;</div>
                    <div><span class="text-green-500">me</span>.<span class="text-yellow-500">passion</span> = <span class="text-orange-400">'Performance × Design × Art'</span>;</div>
                    <div><span class="text-green-500">me</span>.<span class="text-yellow-500">workspace</span> = <span class="text-orange-400">'Leapmotor, Hangzhou'</span>;</div>
                </div>

                {/* CTA Buttons */}
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                    <a href="#bento" class="group px-6 py-3 rounded-lg border border-green-500/50 bg-green-500/10 text-green-400 font-mono text-sm hover:bg-green-500/20 hover:border-green-500 transition-all">
                        See My Work →
                    </a>
                    <a href="#" class="group px-6 py-3 rounded-lg border border-[#333] text-gray-300 font-mono text-sm hover:border-[#555] hover:bg-[#1a1a1a] transition-all">
                        Say Hello
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div class="pt-12 flex justify-center opacity-50 hover:opacity-100 transition-opacity">
                    <div class="flex flex-col items-center gap-2 animate-bounce">
                        <span class="text-xs font-mono text-gray-500">SCROLL</span>
                        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}