const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-500">
    <div className="max-w-6xl mx-auto px-3 py-2 sm:px-4 sm:py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-gray-100 transition-colors duration-300">
      Idoteyin Ubaha
      </h1>
      <ul className="flex gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
        {["Projects", "About", "Skills", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;


// const Navbar = () => (
//   <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-500">
//     <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
//       <h1 className="font-bold text-xl">YourName</h1>
//       <ul className="flex gap-6 text-sm font-medium">
//         <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
//         <li><a href="#about" className="hover:text-blue-600">About</a></li>
//         <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
//         <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
//       </ul>
//     </div>
//   </nav>
// );
// export default Navbar;
