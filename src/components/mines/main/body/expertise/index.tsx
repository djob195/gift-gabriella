import { Apple, Book, Ruler, Dumbbell, ChartScatter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import data from '../../../../../data/general.json';
const Expertise = () => {
  

return (
    <section id="expertise" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">{data.expertise.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Apple className="h-10 w-10 mb-4" />,
            title: data.expertise.personalizedMeal.title,
            description: data.expertise.personalizedMeal.description,
          },
          {
            icon: <Ruler className="h-10 w-10 mb-4" />,
            title: data.expertise.metrics.title,
            description: data.expertise.metrics.description,
          },
          {
            icon: <Dumbbell className="h-10 w-10 mb-4" />,
            title: data.expertise.sport.title,
            description: data.expertise.sport.description,
          },
          {
            icon: <Book className="h-10 w-10 mb-4" />,
            title: data.expertise.education.title,
            description: data.expertise.education.description,
          },
          {
            icon: <ChartScatter className="h-10 w-10 mb-4" />,
            title: data.expertise.engineer.title,
            description: data.expertise.engineer.description,
          },
        ].map((item, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6">
            <CardContent>
              {item.icon}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
};

export default Expertise