function Home() {
  return (
    <div
      id="home"
      className="flex justify-center items-center flex-col px-[12px] bg-[black] bg-opacity-60"
    >
      <div className="bg-[rgb(21,22,24,0.5)] text-center rounded-[25px] py-[10px] px-[30px] mb-[15px] lg:mb-[30px] outline-none">
        <h3 className="text-[20px] text-[white] font-light lg:text-[26px]">
          Welcome to <span className="text-[#E3B81E] font-bold">Grains</span>
        </h3>
      </div>
      <h1 className="text-[white] text-[28px] lg:text-[48px] text-center uppercase">
        We Are Grains Shop
      </h1>
      <p className="text-[white] text-[14px] mb-[35px] text-center lg:text-[24px]">
        We are team of talented designers making websites with
      </p>
      <button className="bg-[rgb(21,22,24,0.5)] rounded-[25px] py-[8px] px-[30px] text-[white]  outline-none border-[white] hover:bg-[#E3B81E] duration-300 ease-in-out border-[1px] uppercase font-bold">
        Get Started
      </button>
    </div>
  );
}

export default Home;
