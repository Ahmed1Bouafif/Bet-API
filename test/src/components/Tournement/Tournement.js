import React, { useEffect, useState } from "react";
import "./Tournement.scss";
import { setBet } from "../../redux/Actions/MenuAction";
import { useSelector, useDispatch } from "react-redux";

const Tournement = () => {
  const tournements = useSelector((state) => state.tournement);
  const dispatch = useDispatch();

  const [data, setdata] = useState([]);

  const API_URL = "https://sportsbook-api.teamasync.org/api";

  const fetchHeaders = {
    SiteId: 1,
    lang: "en",
    "Content-Type": "application/json",
  };

  const fetchMenu = (index) => {
    let requestData = JSON.stringify({
      Id: index, // OutcomeId
      Ticket: [], // Tickets in your store
      Type: "O",
    });
    fetch(`${API_URL}/betslip`, {
      method: "POST",
      body: requestData,
      headers: fetchHeaders,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log("beeeeeeeeeeeeeeet", result);
        dispatch(setBet(JSON.parse(result)));
        // settickets([...tickets, JSON.parse(result)]);
      })
      .catch((error) => {
        console.log("=>> error ", error);
      });
  };
  // console.log(tickets);

  useEffect(() => {
    setTimeout(() => {
      setdata(tournements);
    }, 1000);
    console.log(data);
  }, [tournements, data]);

  if (!data.length) {
    return <h1>Choose Your Bets</h1>;
  } else {
    return (
      <div className="Tournement">
        <div className="Tournement-matches-heads">
          <p className="Tournement-matches-heads-numbers">1</p>
          <p className="Tournement-matches-heads-numbers">X</p>
          <p className="Tournement-matches-heads-numbers">2</p>
        </div>
        {tournements.map((e) =>
          e.Matches.map((u, i) => (
            <div key={i} className="Tournement-matches">
              <div className="Tournement-matches-gap">
                <div>
                  <p>
                    {String(new Date(u.Md)).split(" ")[2]} {String(new Date(u.Md)).split(" ")[1]}
                    <br />
                    {String(new Date(u.Md)).split(" ")[4].slice(0, 5)}
                  </p>
                </div>
                <div>
                  <p>
                    {u.Hn} <br />
                    {u.An}
                  </p>
                </div>
              </div>
              <div className="Tournement-matches-gap">
                {u.Markets[Object.keys(u.Markets)[0]].map((e, i) => (
                  <>
                    <button key={i} onClick={() => fetchMenu(Number(e.Id))} className="bet-choise">
                      {e.OddsValue}
                    </button>
                  </>
                ))}
                <p>+{u.C}</p>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
};

export default Tournement;
