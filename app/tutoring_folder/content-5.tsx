import { Atom, Code, Globe, Sigma } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Personalized Tutoring That Actually Makes Sense</h2>
                    <p>I offer one-on-one tutoring designed to help students truly understand the material, not just memorize it. My goal is to break down complex topics into clear, manageable steps and adapt my teaching style to how each student learns best. I’m patient, approachable, and focused on building both confidence and skills over time.</p>
                </div>
                <img className="rounded-(--radius) grayscale" src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="team image" height="" width="" loading="lazy" />

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sigma className="size-4" />
                            <h3 className="text-sm font-medium">Math (Up to Algebra II)</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Support with foundational math, algebra, and problem-solving strategies, with an emphasis on understanding concepts and improving consistency.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Atom className="size-4" />
                            <h3 className="text-sm font-medium">Chemistry</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Help with core chemistry topics, homework support, and exam prep by explaining ideas clearly and connecting them to real examples.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Code className="size-4" />
                            <h3 className="text-sm font-medium">Python Programming</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Beginner-friendly guidance on Python fundamentals, logic, and problem-solving, with hands-on practice and real coding examples.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Globe className="size-4" />

                            <h3 className="text-sm font-medium">Web Design & Development</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Introduction to HTML, CSS, and basic front-end concepts, focusing on how websites are structured, styled, and built from scratch.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}