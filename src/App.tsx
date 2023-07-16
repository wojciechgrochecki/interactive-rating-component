import "./App.css";
import { useState } from "react";
import ThankYouComponent from "./components/ThankYouComponent.tsx";
import RatingComponent from "./components/RatingComponent.tsx";

function App() {
  const [rating, setRating] = useState<number | null>(null);

  function handleUserRating(userRating: number): void {
    setRating(userRating);
  }

  return (
    <div className="flex items-center justify-center px-3 py-5">
      {rating === null ? (
        <RatingComponent onClick={handleUserRating} maxScale={5} />
      ) : (
        <ThankYouComponent userRating={rating} />
      )}
    </div>
  );
}

export default App;
