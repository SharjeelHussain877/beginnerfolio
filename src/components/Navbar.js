"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "./MTailwind";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CodeBracketSquareIcon,
  GiftIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "projects",
    description: "Find the perfect solution for your needs.",
    icon: CodeBracketSquareIcon,
  },
  {
    title: "techstack",
    description: "Meet and learn about our dedication",
    icon: GiftIcon,
  },
  {
    title: "toolStack",
    description: "What tools we use to build  dynamic site",
    icon: WrenchIcon,
  },
];

function NavListMenu({ scrollFunction, setOpenNav }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function foo(sec_name) {
    if (sec_name === "projects") scrollFunction?.["projects"]();
    if (sec_name === "techstack") scrollFunction?.["techstack"]();
    if (sec_name === "toolstack") scrollFunction?.["toolstack"]();
  }

  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg ">
          <div className="flex items-center justify-center rounded-lg p-2 ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div
            onClick={() => {
              foo(title);
              setOpenNav(false);
            }}
          >
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold capitalize nunito"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500 nunito"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-custom nunito text-lg"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Menu
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block md:bg-custom-500 border-none">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            <span onClick={() => foo("projects")}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2 ">
                  {React.createElement(CodeBracketSquareIcon, {
                    strokeWidth: 2,
                    className: "h-6 text-gray-900 w-6",
                  })}
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold capitalize nunito text-custom-100"
                  >
                    projects
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-custom-100 nunito"
                  >
                    Find the perfect solution for your needs.
                  </Typography>
                </div>
              </MenuItem>
            </span>
            <span onClick={() => foo("techstack")}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2 ">
                  {React.createElement(GiftIcon, {
                    strokeWidth: 2,
                    className: "h-6 text-gray-900 w-6",
                  })}
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold capitalize text-custom-100 nunito"
                  >
                    techstack
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-custom-100 nunito"
                  >
                    Meet and learn about our dedication.
                  </Typography>
                </div>
              </MenuItem>
            </span>
            <span onClick={() => foo("toolstack")}>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2 ">
                  {React.createElement(WrenchIcon, {
                    strokeWidth: 2,
                    className: "h-6 text-gray-900 w-6",
                  })}
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold capitalize nunito text-custom-100"
                  >
                    toolstack
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-custom-100 nunito"
                  >
                    What tools we use to build dynamic site.
                  </Typography>
                </div>
              </MenuItem>
            </span>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ scrollFunction, setOpenNav }) {
  function foo(sec_name) {
    if (sec_name === "about") scrollFunction?.["about"]();
    if (sec_name === "contact") scrollFunction?.["contact"]();
  }

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 nunito text-lg"
          onClick={() => setOpenNav(false)}
        >
          Home
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 nunito text-lg"
          onClick={() => {
            foo("about");
            setOpenNav(false);
          }}
        >
          About us
        </ListItem>
      </Typography>
      <NavListMenu scrollFunction={scrollFunction} setOpenNav={setOpenNav} />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 nunito text-lg"
          onClick={() => {
            setOpenNav(false);
            foo("contact");
          }}
        >
          Contact us
        </ListItem>
      </Typography>
    </List>
  );
}

export default function NavigationBar({ scrollFunction }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="w-full bg-gray-200">
      <Navbar className="px-4 py-4 mx-auto max-w-screen-2xl shadow-none border-none sticky top-0 z-50 rounded-none bg-transparent">
        <div className="flex items-center justify-between text-custom">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 agustina text-2xl sm:text-4xl"
          >
            {`<Sharjeel`}
            <span className="text-custom-400"> Hussain </span>
            {`/>`}
          </Typography>
          <div className="hidden lg:block nunito">
            <NavList scrollFunction={scrollFunction} setOpenNav={setOpenNav} />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Avatar
              src="/avatar.png"
              alt="avatar"
              variant="rounded"
              size="sm"
            />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList scrollFunction={scrollFunction} />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Avatar
              src="/avatar.png"
              alt="avatar"
              variant="rounded"
              size="sm"
            />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
