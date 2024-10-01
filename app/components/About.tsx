"use client";
import { useState, useEffect, useRef } from "react";
import {
  BuildingOfficeIcon,
  ArrowTrendingUpIcon,
  FireIcon,
} from "@heroicons/react/24/solid"; // Importing Heroicons

const stats = [
  { id: 1, name: "Elevators Installed", value: 32, icon: BuildingOfficeIcon },
  { id: 2, name: "Escalators Installed", value: 17, icon: ArrowTrendingUpIcon },
  { id: 3, name: "Fire Fighting Projects", value: 25, icon: FireIcon },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const [counters, setCounters] = useState(
    stats.map((stat) => ({ ...stat, current: 0 }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // Duration of the animation in milliseconds
      const interval = 50; // Interval for updating the counter in milliseconds
      const step = duration / interval; // Number of steps in the animation

      counters.forEach((stat, index) => {
        let current = 0;
        const target = stats[index].value;
        const increment = target / step;

        const updateCount = () => {
          if (current < target) {
            current = Math.min(target, current + increment);
            setCounters((prevCounters) =>
              prevCounters.map((counter) =>
                counter.id === stat.id
                  ? { ...counter, current: Math.floor(current) }
                  : counter
              )
            );
            requestAnimationFrame(updateCount);
          }
        };
        updateCount();
      });
    }
  }, [isVisible]);

  return (
    <section className="py-16 bg-zinc-950 text-gray-200 ">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col items-center">
        {/* Stats */}
        <div className="w-full lg:w-1/2 py-12 lg:py-24 px-6" ref={statsRef}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {counters.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <stat.icon className="h-12 w-12 text-gray-300 mb-4" />{" "}
                {/* Added Icon */}
                <dd className="text-5xl font-semibold tracking-tight text-white mb-2">
                  {stat.current}
                </dd>
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
