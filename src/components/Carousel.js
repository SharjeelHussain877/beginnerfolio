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
    <Carousel className="max-w-screen-3xl rounded-md" {...theme.carousel.defaultProps}>
      <div className="relative w-full h-[100vh] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-[100vh] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl nunito"
            >
              How I Write Code
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 nunito"
            >
              When I write code, I focus on clarity, efficiency, and maintainability. I start by thoroughly understanding the problem and planning the solution. I follow best practices and write clean, well-documented code that is easy to read and understand. I prioritize modularity, breaking down complex problems into smaller, manageable components. I also ensure my code is optimized for performance and scalability. Testing is a crucial part of my process to catch and fix issues early. Finally, I constantly review and refactor my code to improve its quality and maintainability.
            </Typography>
            {/* <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[100vh] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-[100vh] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl nunito"
            >
              How I Design User Interfaces
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 nunito"
            >
              When I design user interfaces, I prioritize creating intuitive, visually appealing, and user-friendly experiences. I start by understanding the user's needs and project requirements, then sketch out wireframes and mockups to establish a clear design flow. I ensure consistency and usability by following design principles and best practices. Utilizing frameworks like Tailwind CSS and Material-UI, I create responsive and accessible designs that work seamlessly across devices. I value feedback and involve stakeholders early in the process to refine and enhance the design, aiming for interfaces that are both beautiful and functional.
            </Typography>
            {/* <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[100vh] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-[100vh] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl nunito"
            >
              How I Plan to Design Applications

            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 nunito"
            >
              When designing applications, I start by understanding the project's goals and user needs through thorough research and stakeholder discussions. I create a detailed plan with user personas, user journeys, and feature lists to guide the design. I then develop wireframes and prototypes to visualize the layout and flow, prioritizing usability, consistency, and accessibility. I use modern design tools and frameworks to ensure the interfaces are responsive and visually appealing. I involve stakeholders and users early in the process to gather feedback and make iterative improvements, aiming to deliver an application that provides an exceptional user experience.
            </Typography>
            {/* <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </Carousel>
  );
}
