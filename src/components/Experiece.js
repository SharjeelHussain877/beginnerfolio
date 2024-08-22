import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Experiece() {
  return (
    <div className="w-auto">
      <Typography variant="h2" className="pb-4 nunito text-white capitalize">
        Experiece
      </Typography>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              Inviz technology
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                frontend developer:
              </span>
              Success in education is the foundation for unlocking endless
              opportunities; stay curious, work hard, and let your passion for
              learning guide you to greatness.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              nubit soft pvt ltd
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                mern stack developer:
              </span>
              Success in education is the foundation for unlocking endless
              opportunities; stay curious, work hard, and let your passion for
              learning guide you to greatness.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              smit
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                frontend developer:
              </span>
              Success in education is the foundation for unlocking endless
              opportunities; stay curious, work hard, and let your passion for
              learning guide you to greatness.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
