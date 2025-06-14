import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";          
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPE-klUZlwbBR4vyXyRM5di3WXuXrNqh0",
  authDomain: "medguide-38383.firebaseapp.com",
  projectId: "medguide-38383",
  storageBucket: "medguide-38383.firebasestorage.app",
  messagingSenderId: "768647122924",
  appId: "1:768647122924:web:c86d7b6ce6ee83496ebac9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;