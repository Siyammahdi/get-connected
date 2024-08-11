"use client";
import { Input } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useState } from "react";

const Navigations = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <div className="flex">
      <div className="w-1/2 pr-3">
        <Input placeholder="Search volunteer opportunities" />
      </div>
      <div className="flex gap-3">
        <DateInput value={value} onChange={setValue} placeholder="Date input" />
        <Input placeholder="Location" />
        <Input placeholder="Number of volunteers" />
      </div>
    </div>
  );
};

export default Navigations;
