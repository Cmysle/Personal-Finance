import self_zoomed from "../assets/self_zoomed.png";
import react_vite from "../assets/tech/react_vite.png";
import ai from "../assets/tech/ai.png";
import d3js from "../assets/tech/d3js.png";
import figma from "../assets/tech/figma.png";
import photoshop from "../assets/tech/photoshop.png";
import tailwindcss from "../assets/tech/tailwindcss.png";
import tech_stack from "../assets/tech_stack.png";
import tech_stack_2 from "../assets/tech_stack_2.png";

const AboutUs = () => {
  return (
    <main className="bg-[#d0e5ee] w-screen h-screen">
      <div className="w-screen h-32"></div>
      <section className="bg-[#9bc8db] width-screen-minus-640 height-screen-minus-192 rounded-3xl mt-8 mx-80 grid grid-rows-[3fr_2.5fr_1fr]">
        <div className="w-full h-full border-b-2 border-b-[#5685a1] grid grid-cols-[2fr_1fr]">
          {/* Row 1 Left Side */}
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex flex-row">
              <div className="bg-[#224768] w-52 h-12 mt-8 ml-6 rounded-full flex justify-center">
                <h2 className="self-center font-semibold text-white tracking-widest">
                  About Us
                </h2>
              </div>
              <div className="bg-[#224768] w-1/2 h-0.5 mt-8 self-center mx-1"></div>
              <div className="bg-[#224768] w-52 h-12 mt-8 rounded-full flex justify-center">
                <h2 className="self-center font-semibold text-white tracking-widest">
                  The Budget Buddy
                </h2>
              </div>
            </div>
            <h1 className="text-6xl text-[#224768] ml-6 mt-2 font-bold">
              About Us
            </h1>
            <p className="text-[#224768] text-xl ml-6 mt-6 font-medium">
              Hello! I'm{" "}
              <span className="text-black font-bold">Chris Myslenski</span>, the
              creative web developer behind this digital realm, where I channel
              my passion for crafting exceptional web experiences, breathing
              life into lines of code, and meticulously designing this personal
              finance-themed website. While it may appear to offer financial
              advice, please note that its sole purpose is to showcase my skills
              in the technologies below, reflecting my unwavering commitment to
              the world of web development; so, join me in exploring the
              captivating world of pixels and code within this digital
              landscape.
            </p>
          </div>
          {/* Row 1 Right Side */}
          <div className="w-full h-full flex justify-start">
            <img
              src={self_zoomed}
              alt="self_zoomed"
              className="self-end h-96"
            />
          </div>
        </div>
        <div className="w-full h-full border-b-2 border-b-[#5685a1] grid grid-rows-[0.5fr_4.5fr_0.5fr]">
          <div className="w-full h-full"></div>
          <div className="w-full h-full grid grid-cols-[3.1fr_1fr_1fr]">
            {/* Row 2 Box 1 */}
            <div className="w-full h-full flex flex-col border-r-2 border-r-[#5685a1]">
              <h1 className="text-4xl text-[#224768] ml-6 font-bold">
                Tech Stack
              </h1>
              <div className="bg-[#224768] w-4/5 h-0.5 ml-6 mt-4"></div>
              <div className="w-12 h-2 ml-8 mt-2 rounded-full border-2 border-[#224768]"></div>
              <p className="text-[#224768] text-xl ml-6 mt-6 font-medium pr-2">
                My toolkit for crafting this captivating digital landscape
                encompassed Vite and React for interactivity, Tailwind CSS for
                aesthetics, Photoshop for visual enhancements, Figma for design,
                AI-powered tools for text and image generation, D3.js for
                dynamic data visualization, and a strong desire to
                staying at the forefront of emerging technologies, showcasing a
                versatile blend of innovative tools and expertise.
              </p>
            </div>
            {/* Row 2 Box 2 */}
            <div className="w-full h-full border-r-2 border-r-[#5685a1] flex justify-center">
              <img
                src={tech_stack}
                alt="tech_stack"
                className="self-center h-64 rounded-xl"
              />
            </div>
            {/* Row 2 Box 3 */}
            <div className="w-full h-full flex justify-center">
              <img
                src={tech_stack_2}
                alt="tech_stack_2"
                className="self-center h-64 rounded-xl"
              />
            </div>
          </div>
          <div className="w-full h-full"></div>
        </div>
        <div className="w-full h-full grid grid-cols-6">
          {/* Row 2 Box 3 */}
          <div className="w-full h-full flex flex-col justify-center">
            <img
              src={react_vite}
              alt="react_vite"
              className="self-center h-20 mt-2"
            />
            <h2 className="self-center font-bold text-[#224768] mt-3 text-lg">
              React/Vite
            </h2>
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <img
              src={tailwindcss}
              alt="tailwindcss"
              className="self-center h-20 mt-2"
            />
            <h2 className="self-center font-bold text-[#224768] mt-3 text-lg">
              Tailwind CSS
            </h2>
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <img
              src={photoshop}
              alt="photoshop"
              className="self-center h-20 mt-2"
            />
            <h2 className="self-center font-bold text-[#224768] mt-3 text-lg">
              Photoshop
            </h2>
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <img src={figma} alt="figma" className="self-center h-20 mt-2" />
            <h2 className="self-center font-bold text-[#224768] mt-3 text-lg">
              Figma
            </h2>
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <img src={d3js} alt="d3js" className="self-center h-20 mt-2" />
            <h2 className="self-center font-bold text-[#224768] mt-3 text-lg">
              D3.js
            </h2>
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <img src={ai} alt="ai" className="self-center h-20 mt-2" />
            <h2 className="self-center font-bold text-[#224768] mt-3 text-lg">
              Ai
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
