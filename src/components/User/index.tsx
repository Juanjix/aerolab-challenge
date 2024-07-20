// "use client";

// import { useEffect, useState } from "react";

// // import { getUser } from "@/app/actions";

// import { User } from "@/types";

// export default function UserComponent() {
//   const [user, setUser] = useState<User | null>(null);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     getUser()
//       .then((data) => setUser(data))
//       .catch((err) => setError(err));
//   }, []);

//   if (error) return <div>Error: {error.message}</div>;
//   if (!user) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Usuario: {user.name}</h1>
//       <p>Puntos: {user.points}</p>
//     </div>
//   );
// }
