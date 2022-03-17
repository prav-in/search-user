import Navbar from "./components/Navbar";
import User from "./components/User";
import "./App.css";
import { useEffect, useState } from "react";

const USER_API = "https://randomuser.me/api/?results=15";

function App() {
  const [usersData, setUsersData] = useState([]);
  // const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    let fetchRes = fetch(USER_API);
    fetchRes
      .then((res) => res.json())
      .then((d) => {
        setUsersData(d.results);
        setFilteredUsers(d.results);
      });
  }, []);

  const handleFilter = (query) => {
    let filteredUsers = [...usersData];

    if (query !== "") {
      filteredUsers = filteredUsers.filter((u) =>
        `${u.name.title}${u.name.first}${u.name.last}`
          .toLowerCase()
          .includes(query.split(" ").join("").toLowerCase())
      );
    }

    setFilteredUsers(filteredUsers);
  };

  return (
    <div className="App">
      <Navbar handleFilter={handleFilter} />
      <main className="container">
        {filteredUsers.length ? (
          <div class="container__users">
            {filteredUsers.map((userData) => (
              <User key={userData.login.username} userData={userData} />
            ))}
          </div>
        ) : (
          "No Data Found"
        )}
      </main>
    </div>
  );
}

export default App;
