import {setDoc, collection} from 'firebase/firestore'
import { db } from '../App';

export const setTempDoc = async (tempUser,tempID) => {
    const userRef = await setDoc(collection(db, "users", tempID ), tempUser);
    //Current user ID
       console.log("start ID: ", userRef.id);
    console.log("timeStart: ", userRef.timeStart);
    console.log("timestamp: ", userRef.timestamp);

  }

