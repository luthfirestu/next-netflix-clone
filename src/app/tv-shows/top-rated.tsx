import {  trending } from "@/axios/request";
import Moviecard from "@/component/movieCard";

const TopRatedTv: React.FC = async () => {
    const data = await trending("tv");
    const topTenTv = data.results.slice(0, 10);
    return (
      <div className="m-8">
        <p className="text-white mt-12 mb-4 font-medium text-xl">10 Top TV Shows Today</p>
        <div className="carousel rounded-box gap-4 p-4">
            {topTenTv.map((item: any) => {
              return (
                <div className="carousel-item">
                  <Moviecard
                    key={item.id}
                    id={item.id}
                    title={item?.name}
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

export default TopRatedTv;