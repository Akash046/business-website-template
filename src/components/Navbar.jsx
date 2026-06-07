function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] glass rounded-2xl z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold gradient-text">
          BusinessPro
        </h1>

        <ul className="flex gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;