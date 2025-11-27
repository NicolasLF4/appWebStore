import { useRef } from "react";
import { AuthButtons } from "./AuthButtons";
import { RegisterButtons } from "./RegisterButtons";

// Componente wrapper que maneja ambos modales (login y registro)
// Permite que los modales se comuniquen entre sí para cambiar de uno a otro
export function AuthModals({ isLogin, trigger }) {
  // Referencias a los componentes de modales
  const loginModalRef = useRef(null);
  const registerModalRef = useRef(null);

  // Función para abrir el modal de login
  const handleOpenLogin = () => {
    if (loginModalRef.current) {
      loginModalRef.current.open();
    }
  };

  // Función para abrir el modal de registro
  const handleOpenRegister = () => {
    if (registerModalRef.current) {
      registerModalRef.current.open();
    }
  };

  return (
    <>
      {/* Modal de login con referencia y función para abrir registro */}
      <AuthButtons 
        ref={loginModalRef}
        isLogin={isLogin}
        trigger={trigger}
        onOpenRegister={handleOpenRegister}
      />
      
      {/* Modal de registro con referencia y función para abrir login */}
      <RegisterButtons 
        ref={registerModalRef}
        isLogin={isLogin}
        onOpenLogin={handleOpenLogin}
      />
    </>
  );
}

