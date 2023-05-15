import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        // Redirigir al usuario a la página principal o de cursos aquí
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        // Redirigir al usuario a la página principal o de cursos aquí
        } catch (error) {
            console.error("Error al registrarse con correo electrónico:", error);
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        // Redirigir al usuario a la página principal o de cursos aquí
        } catch (error) {
            console.error("Error al iniciar sesión con correo electrónico:", error);
        }
    };

    return (
        <div>
            <h2>Inicia sesión o regístrate</h2>
            <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
            <form onSubmit={handleSignUp}>
                <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Registrarse</button>
            </form>
            <form onSubmit={handleSignIn}>
                <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default SignIn;
