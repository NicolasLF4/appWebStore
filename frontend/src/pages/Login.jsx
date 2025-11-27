import { useState } from "react";
import styles from '../styles/AuthModal.module.css';

export function LoginForm({ onSuccess, onClose, onSwitchToRegister }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        onSuccess?.(data);
        onClose?.();
        alert("Inicio de sesión exitoso");
      } else {
        setError(data.message || "Error al iniciar sesión");
      }
    } catch {
      setError("Error de conexión. Por favor, intenta de nuevo.");
    }
  };

  return (
    <>
      <h2 className={styles["modal-title"]}>Iniciar Sesión</h2>
      
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        {error && <div className={styles["error-message"]}>{error}</div>}
        
        <div className={styles["input-group"]}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles["form-input"]}
          />
        </div>

        <div className={styles["input-group"]}>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles["form-input"]}
          />
        </div>

        <button type="submit" className={styles["submit-button"]}>
          Entrar
        </button>
      </form>

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

export default function Login() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <p>La funcionalidad de inicio de sesión está en desarrollo.</p>
    </div>
  );
}
