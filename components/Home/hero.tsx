import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
      <div className="inline-block max-w-3xl text-center justify-center z-10">
        {/* Title */}
        <h1 className="text-9xl sm:text-5xl md:text-6xl font-bold  mb-6">
          Empowering&nbsp;
          <span className="text-purple-500">
            Education <br />
          </span>{" "}
          Through Innovative Solutions.
        </h1>

        {/* Subtitle */}
        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full">
          <span className="font-semibold">Tution Wale</span> Leveraging my
          education in Computer Science, I aim to bridge the gap between
          technology and education, enabling students and educators to thrive in
          a digital world.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/onwidget/astrowind"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
          >
            Get template{" "}
            <span role="img" aria-label="download">
              ⬇️
            </span>
          </a>
          <a
            href="#features"
            className="border border-gray-400 text-gray-300 font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
