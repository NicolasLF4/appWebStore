// import { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:3000/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       login(data);
//     } else {
//       alert(data.message || "Error al iniciar sesión");
//     }
//   };

//   return (
//     <div>
//       <h1>Iniciar Sesión</h1>

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

//         <button>Entrar</button>
//       </form>
//     </div>
//   );
// }

export default function Login() {
  return (
    <div>
      <h1>Pagina de Registro</h1>
      {/* Aqui puedes agregar el formulario de registro */}
    </div>
  );
}