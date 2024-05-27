// import { useState, useEffect } from "react";

// const Navbar = () => {
//     const [Satate,setState] = useState(10);
//     const clickHandler = () =>{
//         setState(Satate+5);
//     };

//     useEffect(() =>{
//     console.log("hello");
//     },[Satate]);



//   return (
//     <div>
//         <h1>{Satate}</h1>
//         <button onClick={clickHandler}
//          type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">IMCREMENT</button>
//     </div>
//   )
// }

// export default Navbar;


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex p-4">
        
        <li><Link className="px-3" to="/">Home</Link></li>
        
        <li><Link className="px-3" to="/About">About</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
