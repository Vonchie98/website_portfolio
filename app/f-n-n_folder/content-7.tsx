import { Apple, HeartPulse, Dumbbell, Activity } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Health & Nutrition Services</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            I help simplify dieting and exercise by focusing on small, manageable changes that fit into everyday life. Instead of strict plans or overwhelming routines, <span className="text-accent-foreground font-bold">the approach is about consistency, balance, and building habits that are easy to stick with over time.</span> — Everything is explained clearly, step by step, so it feels approachable and realistic.
                        </p>
                        <p className="text-muted-foreground">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Apple className="size-4" />
                                    <HeartPulse className='size-4'/>
                                    <h3 className="text-sm font-medium">Personalized Nutrition Guidance</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Dumbbell className="size-4" />
                                    <Activity className="size-4" />
                                    <h3 className="text-sm font-medium">Healthy Habits & Lifestyle Support</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Guidance on building consistent habits related to energy, focus, and overall well-being. This includes goal-setting, accountability, and practical strategies to support a healthier daily routine.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/content-fnn-dark.jpg" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1206} height={612} />
                            <Image src="/content-fnn-light.jpg" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1206} height={612} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}