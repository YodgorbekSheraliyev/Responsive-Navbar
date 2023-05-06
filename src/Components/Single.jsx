import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Single = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();
  let url = `https://restcountries.com/v3.1/name/${name}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data[0]);
    //   console.log(response.data[0]);
      console.log(url);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    // console.log(data.flags.png)
    <div className="card">
      <img src={data.flags.png} alt={data.flags.alt} />
      <h4>Country: {data.name.common}</h4>
      <p>Capital: {data.capital}</p>
      <span>Population: {data.population}</span>
      <br />
      <button>
        <NavLink to="/">Back</NavLink>
      </button>
    </div>
  
  );
};

export default Single;
