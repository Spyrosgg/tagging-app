import { useState, useEffect, useRef } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import winter from "../lib/wheres-waldo-winter.jpg";
import summer from "../lib/wheres-waldo-summer.jpg";
import { winterData } from "../lib/chrs.coordinates";
import { YouFound, TryAgain } from "../util/Notification";
import FireworksComp from "../util/fireworks";
import {
  doc,
  updateDoc,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../App";
import { setTempDoc } from "../util/setDoc";
import shortid from "shortid";

function GameCard({ inGame, setInGame}) {
  console.log("GameCard > runs");
  const { id } = useParams();
  // const [x, setX] = useState();
  // const [y, setY] = useState();
  const [onOff, setOnoff] = useState({ ta: false, yf: false });
  const [won, setWon] = useState(false);
  const [selectedChr, winDb, setWinDb] = useOutletContext();
  const currentID = useRef("");

  const x = useRef(0);
  const y = useRef(0);

  useEffect(() => {
    setInGame("inGame");
    const update = (e) => {
      let rect = e.target.getBoundingClientRect();
      //   console.log("rect", rect.height, rect.width);
      x.current = ((e.clientX - rect.left) / rect.width) * 1000; //x position within the element.
      y.current = ((e.clientY - rect.top) / rect.height) * 1000; //y position within the element.
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [x, y]); //#todo do not re render when getting coordinates

  //Start Timer
  // setRefID(shortid.generate())

  useEffect(() => {
    currentID.current = shortid.generate();
    console.log("GeneratedID", currentID.current);
    setTempDoc(
      {
        name: "Tempo",
        timeStart: Timestamp.fromDate(new Date()),
        timeEnd: null,
        score: 10000,
      },
      currentID.current
    );

    // addTempDoc(
    //   {
    //     timeStart: Timestamp.fromDate(new Date()),
    //     timeEnd: null,
    //     timestamp: serverTimestamp(),
    //   });
  }, []);

  async function setEnd() {
    const docRef = doc(db, "users", currentID.current);

    await updateDoc(docRef, {
      timeEnd: Timestamp.fromDate(new Date()),
    });

    const docSnap = await getDoc(docRef);
    let scoreTemp =
      docSnap.data().timeEnd.seconds - docSnap.data().timeStart.seconds;
    await updateDoc(docRef, { score: scoreTemp });

    // const docSnap2 = await getDoc(docRef);
    // console.log("data", docSnap2.data());
  }

  function handleCheck(chr) {
    winterData.map((who) => {
      let { id, x1, y1, x2, y2 } = who;
      return (
        who.id === chr &&
        (x.current > x1 && y.current > y1 && x.current < x2 && y.current < y2
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
    // console.log("id", winDb[id]);
    const newWinDb = { ...winDb, [id]: true };
    if (
      newWinDb.waldo &&
      newWinDb.woof &&
      newWinDb.wenda &&
      newWinDb.wizard &&
      newWinDb.odlaw
    ) {
      setWon(true);
      console.log("youWonnn");
      setEnd();
    }

    // console.log("onoff?", onOff);
    // console.log("win?", newWinDb);
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
        {won && <FireworksComp currentID={currentID.current} />}
        {/* <StopWatch /> */}
        {/* <FireworksComp currentID={currentID} /> */}
        <img
          src={id === "winter" ? winter : summer}
          alt="game card"
          onClick={() => handleCheck(selectedChr)}
        />
      </div>
      <div>{`x: ${x.current}; y: ${y.current};`}</div>
    </>
  );
}

export default GameCard;
