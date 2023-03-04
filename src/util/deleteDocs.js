import {
  collection,
  where,
  query,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { db } from "../App";

export const deleteTempo = async () => {
  const usersCol = collection(db, "users");
  const qDel = query(usersCol, where("name", "==", "Tempo"));
  const querySnapshot = await getDocs(qDel);

  // console.log("getDel", querySnapshot);
  
  const batch = writeBatch(db);
  querySnapshot.forEach((doc) => {
    console.log("doc", doc);
    batch.delete(doc.ref);
  });
  await batch.commit();
};
