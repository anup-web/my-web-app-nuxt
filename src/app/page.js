import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black active"
        id="home"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
            <div className="">
              <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-gray-200 tracking-normal capitalize leading-normal font-bold max-w-2xl">
                The Best Approach To Consent To Interior Design
              </h1>
              <p className="text-base font-medium text-gray-200 text-muted mt-3 capitalize">
                You one stop finance empower platform Manage all your business
                expenses with our supafast app.
              </p>

              <div className="flex flex-wrap mt-9 text-center gap-3">
                <button className="py-2 px-6 rounded-md text-white text-base bg-gray-700 hover:bg-gray-700Dark border border-gray-700 hover:border-gray-700Dark transition-all duration-500 font-medium">
                  Get A Free Demo
                </button>
                <button className="py-2 px-6 text-gray-300 rounded-md border border-gray-700 text-base hover:border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-500 font-medium">
                  See Pricing
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/img/interior.png"
                className="md:h-[700px] lg:ms-auto mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full products-ads-section py-20">
        <div className="container mx-auto">
          <div className="sm:h-[290px] h-full sm:flex xl:space-x-[30px] sm:space-x-5 items-center w-full  overflow-hidden">
            <div
              data-aos="fade-right"
              className="h-full sm:mb-0 mb-5 sm:w-1/2 w-full aos-init aos-animate"
            >
              <a href="/single-product">
                <img
                  src="/img/ads-2.2.png"
                  alt=""
                  className="w-full sm:h-full h-auto"
                />
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="flex-1 h-full aos-init aos-animate"
            >
              <a href="/single-product">
                <img src="/img/ads-2.1.png" alt="" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="section-style-one new-products mb-[60px] aos-init aos-animate"
      >
        <div className="section-wrapper w-full ">
          <div className="container mx-auto">
            <div className=" section-title flex justify-between items-center mb-5">
              <div>
                <h1 className="sm:text-3xl text-xl font-600 text-qblacktext leading-none">
                  Trendy Design
                </h1>
              </div>
              <div>
                <a href="#">
                  <div className="flex space-x-2 items-center">
                    <p className="text-base font-600 text-qblack">View More</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="section-content">
              <div className="products-section w-full">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                  <div className="item">
                    <div className="product-cart-three w-full group">
                      <div className="w-full h-[364px] bg-white flex justify-center items-center p-2.5 mb-6 relative overflow-hidden">
                        <img src="/img/product-img-17.jpg" alt="" />
                      </div>
                      <h2 className="text-xl leading-6 font-medium text-qblack mb-2">
                        Women's Shirt Dress
                      </h2>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-cart-three w-full group">
                      <div className="w-full h-[364px] bg-white flex justify-center items-center p-2.5 mb-6 relative overflow-hidden">
                        <img src="/img/product-img-18.jpg" alt="" />
                      </div>
                      <h2 className="text-xl leading-6 font-medium text-qblack mb-2">
                        Women's Shirt Dress
                      </h2>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-cart-three w-full group">
                      <div className="w-full h-[364px] bg-white flex justify-center items-center p-2.5 mb-6 relative overflow-hidden">
                        <img src="/img/product-img-19.jpg" alt="" />
                      </div>
                      <h2 className="text-xl leading-6 font-medium text-qblack mb-2">
                        Women's Shirt Dress
                      </h2>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-cart-three w-full group">
                      <div className="w-full h-[364px] bg-white flex justify-center items-center p-2.5 mb-6 relative overflow-hidden">
                        <img src="/img/product-img-20.jpg" alt="" />
                      </div>
                      <h2 className="text-xl leading-6 font-medium text-qblack mb-2">
                        Women's Shirt Dress
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="py-20">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm text-gray-700 uppercase font-semibold tracking-wider text-default-950">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
              Build a customer - centric marketing strategy
            </h2>
            <p className="text-base font-medium mt-4 text-muted">
              Ligula risus auctor tempus magna feugit lacinia.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 md:gap-y-12 lg:gap-y-24 md:pt-20 pt-12">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-gray-700/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="menu"
                    className="lucide lucide-menu h-10 w-10 text-gray-700"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">Market Research</h1>
              <p className="text-base text-gray-600 mt-2">
                Gain a comprehensive understanding of your industry landscape.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-gray-700/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="lightbulb"
                    className="lucide lucide-lightbulb h-10 w-10 text-gray-700"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">User Experience</h1>
              <p className="text-base text-gray-600 mt-2">
                Evaluate the viability and potential of new products or
                services.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-gray-700/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="bar-chart-big"
                    className="lucide lucide-bar-chart-big h-10 w-10 text-gray-700"
                  >
                    <path d="M3 3v18h18"></path>
                    <rect width="4" height="7" x="7" y="10" rx="1"></rect>
                    <rect width="4" height="12" x="15" y="5" rx="1"></rect>
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">Digital Marketing</h1>
              <p className="text-base text-gray-600 mt-2">
                Benchmark your performance against competitors, identify
                strengths.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-gray-700/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="codepen"
                    className="lucide lucide-codepen h-10 w-10 text-gray-700"
                  >
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                    <line x1="12" x2="12" y1="22" y2="15.5"></line>
                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                    <line x1="12" x2="12" y1="2" y2="8.5"></line>
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">SEO Services</h1>
              <p className="text-base text-gray-600 mt-2">
                Anticipate market shifts and emerging trends to stay ahead of
                the curve.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-gray-700/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="shield"
                    className="lucide lucide-shield h-10 w-10 text-gray-700"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">Market Research</h1>
              <p className="text-base text-gray-600 mt-2">
                Our market research services are designed to provide maximum
                value.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-gray-700/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="rocket"
                    className="lucide lucide-rocket h-10 w-10 text-gray-700"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">
                Software Development
              </h1>
              <p className="text-base text-gray-600 mt-2">
                We go beyond data collection to provide actionable insights.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-gray-700/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="layers-2"
                    className="lucide lucide-layers-2 h-10 w-10 text-gray-700"
                  >
                    <path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"></path>
                    <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">
                Affiliate Marketing
              </h1>
              <p className="text-base text-gray-600 mt-2">
                We understand that every business is unique. That's why we
                offer.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-gray-700/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="webcam"
                    className="lucide lucide-webcam h-10 w-10 text-gray-700"
                  >
                    <circle cx="12" cy="10" r="8"></circle>
                    <circle cx="12" cy="10" r="3"></circle>
                    <path d="M7 22h10"></path>
                    <path d="M12 22v-4"></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">
                Website Development
              </h1>
              <p className="text-base text-gray-600 mt-2">
                In today's competitive market, timing is everything. Our
                efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <div className="lg:ms-5 ms-8">
              <div>
                <span className="text-sm text-gray-700 uppercase font-semibold tracking-wider text-default-950">
                  Services
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
                Get Started In Minutes: Download The App, Create Your Profile
              </h2>
              <p className="text-base font-normal text-muted mt-6">
                Digital payment has revolutionized the way we make financial
                transactions today With Rible you can enjoy the convenience of
                making secure &amp; hassle-free payments online. Our platform
                provides you with a quick and eary.
              </p>

              <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-9">
                <div className="">
                  <div className="flex items-center justify-start">
                    <div className="items-center justify-center flex bg-green-50 rounded-full h-20 w-20 border border-dashed border-green-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="smartphone"
                        className="lucide lucide-smartphone h-8 w-8 text-black"
                      >
                        <rect
                          width="14"
                          height="20"
                          x="5"
                          y="2"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M12 18h.01"></path>
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-xl font-semibold pt-6">1. Download</h1>
                  <p className="text-base text-gray-600 font-normal mt-2">
                    Join the millions already benefitting from.
                  </p>
                </div>

                <div className="">
                  <div className="flex items-center justify-start">
                    <div className="items-center justify-center flex bg-red-50 rounded-full h-20 w-20 border border-dashed border-red-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="file-text"
                        className="lucide lucide-file-text h-8 w-8 text-black"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-xl font-semibold  pt-6">
                    2. Set Profile
                  </h1>
                  <p className="text-base text-gray-600 font-normal mt-2">
                    Join the millions already benefitting from.
                  </p>
                </div>

                <div className="">
                  <div className="flex items-center justify-start">
                    <div className="items-center justify-center flex bg-gray-700/10 rounded-full h-20 w-20 border border-dashed border-gray-700/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="rocket"
                        className="lucide lucide-rocket h-8 w-8 text-black"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-xl font-semibold pt-6">3. Start</h1>
                  <p className="text-base text-gray-600 font-normal mt-2">
                    Join the millions already benefitting from.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="/img/feature-iphone.png"
                className="h-[600px] rounded-xl mx-auto"
                alt="feature-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 active">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <div className="flex items-center">
              <img
                src="/img/feature.jpg"
                className="h-[650px] rounded-xl mx-auto"
                alt="feature section"
              />
            </div>

            <div className="lg:ms-5 ms-8">
              <span className="text-sm text-gray-700 uppercase font-semibold tracking-wider text-default-950">
                Focused on achievind
              </span>
              <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
                Achievement Via Our Distinct Methodology
              </h2>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 text-sm font-medium text-black mt-6"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="move-right"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </a>
              <hr className="border-gray-200 my-6" />

              <div className="flex items-start gap-5">
                <div>
                  <div className="w-12 h-12 rounded-full border border-dashed border-gray-700/40 bg-gray-700/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="check"
                      className="lucide lucide-check text-base text-blue-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Manage markets with empowerment
                  </h4>
                  <p className="text-base font-normal text-gray-500 mt-2">
                    Empower yourself to effectively manage markets with
                    confidence. utilizing strategic insights and resources for
                    success.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 mt-8">
                <div>
                  <div className="w-12 h-12 rounded-full border border-dashed border-gray-700/40 bg-gray-700/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="layers-2"
                      className="lucide lucide-layers-2 text-base text-blue-600"
                    >
                      <path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"></path>
                      <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"></path>
                    </svg>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Manage your design and architecture
                  </h4>
                  <p className="text-base font-normal text-gray-500 mt-2">
                    Achieve task completion optimization by effectively managing
                    time and resources, ensuring timely delivery and efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 mt-8">
                <div>
                  <div className="w-12 h-12 rounded-full border border-dashed border-gray-700/40 bg-gray-700/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="lock"
                      className="lucide lucide-lock text-base text-blue-600"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Presentations in real-time
                  </h4>
                  <p className="text-base font-normal text-gray-500 mt-2">
                    Empower yourself to effectively manage markets with
                    confidence. utilizing strategic insights and resources for
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="py-20 active">
        <div className="container mx-auto">
          <div className="">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-sm text-gray-700 uppercase font-semibold tracking-wider text-default-950">
                Blog
              </span>
              <h2 className="text-3xl md:text-4xl/tight font-semibold mt-4">
                Check the latest news about our company in our blog.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14 items-center">
            <div className="bg-white rounded-xl border">
              <div className="relative">
                <img className="rounded-t-xl" src="/img/05.jpg" alt="" />
              </div>
              <div className="flex py-6 px-6">
                <div>
                  <a
                    href="#"
                    className="text-xl text-black font-semibold line-clamp-2"
                  >
                    Spotlight — Equinox Collection by Shane Griffin
                  </a>
                  <p className="mt-4 mb-6 text-gray-500 leading-6">
                    As I searched for inspiration to get started, I came across
                    the captivating creations of Shane Griffin, an artist and
                    director located in New York City...
                  </p>

                  <div className="flex items-center justify-between gap-3 mt-4">
                    <div className="flex items-center">
                      <img
                        src="/img/client-05.jpg"
                        className="h-10 w-10 me-4 rounded-full"
                        alt=""
                      />
                      <a
                        href="#"
                        className="text-black text-sm font-semibold pb-1 hover:underline hover:text-gray-700 transition-all duration-300"
                      >
                        {" "}
                        Credon catla
                      </a>
                    </div>
                    <p className="flex font-medium text-muted">August 2</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border">
              <div className="relative">
                <img className="rounded-t-xl" src="/img/07.jpg" alt="" />
              </div>
              <div className="flex py-6 px-6">
                <div>
                  <a
                    href="#"
                    className="text-xl text-black font-semibold line-clamp-2"
                  >
                    Random Explorations with Cinema 4D and Redshift
                  </a>
                  <p className="mt-4 mb-6 text-gray-500 leading-6">
                    As I searched for inspiration to get started, I came across
                    the captivating creations of Shane Griffin, an artist and
                    director located in New York City...
                  </p>

                  <div className="flex items-center justify-between gap-3 mt-4">
                    <div className="flex items-center">
                      <img
                        src="/img/client-03.jpg"
                        className="h-10 w-10 me-4 rounded-full"
                        alt=""
                      />
                      <a
                        href="#"
                        className="text-black text-sm font-semibold pb-1 hover:underline hover:text-gray-700 transition-all duration-300"
                      >
                        {" "}
                        Jessica Smith
                      </a>
                    </div>
                    <p className="flex font-medium text-muted">August 3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border">
              <div className="relative">
                <img className="rounded-t-xl" src="/img/04.jpg" alt="" />
              </div>
              <div className="flex py-6 px-6">
                <div>
                  <a
                    href="#"
                    className="text-xl text-black font-semibold line-clamp-2"
                  >
                    Step by step guide for conducting usability
                  </a>
                  <p className="mt-4 mb-6 text-gray-500 leading-6">
                    As I searched for inspiration to get started, I came across
                    the captivating creations of Shane Griffin, an artist and
                    director located in New York City...
                  </p>

                  <div className="flex items-center justify-between gap-3 mt-4">
                    <div className="flex items-center">
                      <img
                        src="/img/client-03.jpg"
                        className="h-10 w-10 me-4 rounded-full"
                        alt=""
                      />
                      <a
                        href="#"
                        className="text-black text-sm font-semibold pb-1 hover:underline hover:text-gray-700 transition-all duration-300"
                      >
                        {" "}
                        Petric Camp
                      </a>
                    </div>
                    <p className="flex font-medium text-muted">August 8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div>
              <div>
                <span className="text-sm text-gray-700 uppercase font-semibold tracking-wider text-default-950 mb-6">
                  Contact Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl/tight font-semibold mt-4">
                We're open to talk to good people.
              </h2>

              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
                <div className="h-12 w-12 rounded-full bg-gray-700/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="map-pin"
                    className="lucide lucide-map-pin text-2xl text-gray-700"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h5 className="text-base text-muted font-medium mb-1">
                    123 King Street, London W60 10250
                  </h5>
                  <a
                    href="#"
                    className="text-xs text-gray-700 font-bold uppercase"
                  >
                    See more
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
                <div className="h-12 w-12 rounded-full bg-gray-700/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="mail"
                    className="lucide lucide-mail text-2xl text-gray-700"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-base text-muted font-medium mb-1">
                    support@zoyothemes.com
                  </h5>
                  <a
                    href="#"
                    className="text-xs text-gray-700 font-bold uppercase"
                  >
                    Say hello
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
                <div className="h-12 w-12 rounded-full bg-gray-700/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="smartphone"
                    className="lucide lucide-smartphone text-2xl text-gray-700"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-base text-muted font-medium mb-1">
                    (+01) 1234 5678 00
                  </h5>
                  <a
                    href="#"
                    className="text-xs text-gray-700 font-bold uppercase"
                  >
                    call now
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:ms-24">
              <div className="p-6 md:p-12 rounded-md shadow-lg bg-white">
                <form>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        for="formFirstName"
                        className="block text-sm/normal font-semibold text-black mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formFirstName"
                        placeholder="Your first name..."
                        required=""
                      />
                    </div>

                    <div>
                      <label
                        for="formLastName"
                        className="block text-sm/normal font-semibold text-black mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formLastName"
                        placeholder="Last first name..."
                        required=""
                      />
                    </div>

                    <div>
                      <label
                        for="formEmail"
                        className="block text-sm/normal font-semibold text-black mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formEmail"
                        placeholder="Your email..."
                        required=""
                      />
                    </div>

                    <div>
                      <label
                        for="formPhone"
                        className="block text-sm/normal font-semibold text-black mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formPhone"
                        placeholder="Type phone number..."
                        required=""
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <div className="mb-4">
                        <label
                          for="formMessages"
                          className="block text-sm/normal font-semibold text-black mb-2"
                        >
                          Messages
                        </label>
                        <textarea
                          className="block w-full text-sm rounded-md py-3 px-4 border border-gray-200 focus:border-gray-300 focus:ring-transparent"
                          id="formMessages"
                          rows="4"
                          placeholder="Type messages..."
                          required=""
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="py-2 px-6 rounded-md text-baseitems-center justify-center border border-gray-700 text-white bg-gray-700 hover:bg-gray-700Dark transition-all duration-500 font-medium"
                    >
                      Send Messages
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
