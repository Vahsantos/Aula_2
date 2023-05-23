/* eslint-disable react/prop-types */
export function UserCard(props) {
  const user = props.user;
  return (
    <div className="card">
      <h1>{user.nome}</h1>
      <h1>{user.idade}</h1>
      <h1>{user.cidade}</h1>
      <h1>{user.isPremium ? "Premium" : "Free"}</h1>
    </div>
  );
}
