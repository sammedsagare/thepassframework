import React from "react";
import mlBGWO from "./ml-bgwo-1.png";
import dlBGWO from "./dl-bgwo-1.png";
import mlPSO from "./ml-pso.png";
import dlPSO from "./dl-pso.png";
import ttBGWO from "./training-testing-bgwo.png";
import ttPSO from "./training-testing-pso.png";
import compBGWO from "./compSHAP-BGWO.png";
import compPSO from "./compSHAP-PSO.png";

export default function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col md:flex-row md:justify-between items-center mx-auto md:mx-0 mt-24 md:mt-0 h-screen md:h-[80vh] md:gap-40">
          <h1 className="text-2xl md:text-3xl font-bold">BGWO</h1>
          <div className="flex flex-col md:flex-row gap-3 rounded-md">
            <div className="bg-white shadow-lg p-10">
              <img src={mlBGWO.src} alt="" />
            </div>
            <div className="bg-white shadow-lg p-10">
              <img src={dlBGWO.src} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-24 md:mt-0 h-screen md:h-[80vh] md:gap-40">
          <h1 className="text-2xl md:text-3xl font-bold">PSO</h1>
          <div className="flex flex-col md:flex-row gap-3 rounded-md">
            <div className="bg-white shadow-lg p-10">
              <img src={mlPSO.src} alt="" />
            </div>
            <div className="bg-white shadow-lg p-10">
              <img src={dlPSO.src} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center mt-24 md:mt-0 h-screen md:h-[80vh] md:gap-10">
          <h1 className="text-2xl md:text-3xl font-bold">
            Training and Testing Time
          </h1>
          <div className="flex flex-col md:flex-row gap-3 rounded-md">
            <div className="bg-white shadow-lg p-10">
              <img src={ttBGWO.src} alt="" />
            </div>
            <div className="bg-white shadow-lg p-10">
              <img src={ttPSO.src} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-24 md:mt-0 h-screen md:h-[80vh] md:gap-10">
          <h1 className="text-2xl md:text-3xl font-bold">
            Comparision with State of Art Frameworks
          </h1>
          <div className="flex flex-col md:flex-row gap-3 rounded-md">
            <div className="bg-white shadow-lg p-10">
              <img src={compBGWO.src} alt="" />
            </div>
            <div className="bg-white shadow-lg p-10">
              <img src={compPSO.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
