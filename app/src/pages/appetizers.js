import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetAppetizers() {
  const [data, setData] = useState({ hits: [] });
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios ('https://www.jsonkeeper.com/b/MDXW');
    console.log(result.data);  
    setData(result.data);
    };
  fetchData();
 }, []);
  return(
    <ul>
      {data.map.filter((item) => 
        item.category.includes('Appetizer')).map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}




export default GetAppetizers;

















