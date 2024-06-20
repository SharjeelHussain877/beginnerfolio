import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
  BookOpenIcon
} from "@heroicons/react/24/solid";

export default function Education() {
  return (
    <div className="w-auto">
      <Typography variant="h2" className="pb-4 nunito">
        Education
      </Typography>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray" className="nunito">
              Intermediate
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-600 nunito"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray" className="nunito">
              Matriculation
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-600 nunito"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineConnector /> */}
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray" className="nunito">
              Saylani Mass IT Training 
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-600 nunito"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
