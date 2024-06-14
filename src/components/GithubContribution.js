import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubContribution() {
  return (
    <div className="p-8 max-w-screen-2xl w-full sm:w-3/4 md:w-11/12 lg:w-full flex justify-center">
      <GitHubCalendar
        username="SharjeelHussain877"
        blockMargin={8}
        blockRadius={100}
        // blockSize={5}
        colorScheme={"light"}
      />
    </div>
  );
}

export default GithubContribution;
