import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
   
  export default function Experiece() {
    return (
      <div className="w-[32rem]">
        <Typography variant="h2" className="pb-4 nunito">Experiece</Typography>
        <Timeline>
          <TimelineItem>
          <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <HomeIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray" className="nunito">
                SMIT
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-gray-600 nunito">
                <strong className="capitalize">Web & mobile Application developer: </strong>The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <HomeIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray" className="nunito">
                The Owls Studio
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-gray-600 nunito">
              <strong className="capitalize">Frontend developer: </strong>The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <HomeIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray" className="nunito">
                Nubit Soft
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-gray-600 nunito">
              <strong className="capitalize">Mern stack developer: </strong>The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }