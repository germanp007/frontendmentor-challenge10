import Facebook from "./Facebook";
import Pinterest from "./Pinterest";
import ShareCOmponent from "./ShareCOmponent";
import Twitter from "./Twitter";
interface ShareComponentProps {
  toggle: () => void;
}
const ShareMedia: React.FC<ShareComponentProps> = ({ toggle }) => {
  return (
    <div className="bg-Very-Dark-Grayish-Blue grid grid-cols-6 rounded-b-2xl w-[330px] h-[63px] absolute bottom-0 ">
      <div className="col-span-2 grid place-items-center">
        <h1 className="tracking-[0.2rem] text-Light-Grayish-Blue text-opacity-[0.4] text-[13px]">
          SHARE
        </h1>
      </div>
      <div className="col-span-2 flex  items-center justify-evenly">
        <i>
          <Facebook />
        </i>
        <i>
          <Twitter />
        </i>
        <i>
          <Pinterest />
        </i>
      </div>

      <div className="col-span-2 bg-Desaturated-Dark-Blue rounded-full w-8 h-8 grid place-items-center self-center place-self-center">
        <ShareCOmponent fillColor="white" toggle={toggle} />
      </div>
    </div>
  );
};

export default ShareMedia;
