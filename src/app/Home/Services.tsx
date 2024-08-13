import { Card, Image, Text, Button, Alert } from "@mantine/core";
import { BsCalendar2Date, BsFillCalendar2DateFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { FaTree, FaUtensils, FaChild, FaCheck, FaHammer, FaBriefcase, FaClock, FaCalendarAlt, FaGlobe, FaHandshake, FaRegBuilding, FaFingerprint } from 'react-icons/fa';
import { FaRegHand } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { PiUsersThree } from "react-icons/pi";
import { LuClipboard, LuSun } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface VolunteerService {
  id: number;
  imageUrl: string;
  serviceName: string;
  companyName: string;
  address: string;
  date: string;
  keywords: string[];
}

const volunteerData: VolunteerService[] = [
  {
    id: 1,
    imageUrl: "/1.png",
    serviceName: "Help us cleanup our office",
    companyName: "Panting for Peace",
    address: "10 River Parkway, San Diego, CA92108",
    date: "July 15 from 8:00 am to 2:00 pm",
    keywords: ["Physical labour", "Community", "Family friendly", "Weekend", "One-time", "Outdoors"],
  },
  {
    id: 2,
    imageUrl: "/2.png",
    serviceName: "Food sorting and packing",
    companyName: "Galaxy County Food Bank",
    address: "2992 Riverside Dr, Asheville, NC28804",
    date: "Multiple shifts available",
    keywords: ["Food prep", "Basic needs", "Family friendly", "Weekdays", "Weekend", "Indors"],
  },
  {
    id: 3,
    imageUrl: "/3.png",
    serviceName: "Day camp counselors",
    companyName: "Nature Center Children's Program",
    address: "75 Gashes Creek Rd, Asheville, NC28805",
    date: "Multiple shifts available",
    keywords: ["Background Check", "Waiver Required", "Children & youth", "Long term", "Weekdays", "Outdoors"],
  },
  {
    id: 4,
    imageUrl: "/4.png",
    serviceName: "Voter registration volunteer",
    companyName: "Democracy AVL",
    address: "Downtown",
    date: "Multiple shifts available",
    keywords: ["Waiver Required", "Advocacy", "Political", "Weekdays", "Weekend", "Outdoors"],
  },
];

const keywordIcons: { [key: string]: React.ComponentType } = {
  'Physical labour': FaRegHand,
  'Community': FiGlobe,
  'Family friendly': PiUsersThree,
  'Weekend': BsCalendar2Date,
  'One-time': BsCalendar2Date,
  'Weekdays': BsCalendar2Date,
  'Outdoors': LuSun,
  'Food prep': AiOutlineShoppingCart,
  'Basic needs': FaBriefcase,
  'Indors': FaRegBuilding,
  'Background Check': FaFingerprint,
  'Waiver Required': LuClipboard,
  'Children & youth': FaChild,
  'Long term': FaCalendarAlt,
  'Advocacy': FaGlobe,
  'Political': FaHandshake,
};

const Services = () => {
  return (
    <div className="flex gap-6">
      <div className="w-4/6 grid grid-cols-1 md:grid-cols-1 gap-6">
        <Alert
          variant="light"
          color="blue"
          title="Help me find and opportunity"
        ></Alert>
        {volunteerData.map((service) => (
          <Card
            key={service.id}
            style={{ flexDirection: "row", padding: "0px" }}
            className="border shadow-md"
          >
            <div className="w-1/3">
              <Image
                className="h-full"
                src={service.imageUrl}
                alt={service.serviceName}
              />
            </div>
            <div className=" w-2/3 flex flex-col justify-center ml-4 text-gray-500">
              <div className="py-3">
                <h2 className="text-2xl font-semibold">
                  {service.serviceName}
                </h2>
                <p className="text-base font-semibold">
                  {service.companyName}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-blue-600 flex items-center gap-2 font-semibold">
                  <TiLocation /> {service.address}
                </p>
                <p className="text-xs  flex items-center gap-2 font-semibold">
                  <BsFillCalendar2DateFill />
                  {service.date}
                </p>
              </div>
              <div className="my-2 grid grid-cols-3">
                {service.keywords.map((keyword, index) => {
                  const Icon = keywordIcons[keyword] || FaCheck; // Default icon if no match
                  return (
                    <p key={index} className="text-xs font-semibold flex gap-1 items-center">
                      <Icon/> {keyword}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="">
              <Button className="m-4 px-5" radius={100}>
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div>
        <Image src="/map.png" alt="map" />
      </div>
    </div>
  );
};

export default Services;
