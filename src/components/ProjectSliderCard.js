"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectSliderCard({ data }) {
  return (
    <Card className="w-full md:flex-row flex-col hover:cursor-pointer hover:bg-[#2C3333] m-8 bg-[#2E4F4F]">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full h-60 md:h-auto md:w-2/5 shrink-0 rounded-lg md:rounded-r-none"
      >
        <img
          src={data.image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase nunito text-white">
          {data.type}
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 nunito text-[#0E8388]"
        >
          {data.title}
        </Typography>
        <Typography
          color="gray"
          className="mb-8 font-normal nunito select-none text-[#CBE4DE]"
        >
          {data.description}
        </Typography>
        <a href="#" className="inline-block">
          <Button
            variant="text"
            className="flex items-center gap-2 nunito text-[#CBE4DE]"
          >
            Learn More
            <FaArrowRightLong />
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
