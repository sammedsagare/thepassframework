import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="bg-white md:h-screen flex flex-col md:flex-row md:justify-between items-center md:gap-40 overflow-hidden">
        <div className="flex flex-col w-full md:w-1/2 mt-24 md:mt-0">
          <h1 className="text-2xl md:text-6xl font-bold mb-2">BGWO</h1>
          <p className="mt-10 text-sm md:text-base">
            The paper introduces the Binary Grey Wolf Optimization (BGWO)
            technique for feature selection in machine learning. It highlights
            feature selection's role in improving dataset quality and algorithm
            efficiency for better classification accuracy. Within the wrapper
            framework, attribute selection is treated as an optimization
            challenge, with BGWO employed to explore attribute combinations and
            optimize evaluation criteria, guided by the Naive Bayes classifier.
            This integrated approach emphasizes the synergy between optimization
            methods and classification algorithms to enhance feature selection
            in machine learning.
          </p>
          <Link href="/test/bgwo">
            <button className="text-black border border-purple-600 px-4 py-2 rounded-full w-1/2 mt-10">
              Test BGWO Live.
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-full md:w-1/2 mt-24 md:mt-0 mb-5 md:mb-0">
          <h1 className="text-2xl md:text-6xl font-bold mb-2">PSO</h1>
          <p className="mt-10 text-sm md:text-base">
            Particle Swarm Optimization (PSO) is a metaheuristic algorithm
            inspired by swarm intelligence, mimicking the collective behavior of
            birds or fish. It operates by simulating a population of particles
            navigating through a search space, with each particle representing a
            potential solution. These particles adjust their positions and
            velocities based on past performance and shared experiences within
            the swarm, aiming to iteratively converge towards the optimal
            solution. Key components include particles, swarm, position,
            velocity, personal best (pbest), global best (gbest), inertia weight
            (ω), cognitive component (c1), social component (c2), and random
            numbers (r1, r2).
          </p>
          <Link href="/test/pso">
            <button className="text-black border border-purple-600 px-4 py-2 rounded-full w-1/2 mt-10">
              Test PSO Live.
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
