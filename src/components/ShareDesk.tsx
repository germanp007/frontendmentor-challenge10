import Facebook from "./Facebook";
import Pinterest from "./Pinterest";
import Twitter from "./Twitter";

const ShareDesk = () => {
  return (
    <div className="absolute bottom-[90px] right-[-76px] ">
      <div className="bg-Very-Dark-Grayish-Blue w-[250px] h-[57px] grid grid-cols-4 rounded-xl px-6  relative after:content-[''] after:absolute after:bottom-[-28px] after:left-1/2 after:transform after:-translate-x-1/2 after:border-transparent after:border-t-Very-Dark-Grayish-Blue after:border-[16px]">
        <div className="col-span-2 flex justify-center items-center ">
          <h1 className="tracking-[0.5em] text-Light-Grayish-Blue text-opacity-[0.4] text-[13px]">
            SHARE
          </h1>
        </div>
        <div className="col-span-2 flex items-center justify-evenly ">
          <i className="cursor-pointer">
            <Facebook />
          </i>
          <i className="cursor-pointer">
            <Twitter />
          </i>
          <i className="cursor-pointer">
            <Pinterest />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ShareDesk;
