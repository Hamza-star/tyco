import Image from "next/image";

export default function Brands() {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold leading-8 text-gray-900">
          Trusted by these{" "}
          <span className="text-gary-900 font-extrabold underline decoration-4 decoration-gray-900">
            brands
          </span>{" "}
          so far
        </h2>
        <div className="mx-auto py-10 grid max-w-lg grid-cols-2 gap-x-10 gap-y-12 sm:max-w-xl sm:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <div className="flex items-center justify-center col-span-1">
            <Image
              alt="Transistor"
              src="/images/c7.png"
              width={120}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center col-span-1">
            <Image
              alt="Reform"
              src="/images/c2.png"
              width={120}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center col-span-1">
            <Image
              alt="Tuple"
              src="/images/c6.png"
              width={120}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center col-span-1">
            <Image
              alt="SavvyCal"
              src="/images/c4.jpg"
              width={120}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 lg:col-span-1">
            <Image
              alt="Statamic"
              src="/images/c5.jpg"
              width={120}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 lg:col-span-1">
            <Image
              alt="Brand 6"
              src="/images/c1.jpg"
              width={120}
              height={36}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
