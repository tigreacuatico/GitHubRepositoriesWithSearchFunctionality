"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

// TODO: join searchbar classes. refactor
const SearchBarProfile = () => {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  // Get repository data from Github user typed in the search bar.
  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const result = await res.json();
      console.log("Result fetching", result);
      // TODO: don't redirect if username doesn't exist in Github
      // If username exists, go to its profile page
      router.push(`/${username}`);
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
    <div className="">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBarProfile;
