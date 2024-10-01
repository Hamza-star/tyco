import Head from "next/head";
import Image from "next/image";

const Projects = () => {
  const projectData = [
    {
      imageSrc: "/images/p2.jpg",
      title: "Sultan Shawarma Lahore",
      description: "Supply and Installation of Fire Fighting system",
    },
    {
      imageSrc: "/images/p1.jpg",
      title: "Rizvi Plaza",
      description: "Supply and Installation of Fire Alarm system",
    },
    {
      imageSrc: "/images/p3.png",
      title: "Heaven Tower, Multan",
      description: "Supply and Installation of 1000 KG 4 Stops Elevator",
    },
    {
      imageSrc: "/images/p4.jpg",
      title: "Silver Mark, Islamabad",
      description: "Supply and Installation of 1600 KG Cargo 10 Stop Elevator",
    },
    {
      imageSrc: "/images/p5.png",
      title: "A.K Heights, Lahore",
      description: "Supply and Installation of 630 KG Cargo 7 Stop Elevator",
    },
    {
      imageSrc: "/images/p6.png",
      title: "Hotel One, Top City, Islamabad",
      description:
        "Supply and Installation of Fire Fighting system for 5 floors of Hotel One",
    },
    {
      imageSrc: "/images/p7.jpg",
      title: "Gasco, Satiana Road, Faisalabad",
      description: "Supply and Installation of Fire Fighting System",
    },
    {
      imageSrc: "/images/p9.png",
      title: "Eco Petroleum, Sheikhupura",
      description: "Supply and Installation of Fire Fighting System",
    },
  ];

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Learn more about our projects and services."
        />
      </Head>
      <main className="text-gray-900">
        <section className="relative py-16 md:py-24 text-center">
          <div className="container mx-auto px-4 mt-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              A Showcase of Our Finest Work
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Explore our diverse projects that demonstrate our commitment to
              quality and safety.
            </p>
          </div>
        </section>

        <section className="relative md:py-0">
          <div className="container mx-auto px-4">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2  mb-12"
              >
                <div className="flex justify-center items-center">
                  <div className="relative w-96 h-[300px] md:h-[400px]">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-4 px-8">
                  <h2 className="text-2xl md:text-3xl font-semibold ">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
