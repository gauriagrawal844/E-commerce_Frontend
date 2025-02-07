import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return(
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src="https://logo-variant.algo.design.vpsvc.com/67931d4357aa555cfe21d61b?sign=7ae2b141f6b00edc8e11b65a3620ee9d482d8ad87f02cd9fe601354d3613a23d&backgroundMode=TRANSPARENT&type=PNG&width=2000" 
        className='w-24'
         alt=""/>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1 '>
          <p>HOME</p>
          <hr className='w-2/4  border-none h-[1.5px] bg-gray-700' hidden />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
          <p>COLLECTION</p>
          <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
          <p>CONTACT</p>
          <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>
      <div className='flex items-center gap-6 '>
        <img src='https://www.svgrepo.com/show/447779/search.svg' className='w-5 cursor-pointer' alt=""/>
        <div className='group relative'>
          <img className='w-5 cursor-pointer' 
          src='https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg' 
          alt=""/>
          <div className='group-hover:block hidden absolute  dropdown-menu  right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout </p>
            </div> 
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src='https://i.pinimg.com/736x/65/d6/dd/65d6ddc76d5ddbf5788ba76205b8bec0.jpg' 
          className='w-5 min-w-5' alt=""/>
          <p className='absolute right-[-5px] bottom-[-5px]  w-4  text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            10
          </p>
        </Link>
        <img onClick={()=>setVisible(true)}
        src='https://www.iconbolt.com/preview/facebook/dripicons/menu.svg'
          className='w-5 cursor-pointer sm:hidden' alt=""/>
      </div>
      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} 
            className='flex items-center gap-4 p-3'> 
              <img className='h-4 rotate-180' 
              src='https://cdn2.iconfinder.com/data/icons/arrows-part-1/32/tiny-arrow-right-2-512.png' 
              alt='' />
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'> COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            {/* on click here set false because when we open another page the sidebar will automatically close */}
          </div>
      </div>
    </div>
  )
}
export default Navbar;


// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [showSignOut, setShowSignOut] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   let timeoutId;

//   useEffect(() => {
//     const fetchedUser = {
//       name: "John Doe",
//       role: "admin",
//     };

//     setUser(fetchedUser);
//     setIsAuthenticated(true);
//   }, []);

//   const navigate = useNavigate();

//   const handleMouseEnter = () => {
//     setShowSignOut(true);
//     clearTimeout(timeoutId);
//   };

//   const handleMouseLeave = () => {
//     timeoutId = setTimeout(() => {
//       setShowSignOut(false);
//     }, 3000);
//   };

//   const { pathname } = useLocation();
//   const isSelected = (path) => path === pathname;

//   const [links, setLinks] = useState([
//     { to: "#", text: "Home" },
//     { to: "/#", text: "Our Services" },
//     { to: "/#", text: "About" },
//     { to: "/#", text: "Contact" },
//   ]);

//   const handleLoginAndLogout = () => {
//     if (isAuthenticated) {
//       setIsAuthenticated(false);
//       setUser(null);
//     } else {
//       navigate("/signup");
//     }
//   };

//   const handleSearch = () => {
//     if (searchQuery) {
//       // Perform the search (you can replace this with actual search logic)
//       console.log("Searching for:", searchQuery);
//     }
//   };

//   const handleClearSearch = () => {
//     setSearchQuery("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <nav className="bg-white">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="absolute -inset-0.5"></span>
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="block h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               <img
//                 className="h-10 w-10 rounded-full"
//                 src="https://logo-variant.algo.design.vpsvc.com/67931d4357aa555cfe21d61b?sign=7ae2b141f6b00edc8e11b65a3620ee9d482d8ad87f02cd9fe601354d3613a23d&backgroundMode=TRANSPARENT&type=PNG&width=2000"
//                 alt="Your Company"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {links.map(({ to, text }) => (
//                   <Link
//                     key={to}
//                     to={to}
//                     className={`rounded-md px-3 py-2 text-sm font-medium ${
//                       isSelected(to)
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-800 hover:bg-gray-700 hover:text-white"
//                     }`}
//                   >
//                     {text}
//                   </Link>
//                 ))}

//                 {/* Search Bar Added Here */}
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     onKeyDown={handleKeyPress}
//                     placeholder="Search..."
//                     className="rounded-md px-3 py-2 text-sm text-gray-800 border border-gray-300 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   />
//                   {searchQuery && (
//                     <button
//                       onClick={handleClearSearch}
//                       className="absolute right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-4 h-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   )}
//                   <button
//                     onClick={handleSearch}
//                     className="absolute right-0 top-0 mt-2 mr-10 text-gray-500 hover:text-gray-700"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-4 h-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <div
//               className="relative ml-3"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 type="button"
//                 className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 id="user-menu-button"
//                 aria-expanded="false"
//                 aria-haspopup="true"
//               >
//                 <img
//                   className="h-8 w-8 rounded-full"
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 />
//               </button>
//               {showSignOut && (
//                 <div
//                   className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="user-menu-button"
//                   tabIndex="-1"
//                 >
//                   <button
//                     onClick={handleLoginAndLogout}
//                     className="block px-4 py-2 text-sm text-gray-700"
//                     role="menuitem"
//                     tabIndex="-1"
//                     id="user-menu-item-2"
//                   >
//                     {isAuthenticated ? (
//                       <div className="flex flex-row items-center">
//                         <svg
//                           className="mr-2 w-4 h-4"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                           />
//                         </svg>
//                         <span>Sign out</span>
//                       </div>
//                     ) : (
//                       <div className="flex flex-row items-center">
//                         <svg
//                           className="mr-2 w-4 h-4"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                           />
//                         </svg>
//                         <span>Sign in</span>
//                       </div>
//                     )}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
