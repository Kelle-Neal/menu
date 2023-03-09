import React from 'react';
import NavBar from './components/Navbar/Nav';

// import { Link } from 'react-router-dom';
// import BreakfastMenu from './components/pages/breakfast';
// import Nav from './components/Navbar/Nav';
// import Nav from './components/Navbar/Nav';
// import GetAppetizers from './pages/appetizers';

function App() {
  // const [data, setData] = useState({ hits: [] });
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios ('https://www.jsonkeeper.com/b/MDXW');
//     console.log(result.data);  
//     setData(result.data);
//     };
//   fetchData();
//  }, []);

  return(
    <div>
      <NavBar />
      {/* <BreakfastMenu /> */}

    </div>  
  );
}

export default App;