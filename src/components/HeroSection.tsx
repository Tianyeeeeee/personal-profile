import { onMount } from 'solid-js'

export default function HeroSection() {
    onMount(() => {
        const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement
        if (!canvas) return

        const ctx = canvas.getContext('2d')!
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        interface Particle {
            x: number
            y: number
            vx: number
            vy: number
            opacity: number
            update(): void
            draw(): void
        }

        class ParticleImpl implements Particle {
            x: number
            y: number
            vx: number
            vy: number
            opacity: number

            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.vx = (Math.random() - 0.5) * 2
                this.vy = (Math.random() - 0.5) * 2
                this.opacity = Math.random() * 0.5 + 0.3
            }

            update() {
                this.x += this.vx
                this.y += this.vy
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1
            }

            draw() {
                ctx.fillStyle = `rgba(147, 51, 234, ${this.opacity})`
                ctx.beginPath()
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const particles: Particle[] = []
        for (let i = 0; i < 50; i++) {
            particles.push(new ParticleImpl())
        }

        const mouse = { x: 0, y: 0 }
        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
            particles.forEach(p => {
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                if (distance < 150) {
                    const angle = Math.atan2(dy, dx)
                    p.vx = Math.cos(angle) * 2
                    p.vy = Math.sin(angle) * 2
                }
            })
        })

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.update()
                p.draw()
            })
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - distance / 100)})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                })
            })
            requestAnimationFrame(animate)
        }
        animate()
    })

    return (
        <section class="max-w-6xl mx-auto px-4 sm:px-6 mb-32">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                    <div class="inline-block">
                        <div class="px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-sm text-gray-700 font-medium">
                            👋 嘿！我是 Tianyeeeeee
                        </div>
                    </div>

                    <h1 class="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
                        CREATIVE<br />
                        <span class="text-gray-400">DEVELOPER.</span>
                    </h1>

                    <p class="text-lg text-gray-600 max-w-lg leading-relaxed">
                        2018-2022 届本科毕业，正在零跑汽车（Leapmotor）做前端工程。热爱用 React、Solid 和 WebGL 把想法变成产品。
                    </p>

                    <div class="flex flex-wrap gap-3 pt-4">
                        <a href="#work" class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition">
                            View My Work
                        </a>
                        <a href="mailto:hello@example.com" class="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition">
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div class="relative h-96 hidden md:block">
                    <div class="absolute inset-0 bg-gray-200 rounded-2xl blur-xl opacity-20"></div>
                    <div class="relative rounded-2xl overflow-hidden bg-gray-100 p-8 border border-gray-200 h-full flex items-center justify-center">
                        <canvas id="hero-canvas" class="w-full h-full" style="display: block;"></canvas>
                    </div>
                </div>
            </div>
        </section>
    )
}
