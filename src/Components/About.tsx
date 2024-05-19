import Rice from "../../public/assets/rice.png";
import Grains from "../../public/assets/grains.jpg";

function About() {
  return (
    <div>
      <div className="flex justify-center items-center text-[#E43C5C] ">
        <button className="bg-[#FDEFF2] rounded-full px-[20px] py-[3px]">
          ABOUT
        </button>
      </div>

      <div className="flex justify-center items-center text-[30px] mt-[20px]">
        <h1 className="text-[#444444]">
          Learn More <span className="text-[#E43C5C]">About US</span>
        </h1>
      </div>

      <div className="flex justify-center items-center mt-[15px] m-width-[70px] text-center text-[#444444] px-[10px]">
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita <br /> at voluptas atque vitae autem.
        </p>
      </div>

      <div className="flex-wrap justify-center items-center mt-[40px] px-[10px]">
        <div>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>

        <div className="mt-[20px]">
          <p className="flex items-center justify-center gap-[5px]">
            <img src={Rice} alt="" className="w-[25px] h-[25px]" />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <p className="flex items-center justify-center gap-[5px]">
            <img src={Rice} alt="" className="w-[25px] h-[25px]" />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <p className="flex items-center justify-center gap-[5px]">
            <img src={Rice} alt="" className="w-[25px] h-[25px]" />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
      </div>

      <div className="relative mt-[15px]">
        <img src={Grains} alt="Grains" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Intel Express</span>
        </div>
      </div>
    </div>
  );
}

export default About;
