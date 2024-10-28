import { Button } from "@/components/ui/button"
import data from '../../../../../data/general.json'
import CarouselAbout from './carouselAbout';
const About = () => {

return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50 dark:bg-green-900">
        <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
            <div className="md:w-1/2">
            <CarouselAbout />
            </div>
            <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hola, soy {data.about.name}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {data.about.details}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
                <Button asChild>
                <a href="#contact">{data.about.consultation}</a>
                </Button>
                <Button asChild variant="outline">
                    <a href="#services">{data.about.services}</a>
                </Button>
            </div>
            </div>
        </div>
        </div>
  </section>
);
};

export default About