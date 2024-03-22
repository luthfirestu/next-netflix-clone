import { movieData } from "@/axios/request";
import Moviecard from "@/component/movieCard";
import React from "react";

export default async function Page() {
  const data = await movieData("popular");
  return (
    <div className="p-2">
      <p className="text-white mt-12 font-medium text-4xl text-left">
        Popular on Netflix
      </p>
      <div className="py-7 px-5 flex flex-row flex-wrap justify-around gap-12">
        {data.results?.map((item: any) => {
          return (
            <Moviecard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item?.poster_path}
              rating={item?.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
