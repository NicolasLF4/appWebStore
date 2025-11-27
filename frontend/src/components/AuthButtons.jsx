import { useState, useImperativeHandle, forwardRef } from "react";
import styles from '../styles/AuthModal.module.css';
import { X } from 'lucide-react';
import { LoginForm } from '../pages/Login';

export const AuthButtons = forwardRef(function AuthButtons({ isLogin, trigger, onOpenRegister }, ref) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useImperativeHandle(ref, () => ({
    open: handleOpenModal
  }));

  const handleSwitchToRegister = () => {
    handleCloseModal();
    if (onOpenRegister) {
      setTimeout(() => onOpenRegister(), 300);
    }
  };

  const handleLoginSuccess = (data) => {
    console.log("Login exitoso:", data);
  };

  if (isLogin) return null;

  const triggerButton = trigger ? (
    <div onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
      {trigger}
    </div>
  ) : (
    <button onClick={handleOpenModal} className={styles["open-button"]}>
      Iniciar Sesión
    </button>
  );

  return (
    <>
      {triggerButton}

      {isModalOpen && (
        <div 
          className={styles["modal-overlay"]} 
          onClick={handleCloseModal}
        >
          <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
            <button className={styles["close-button"]} onClick={handleCloseModal}>
              <X size={24} />
            </button>
            
            <LoginForm 
              onSuccess={handleLoginSuccess} 
              onClose={handleCloseModal}
              onSwitchToRegister={handleSwitchToRegister}
            />
          </div>
        </div>
      )}
    </>
  );
});
