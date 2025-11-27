import { useState, useImperativeHandle, forwardRef } from "react";
import styles from '../styles/AuthModal.module.css';
import { X } from 'lucide-react';
import { RegisterForm } from '../pages/Register';

export const RegisterButtons = forwardRef(function RegisterButtons({ isLogin, trigger, onOpenLogin }, ref) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const abrirModal = () => setIsModalOpen(true);
  const cerrarModal = () => setIsModalOpen(false);

  useImperativeHandle(ref, () => ({ open: abrirModal }));

  const cambiarALogin = () => {
    cerrarModal();
    onOpenLogin && setTimeout(onOpenLogin, 300);
  };

  if (isLogin) return null;

  return (
    <>
      {trigger ? (
        <div onClick={abrirModal} style={{ cursor: 'pointer' }}>{trigger}</div>
      ) : (
        <button onClick={abrirModal} className={styles["open-button"]}>
          Registrarse
        </button>
      )}

      {isModalOpen && (
        <div className={styles["modal-overlay"]} onClick={cerrarModal}>
          <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
            <button className={styles["close-button"]} onClick={cerrarModal}>
              <X size={24} />
            </button>
            <RegisterForm 
              onSuccess={(data) => console.log("Registro exitoso:", data)} 
              onClose={cerrarModal}
              onSwitchToLogin={cambiarALogin}
            />
          </div>
        </div>
      )}
    </>
  );
});

