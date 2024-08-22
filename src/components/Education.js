import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { BookOpenIcon } from "@heroicons/react/24/solid";

export default function Education() {
  return (
    <div className="w-auto">
      <Typography variant="h2" className="pb-4 nunito text-white">
        Education
      </Typography>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              IT Training
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                Saylani:
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
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              Govt Formen college nazimabad
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                intermediate:
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
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              prince public school
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                matriculation:
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
