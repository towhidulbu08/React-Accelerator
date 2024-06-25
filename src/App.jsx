import Profile from "./components/Profile";
export default function App() {
  const person = "Tamim",
    size = 100,
    age = 26;

  return (
    <div>
      <Profile person={person} size={size} age={age} />
    </div>
  );
}
