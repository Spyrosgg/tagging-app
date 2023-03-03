import { useState, useEffect } from "react";
import {
  collection,
  query,
  getDocs,
  orderBy,
  doc,
  addDoc,
  updateDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { StyledCenterDiv } from "../styles/styled_Center";

function Score({ db, users, setUsers }) {
  const usersCol = collection(db, "users");
  const q = query(usersCol, orderBy("timeStart"));
  // console.log("usersCol", usersCol);
  // console.log("q", q);

  useEffect(() => {
    const getUsers = async () => {
      console.log("async");
      const querySnapshot = await getDocs(q);
      const usersDb = querySnapshot.docs.map((usr) => {
        return {
          id: usr.id,
          name: usr.data().name,
          timeStart: usr.data().timeStart,
          timeEnd: usr.data().timeEnd,
        };
      });
      setUsers(usersDb);
      // console.log("usersDb", usersDb);
    };
    getUsers();
  }, []);

  return (
    <StyledCenterDiv>
      <div>
        <h1>Score</h1>
        <ol>
          {users &&
            users.map((usr) => {
              console.log("timesrat", usr.timeStart.seconds);
              console.log("timeEnd", usr.timeEnd);
              let scoreMin = 0;
              let scoreSec = 0;
              if (usr.timeEnd) {
                scoreSec = (usr.timeEnd.seconds - usr.timeStart.seconds) % 60;
                scoreMin =
                  (usr.timeEnd.seconds - usr.timeStart.seconds - scoreSec) / 60;
              }

              return (
                <li key={usr.id}>
                  {usr.name} {">"} {scoreMin}':{scoreSec}''
                </li>
              );
            })}
        </ol>
      </div>
    </StyledCenterDiv>
  );
}

export default Score;
