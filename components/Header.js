import Link from "next/link"
import { CONTACTS } from "./content"

const navs = [
  {
    href: "/",
    name: "Церковь",
    className: "nav-link scrollto active",
  },
  {
    href: "/about",
    name: "О нас",
    className: "nav-link scrollto active",
  },
  {
    href: "/mission",
    name: "Миссия",
    className: "nav-link scrollto active",
  },
  {
    href: "/posts",
    name: "Блог",
    className: "nav-link scrollto active",
  },
  {
    href: "/contacts",
    name: "Контакты",
    className: "nav-link scrollto active",
  },
]

const Header = () => {
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <Link href="/" className="logo">
            <img src="/assets/img/logo.png" alt="" className="img-fluid" />
          </Link>
          {/* Uncomment below if you prefer to use text as a logo */}
          {/* <h1 class="logo"><a href="index.html">Церковь</a></h1> */}
          <nav id="navbar" className="navbar">
            <ul>
              {navs.map((nav, item) => (
                <li>
                  <div className={nav.className}>
                    <Link href={nav.href}>{nav.name}</Link>
                  </div>
                </li>
              ))}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
            <Link
              href={CONTACTS.refWhatsApp}
              className="btn btn-info"
              // style={{ color: "#fff" }}
            >
              <div className="d-flex justify-items-center align-items-center lign-items-end">Связаться</div>
            </Link>
          </nav>
          {/* .navbar */}
        </div>
      </header>
      <div className="mt-20"></div>
      {/* End Header */}
    </>
  )
}
export default Header

// <li>
//               <a className="nav-link scrollto" href="#about">
//                 About
//               </a>
//             </li>
// <li>
//               <a className="nav-link scrollto" href="#about">
//                 About
//               </a>
//             </li>
//             <li>
//               <a className="nav-link scrollto" href="#services">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a className="nav-link scrollto " href="#portfolio">
//                 Portfolio
//               </a>
//             </li>
//             <li>
//               <a className="nav-link scrollto" href="#team">
//                 Team
//               </a>
//             </li>
//             <li className="dropdown">
//               <a href="#">
//                 <span>Drop Down</span> <i className="bi bi-chevron-down" />
//               </a>
//               <ul>
//                 <li>
//                   <a href="#">Drop Down 1</a>
//                 </li>
//                 <li className="dropdown">
//                   <a href="#">
//                     <span>Deep Drop Down</span> <i className="bi bi-chevron-right" />
//                   </a>
//                   <ul>
//                     <li>
//                       <a href="#">Deep Drop Down 1</a>
//                     </li>
//                     <li>
//                       <a href="#">Deep Drop Down 2</a>
//                     </li>
//                     <li>
//                       <a href="#">Deep Drop Down 3</a>
//                     </li>
//                     <li>
//                       <a href="#">Deep Drop Down 4</a>
//                     </li>
//                     <li>
//                       <a href="#">Deep Drop Down 5</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="#">Drop Down 2</a>
//                 </li>
//                 <li>
//                   <a href="#">Drop Down 3</a>
//                 </li>
//                 <li>
//                   <a href="#">Drop Down 4</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a className="nav-link scrollto" href="#contact">
//                 Contact
//               </a>
//             </li>
