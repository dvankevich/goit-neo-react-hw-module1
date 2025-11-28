import "./App.css";
import userData from "../userData.json";
import Profile from "./Profile/Profile";

function App() {
  return (
    <>
      <h1>goit-neo-react-hw-module1</h1>
      <h2>Завдання 1. Профіль соціальної мережі</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}

export default App;
