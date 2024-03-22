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
      className="card w-full  md:w-64 bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
      onClick={() => {
        router.push(`/details/${movie.id}`);
      }}
    >
      <figure className="hover:scale-105 hover:shadow-2xl">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
          alt={movie.title}
          width={200}
          height={150}
        />
      </figure>
      <div className="card-body">
        <p>{movie.title}</p>
      </div>
    </div>
  );
};

export default Moviecard;
