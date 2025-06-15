import { Link } from "react-router-dom";
export default function Navbar() {
  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/faq", label: "FAQ" },
    { path: "/medguide", label: "Talk to MedGuide" },
  ];
  
  return (
    <nav className="container mt-5 mx-auto px-6 py-4 flex justify-between items-center bg-teal-600 rounded-lg">
      <div className="text-3xl font-bold text-white">MedGuide</div>
      <div className="space-x-6 text-white font-medium text-lg">
        {navItems.map(({ path, label }) => (
          <Link to={path} className="hover:text-black" key={path}>
          {label}
          </Link>
        ))}

        {/* {["/about", "Resources", "Tools", "FAQ", "Talk to MedGuide"].map((t) => (
          <Link to={t} className="hover:text-black">
            {t}
          </Link>
        ))} */}
      </div>
    </nav>
  );
}