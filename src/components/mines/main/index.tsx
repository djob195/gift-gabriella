import { useState } from "react";
import Header from '@/components/mines/main/header'
import Body from './body';
import Socials from './socials';
const Main = () => {
    const [lng, setLng] = useState("es");
return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <Body />
        <Socials/>
    </div>
);
};

export default Main;