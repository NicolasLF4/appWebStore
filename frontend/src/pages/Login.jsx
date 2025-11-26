import { useState } from "react";
import styles from '../styles/AuthModal.module.css';

// Componente que contiene toda la lógica del formulario de login
// Recibe callbacks para manejar el éxito del login y cerrar el modal
// onSwitchToRegister: función para cambiar al modal de registro
export function LoginForm({ onSuccess, onClose, onSwitchToRegister }) {
  // Estados para manejar los valores del formulario y errores
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Función que maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    setError(""); // Limpia errores previos

    try {
      // Realiza la petición POST al endpoint de login
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // Si la respuesta es exitosa, ejecuta los callbacks y muestra alerta
      if (res.ok) {
        if (onSuccess) {
          onSuccess(data); // Notifica al padre que el login fue exitoso
        }
        if (onClose) {
          onClose(); // Cierra el modal
        }
        alert("Inicio de sesión exitoso");
      } else {
        // Si hay error, muestra el mensaje del servidor
        setError(data.message || "Error al iniciar sesión");
      }
    } catch {
      // Maneja errores de conexión
      setError("Error de conexión. Por favor, intenta de nuevo.");
    }
  };

  return (
    <>
      {/* Título del modal */}
      <h2 className={styles["modal-title"]}>Iniciar Sesión</h2>
      
      {/* Formulario de login */}
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        {/* Muestra mensajes de error si existen */}
        {error && <div className={styles["error-message"]}>{error}</div>}
        
        {/* Campo de email */}
        <div className={styles["input-group"]}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles["form-input"]}
          />
        </div>

        {/* Campo de contraseña */}
        <div className={styles["input-group"]}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles["form-input"]}
          />
        </div>

        {/* Botón de envío */}
        <button type="submit" className={styles["submit-button"]}>
          Entrar
        </button>
      </form>

      {/* Pie del modal con enlace a registro */}
      <div className={styles["modal-footer"]}>
        <p>
          ¿No tienes cuenta?{" "}
          {onSwitchToRegister ? (
            <span 
              onClick={onSwitchToRegister} 
              className={styles["register-link"]}
              style={{ cursor: 'pointer' }}
            >
              Regístrate aquí
            </span>
          ) : (
            <a href="/register" className={styles["register-link"]}>
              Regístrate aquí
            </a>
          )}
        </p>
      </div>
    </>
  );
}

// Componente para la página completa (si se necesita)
export default function Login() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <p>La funcionalidad de inicio de sesión está en desarrollo.</p>
    </div>
  );
}
