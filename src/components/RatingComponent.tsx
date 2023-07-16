import { FC, useState } from "react";
import { ReactSVG } from "react-svg";

type Props = {
  onClick: (rating: number) => void;
  maxScale: number;
};

const RatingComponent: FC<Props> = ({ onClick, maxScale }) => {
  const [selection, setSelection] = useState(-1);
  const [showError, setShowError] = useState(false);
  let scale = Array.from({ length: maxScale }, (_, i) => i + 1);

  return (
    <div className="flex max-w-[420px] flex-col gap-5 rounded-2xl bg-dark-blue p-5 text-[14px]">
      <div className="mr-auto flex h-12 w-12 items-center justify-center rounded-full bg-darker-blue">
        <ReactSVG src="src/assets/images/icon-star.svg" />
      </div>
      <h2 className="text-2xl font-bold text-white">How did we do?</h2>
      <p className="text-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex flex-row justify-between">
        {scale.map((num) => {
          return (
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full bg-darker-blue align-middle 
            leading-[0] text-light-grey hover:cursor-pointer hover:bg-orange hover:text-white ${
              selection === num && "bg-light-grey text-white"
            }`}
              onClick={() => {
                setSelection(num);
                setShowError(false);
              }}
            >
              {/* for some reason text in 'Overpass' font doesn't center properly */}
              <span className="mt-1 block">{num}</span>
            </div>
          );
        })}
      </div>
      {showError && <p className="text-orange ">Please select a number</p>}
      <button
        className="mb-3 rounded-full bg-orange px-3 py-6 font-bold leading-[0] tracking-widest text-white hover:bg-white hover:text-orange"
        onClick={() => {
          if (selection != -1) onClick(selection);
          else {
            setShowError(true);
          }
        }}
      >
        <span className="mt-1 block">SUBMIT</span>
      </button>
    </div>
  );
};

export default RatingComponent;
