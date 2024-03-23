import Hero from "@/component/herotv";
import TopRated from "../movies/top-rated";
import Navigation from "@/component/navigation";
import Moviecard from "@/component/movieCard";
import { detailMovie, similarMovie } from "@/axios/request";
import React from "react";

export default function Page() {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}