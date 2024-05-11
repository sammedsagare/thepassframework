"use client";
import { useState, useEffect } from "react";

const Page = () => {
  const [output, setOutput] = useState<string | number>("");
  const [fileMessage, setFileMessage] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (fileMessage) {
      timer = setTimeout(() => {
        setFileMessage("");
      }, 7000); // Set the timeout to 7 seconds
    }
    return () => clearTimeout(timer); // Clear the timer on component unmount or fileMessage change
  }, [fileMessage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFileMessage("File uploaded successfully");
    }
  };

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
    <div className="flex flex-col md:flex-row md:justify-between items-center md:-mt-10 h-screen">
      <div className="text-2xl md:text-3xl font-bold mt-44 md:mt-0">
        <h1>Particle Swarm Optimization Algorithm</h1>
      </div>
      <form
        className="bg-white border border-black shadow-lg p-8 rounded-3xl grid grid-cols-2 grid-rows-5 gap-4 mt-5"
        onSubmit={handleFormSubmission}
      >
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="stime"
          id="stimeInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="AR_P_Proto_P_Dport"
          id="AR_P_Proto_P_DportInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="sum"
          id="sumInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="proto_number"
          id="proto_numberInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="proto"
          id="protoInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="saddr"
          id="saddrInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="spkts"
          id="spktsInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="TnP_PerProto"
          id="TnP_PerProtoInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="state_number"
          id="state_numberInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="mean"
          id="meanInput"
        />
        <input
          id="fileInput"
          className="p-2 rounded bg-white border border-black"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />

        <div className="col-span-2 text-center">
          <button
            className="bg-white text-black font-bold py-3 px-4 border border-black rounded"
            type="submit"
            id="calculateBtn"
          >
            Calculate
          </button>
        </div>
      </form>

      {fileMessage && (
        <div className="absolute bottom-16 right-[26%] font-bold text-green-500">
          {fileMessage}
        </div>
      )}

      {output && (
        <div className="absolute bottom-7 right-[24%] bg-white shadow-xl p-5 rounded-md">
          <p className="font-bold text-red-500">{output}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
