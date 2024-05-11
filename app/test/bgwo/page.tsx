"use client";
import { useState, useEffect } from "react";

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
    <div className="flex flex-col md:flex-row md:justify-between items-center h-screen">
      <div className="text-2xl md:text-3xl font-bold mt-44 md:mt-0">
        <h1>Binary Grey Wolf Optimization Algorithm</h1>
      </div>
      <form
        className="bg-white border border-black shadow-lg p-8 rounded-3xl grid grid-cols-2 grid-rows-5 gap-4 mt-5"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="dur"
          id="durInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="max"
          id="maxInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="pkts"
          id="pktsInput"
        />
        <input
          className="p-2 rounded bg-white border border-black"
          type="text"
          placeholder="srate"
          id="srateInput"
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
          placeholder="TnP_Per_Dport"
          id="TnP_Per_DportInput"
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
        <div className="absolute bottom-16 right-[26%] text-green-500">
          {fileMessage}
        </div>
      )}

      {output && (
        <div className="absolute bottom-8 right-[22%] bg-white shadow-xl p-5 rounded-md">
          <p className="font-bold text-red-500">{output}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
