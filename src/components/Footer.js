import { Typography } from "@material-tailwind/react";
import "./embla/footerBtn.css";

export default function Footer({ scrollFunction }) {
  function foo(sec_name) {
    if (sec_name === "about") scrollFunction?.["about"]();
    if (sec_name === "contact") scrollFunction?.["contact"]();
    if (sec_name === "contribute") scrollFunction?.["contribute"]();
  }
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          // src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          src="/logo.png"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              color="blue-gray"
              className="nunito font-normal transition-colors hover:text-[#212121] hover:font-bold focus:text-[#212121]"
              onClick={() => foo("about")}
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              color="blue-gray"
              className="nunito font-normal transition-colors hover:text-[#212121] hover:font-bold focus:text-[#212121]"
              onClick={() => foo("techstack")}
            >
              Expretise
            </Typography>
          </li>
          <li>
            <Typography
              color="blue-gray"
              className="nunito font-normal transition-colors hover:text-[#212121] hover:font-bold focus:text-[#212121]"
              onClick={() => foo("contribute")}
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              color="blue-gray"
              className="nunito font-normal transition-colors hover:text-[#212121] hover:font-bold focus:text-[#212121]"
              onClick={() => foo("contact")}
            >
              Contact us
            </Typography>
            {/* <button className="cta" onClick={() => foo("contact")}>
              <span>Contact us</span>
            </button> */}
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography
        color="blue-gray"
        className="text-center nunito font-semibold"
      >
        &copy; 2024 Sharjeel Hussain
      </Typography>
    </footer>
  );
}
