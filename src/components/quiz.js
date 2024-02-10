import React, { useEffect, useState } from "react";
import { questions } from "../ques";
function Quiz() {
  const [ind, setind] = useState(1);
  const { question, choices, correctAnswer } = questions[ind];
  const [result, setr] = useState(false);
  const [score, setscore] = useState(0);
  const [correctans, setca] = useState(0);
  const [incorrectans, setica] = useState(0);
  const [answ, setans] = useState("");
  const [ansidx, setansidx] = useState(null);
  const answer = (ans, index) => {
    setansidx(index);
    setans(ans);
  };
  const submitques = (index) => {
    setansidx(null);
    if (index < 5) setind((prev) => prev + 1);
    else {
        setr(true);
    }
    if (answ === correctAnswer) {
      setscore(score + 5);
      setca(correctans + 1);
    } else {
      setica(incorrectans + 1);
    }
    setans("");
  }
  const notselected = ()=>{
    alert("You was not selected any option")
  }
  
  const backtointial=()=>{
    setr(false);
    setind(1);
    setscore(0);
    setca(0);
    setica(0);
  }


  return (
    <div>
      {!result && (
        <div className="container">
        <h1>React Quiz</h1>
        <div className="ques_box">
          <div className="ques_no">
            <span className="current_ques">{ind}</span>
            <span className="total_ques">/5</span>
          </div>
          <div className="ques_detail">{question}</div>
          <ul>
            {choices.map((op, index) => {
              return (
                <li
                  onClick={() => answer(op, index)}
                  className={
                    ansidx ===index ? "option_selected option" : "option"
                  }
                >
                  {op}
                </li>
              );
            })}
          </ul>
        </div>
        {answ && (
          <button onClick={() => submitques(ind)} className="btn">
            {ind === 5 ? "Finish" : "Next"}
          </button>)}

          {!answ && (
          <button className="notsel_option btn" onClick={notselected}>
            {ind === 5 ? "Finish" : "Next"}
          </button>)}
        </div>
      )}
      {result && (
        <div className="result_box">
    <h1>RESULT</h1>
    <div className="stats">
      <span>Total Questions :<span>5</span> </span>
      <span>Total Score :<span>{score}</span></span>
      <span> Correct Answers :<span>{correctans}</span></span>
      <span>Wrong Answers :<span>{incorrectans}</span> </span>
    </div>

      <button onClick={backtointial} className="btn try_btn" >Try Again</button>

  </div>
      )}
    </div>
  );
}

export default Quiz;
