import { Typography } from "@material-tailwind/react";
import "./embla/footerBtn.css";

export default function Footer({ scrollFunction }) {
  function foo(sec_name) {
    if (sec_name === "about") scrollFunction?.["about"]();
    if (sec_name === "techstack") scrollFunction?.["techstack"]();
    if (sec_name === "contact") scrollFunction?.["contact"]();
    if (sec_name === "contribute") scrollFunction?.["contribute"]();
  }
  return (
    <footer className="w-full bg-transparent p-8 max-w-screen-2xl">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img
          src="/avatar.png"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              color="blue-gray"
              className="nunito font-normal transition-colors text-white hover:text-custom p-1 px-3 rounded-3xl hover:bg-custom-500 cursor-pointer hover:font-bold"
              onClick={() => foo("about")}
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              color="blue-gray"
              className="nunito font-normal transition-colors text-white hover:text-custom p-1 px-3 rounded-3xl hover:bg-custom-500 cursor-pointer hover:font-bold"
              onClick={() => foo("techstack")}
            >
              Expretise
            </Typography>
          </li>
          <li>
            <Typography
              color="blue-gray"
              className="nunito font-normal transition-colors text-white hover:text-custom p-1 px-3 rounded-3xl hover:bg-custom-500 cursor-pointer hover:font-bold"
              onClick={() => foo("contribute")}
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              color="blue-gray"
              className="nunito font-normal transition-colors text-white hover:text-custom p-1 px-3 rounded-3xl hover:bg-custom-500 cursor-pointer hover:font-bold"
              onClick={() => foo("contact")}
            >
              Contact us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography
        color="blue-gray"
        className="text-center nunito font-semibold text-custom-500 tracking-wider"
      >
        &copy; 2024 Sharjeel Hussain
      </Typography>
    </footer>
  );
}
