import { useState } from "react";
import styles from '../styles/AuthModal.module.css';

export function RegisterForm({ onSuccess, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      // Objeto con los datos que se enviarán al backend
      const registerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };

      // Console log para ver el objeto que se envía al backend
      console.log("Objeto enviado al backend:", registerData);

      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const data = await res.json();

      if (res.ok) {
        onSuccess?.(data);
        onClose?.();
        alert("Usuario registrado correctamente");
      } else {
        setError(data.message || "Error al registrarse");
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      setError("Error de conexión. Por favor, verifica que el servidor esté corriendo.");
    }
  };

  return (
    <>
      <h2 className={styles["modal-title"]}>Crear Cuenta</h2>
      
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        {error && <div className={styles["error-message"]}>{error}</div>}
        
        <div className={styles["input-group"]}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles["form-input"]}
          />
        </div>

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
            minLength={6}
          />
        </div>

        <div className={styles["input-group"]}>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={styles["form-input"]}
            minLength={6}
          />
        </div>

        <button type="submit" className={styles["submit-button"]}>
          Registrarse
        </button>
      </form>

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

export default function Register() {
  return (
    <div>
      <h1>Página de Registro</h1>
      <p>La funcionalidad de registro está en desarrollo.</p>
    </div>
  );
}
