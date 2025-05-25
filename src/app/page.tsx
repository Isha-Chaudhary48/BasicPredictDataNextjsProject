"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputName, setInputName] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputName.trim() !== "") {
      router.push(`/prediction/${inputName}`);
    }
  };
  return (
    <>
      <div className="flex  flex-col items-center  justify-start gap-10 h-[100vh] w-[100vw] ">
        <h1 className="text-4xl text-blue-400 font-semibold mt-20 mb-14">
          Prediciton
        </h1>
        <div className=" bg-black text-white h-[300px] w-[600px] flex justify-center items-center flex-col gap-6 rounded-md">
          <div className="text-xl">Enter Your Name</div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="p-2 text-center rounded-l-md text-black"
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Type Your Name..."
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-400 rounded-r-md p-2"
            >
              Predict Data
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
