import ShareCOmponent from "./components/ShareCOmponent";
import foto from "./assets/images/avatar-michelle.jpg";
import bg from "./assets/images/drawers.jpg";
import ShareMedia from "./components/ShareMedia";
import { useEffect, useState } from "react";
import ShareDesk from "./components/ShareDesk";
const App = () => {
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);
  const handleToggle = () => {
    setToggle(() => !toggle);
  };
  const handleSize = () => {
    setscreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleSize);
    if (screenWidth > 770 && toggle === true) setToggle(false);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [window.innerWidth]);

  return (
    <main className="min-h-screen bg-Light-Grayish-Blue grid place-items-center tracking-wide">
      <section className="w-[330px] h-[512px] relative md:flex md:min-w-[772px] md:h-[300px] rounded-2xl md:self-end">
        <img
          src={bg}
          alt="furnitures"
          className="w-[330px] h-[200px] rounded-t-2xl  md:h-full md:rounded-none md:rounded-l-2xl"
        />

        <div className="h-[312px] bg-white font-manrope text-[13px] flex flex-col justify-evenly px-8 pt-4  rounded-b-2xl md:rounded-none md:rounded-r-2xl md:h-full">
          <h1 className="text-Very-Dark-Grayish-Blue text-[16px] font-[700] ">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-Desaturated-Dark-Blue font-medium">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="grid grid-cols-6">
            <div className="col-span-1">
              <img src={foto} alt="" className="w-11 h-11 rounded-full" />
            </div>
            <div className="col-span-4 px-4">
              <h4 className="text-Very-Dark-Grayish-Blue font-[700]">
                Michelle Appleton
              </h4>
              <p className="text-Desaturated-Dark-Blue col-span-3">
                28 Jun 2020
              </p>
            </div>
            <div
              className={`${
                toggle ? "bg-Very-Dark-Grayish-Blue" : "bg-Light-Grayish-Blue"
              } w-8 h-8 rounded-full grid place-items-center col-span-1 self-center place-self-end`}
            >
              <i>
                <ShareCOmponent
                  fillColor={toggle ? "#fff" : "#49556b"}
                  toggle={handleToggle}
                />
              </i>
            </div>
          </div>
        </div>
        {screenWidth < 770 && toggle && <ShareMedia toggle={handleToggle} />}
        {screenWidth > 770 && toggle && <ShareDesk />}
      </section>

      <div className="mt-6 md:mt-0 text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://portfolio-frontdev.netlify.app"
          target="_blank"
          className="text-slate-700 cursor-pointer"
        >
          German Pinto
        </a>
        .
      </div>
    </main>
  );
};

export default App;
