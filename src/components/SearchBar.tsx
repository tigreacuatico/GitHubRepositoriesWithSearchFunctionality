"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * A searchbar that performs REST calls to GitHub REST API
 *
 * @returns {JSX.Element}
 */

const SearchBar = () => {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();
  const [notFoundVisible, setNotFoundVisible] = useState<boolean>(false);

  // Search username typed in the searchbar in the API
  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);

      // Don't redirect to profile if username doesn't exist in Github, show error message
      if (!res.ok) {
        setNotFoundVisible(true);

        // Show error message during 3 seconds
        setTimeout(() => {
          setNotFoundVisible(false);
        }, 3000);
      } else {
        // If username exists, go to its profile page
        router.push(`/${username}/repositories`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        onKeyDown={handleKeyDown}
      />
      <div
        className={
          notFoundVisible
            ? "bg-red-200 p-1 w-2/3 text-lg md:text-xs rounded-lg mt-2 text-red-700"
            : "hidden"
        }
      >
        <p>Username does not exist. Please try again.</p>
      </div>
    </div>
  );
};

export default SearchBar;
