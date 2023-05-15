import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBt-lwDGGn8uwAfr7uJZwc91JRUT1Fc4NQ",
    authDomain: "taurina-nails.firebaseapp.com",
    projectId: "taurina-nails",
    storageBucket: "taurina-nails.appspot.com",
    messagingSenderId: "1093868238024",
    appId: "1:1093868238024:web:d918c13748413367e4e1fd",
    measurementId: "G-YYNWJQRJV0",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const turnosCollection = db.collection("turnos");

const cursosCollection = db.collection("Cursos");


export const getTurnosByDate = async (dateString) => {
    const q = turnosCollection.where("fecha", "==", dateString);
    const querySnapshot = await q.get();
    return querySnapshot;
};

export const addTurno = async (turno) => {
    try {
        await turnosCollection.add(turno);
        console.log("Turno agregado correctamente.");
    } catch (error) {
        console.error("Error al agregar el turno:", error);
    }
};

export const agregarCursos = async () => {
    const cursos = [{
        titulo: "Taller práctico de esmaltado semipermanente",
        descripcion: "Descripción del curso 1",
        precio: 1000,
        urlsVideos: "https://www.youtube.com/watch?v=kzG8AgSSyFw",
    },
    {
        titulo: "Taller práctico de extensiones soft gel",
        descripcion: "Curso Taurina",
        precio: 1000,
        urlsVideos: "https://www.youtube.com/watch?v=kzG8AgSSyFw",
    },
    {
        titulo: "Inicial en esmaltado semipermanente y soft gel",
        descripcion: "Curso Taurina",
        precio: 1000,
        urlsVideos: "https://www.youtube.com/watch?v=kzG8AgSSyFw",
    },
    {
        titulo: "Inicial de esculpidas en polygel",
        descripcion: "Descripción del curso 2",
        precio: 1000,
        urlsVideos: "https://www.youtube.com/watch?v=kzG8AgSSyFw",
    },
    ];

    for (const curso of cursos) {
        try {
            await cursosCollection.add(curso);
            console.log("Curso agregado correctamente.");
        } catch (error) {
            console.error("Error al agregar el curso:", error);
        }
    }
};

export default db;