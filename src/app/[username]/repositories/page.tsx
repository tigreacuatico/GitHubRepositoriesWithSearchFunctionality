"use client";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { useState, useEffect } from "react";
import { RepositoryProps, RepositoryData } from "../../../constants/types";
import Profile from "../../../components/Profile";
import SearchArea from "@/components/SearchArea";

export default function ProfilePage() {
  const params = useParams();
  const { username } = params;
  const [usernameStr, setUsernameStr] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [followers, setFollowers] = useState<number>(0);
  const [followings, setFollowings] = useState<number>(0);
  const [stars, setStars] = useState<number>(0); // TODO: calculation. sum all stars repos
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [languageOptions, setLanguageOptions] = useState<string[]>([]);

  useEffect(() => {
    async function getGithubData() {
      try {
        // First fetch to get user profile data
        const response1 = await fetch(
          `https://api.github.com/users/${username}`
        );
        const result = await response1.json();

        setImage(result.avatar_url);
        setName(result.name);
        setDescription(result.description);
        setUsernameStr(result.login);
        setEmail(result.email);
        setFollowers(result.followers);
        setFollowings(result.following);
        setStars(0);

        // Second fetch to get user repositories data
        const response2 = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const result2 = await response2.json();
        const list = result2.map((repo: RepositoryData) => ({
          title: repo.name,
          description: repo.description,
          language: repo.language,
          lastUpdate: repo.updated_at,
          nForks: repo.forks,
          isStarred: false, // TODO:
        }));
        setRepositories(list);

        // Get all unique languages of all the repositories of the user to build options of dropdown filter Language
        const langsRepos: string[] = Array.from(
          new Set(
            list
              .map((repo: RepositoryData) => repo.language)
              .filter((value: string | null) => typeof value === "string")
          )
        );
        setLanguageOptions(langsRepos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getGithubData();
  }, [username]);

  return (
    <div className="max-w-full max-h-full">
      <Navbar username={usernameStr} />
      <hr className="h-px mb-4 mt-1 bg-gray-200 border-0" />
      <div className="flex flex-col md:flex-row">
        <Profile
          img={image}
          name={name}
          username={usernameStr}
          description={description}
          email={email}
          nFollowers={followers}
          nFollowings={followings}
          nStars={stars}
        />
        <SearchArea
          repositories={repositories}
          languageOptions={languageOptions}
        />
      </div>
    </div>
  );
}
