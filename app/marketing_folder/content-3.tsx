import Image from "next/image" 

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <Image
                    className="rounded-(--radius) grayscale"
                    src="/marketing-hero-image.jpg"
                    alt="team image"
                    height={400}
                    width= {800}
                    loading="lazy"
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Marketing to better your models, products and platforms.</h2>
                    <div className="space-y-6">
                        <p>No matter the type of development you wish to seek i can help you with it; Anything from building a website for you business or social media advertisement.</p>

                    
                    </div>
                </div>
            </div>
        </section>
    )
}