// import React from 'react';
// import axios from 'axios';

// export default class MenuItems extends React.Component {
//   state = {
//     items: []
//   }

//   componentDidMount() {
//     axios.get('https://www.jsonkeeper.com/b/MDXW')
//       .then(res => {
//         const items = res.data;
//         this.setState({ items });
//       })
//   }
  
//   render() {
//     return(
//       <ul>
//         {
//           this.state.items
//             .map(item =>
//               <li key={item.id}>{item.title}</li>)
//         }
//       </ul>
//     )
//   }
// }

// ******************************************************

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Menu() {
//   const [data, setData] = useState({ hits: [] });

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios ('https://www.jsonkeeper.com/b/MDXW');

//     setData(result.data);
//     };
//   fetchData();
//  }, []);






//   return(
//     <ul>
//       {data.hits.map(item => (
//         <li key={item.id}>
//           <a href = {item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default Menu;