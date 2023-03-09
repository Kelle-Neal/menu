// import { useEffect } from 'react';
// import getData from '../../utilities/getData';
// import getLocalStorage from '../../utilities/localStorage';

// function BreakfastMenu() {
//   const ENDPOINT = 'BreakfastMenu';

//   useEffect(() => {
//     let data = getLocalStorage(ENDPOINT);
//     if (data.length > 0) {
//       BreakfastMenu(data);
//     } else {
//       getData(ENDPOINT)
//         .then((data) => {
//           BreakfastMenu(data);
//           getLocalStorage(ENDPOINT, data);
//         })
//     }
//   }, []);

// return (
//   <main className='container' style={{ padding: '1rem 0'}}>
//     <div className='row text-center justify-content-center gap-2'>
//       <h2>Breakfast</h2>
//       {BreakfastMenu.map((breakfast) => <Breakfast key={breakfast.id} breakfast={breakfast} />)}
//     </div>
//   </main>
// );
// }

// const Breakfast = ({ breakfast }) => {
//   return(
//     <div className='card col-3'>
//       <div className='card-body'>
//         {breakfast.title && <h2 className='card-title'>{breakfast.title}</h2>}
//         <div>Description {breakfast.description}</div>
//         <div>Price {breakfast.price}</div>
//       </div>
//     </div>
//   )
// }

// export default BreakfastMenu;