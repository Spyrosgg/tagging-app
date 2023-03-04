import { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { StyledCenterDiv } from "../styles/styled_Center";
import { deleteTempo } from "../util/deleteDocs";
import styled from "styled-components";

function Score({ db, users, setUsers, setInGame }) {
  // console.log("Score > runs");
  deleteTempo();

  const usersCol = collection(db, "users");
  const q = query(usersCol, orderBy("score"));

  useEffect(() => {
    setInGame("inScore");
    const getUsers = async () => {
      const querySnapshot = await getDocs(q);
      const usersDb = querySnapshot.docs.map((usr) => {
        return {
          id: usr.id,
          name: usr.data().name,
          timeStart: usr.data().timeStart,
          timeEnd: usr.data().timeEnd,
          score: usr.data().score,
          season: usr.data().season,
        };
      });
      setUsers(usersDb);
      // console.log("usersDb", usersDb);
    };
    getUsers();
  }, []);

  let i = 0;
  return (
    <StyledCenterDiv1>
      <h1>Score</h1>
      <StyledTable>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Season</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((usr) => {
              // console.log("timesrat", usr.timeStart.seconds);
              // console.log("timeEnd", usr.timeEnd);
              // let scoreMin = 0;
              // let scoreSec = 0;
              // if (usr.timeEnd) {
              //   scoreSec = usr.score % 60;
              //   scoreMin = usr.score / 60;
              // }
              console.log("usr", usr);
              i++;
              return (
                <>
                  <tr>
                    <td>{i}.</td>
                    <td>{usr.name}</td>
                    <td>{usr.season}</td>
                    <td>{usr.score} sec</td>
                  </tr>
                  {/* <li key={usr.id}>
                      {usr.name} {">"} {usr.score} sec
                      [[{usr.name} {">"} {scoreMin}':{scoreSec}'' {usr.score}]]
                    </li> */}
                </>
              );
            })}
        </tbody>
      </StyledTable>
    </StyledCenterDiv1>
  );
}

const StyledCenterDiv1 = styled(StyledCenterDiv)`
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  > * {
    margin: 0;
    text-align: left;
  }
`;
const StyledOl = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > * {
    /* margin-left: 10px; */
  }
`;
const StyledTable = styled.table`
  table-layout: fixed;
  width: 50%;
  border-collapse: collapse;

  thead tr {
    background-color: #3b4252;
  }
  tbody tr:nth-child(even) > * {
    background-color: #3b4252;
  }



  th,
  td {
    padding: 10px;
  }
  tbody td {
    text-align: left;
  }
`;

export default Score;
