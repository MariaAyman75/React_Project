// import React from 'react';
// import { Link } from 'react-router-dom';
// import './header.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './header.css'

// const Header = () => {

//   return (
//     <nav>
//       <h1><Link to={"/"}>Movie App</Link></h1>
//       <ul>
//         <li><Link to={"/watch_list"}>Watch list</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHeart} from 'react-icons/fa'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { useContext } from "react";
// // import { LanguageContext } from "../../context/languagecontext";
// import LanguageSwitcher from '../langageswitcher';
// import './header.css';

// const Header = () => {
//   // const { language, switchLanguage } = useContext(LanguageContext);
//   // const {language,setLanguage} = useContext(LanguageContext)

//   // function changeLang () {
//   //   setLanguage(language==="En"?"Ar":"En")
//   // }

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <h1 className="navbar-brand">
//           <Link to={"/"}>Movie App</Link>
//         </h1>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to={"/watch_list"} className="nav-link">
//               <FaHeart style={{ marginRight: '8px', color: 'black' }} /> {/* Heart Icon */}
//               Watchlist
//             </Link>
//           </li>
//           {/* <li className="nav-item">
//             <FaGlobe style={{ marginRight: '8px', color: 'black', cursor: 'pointer' }} onClick={() => switchLanguage(language === 'en' ? 'fr' : 'en')} />
            
//             {language === 'en' ? 'EN' : 'FR'}
//           </li> */}
//         </ul>
//         <LanguageSwitcher />
//       </div>
//     </nav>
//   );
// };

// export default Header;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaFilm } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import languageContext from "../../context/languagecontext";
import './header.css';

const Header = () => {
  const {language, setLanguage} = useContext(languageContext)
  return (
    <nav className="header-container">
      <div className="header-logo">
        <FaFilm style={{ fontSize: '33px' }}/>
        <h1 className="navbar-brand">
          <Link to={"/"}>Moviester</Link>
        </h1>
      </div>
      <div className="header-right">
      <span style={{cursor: "pointer"}} className="p-2 mx-3" onClick={()=>setLanguage(language === "en" ? "ar" : "en")}>{language}</span>
        <div className="watchlist-container">
          <Link to={"/watch_list"} className="nav-link">
            <FaHeart style={{ marginRight: '8px', color: 'black' }} />
            Watchlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;



