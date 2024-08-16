import { useState } from "react";
import { getRandomBoolean, getRandomInteger } from "../utils/getRandomId";

export default function Example6() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other

  // useEffect(() => {
  //   if (card !== null && card.gold) {
  //     setGoldCardCount((g) => g + 1);
  //   }
  // }, [card]);

  // useEffect(() => {
  //   if (goldCardCount > 3) {
  //     setRound((r) => r + 1);
  //     setGoldCardCount(0);
  //   }
  // }, [goldCardCount]);

  // useEffect(() => {
  //   if (round > 5) {
  //     setIsGameOver(true);
  //   }
  // }, [round]);

  // useEffect(() => {
  //   if (isGameOver) console.log("Game Over");
  // }, [isGameOver]);

  // ✅ Calculate what you can during rendering

  const isGameOver = round > 5;

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error("Game already ended.");
    }
    // ✅ Calculate all the next state in the event handler
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount <= 2) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          console.log("Good game!");
        }
      }
    }
  }

  return (
    <div>
      <h1>Gold Game</h1>
      <div>
        <button
          onClick={() =>
            handlePlaceCard({
              id: getRandomInteger(1, 100),
              gold: getRandomBoolean(),
            })
          }
        >
          Place Random Card
        </button>
      </div>
      <div className="result">
        <span className="gold">Gold Card: {goldCardCount}</span>
        <span className="round">Round: {round}</span>
      </div>
    </div>
  );
}
