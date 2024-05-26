import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9_dw186w_ep1IcZNaLYwGa0nAtAY78GU",
    authDomain: "matheus-github-searcher.firebaseapp.com",
    projectId: "matheus-github-searcher",
    storageBucket: "matheus-github-searcher.appspot.com",
    messagingSenderId: "1057539620015",
    appId: "1:1057539620015:web:2ea349da578ff43fbf285a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const feedbacksCollection = collection(db, 'feedbacks');

export function submitFeedback(rating) {
    const feedbackData = {
      rate: rating
    };
    addDoc(feedbacksCollection, feedbackData);
}