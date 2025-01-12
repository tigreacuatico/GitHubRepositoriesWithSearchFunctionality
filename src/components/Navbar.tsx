const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-start space-x-4 font-medium text-xs ml-52">
        <li>
          <a href="">Overview</a>
        </li>
        <li>
          <a href="">Repositories</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
