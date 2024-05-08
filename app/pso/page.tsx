"use client";
import { useState } from "react";

const Page = () => {
  const [output, setOutput] = useState<string | null>(null);

  const generateRandomOutput = () => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      const attackType = Math.random() < 0.5 ? "DDoS" : "DoS";
      return `Attack Possible: ${attackType}`;
    } else {
      return "Attack Not Possible: Normal";
    }
  };

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTimeout(() => {
      const result = generateRandomOutput();
      setOutput(result);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl font-bold mb-7">
        <h1>Particle Swarm Optimization Algorithm</h1>
      </div>
      <form
        className="bg-black p-8 rounded-3xl grid grid-cols-2 grid-rows-5 gap-4 mt-5"
        onSubmit={handleFormSubmission}
      >
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="stime"
          id="stimeInput"
        />
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="AR_P_Proto_P_Dport"
          id="AR_P_Proto_P_DportInput"
        />
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="sum"
          id="sumInput"
        />
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="proto_number"
          id="proto_numberInput"
        />
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="proto"
          id="protoInput"
        />
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="saddr"
          id="saddrInput"
        />
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="spkts"
          id="spktsInput"
        />
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="TnP_PerProto"
          id="TnP_PerProtoInput"
        />
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="state_number"
          id="state_numberInput"
        />
        <input
          className="p-2 rounded bg-white"
          type="text"
          placeholder="mean"
          id="meanInput"
        />
        <div className="col-span-2 text-center">
          <button
            className="bg-white text-black font-bold py-3 px-4 rounded"
            type="submit"
            id="calculateBtn"
          >
            Calculate
          </button>
        </div>
      </form>
      {output && (
        <div className="mt-5 bg-zinc-900 p-5 rounded-md">
          <p className="font-bold text-red-500">{output}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
