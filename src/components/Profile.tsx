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
    <div className="flex flex-col mb-8 w-1/5">
      <Image
        src={img || "/loading.png"}
        width={200}
        height={200}
        alt={img}
        className="rounded-full mb-4 w-16 h-fit md:w-48 md:h-fit mt-4 md:mt-0"
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
          <b className="text-black">{nFollowers}</b> followers ·
        </p>
        <p>
          <b className="text-black">{nFollowings}</b> following ·
        </p>
        <p>
          <IconStar />
          <b className="text-black">{nStars}</b>
        </p>
      </div>
      {email ? (
        <p className="text-[10px] mt-2">
          <IconEmail />
          {email}
        </p>
      ) : null}
      <hr className="h-px my-4 bg-gray-200 border-0" />
      <p className="font-bold text-xs">Organizations</p>
    </div>
  );
};

export default Profile;
