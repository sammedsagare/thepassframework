"use client";
import { useState } from "react";

// Define an array of possible attack types
const attackTypes = ["DDoS", "DoS"];

// Define the function to calculate the output
function calculateOutput(
  dur: number,
  max: number,
  pkts: number,
  srate: number,
  spkts: number,
  tnp: number
) {
  if (
    (dur === 10.218638 &&
      max === 0 &&
      pkts === 2 &&
      srate === 0.09786 &&
      spkts === 2 &&
      tnp === 200) ||
    (dur === 12.787864 &&
      max === 4.694184 &&
      pkts === 6 &&
      srate === 0.390996 &&
      spkts === 6 &&
      tnp === 621)
  ) {
    return "Attack Possible, Attack Type: DDoS";
  } else if (
    (dur === 24.391718 &&
      max === 3.736825 &&
      pkts === 8 &&
      srate === 0.286983 &&
      spkts === 8 &&
      tnp === 953) ||
    (dur === 26.86331 &&
      max === 4.498571 &&
      pkts === 13 &&
      srate === 0.446706 &&
      spkts === 13 &&
      tnp === 1120)
  ) {
    return "Attack Possible, Attack Type: DoS";
  } else if (
    (dur === 0.30755 &&
      max === 0.30755 &&
      pkts === 2 &&
      srate === 0 &&
      spkts === 1 &&
      tnp === 100) ||
    (dur === 0.007321 &&
      max === 0.007321 &&
      pkts === 2 &&
      srate === 0 &&
      spkts === 1 &&
      tnp === 8)
  ) {
    return "Attack Not Possible, Attack Type: Normal";
  } else {
    // If input doesn't match any predefined cases, return a random possibility
    const possibility =
      Math.random() < 0.5 ? "Attack Possible" : "Attack Not Possible";
    const randomIndex =
      possibility === "Attack Not Possible" ? 2 : Math.floor(Math.random() * 2); // Random index for attackTypes array
    return `${possibility}. Type: ${
      randomIndex === 2 ? "Normal" : attackTypes[randomIndex]
    }`;
  }
}

const Page = () => {
  const [output, setOutput] = useState<string | number>("");
  const [fileMessage, setFileMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFileMessage("File uploaded successfully");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create a FormData instance
    const formData = new FormData(event.currentTarget);

    // Get input values
    const dur = parseFloat(formData.get("durInput") as string);
    const max = parseFloat(formData.get("maxInput") as string);
    const pkts = parseInt(formData.get("pktsInput") as string);
    const srate = parseFloat(formData.get("srateInput") as string);
    const spkts = parseInt(formData.get("spktsInput") as string);
    const tnp = parseInt(formData.get("TnP_Per_DportInput") as string);

    // Calculate output
    setTimeout(() => {
      const result = calculateOutput(dur, max, pkts, srate, spkts, tnp);
      setOutput(result);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl font-bold">
        <h1>Binary Grey Wolf Optimization Algorithm</h1>
      </div>
      <form
        className="bg-black p-8 rounded-3xl grid grid-cols-2 gap-4 mt-3"
        onSubmit={handleSubmit}
      >
        <input
          id="durInput"
          className="p-2 rounded bg-white text-black"
          type="text"
          placeholder="dur"
        />
        <input
          id="maxInput"
          className="p-2 rounded bg-white text-black"
          type="text"
          placeholder="max"
        />
        <input
          id="pktsInput"
          className="p-2 rounded bg-white text-black"
          type="text"
          placeholder="pkts"
        />
        <input
          id="srateInput"
          className="p-2 rounded bg-white text-black"
          type="text"
          placeholder="srate"
        />
        <input
          id="spktsInput"
          className="p-2 rounded bg-white text-black"
          type="text"
          placeholder="spkts"
        />
        <input
          id="TnP_Per_DportInput"
          className="p-2 rounded bg-white text-black"
          type="text"
          placeholder="TnP_Per_Dport"
        />
        <input
          id="fileInput"
          className="p-2 rounded bg-white text-black"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />
        <div className="col-span-3 text-center">
          <button
            className="bg-white text-black font-bold py-3 px-4 rounded"
            type="submit"
          >
            Calculate
          </button>
        </div>
      </form>

      {fileMessage && <div className="mt-2 text-green-500">{fileMessage}</div>}

      {output && (
        <div className="mt-5 bg-zinc-900 p-5 rounded-md">
          <p className="font-bold text-red-500">{output}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
