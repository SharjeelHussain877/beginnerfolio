"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProjectSliderCard({ data }) {
  return (
    <Card className="w-full md:flex-row flex-col">
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
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {data.type}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {data.title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {data.description}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
