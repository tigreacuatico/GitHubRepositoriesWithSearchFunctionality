import Image from "next/image";
import Button from "./Button";
import { ProfileProps } from "../constants/types";
import { IconEmail, IconStar, IconFollowers } from "@/constants/icons";

const Profile = ({
  img,
  name,
  description,
  username,
  nFollowers,
  nFollowings,
  nStars,
  email,
}: ProfileProps) => {
  return (
    <div className="flex flex-col">
      <Image
        src={img || "/loading.png"}
        width={200}
        height={200}
        alt={img}
        className="rounded-full mb-4"
        priority
      />
      <p className="font-bold text-md">{name}</p>
      <p className="text-[13px] text-gray-600">{username}</p>
      <p className="text-sm my-2">{description}</p>
      <Button
        label="Follow"
        onClick={() => console.log("Follow clicked")}
        size="md"
        icon={null}
        iconFirst={false}
      />
      <div className="flex flex-row text-[10px] text-gray-600 space-x-2 mt-2">
        <p>
          <IconFollowers />
          {nFollowers} followers ·
        </p>
        <p>{nFollowings} following ·</p>
        <p>
          <IconStar />
          {nStars}
        </p>
      </div>
      {}
      <p>
        <IconEmail />
        {email}
      </p>
      <hr className="h-px my-4 bg-gray-200 border-0" />
      <p className="font-bold text-xs">Organizations</p>
    </div>
  );
};

export default Profile;
