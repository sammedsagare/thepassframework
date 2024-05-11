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
      <div className="flex flex-col items-center space-y-10 mt-40">
        <div>
          <h1 className="text-3xl">BGWO</h1>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <img src={mlBGWO.src} alt="" />
            </div>
            <div>
              <img src={dlBGWO.src} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">PSO</h1>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <img src={mlPSO.src} alt="" />
            </div>
            <div>
              <img src={dlPSO.src} alt="" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl">Training and Testing Time</h1>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <img src={ttBGWO.src} alt="" />
            </div>
            <div>
              <img src={ttPSO.src} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Comparision with State of Art Frameworks</h1>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <img src={compBGWO.src} alt="" />
            </div>
            <div>
              <img src={compPSO.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
