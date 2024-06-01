import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="podcast_grid">
          {podcastData.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              imgUrl={podcast.imgURL}
              title={podcast.title}
              description={podcast.description}
              podcastId={podcast.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
