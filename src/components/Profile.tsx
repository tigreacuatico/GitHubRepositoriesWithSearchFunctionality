import Image from "next/image";
import Button from "./Button";
import { ProfileProps } from "../constants/types";

const Profile = (props: ProfileProps) => {
  return (
    <div className="flex flex-col">
      <Image
        src={props.img || "/loading.png"}
        width={200}
        height={200}
        alt={props.img}
        className="rounded-full my-4"
      />
      <p className="font-bold text-md">{props.name}</p>
      <p className="text-[13px] text-gray-600">{props.username}</p>
      <p className="text-sm">{props.description}</p>
      <Button
        label="Follow"
        onClick={() => console.log("Follow clicked")}
        size="md"
        icon="/loading.png"
      />
      <div className="flex flex-row text-[10px] text-gray-600 space-x-2">
        <p>{props.nFollowers} followers ·</p>
        <p>{props.nFollowings} following ·</p>
        <p>{props.nStars}</p>
      </div>
      <p>{props.email}</p>
      <hr className="h-px my-4 bg-gray-200 border-0" />
      <p className="font-bold text-xs">Organizations</p>
    </div>
  );
};

export default Profile;
