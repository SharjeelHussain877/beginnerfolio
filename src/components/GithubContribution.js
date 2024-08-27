import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubContribution() {
  return (
    <div className="p-8 w-full flex justify-center text-custom-500">
      <GitHubCalendar
        username="SharjeelHussain877"
        blockMargin={6}
        blockRadius={2}
        blockSize={16}
        colorScheme={"dark"}
      />
    </div>
  );
}

export default GithubContribution;
