import Hero from "@/component/herotv";
import TopRated from "./top-rated";
import HeroMovie from "@/component/heromovie";
export default function Page() {
    return (
        <div>
            <HeroMovie />
            <TopRated />
        </div>
    );
}