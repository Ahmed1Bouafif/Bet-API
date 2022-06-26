import React, { useState, useLayoutEffect } from "react";
import "./RightSideBare.scss";
import { useSelector } from "react-redux";

import { faToggleOn, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RightSideBare = () => {
  const bets = useSelector((state) => state.bet);

  const [tickets, settickets] = useState([]);
  // useLayoutEffect(() => {
  //   settickets(bets);
  // }, []);
  useLayoutEffect(() => {
    // settickets(bets);
    setTimeout(() => {
      // if (tickets.length) {
      settickets(bets);
      // }
    }, 1000);
    console.log(tickets);
  }, [bets, tickets]);
  return (
    <div className="Right__SideBare">
      <div className="Right__SideBare-ticket Right__SideBare-ticket-dotted">
        <p className="Right__SideBare-ticket-header">
          Tickets <span className="Right__SideBare-ticket-header-count">4</span>
        </p>
        <div className="Right__SideBare-buttons">
          <button className="Right__SideBare-buttons-row">Single</button>
          <button className="Right__SideBare-buttons-row">System</button>
        </div>
        <div className="Right__SideBare-allBets">
          {tickets.map((e, i) => (
            <div key={i} className="Right__SideBare-oneBet">
              <p>{e.Matches[0].Teams}</p>
              <div className="Right__SideBare-oneBet-buttonGap">
                <button className="Right__SideBare-betOdd">{e.Header.MaxOveralOdds}</button>
                <FontAwesomeIcon onClick={() => settickets(tickets.splice(i, 1))} icon={faTimes} style={{ color: "grey" }} />
              </div>
            </div>
          ))}
        </div>
        <p className="clear">Clear ticket</p>
      </div>
      <div className="Right__SideBare-ticket">
        <p className="bet__header">
          Total Odd : <span className="bet__header-odds">{tickets.reduce((accumulator, current) => accumulator * current.Header.MaxOveralOdds, 1).toFixed(2)}</span>
        </p>
        <div className="Right__SideBare-ticket-bet">
          <p>
            Bet <br /> <span className="bet__header-min">min: 1 EUR</span>
          </p>
          {/* <span class="input-symbol-euro"> */}
          <input type="text" />
          {/* </span> */}
        </div>
        <div className="Right__SideBare-ticket-bet-submit">
          <button className="Right__SideBare-ticket-bet-submit-button">
            <p>
              PLACE BET <br /> <span>Potencial Win: 80 EUR</span>{" "}
            </p>
          </button>
          <div className="Right__SideBare-ticket-bet-submit-check">
            <FontAwesomeIcon icon={faToggleOn} className="check" />
            <p>Accept all bets changes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBare;
