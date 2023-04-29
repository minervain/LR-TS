// import axios from 'axios';
// import './App.css';
// import { useEffect } from 'react';

// function App() {
//   const key="c682e073e2b6efc3fe94c33d1718ccf5"
//   useEffect(()=> {
// async function getUser() {
//   try{
//     const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}&units=metric`);
//     console.log(response)
//   }
//   catch(err){
//     console.error(err)
//   }
// }
// getUser();

//   },[])
  
//   return (
//     <div className="App">
//      mtb
//     </div>
//   );
// }

// export default App;
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./city";
function App() {
  const key = "c682e073e2b6efc3fe94c33d1718ccf5";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
        />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
