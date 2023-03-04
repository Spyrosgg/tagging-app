import { db } from "../App";
import { doc, updateDoc } from "firebase/firestore";

export const addName = async ({name, currentID}) => {
    // console.log('addName > runs');
    const userRef = doc(db, "users", currentID);
    await updateDoc(userRef, {
        name: name
    });
};
