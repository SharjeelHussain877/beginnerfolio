import { Typography } from "@material-tailwind/react";

export default function Footer() {
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
              as="a"
              href="#"
              color="blue-gray"
              className="nunito font-normal transition-colors hover:text-[#212121] hover:font-bold focus:text-[#212121]"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="nunito font-normal transition-colors hover:text-[#212121] hover:font-bold focus:text-[#212121]"
            >
              Expretise
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="nunito font-normal transition-colors hover:text-[#212121] hover:font-bold focus:text-[#212121]"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="nunito font-normal transition-colors hover:text-[#212121] hover:font-bold focus:text-[#212121]"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center nunito font-semibold">
        &copy; 2024 Sharjeel Hussain
      </Typography>
    </footer>
  );
}
