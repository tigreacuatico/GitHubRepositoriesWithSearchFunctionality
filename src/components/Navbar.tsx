import { IconOverview } from "@/constants/icons";
import { IconRepositories } from "@/constants/icons";
import { IconProjects } from "@/constants/icons";
import Link from "next/link";
import { NavbarProps } from "@/constants/types";
import { useState } from "react";

const Navbar = ({ username }: NavbarProps) => {
  const [active, setActive] = useState<string>("Repositories");

  return (
    <nav className="relative">
      <ul className="flex flex-row justify-start space-x-4 font-medium text-xs ml-52 ">
        <li
          className={
            active === "Overview" ? "underline navActive" : "no-underline"
          }
        >
          <Link
            href={`https://github.com/${username}`}
            className="buttonNavbar "
            onClick={() => setActive("Overview")}
          >
            <IconOverview />
            <p className="ml-1">Overview</p>
          </Link>
        </li>
        <li
          className={
            active === "Repositories" ? "underline navActive" : "no-underline"
          }
        >
          <Link href={`/${username}/repositories`} className="buttonNavbar">
            <IconRepositories />
            <p className="ml-1">Repositories</p>
          </Link>
        </li>
        <li
          className={
            active === "Projects" ? "underline navActive" : "no-underline"
          }
        >
          <Link
            href={`https://github.com/${username}?tab=projects"`}
            className="buttonNavbar"
            onClick={() => setActive("Projects")}
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
