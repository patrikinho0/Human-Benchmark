import { useEffect, useState, useRef } from "react";
import { auth, db } from "./firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "./game.css";

function Game() {
  const [gameState, setGameState] = useState("ready");
  const [reactionTime, setReactionTime] = useState(null);
  const [message, setMessage] = useState("Click to start");
  const startTimeRef = useRef(null);
  const timeoutRef = useRef(null);

  const startGame = () => {
    setGameState("waiting");
    setMessage("Wait for green...");

    const randomDelay = Math.floor(Math.random() * 3000) + 2000;

    timeoutRef.current = setTimeout(() => {
      setGameState("now");
      setMessage("CLICK!");
      startTimeRef.current = Date.now();
    }, randomDelay);
  };

  const handleClick = async () => {
    if (gameState === "ready") {
      startGame();
    } else if (gameState === "waiting") {
      clearTimeout(timeoutRef.current);
      setGameState("ready");
      setMessage("Too soon! Click to try again.");
    } else if (gameState === "now") {
        const endTime = Date.now();
        const reaction = endTime - startTimeRef.current;
        setReactionTime(reaction);
        setGameState("result");
        setMessage(`Your reaction time: ${reaction}ms`);
        
        if (auth.currentUser) {
            const user = auth.currentUser;
            const playerRef = doc(db, "players", user.uid);
            const playerSnap = await getDoc(playerRef);
          
            if (playerSnap.exists()) {
              const currentHighScore = playerSnap.data().highestScore;
          
              if (currentHighScore === 0 || reaction < currentHighScore) {
                await updateDoc(playerRef, {
                  highestScore: reaction
                });
              }
            }
          }
    } else if (gameState === "result") {
      setGameState("ready");
      setReactionTime(null);
      setMessage("Click to start");
    }
  };

  return (
    <div className="game">
      <h1>Reaction Time Game</h1>
      <div className={`game-box ${gameState}`} onClick={handleClick}>
        <p>{message}</p>
      </div>
      {reactionTime !== null && <p>Your score: {reactionTime}ms</p>}
    </div>
  );
}

export default Game;
