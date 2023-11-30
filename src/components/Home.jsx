import bb_logo_transparent from "../assets/bb_logo_transparent.png"

const Home = () => {
  return (
    <main className="w-screen h-screen">
      <div className="w-screen h-32"></div>
      <section className="width-screen-minus-128 height-screen-minus-192 mt-8 mx-16 grid grid-rows-[5fr_32px_2fr_32px_3fr]">
        <div className="w-full h-full grid grid-cols-[5.5fr_32px_4.5fr]">
          <div className="bg-[#5685a1] w-full h-full rounded-3xl grid grid-cols-[2fr_3fr] border-2 border-[#5685a1]">
            <div className="w-full h-full"></div>
            <div className="w-full h-full grid grid-rows-[3.5fr_1.5fr]">
              <div className="w-full h-full flex justify-center">
                <img src={bb_logo_transparent} alt="bb_logo_transparent" className="h-64 "/>
              </div>
              <div className="bg-white w-full h-full rounded-br-3xl"></div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          <div className="bg-[#5685a1] w-full h-full rounded-3xl grid grid-rows-[3.5fr_1.5fr]  border-2 border-[#5685a1]">
            <div className="w-full h-full"></div>
            <div className="bg-white w-full h-full rounded-b-3xl"></div>
          </div>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[2fr_32px_2fr_32px_4fr]">
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1]"></div>
          <div className="w-full h-full"></div>
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1]"></div>
          <div className="w-full h-full"></div>
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1]"></div>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[2fr_32px_4fr_32px_1fr]">
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-rows-[4fr_1fr]">
            <div className="w-full h-full"></div>
            <div className="bg-white w-full h-full rounded-b-3xl"></div>
          </div>
          <div className="w-full h-full"></div>
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-rows-[4fr_1fr]">
            <div className="w-full h-full"></div>
            <div className="bg-white w-full h-full rounded-b-3xl"></div>
          </div>
          <div className="w-full h-full"></div>
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-rows-[4fr_1fr]">
            <div className="w-full h-full"></div>
            <div className="bg-white w-full h-full rounded-b-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
