import { Card, Image, Text, Button, Badge, Alert } from "@mantine/core";

const Services = () => {
  return (
    <div className="flex gap-6">
      <div className="w-3/5 grid grid-cols-1 md:grid-cols-1 gap-6">
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
              <Image className="h-full" src={service.imageUrl} alt={service.serviceName} />
            </div>
            <div className=" w-2/3 flex flex-col justify-center ml-4">
              <h2 className="text-lg font-bold">{service.serviceName}</h2>
              <p className="text-sm text-gray-500">{service.companyName}</p>
              <p className="text-sm text-blue-500">{service.address}</p>
              <p className="text-sm text-gray-500">{service.date}</p>
              <div className="mt-2">
                {service.keywords.map((keyword, index) => (
                  <Badge key={index} className="mr-2 mb-2">
                    {keyword}
                  </Badge>
                ))}
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

const volunteerData = [
  {
    id: 1,
    imageUrl: "/1.png",
    serviceName: "Help us cleanup our office",
    companyName: "Eco Volunteers",
    address: "123 Greenway Blvd, Springfield",
    date: "August 12, 2024",
    keywords: ["Environment", "Community", "Outdoors"],
  },
  {
    id: 2,
    imageUrl: "/2.png",
    serviceName: "Food sorting and packing",
    companyName: "Helping Hands",
    address: "456 Charity Ave, Metropolis",
    date: "September 15, 2024",
    keywords: ["Charity", "Food", "Community"],
  },
  {
    id: 3,
    imageUrl: "/3.png",
    serviceName: "Day camp counselors",
    companyName: "Animal Friends",
    address: "789 Pet Lane, Gotham",
    date: "October 3, 2024",
    keywords: ["Animals", "Shelter", "Support"],
  },
  {
    id: 4,
    imageUrl: "/4.png",
    serviceName: "Voater registration volunteer",
    companyName: "Green Earth",
    address: "101 Nature Path, Smallville",
    date: "November 20, 2024",
    keywords: ["Environment", "Tree Planting", "Green"],
  },
];
