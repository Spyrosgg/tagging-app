import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import winter from "../lib/wheres-waldo-winter.jpg";
import summer from "../lib/wheres-waldo-summer.jpg";
import { winterData } from "../lib/chrs.coordinates";
import { YouFound, TryAgain, YouWon } from "../util/Notification";
import FireworksComp from "../util/fireworks";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { StyledCenterDiv } from "../styles/styled_Center";
import StopWatch from "../util/Stopwatch";
import { db } from "../App";
import { addTempDoc } from "../util/addDoc";
import { setTempDoc } from "../util/setDoc";
import shortid from "shortid";

function GameCard({ users, setUsers, setInGame, setIsPaused }) {
  const { id } = useParams();
  setInGame(true);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [onOff, setOnoff] = useState({ ta: false, yf: false });
  const [won, setWon] = useState(false);
  const [selectedChr, winDb, setWinDb] = useOutletContext();
  const [refID, setRefID] = useState('');

  useEffect(() => {
    const update = (e) => {
      let rect = e.target.getBoundingClientRect();
      //   console.log("rect", rect.height, rect.width);
      setX(((e.clientX - rect.left) / rect.width) * 1000); //x position within the element.
      setY(((e.clientY - rect.top) / rect.height) * 1000); //y position within the element.
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]); //#todo do not re render when getting coordinates

  //Start Timer
  // setRefID(shortid.generate())
  console.log('short',refID);

  useEffect(() => {
    setTempDoc({
      timeStart: Timestamp.fromDate(new Date()),
      timeEnd: null,
      timestamp: serverTimestamp(),
    }, refID);

    // addTempDoc({
    //   timeStart: Timestamp.fromDate(new Date()),
    //   timeEnd: null,
    //   timestamp: serverTimestamp(),
    // }, setRefID);


  }, []);


  async function setEnd() {
    const docRef = doc(db, "users", refID);

    await updateDoc(docRef, { timeEnd: Timestamp.fromDate(new Date()) });
    console.log("end ID: ", docRef.id);
  }

  function handleCheck(chr) {
    winterData.map((who) => {
      let { id, x1, y1, x2, y2 } = who;
      return (
        who.id === chr &&
        (x > x1 && y > y1 && x < x2 && y < y2
          ? checkIfWon(id)
          : handleTryAgain({ chr }))
      );
    });
  }

  function handleTryAgain({ chr }) {
    !winDb[chr] && setOnoff({ ...onOff, ta: true });
    setTimeout(() => setOnoff({ ...onOff, ta: false }), 800);
  }

  function checkIfWon(id) {
    console.log("id", winDb[id]);
    const newWinDb = { ...winDb, [id]: true };
    if (
      newWinDb.waldo &&
      newWinDb.woof &&
      newWinDb.wenda &&
      newWinDb.wizard &&
      newWinDb.odlaw
    ) {
      setWon(true);
      setIsPaused(true);
      console.log("youWonnn");
      setEnd();
    }

    console.log("onoff?", onOff);
    console.log("win?", newWinDb);
    setWinDb(newWinDb);
    //fire you found norification
    !winDb[id] && setOnoff({ ...onOff, yf: true });
    setTimeout(() => setOnoff({ ...onOff, yf: false }), 1200);
  }

  return (
    <>
      <div>
        {onOff.ta && <TryAgain info={selectedChr} />}
        {onOff.yf && <YouFound info={selectedChr} />}
        {won && <FireworksComp />}
        {/* <StopWatch /> */}
        <img
          src={id === "winter" ? winter : summer}
          alt="game card"
          onClick={() => handleCheck(selectedChr)}
        />
      </div>
      <div>{`x: ${x}; y: ${y};`}</div>
    </>
  );
}

function XY ({setX, setY}){

}
export default GameCard;
