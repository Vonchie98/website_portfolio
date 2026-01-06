'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/ui/border-beam'

export default function Features() {
    type ImageKey = 'Coding' | 'Marketing' | 'Statistics' | 'Tutoring'| 'Fitness_and_Nutrition'
    const [activeItem, setActiveItem] = useState<ImageKey>('Coding')

    const images = {
        'Coding': {
            image: '/coding_image.jpg',
            alt: 'Coding Image',
        },
        'Marketing': {
            image: '/Marketing_image.jpg',
            alt: 'Marketing Image',
        },
        'Statistics': {
            image: '/Statistics_image.jpg',
            alt: 'Statistics image',
        },
        'Tutoring': {
            image: '/tutoring_image.jpg',
            alt: 'Tutoring Image',
        },
        'Fitness_and_Nutrition': {
            image: '/Fitness_and_Nutrition_image.jpg',
            alt: 'Fitness and Nutrition Image',
        },
    }

    return (
        <section className="py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-6xl">Services And Skills</h2>
                    <p>These are a list of the services and skills i offer, as well as their descriptions. </p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="Coding">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Database className="size-4" />
                                    Coding
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>I offer coding tutoring services in various programming languages,
        including Python, JavaScript, and Java. Whether you're a beginner
        looking to learn the basics or an experienced coder seeking to enhance
        your skills, I can provide personalized lessons and projects to help you
        achieve your goals. And my coding skills aren't only limited to helping others learn them; I can code any project or idea that you have whether it is to build a machine learning model to help your compnay or a simple script to modify your browser experience. (place holder text).</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="Marketing">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Fingerprint className="size-4" />
                                    Marketing
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>I offer services in marketing, covering areas such as market
        research, digital marketing, social media marketing, branding, and more.
        . (place holder text)</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="Statistics">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <IdCard className="size-4" />
                                    Statistics
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>I provide services in statistics, covering areas such as
        descriptive statistics, inferential statistics, hypothesis testing,
        regression analysis, and more. And when it comes to understanidng the data you won't have to lift a finger; as all my projections and numbers well come with an explantation of the findings as well as the suggested approach for that circumstance. (place
        holder text).</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="Tutoring">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <ChartBarIncreasingIcon className="size-4" />
                                    Tutoring
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>I offer personalized tutoring services in various subjects, including
        mathematics, science, and computer science. My approach is tailored to
        each student's learning style and pace, ensuring that they grasp the
        concepts effectively. Whether you need help with homework, exam
        preparation, or understanding complex topics, I'm here to assist you.
        (place holder text).</AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="Fitness_and_Nutrition">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <ChartBarIncreasingIcon className="size-4" />
                                    Fitness and Nutrition
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>I can help you create personalized fitness plans and nutrition guides to
        help you achieve your health goals. Whether you're looking to build
        muscle, lose weight, or simply maintain a healthy lifestyle, I have the
        knowledge and expertise to guide you every step of the way. (place
        holder text).</AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
