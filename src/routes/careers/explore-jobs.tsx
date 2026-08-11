import { createFileRoute } from "@tanstack/react-router";
import { ExploreJobsPage } from "@/pages/careers/ExploreJobsPage";

export const Route = createFileRoute("/careers/explore-jobs")({
  head: () => ({
    meta: [
      { title: "Explore Jobs | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Explore career opportunities at Alpha Technologies. Browse current job openings, learn about our application process, and join a team driving technological excellence and innovation.",
      },
    ],
    links: [{ rel: "canonical", href: "/careers/explore-jobs" }],
  }),
  component: ExploreJobsPage,
});
