import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function DemoCard({ title, description }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle nunito">{title}</div>
        <div className="notibody climpPara nunito">
          {description}
          <br />
        </div>
        <button className="customButton" onClick={handleOpen}>
          Read more
        </button>
      </div>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="bg-[#9e9e9e]"
      >
        <DialogHeader className="nunito text-[#0E8388]">{title}</DialogHeader>
        <DialogBody className="nunito text-[#CBE4DE]">{description}</DialogBody>
        <DialogFooter>
          <button className="customButton nunito" onClick={handleOpen}>
          okay
        </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DemoCard;
