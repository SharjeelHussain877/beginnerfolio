"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const theme = {
  carousel: {
    defaultProps: {
      autoplay: true,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: true,
    },
  },
};

export default function HomeCarousel() {
  return (
    <main className="dark:bg-gray-800 bg-[#2C3333] relative overflow-hidden h-screen">
    <div className="bg-[#2C3333] dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16 justify-evenly">
            <div className="flex flex-col relative z-20 sm:basis-2/4	">
                <span className="w-20 h-2 bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-[#0E8388]">
                    Hi,
                    <span className="text-5xl sm:text-7xl text-white">
                        I'm Sharjeel
                    </span>
                </h1>
                <p className="text-lg tracking-wider sm:tracking-normal sm:text-base text-gray-200 dark:text-white">
                A passionate Mern Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
                </p>
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-[#0E8388] border-2 border-transparent text-white text-md mr-4 hover:bg-[#2E4F4F]">
                        Contact me
                    </a>
                    <a href="/SharjeelResume.pdf" download className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-[#0E8388] text-[#0E8388] dark:text-white hover:bg-[#0E8388] hover:text-white text-md">
                        Download my resume
                    </a>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative basis-2/4	">
                <img src="/avatar.png" className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
</main>
    // <Carousel className="max-w-screen-3xl" {...theme.carousel.defaultProps}>
    //   <div className="relative w-full h-[100vh] md:h-auto">
    //     <img
    //       src="/hero-1.avif"
    //       alt="image 1"
    //       className="h-[100vh] w-full object-cover"
    //     />
    //     <div
    //       className="absolute inset-0 grid h-full w-full place-items-center bg-black/75"
    //       data-aos="zoom-in"
    //     >
    //       <div className="w-3/4 text-center md:w-2/4">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl nunito"
    //         >
    //           How I Write Code
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80 nunito"
    //         >
    //           I prioritize clear, efficient code through thorough planning and
    //           best practices, emphasizing modularity, performance, testing, and
    //           continual refinement for quality and maintainability.
    //         </Typography>
    //         {/* <div className="flex justify-center gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative w-full h-[100vh] md:h-auto">
    //     <img
    //       src="/hero-2.avif"
    //       alt="image 1"
    //       className="h-[100vh] w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
    //       <div className="w-3/4 text-center md:w-2/4">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl nunito"
    //         >
    //           How I Design User Interfaces
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80 nunito"
    //         >
    //           I prioritize intuitive, visually appealing user interfaces by
    //           understanding needs, creating clear designs with frameworks like
    //           Tailwind CSS and Material-UI. I ensure consistency, usability, and
    //           stakeholder feedback for beautiful, functional interfaces.
    //         </Typography>
    //         {/* <div className="flex justify-center gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative w-full h-[100vh] md:h-auto">
    //     <img
    //       src="/hero-3.avif"
    //       alt="image 1"
    //       className="h-[100vh] w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
    //       <div className="w-3/4 text-center md:w-2/4">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl nunito"
    //         >
    //           How I Plan to Design Applications
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80 nunito"
    //         >
    //           I begin by thoroughly researching project goals and user needs,
    //           creating detailed plans and prototypes for intuitive, accessible
    //           designs. Utilizing modern tools and stakeholder feedback, I
    //           iterate to deliver exceptional user experiences.
    //         </Typography>
    //         {/* <div className="flex justify-center gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </Carousel>
  );
}
