import { FC } from "react";
import { ReactSVG } from "react-svg";

const ThankYouComponent: FC<{ userRating: number | null }> = ({
  userRating,
}) => {
  return (
    <div className="flex max-w-[420px] flex-col gap-5 rounded-2xl bg-dark-blue p-5 text-[14px]">
      <div className="flex items-center justify-center rounded-full">
        <ReactSVG src="src/assets/images/illustration-thank-you.svg" />
      </div>
      <div className="self-center rounded-full bg-darker-blue px-5 py-2 text-orange">
        <span className="mt-1 block">You selected {userRating} out of 5</span>
      </div>
      <h2 className="self-center text-2xl font-bold text-white">Thank you!</h2>
      <p className="mb-5 text-center text-light-grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouComponent;
