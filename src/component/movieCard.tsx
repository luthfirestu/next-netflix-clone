"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Moviecard = (movie: {
  title: string;
  image: string;
  rating: number;
  id: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="card w-full  md:w-64 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      onClick={() => {
        router.push(`/details/${movie.id}`);
      }}
    >
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
          alt={movie.title}
          width={200}
          height={150}
        />
      </figure>
      <div className="card-body max-w-full">
        <p className="text-pretty whitespace-normal truncate overflow-hidden">{movie.title}</p>
      </div>
    </div>
  );
};

export default Moviecard;
