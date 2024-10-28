import About from './about';
import Expertise from './expertise';
import Plan from './plan';
import Contact from './contact';

const Body = () => {

return (
    <main className="flex-1">
        <About />
        <Expertise />
        <Plan />
        <Contact />
    </main>
);
};

export default Body