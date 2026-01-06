import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">The Compass of your Business.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/stats-content-image.jpg" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/stats-content-image.jpg" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            WIth statistics you will be able to understand where and when to invest your resources and attention. <span className="text-accent-foreground font-bold">To lead yourself into a better future for you company</span> — from rags to riches.
                        </p>

                        <div className="pt-6">
                                <p>With the help of machine learning and data anylitics i can help when it comes to understanding the numbers and where they are telling us to go.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}