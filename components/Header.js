import Link from "next/link";

const navs = [
  {
    href: "/",
    name: "Церковь",
    className: "btn btn-primary",
  },
  {
    href: "/about",
    name: "О нас",
    className: "btn btn-danger",
  },
  {
    href: "/mission",
    name: "Миссия",
    className: "btn btn-success",
  },
  {
    href: "/posts",
    name: "Блог",
    className: "btn btn-warning",
  },
  {
    href: "/contacts",
    name: "Контакты",
    className: "btn btn-secondary",
  },
];

const Header = () => {
  return (
    <>
     <header className="flex justify-content min-h-screen items-start">
      <div className="container">
        <div className="row">
          <div className="col-12">
           
              <ul>
                {navs.map((nav, item) => (
                  <li key={item}>
                    <Link href={nav.href}>
                      <div className={nav.className}>{nav.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
              
      <Link href='/'><div className='btn btn-primary'>Церковь</div></Link>
      <Link href='/about'><div className='btn btn-danger'>О нас</div></Link>
      <Link href='/mission'><div className='btn btn-success'>Миссия</div></Link>
      <Link href='/posts'><div className='btn btn-warning'>Блог</div></Link>
      <Link href='/contacts'><div className='btn btn-secondary'>Контакты</div></Link>

          </div>
        </div>
      </div>
      </header>
    </>
  );
};
export default Header;
