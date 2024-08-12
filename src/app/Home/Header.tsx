"use client";
import React from "react";
import { Avatar, Button, Image } from "@mantine/core";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Image radius="md" src="/logo.png" alt="logo" w={250} />
      </div>
      <h2 className="font-bold text-2xl">Galaxy Digital Serves</h2>
      <div className="flex">
        <Button className="" variant="filled" color="white" autoContrast >
          Volunteer!
        </Button>
        <Button variant="filled" color="white" autoContrast>
          My Schedule
        </Button>
        <Avatar variant="filled" radius="sm" src="" />
      </div>
    </div>
  );
};

export default Header;
