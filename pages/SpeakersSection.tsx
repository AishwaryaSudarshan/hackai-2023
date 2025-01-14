import * as React from 'react'; 
import SpeakerCards from './SpeakerCards';
import SpeakerCardsMobile from './SpeakerCardsMobile';
import { Typography, useMediaQuery } from '@mui/material';
import "@fontsource/hind-siliguri";

function AboutSection()
{
    const mobile = useMediaQuery('(max-width:1023px)')

    return (
        <div className="relative text-black">
            <img className="w-screen h-[1000px]" src="/speakers-bg.png" alt="speakers background image"/>
            { mobile ?
                <>
                    <img className="w-screen h-[1000px]" src="/speakers-bg.png" alt="speakers background image"/>
                    <img className="absolute w-screen h-[1000px] translate-y-[-1500px] object-cover" src="/speaker-blend.svg"/>
                </>
            : <></> }
            <div className="absolute w-full pt-2.5 top-[20vh] text-xl text-center leading-4 justify-center place-content-center sm:px-8 md:px-28 lg:px-40">
                <Typography fontFamily={"var(--lucidity)"} className="pb-14 text-3xl">MEET OUR SPEAKERS</Typography>
                {mobile ? <SpeakerCardsMobile/> : <SpeakerCards/>}
            </div>
        </div>
    )
}

export default AboutSection;
