import { setDoc, doc } from "firebase/firestore";
import { db } from "../App";

export const setTempDoc = async (tempUser, tempID) => {
// console.log('setTempDoc > runs');
  await setDoc(doc(db, "users", tempID), tempUser);
};
