import { useState } from "react";
import styles from '../styles/AuthModal.module.css';

// Componente que contiene toda la lógica del formulario de registro
// Recibe callbacks para manejar el éxito del registro y cerrar el modal
// onSwitchToLogin: función para cambiar al modal de login
export function RegisterForm({ onSuccess, onClose, onSwitchToLogin }) {
  // Estados para manejar los valores del formulario y errores
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Función que maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    setError(""); // Limpia errores previos

    // Validación: verifica que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Validación: verifica que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      // Realiza la petición POST al endpoint de registro
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      // Si la respuesta es exitosa, ejecuta los callbacks y muestra alerta
      if (res.ok) {
        if (onSuccess) {
          onSuccess(data); // Notifica al padre que el registro fue exitoso
        }
        if (onClose) {
          onClose(); // Cierra el modal
        }
        alert("Usuario registrado correctamente");
      } else {
        // Si hay error, muestra el mensaje del servidor
        setError(data.message || "Error al registrarse");
      }
    } catch {
      // Maneja errores de conexión
      setError("Error de conexión. Por favor, intenta de nuevo.");
    }
  };

  return (
    <>
      {/* Título del modal */}
      <h2 className={styles["modal-title"]}>Crear Cuenta</h2>
      
      {/* Formulario de registro */}
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        {/* Muestra mensajes de error si existen */}
        {error && <div className={styles["error-message"]}>{error}</div>}
        
        {/* Campo de nombre */}
        <div className={styles["input-group"]}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles["form-input"]}
          />
        </div>

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
            minLength={6}
          />
        </div>

        {/* Campo de confirmación de contraseña */}
        <div className={styles["input-group"]}>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={styles["form-input"]}
            minLength={6}
          />
        </div>

        {/* Botón de envío */}
        <button type="submit" className={styles["submit-button"]}>
          Registrarse
        </button>
      </form>

      {/* Pie del modal con enlace a login */}
      <div className={styles["modal-footer"]}>
        <p>
          ¿Ya tienes cuenta?{" "}
          {onSwitchToLogin ? (
            <span 
              onClick={onSwitchToLogin} 
              className={styles["register-link"]}
              style={{ cursor: 'pointer' }}
            >
              Inicia sesión aquí
            </span>
          ) : (
            <a href="/login" className={styles["register-link"]}>
              Inicia sesión aquí
            </a>
          )}
        </p>
      </div>
    </>
  );
}

// Componente para la página completa de registro
export default function Register() {
  return (
    <div>
      <h1>Página de Registro</h1>
      <p>La funcionalidad de registro está en desarrollo.</p>
    </div>
  );
}
