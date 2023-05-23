import { UserCard } from "./UserCard";
import "./App.css";
function App() {
  const users = [
    {
      isPremium: true,
      nome: "Valeria",
      idade: "19 Anos",
      cidade: "Sao paulo"
    },
    {
      isPremium: false,
      nome: "Gabriel",
      idade: "22 Anos",
      cidade: "Sao paulo"
    }
  ];

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.nome} user={user} />
      ))}
    </>
  );
}

export default App;
