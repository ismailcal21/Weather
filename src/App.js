import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

function App() {
  const key = "cd157387dceaf30a6befc278f61265c0";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric
          `
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);

  if (city === "") {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div>
        <div className="mb-3 pt-0">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Placeholder"
            className="px-3 w-[250px] py-3 placeholder-blue-300 text-blueGray-600 relative border-8 "
          />
        </div>
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
