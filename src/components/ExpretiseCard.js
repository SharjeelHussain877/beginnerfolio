"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ExpertiseCard({ title, description }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Card className="max-w-86 m-2 bg-white shadow-md bg-clip-border justify-between hover:cursor-pointer hover:bg-gray-900 group">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 nunito group-hover:text-white"
          >
            {title}
          </Typography>
          <Typography className="climpPara nunito">{description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={handleOpen}
            className="nunito group-hover:bg-gray-700 group-hover:text-white"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="nunito">{title}</DialogHeader>
        <DialogBody className="nunito">{description}</DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="#212121" onClick={handleOpen}>
            <span>okay</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
