import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-32 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <div className="mt-20">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                  Expert Quality You Can Trust
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  In an era where safety is crucial, TYCO Engineering Services
                  (Int.) is a leader in providing comprehensive safety
                  solutions, including fire safety systems, elevators, and
                  escalators.
                </p>
              </div>
            </div>
            <div>
              <div className="py-12">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="hidden lg:block absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                        <div className="h-48 w-48 overflow-hidden rounded-lg">
                          <Image
                            alt="Image 1"
                            src="/assets/h1.jpg"
                            width={192}
                            height={256}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-48 w-48 overflow-hidden rounded-lg">
                          <Image
                            alt="Image 2"
                            src="/assets/h2.jpg"
                            width={192}
                            height={256}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-48 w-48 overflow-hidden rounded-lg">
                          <Image
                            alt="Image 3"
                            src="/assets/h3.jpg"
                            width={192}
                            height={256}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-48 w-48 overflow-hidden rounded-lg">
                          <Image
                            alt="Image 4"
                            src="/images/fire-fighting-sprinkler.jpg"
                            width={192}
                            height={256}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-48 w-48 overflow-hidden rounded-lg">
                          <Image
                            alt="Image 5"
                            src="/assets/h5.jpg"
                            width={192}
                            height={256}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-48 w-48 overflow-hidden rounded-lg">
                          <Image
                            alt="Image 6"
                            src="/images/s2.jpg"
                            width={192}
                            height={256}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-48 w-48 overflow-hidden rounded-lg">
                          <Image
                            alt="Image 7"
                            src="/images/b6.jpg"
                            width={192}
                            height={256}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a
                  href="#"
                  className="inline-block rounded-lg mb-8 bg-zinc-900 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-transform duration-300 transform hover:scale-105"
                >
                  Get Started
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
