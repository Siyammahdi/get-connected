import { Select } from "@mantine/core";
import React from "react";

const Selectors = () => {
  return (
    <div>
      <div className="flex gap-3 w-2/3">
        <Select
          placeholder="Sort by"
          data={["Name", "Type", "Date", "Opportunity"]}
        />
        <Select
          placeholder="Day of the week"
          data={["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday", "Weekdays", "Weekend"]}
        />
        <Select
          placeholder="Time"
          data={["Morning", "Afternoon", "Evening"]}
        />
        <Select
          placeholder="Cause"
          data={["Name", "Type", "Date", "Opportunities"]}
        />
        <Select
          placeholder="Age range"
          data={["Name", "Type", "Date", "Opportunities"]}
        />
        <Select
          placeholder="Events"
          data={["9/11 Day of service", "Holidays 2024", "MLK Day 2025"]}
        />
        <Select
          placeholder="More filters"
          data={["Allows groups", "Family friendly", "Indoors", "Ourdoors", "Virtual/Remote", "Wheelchair accessable"]}
        />
      </div>
    </div>
  );
};

export default Selectors;
