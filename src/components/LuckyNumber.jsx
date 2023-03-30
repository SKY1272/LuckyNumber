import React, { useState } from "react";
import styled from "./LuckyNumber.module.css";

const matchNum = Math.floor(Math.random("num") * 10);

export default function LuckyNumber() {
  const [num, setNum] = useState("");
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  function MatchNumber() {
    if (num === "") {
      alert("Please Enter The Number");
    } else if (matchNum > num) {
      alert("you guessed a smaller number");
      setCount(count + 1);
      setNum(" ");
    } else if (matchNum < num) {
      alert("you guessed a Greater number .");
      setCount(count + 1);
      setNum(" ");
    } else {
      setMsg(
        "Congratulations You Guessed the Right Number Match After Attempt :" +
          count
      );
      setNum(" ");
    }
  }
  return (
    <div>
      <h1> Lucky Number......</h1>

      <div className={styled.container}>
        <input
          type="text"
          value={num}
          placeholder="Please Enter The Number"
          onChange={(e) => setNum(e.target.value)}
        />

        <button onClick={MatchNumber} className={styled.btn}>
          Check Number
        </button>
      </div>
      <div>
        <h4>{msg}</h4>
      </div>
    </div>
  );
}
