import { IconOverview } from "@/constants/icons";
import { IconRepositories } from "@/constants/icons";
import { IconProjects } from "@/constants/icons";
import Link from "next/link";
import { NavbarProps } from "@/constants/types";

const Navbar = ({ username }: NavbarProps) => {
  return (
    <nav>
      <ul className="flex flex-row justify-start space-x-4 font-medium text-xs ml-52">
        <li>
          <Link
            href={`https://github.com/${username}`}
            className="buttonNavbar"
          >
            <IconOverview />
            <p className="ml-1">Overview</p>
          </Link>
        </li>
        <li>
          <Link
            href={`https://github.com/${username}?tab=repositories"`}
            className="buttonNavbar "
          >
            <IconRepositories />
            <p className="ml-1">Repositories</p>
          </Link>
        </li>
        <li>
          <Link
            href={`https://github.com/${username}?tab=projects"`}
            className="buttonNavbar "
          >
            <IconProjects />
            <p className="ml-1">Projects</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
