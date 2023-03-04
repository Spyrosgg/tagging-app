import {addDoc, collection} from 'firebase/firestore'
import { db } from '../App';

export const addTempDoc = async (tempUser,setRefID) => {
    const userRef = await addDoc(collection(db, "users"), tempUser);
    //Current user ID
    setRefID(userRef.id);

    // console.log("start ID: ", userRef.id);
    // console.log("timeStart: ", userRef.timeStart);
    // console.log("timestamp: ", userRef.timestamp);

  }

