import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBuPvAGFTWGm7gWqFM86BKj_9ycw3utWzo",
  	authDomain: "smarten-5ba87.firebaseapp.com",
  	projectId: "smarten-5ba87",
  	storageBucket: "smarten-5ba87.appspot.com",
  	messagingSenderId: "242929772714",
  	appId: "1:242929772714:web:6a18f804a8c9946bd088d3",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
