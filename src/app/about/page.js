import React from 'react'

const page = () => {
  return (
    <>
        <section id="features" className="py-20 active">
        <div className="container mx-auto">

            <div className="grid lg:grid-cols-2 items-center gap-6">
                <div className="flex items-center">
                    <img src="/img/feature.jpg" className="h-[650px] rounded-xl mx-auto" alt="feature section" />
                </div>

                <div className="lg:ms-5 ms-8">
                    <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">Focused on achievind</span>
                    <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">Achievement Via Our Distinct Methodology</h2>
                    <a href="#" className="inline-flex items-center justify-center gap-3 text-sm font-medium text-black mt-6">Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="move-right" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg>
                    </a>
                    <hr className="border-gray-200 my-6" />

                    <div className="flex items-start gap-5">
                        <div>
                            <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" className="lucide lucide-check text-base text-blue-600"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold">Manage markets with empowerment</h4>
                            <p className="text-base font-normal text-gray-500 mt-2">Empower yourself to effectively manage
                                markets with confidence. utilizing strategic insights and resources for success.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5 mt-8">
                        <div>
                            <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="layers-2" className="lucide lucide-layers-2 text-base text-blue-600"><path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"></path><path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"></path></svg>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold">Manage your design and architecture</h4>
                            <p className="text-base font-normal text-gray-500 mt-2">Achieve task completion optimization by
                                effectively managing time and resources, ensuring timely delivery and efficiency.</p>
                        </div>

                    </div>

                    <div className="flex items-start gap-5 mt-8">
                        <div>
                            <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="lock" className="lucide lucide-lock text-base text-blue-600"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold">Presentations in real-time</h4>
                            <p className="text-base font-normal text-gray-500 mt-2">Empower yourself to effectively manage
                                markets with confidence. utilizing strategic insights and resources for success.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default page