import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "PASSENGER ELEVATORS",
    href: "#",
    description:
      "Our Passenger Elevators provide safe, efficient, and smooth transportation for passengers, designed to handle high traffic in residential and commercial buildings. Reliable performance and energy efficiency ensure an enhanced user experience.",
    date: "Sep 20, 2024",
    datetime: "2024-09-20",
    category: { title: "Elevators", href: "/services" },
    imageUrl: "/images/b3.jpg",
  },
  {
    id: 2,
    title: "ESCALATORS",
    href: "#",
    description:
      "Our high-quality escalators ensure seamless transportation in busy areas like malls and airports. Built with safety features, they guarantee durability and efficiency, designed to minimize downtime and maximize convenience.",
    date: "Sep 20, 2024",
    datetime: "2024-09-20",
    category: { title: "Escalators", href: "/services" },
    imageUrl: "/images/b4.jpg",
  },
  {
    id: 3,
    title: "FIRE ALARM SYSTEM",
    href: "#",
    description:
      "Our fire alarm systems provide early detection of fire risks, ensuring timely evacuation and minimizing fire damage. They include advanced sensors and alarms for effective and reliable fire detection.",
    date: "Sep 20, 2024",
    datetime: "2024-09-20",
    category: { title: "Fire Alarm", href: "/services" },
    imageUrl: "/images/b6.jpg",
  },
  {
    id: 4,
    title: "FIRE FIGHTING PUMPS",
    href: "#",
    description:
      "Fire fighting pumps ensure sufficient water pressure is available during firefighting efforts, enhancing the effectiveness of fire suppression systems. Reliable and robust, our pumps are essential in emergency situations.",
    date: "Sep 20, 2024",
    datetime: "2024-09-20",
    category: { title: "Fire Pumps", href: "/services" },
    imageUrl: "/images/s2.jpg",
  },
  {
    id: 5,
    title: "SPRINKLERS SYSTEM",
    href: "#",
    description:
      "Designed for quick and reliable response, our sprinkler systems activate automatically during fire events, offering effective suppression to limit damage and protect lives. Ideal for both commercial and residential applications.",
    date: "Sep 20, 2024",
    datetime: "2024-09-20",
    category: { title: "Sprinklers", href: "/services" },
    imageUrl: "/images/b7.jpg",
  },
  {
    id: 6,
    title: "FIRE FIGHTING SYSTEM",
    href: "#",
    description:
      "Our fire fighting systems provide comprehensive protection in emergencies. The systems include fire extinguishers, hydrants, and other equipment to ensure maximum safety for buildings and occupants during fire hazards.",
    date: "Sep 20, 2024",
    datetime: "2024-09-20",
    category: { title: "Fire Safety", href: "/services" },
    imageUrl: "/images/b9.jpg",
  },
  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover our wide range of services designed to meet the needs of
            modern infrastructure and safety standards.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              {/* Post image */}
              <div className="relative w-full h-64">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image covers the container without distortion
                  className=""
                />
              </div>

              <div className="flex items-center gap-x-4 text-xs mt-4">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
