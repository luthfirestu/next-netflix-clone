import { trending } from "@/axios/request";
import Moviecard from "@/component/movieCard";

const TopRated: React.FC = async () => {
    const data = await trending("movie");
    const topTenMovies = data.results.slice(0, 10); // Slice to only include the first 10 movies
    return (
      <div className="m-8">
        <p className="text-white mt-12 mb-4 font-medium text-xl">10 Top Movies Today</p>
        <div className="carousel rounded-box gap-4 p-4">
            {topTenMovies.map((item: any) => {
              return (
                <div className="carousel-item" key={item.id}>
                  <Moviecard
                    id={item.id}
                    title={item?.title}
                    image={item?.poster_path}
                    rating={item?.vote_average}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  };

export default TopRated;
