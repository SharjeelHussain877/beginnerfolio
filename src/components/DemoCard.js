import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

function DemoCard({ title, description }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="mx-2">
      <div className="notification bg-custom-300 text-custom-100">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle nunito !font-bold">{title}</div>
        <div className="notibody climpPara text-custom nunito">
          {description}
        </div>
        <Button className="customButton z-10 m-[20px] text-white bg-custom-100 border-custom  border-2 tracking-widest hover:bg-custom nunito" onClick={handleOpen}>
          Read more
        </Button>
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
        <DialogHeader className="nunito text-custom">{title}</DialogHeader>
        <DialogBody className="nunito text-custom-100">{description}</DialogBody>
        <DialogFooter>
          <Button className=" text-white bg-custom-100 border-custom  border-2 tracking-widest hover:bg-custom nunito" onClick={handleOpen}>
          okay
        </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default DemoCard;
