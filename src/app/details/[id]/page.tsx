import { detailMovie, similarMovie } from "@/axios/request";
import React from "react";
import Moviecard from "@/component/movieCard";


const Page = async ({ params }: any) => {
  const data = await detailMovie(params.id);
  const listSimiliarMovie = await similarMovie(params.id);
  return (
    <div className="p-5 flex flex-col gap-12 mt-6">
      <div className="text-3xl">Details</div>
      <div className="flex gap-6 flex-wrap">
        <div>
          <img
            src={`${process.env.image}/${data.poster_path}`}
            alt={data.title}
            width={400}
            height={350}
          />
          <div className="text-center font-semobold bg-slate-900 text-white p-1">
            Play Now
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-1/2">
          <p className="font-bold text-3xl">{data.title}</p>
          <div className="flex flex-col gap-2">
            <p>Original Title: {data?.original_title}</p>
            <p>Rating: {data?.vote_average}</p>
            <div className="flex gap-2">
              Genre:
              {data.genres?.map((item: any) => {
                return <div key={item.id}>{item.name},</div>;
              })}
            </div>
            <div className="flex gap-2">
              production companies:
              {data.production_companies?.map((item: any) => {
                return <div key={item.id}>{item.name},</div>;
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">Synopsis</p>
            <p>{data?.overview}</p>
          </div>
        </div>
      </div>
      <div className="my-12 flex flex-col gap-12">
        <p className="text-2xl font-medium">Similiar Movie</p>
        <div className="flex flex-row flex-wrap justify-around gap-12  py-4">
          {listSimiliarMovie.results?.map((item: any) => {
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
    </div>
  );
};

export default Page;
