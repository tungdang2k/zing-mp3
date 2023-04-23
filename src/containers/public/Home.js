import React from 'react'
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

<<<<<<< HEAD
import { Slider ,Section,NewRelease} from '../../components'

const Home = () => {
    const { friday,newEveryday,top100,xone,newMusic,weekChart } = useSelector((state) => state.app);
    return (
        <div className='overflow-y-auto w-full'>
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
        </div>
    )
}

export default Home
