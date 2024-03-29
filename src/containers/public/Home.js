import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import Sliders from "react-slick";

import { Slider, Section, NewRelease, ChartSection, Livestream, Artist } from '../../components'

const Home = () => {
    const { friday, newEveryday, top100, xone, newMusic, weekChart, favoritedArtist, artistTheme, singers, livestream } = useSelector((state) => state.app);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7
    };

    return (
        <div className='overflow-y-auto w-full'>
            <div className="w-full h-[70px]"></div>
            <Slider />
            <NewRelease />
            <Section data={friday} />
            <Section data={artistTheme} />
            <Section data={newEveryday} />
            <ChartSection />

            <div className="flex items-center px-[43px] w-full mt-12">
                {weekChart?.map((item) => (
                    <Link to={item?.link?.split('.')[0]} key={item.link} className='flex-1 px-4'>
                        <img src={item.cover} alt="cover" className='w-full object-cover rounded-md ' />
                    </Link>
                ))}
            </div>
            <Section data={top100} isSingerName />
            {/* <Section data={xone} /> */}
            <Section data={newMusic} isSingerName />


            {livestream && <div className="px-[43px] w-full mt-12">
                <Sliders {...settings}>
                    {livestream?.map(item => (
                        <Livestream key={item.encodeId}
                            image={item.program.thumbnail}
                            title={item.host.name}
                        />
                    ))}
                </Sliders>
            </div>}
            <div className="px-[59px]"></div>
            <div className="w-full h-[500px] ">
            </div>
        </div>
    )
}

export default Home
