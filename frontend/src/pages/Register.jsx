// import { useState } from "react";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:3000/auth/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       alert("Usuario registrado correctamente");
//     } else {
//       alert(data.message || "Error al registrarse");
//     }
//   };

//   return (
//     <div>
//       <h1>Crear Cuenta</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Correo"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button>Registrarse</button>
//       </form>
//     </div>
//   );
// }

export default function Register() {
  return (
    <div>
      <h1>Pagina de Registro</h1>
      {/* Aqui puedes agregar el formulario de registro */}
    </div>
  );
}