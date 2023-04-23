<<<<<<< HEAD
import React,{useEffect} from 'react'

<<<<<<< HEAD
<<<<<<< HEAD
import { Slider ,Section,NewRelease} from '../../components'
=======
import { Header, Slider } from '../../components'
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e

const Home = () => {

    return (
        <div className='overflow-y-auto w-full'>
<<<<<<< HEAD
                <Slider />
                <Section data={friday}/>
                <Section data={newEveryday}/>
                <NewRelease/>
                <Section data={top100}/>
                <Section data={xone}/>
                <Section data={newMusic}/>
=======
import { Slider ,Section,NewRelease,ChartSection} from '../../components'

const Home = () => {
    const { friday,newEveryday,top100,xone,newMusic,weekChart,favoritedArtist,artistTheme } = useSelector((state) => state.app);
    return (
        <div className='overflow-y-auto w-full'>
                <Slider />
                <NewRelease/>
                <Section data={friday}/>
                <Section data={artistTheme}/>
                <Section data={newEveryday}/>
                <ChartSection/>
>>>>>>> parent of f98498b (search2)
                <div className="flex items-center px-[43px] w-full mt-12">
                    {weekChart?.map((item)=> (
                        <Link to={item?.link?.split('.')[0]}  key={item.link} className='flex-1 px-4'>
                            <img src={item.cover} alt="cover" className='w-full object-cover rounded-md ' />
                        </Link>
                    ))}
                </div>
<<<<<<< HEAD
=======
                <Section data={top100}/>
                {/* <Section data={xone}/> */}
                <Section data={newMusic}/>
                
                <div className="px-[59px]"></div>
>>>>>>> parent of f98498b (search2)
                <div className="w-full h-[500px] ">
                </div>
=======
            <div className='h-[70px]  px-[59px] flex items-center  '>
                <Header />
            </div>
                <Slider/>
=======
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
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
        </div>
    )
}

export default Home
