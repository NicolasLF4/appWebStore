import { useState, useImperativeHandle, forwardRef } from "react";
import styles from '../styles/AuthModal.module.css';
import { X } from 'lucide-react';
import { RegisterForm } from '../pages/Register';

// Componente que maneja la visualización del modal de registro
// isLogin: si es true, no muestra nada (usuario ya logueado)
// trigger: elemento personalizado que abre el modal
// onOpenLogin: función para abrir el modal de login
export const RegisterButtons = forwardRef(function RegisterButtons({ isLogin, trigger, onOpenLogin }, ref) {
  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abre el modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Expone la función de apertura mediante ref
  useImperativeHandle(ref, () => ({
    open: handleOpenModal
  }));

  // Cierra el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Función para cambiar al modal de login
  const handleSwitchToLogin = () => {
    handleCloseModal(); // Cierra el modal de registro
    if (onOpenLogin) {
      // Espera un momento para que el modal se cierre antes de abrir el otro
      setTimeout(() => {
        onOpenLogin();
      }, 300);
    }
  };

  // Callback que se ejecuta cuando el registro es exitoso
  const handleRegisterSuccess = (data) => {
    // Aquí puedes guardar datos en contexto, localStorage, etc.
    console.log("Registro exitoso:", data);
  };

  // Si el usuario ya está logueado, no muestra nada
  if (isLogin) {
    return <div></div>;
  }

  // Determina qué botón usar para abrir el modal
  // Si hay un trigger personalizado, lo usa; si no, usa el botón por defecto
  const triggerButton = trigger ? (
    <div onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
      {trigger}
    </div>
  ) : (
    <button onClick={handleOpenModal} className={styles["open-button"]}>
      Registrarse
    </button>
  );

  return (
    <>
      {/* Botón que abre el modal */}
      {triggerButton}

      {/* Renderiza el modal solo si está abierto */}
      {isModalOpen && (
        <div 
          className={styles["modal-overlay"]} 
          onClick={handleCloseModal} // Cierra al hacer clic fuera del modal
        >
          {/* Contenedor del modal - stopPropagation evita que se cierre al hacer clic dentro */}
          <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
            {/* Botón para cerrar el modal */}
            <button className={styles["close-button"]} onClick={handleCloseModal}>
              <X size={24} />
            </button>
            
            {/* Formulario de registro con la lógica del registro */}
            <RegisterForm 
              onSuccess={handleRegisterSuccess} 
              onClose={handleCloseModal}
              onSwitchToLogin={handleSwitchToLogin}
            />
          </div>
        </div>
      )}
    </>
  );
});

