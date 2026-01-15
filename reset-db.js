
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import 'dotenv/config';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function resetearContadores() {
  console.log("🔄 Iniciando reseteo...");

  try {
    // 1. Resetear Estadísticas Globales
    console.log("Reseteando 'estadisticas/general'...");
    await setDoc(doc(db, "estadisticas", "general"), {
      visitas: 0,
      totalLikes: 0
    });

    // 2. Borrar todos los likes individuales de artículos
    console.log("Borrando colección de likes individuales...");
    const querySnapshot = await getDocs(collection(db, "likes"));
    const deletePromises = [];
    querySnapshot.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref));
    });
    await Promise.all(deletePromises);

    console.log("✅ ¡Todo reseteado a 0 exitosamente!");
  } catch (error) {
    console.error("❌ Error:", error);
  }
  process.exit();
}

resetearContadores();
