/* eslint-disable @next/next/no-img-element */
import { fetchProfileImage } from "@/utils/actions";

import React from "react";

import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage) {
    return (
      <img
        src={profileImage}
        className="size-6 rounded-full object-cover"
        alt="profile image"
      />
    );
  }
  return <LuUser2 className="size-6 rounded-full bg-primary text-white" />;
}

export default UserIcon;
