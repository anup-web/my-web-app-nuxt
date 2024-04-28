import React from 'react'

const page = () => {
  return (
    <>
        <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 items-center">
                <div>
                    <div>
                        <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950 mb-6">Contact Us</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl/tight font-semibold mt-4">We're open to talk to good people.</h2>

                    <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" className="lucide lucide-map-pin text-2xl text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                            <h5 className="text-base text-muted font-medium mb-1">123 King Street, London W60 10250</h5>
                            <a href="#" className="text-xs text-primary font-bold uppercase">See more</a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="mail" className="lucide lucide-mail text-2xl text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        </div>
                        <div>
                            <h5 className="text-base text-muted font-medium mb-1">support@zoyothemes.com</h5>
                            <a href="#" className="text-xs text-primary font-bold uppercase">Say hello</a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="smartphone" className="lucide lucide-smartphone text-2xl text-primary"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                        </div>
                        <div>
                            <h5 className="text-base text-muted font-medium mb-1">(+01) 1234 5678 00</h5>
                            <a href="#" className="text-xs text-primary font-bold uppercase">call now</a>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 lg:ms-24">
                    <div className="p-6 md:p-12 rounded-md shadow-lg bg-white">
                        <form>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label for="formFirstName" className="block text-sm/normal font-semibold text-black mb-2">First Name</label>
                                    <input type="text" className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent" id="formFirstName" placeholder="Your first name..." required=""/>
                                </div>

                                <div>
                                    <label for="formLastName" className="block text-sm/normal font-semibold text-black mb-2">Last Name</label>
                                    <input type="text" className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent" id="formLastName" placeholder="Last first name..." required=""/>
                                </div>

                                <div>
                                    <label for="formEmail" className="block text-sm/normal font-semibold text-black mb-2">Email Address</label>
                                    <input type="email" className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent" id="formEmail" placeholder="Your email..." required=""/>
                                </div>

                                <div>
                                    <label for="formPhone" className="block text-sm/normal font-semibold text-black mb-2">Phone Number</label>
                                    <input type="text" className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent" id="formPhone" placeholder="Type phone number..." required=""/>
                                </div>

                                <div className="sm:col-span-2">
                                    <div className="mb-4">
                                        <label for="formMessages" className="block text-sm/normal font-semibold text-black mb-2">Messages</label>
                                        <textarea className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent" id="formMessages" rows="4" placeholder="Type messages..." required=""></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="py-2 px-6 rounded-md text-baseitems-center justify-center border border-primary text-white bg-gray-700 hover:bg-primaryDark transition-all duration-500 font-medium">Send Messages</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default page