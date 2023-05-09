import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export default function App({ Component, pageProps }) {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isDayTime, setIsDayTime] = useState(false);

  const setBackgroundBasedOnTime = () => {
    const hour = new Date().getHours();
    const dayTime = hour > 6 && hour < 18;
    setIsDayTime(dayTime);
    setBackgroundImage(dayTime ? "/bg-light.png" : "/bg-dark.png");
  };

  useEffect(() => {
    setBackgroundBasedOnTime();
  }, []);

  return (
    <div className="relative">
      <button
        className=" text-white py-1 px-4 rounded mb-4 absolute top-2 right-2 z-10"
        onClick={() => {
          setIsDayTime(!isDayTime);
          setBackgroundImage(
            backgroundImage === "/bg-light.png"
              ? "/bg-dark.png"
              : "/bg-light.png"
          );
        }}
      >
        {isDayTime ? (
          <MoonIcon className="w-5 h-5 inline-block" />
        ) : (
          <SunIcon className="w-5 h-5 inline-block" />
        )}
      </button>

      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
}
