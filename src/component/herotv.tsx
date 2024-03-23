import {  trending } from "@/axios/request";
import Moviecard from "@/component/movieCard";

const HeroTV: React.FC = async () => {
    const data = await trending("tv");
    const recommendation= data.results.slice(0,1);
    return (
        <div className="hero h-min-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {recommendation.map((item: any) => {
                    return (
                        <div className="max-w-screen">
                            <Moviecard
                                key={item.id}
                                id={item.id}
                                //title={item?.name}
                                image={item?.poster_path}
                                rating={item?.vote_average}
                            />
                        </div>
                    );
                    })}
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="flex gap-4">
                        <button className="btn bg-white text-black opacity-70 hover: btn-primary opacity-90">Play</button>
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroTV;

