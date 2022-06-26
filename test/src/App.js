import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "./redux/Actions/MenuAction";
import LeftSideBare from "./components/LeftSideBare/LeftSideBare";
import RightSideBare from "./components/RightSideBare/RightSideBare";
import Tournement from "./components/Tournement/Tournement";
import "./App.scss";

function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const API_URL = "https://sportsbook-api.teamasync.org/api";
  const fetchHeaders = {
    SiteId: 1,
    lang: "en",
    "Content-Type": "application/json",
  };
  const requestData = JSON.stringify({
    Interval: 5,
  });

  const fetchMenu = () => {
    fetch(`${API_URL}/prematch/menu`, {
      method: "POST",
      body: requestData,
      headers: fetchHeaders,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        dispatch(setMenu(JSON.parse(result)));
      })
      .catch((error) => {
        console.log("=>> error ", error);
      });
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="App">
      {data && (
        <>
          <LeftSideBare />
          <Tournement />
          <RightSideBare />
        </>
      )}
    </div>
  );
}

export default App;
