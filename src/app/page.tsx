import { options } from "./option";
import TopRated from "./movies/top-rated";
import Hero from "@/component/herotv";
import TopRatedTv from "./tv-shows/top-rated";


export default function Home() {
  return (
    <div>
      <Hero />
      <TopRated />
      <TopRatedTv />
    </div>
  );
}