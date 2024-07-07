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
    <div
      className="w-auto"
    >
      <Typography variant="h2" className="pb-4 nunito text-[#0E8388]">
        Experiece
      </Typography>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-[#2E4F4F]">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" className="nunito text-white text-3xl">
              Nubit Soft
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              color="gary"
              className="font-normal text-gray-600 nunito"
            >
              <span className="capitalize text-[#CBE4DE] font-bold me-2">
                Mern stack developer:
              </span>
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
            <TimelineIcon className="p-2 bg-[#2E4F4F]">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" className="nunito text-white text-3xl">
              SMIT
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              color="gary"
              className="font-normal text-gray-600 nunito"
            >
              <span className="capitalize text-[#CBE4DE] font-bold me-2">
                Web & mobile Application developer:
              </span>
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-[#2E4F4F]">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" className="nunito text-white text-3xl">
              The Owls Studio
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              color="gary"
              className="font-normal text-gray-600 nunito"
            >
              <span className="capitalize text-[#CBE4DE] font-bold me-2">
                Frontend Developer:
              </span>
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
