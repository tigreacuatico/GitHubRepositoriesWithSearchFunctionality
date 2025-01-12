"use client";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import Repository from "@/components/Repository";
import { RepositoryProps, RepositoryData } from "../../constants/types";
//import SearchBarProfile from "../../components/SearchBarProfile";
import Profile from "../../components/Profile";
import Gallery from "../../components/Gallery";

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
  const [organizations, setOrganizations] = useState<string[]>([
    // TODO: calc
    "test",
    "test2",
  ]);
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    async function getGithubData() {
      try {
        // First fetch
        const response1 = await fetch(
          `https://api.github.com/users/${username}`
        );
        const result = await response1.json();
        console.log(result);
        setImage(result.avatar_url);
        setName(result.name);
        setDescription(result.description);
        setUsernameStr(result.login);
        setEmail(result.email);
        setFollowers(result.followers);
        setFollowings(result.followings);
        setStars(0);

        // Second fetch (after the first one has completed)
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getGithubData();
  }, [username]);

  return (
    <div className="max-w-full max-h-full">
      <Navbar />
      <div className="flex flex-row">
        <Profile
          img={image}
          name={name}
          username={usernameStr}
          description={description}
          email={email}
          nFollowers={followers}
          nFollowings={followings}
          nStars={stars}
          imgOrganizations={organizations}
        />
        <div className="flex flex-col w-full">
          <Gallery options={repositories} />
        </div>
      </div>
    </div>
  );
}
//<SearchBarProfile />