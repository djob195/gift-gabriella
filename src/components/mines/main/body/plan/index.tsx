import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Data from '../../../../../data/general.json';
const Plan = () => {

return (
  <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-900">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">{Data.about.services}</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Data.services.map((service, index) => (
        <Card key={index} className="flex flex-col justify-between">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{service.description}</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{service.price}</p>
          </CardContent>
          <div className="p-6 pt-0">
            <Button asChild variant="outline" className="w-full">
              <a href="#contact">{Data.about.consultation}</a>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
);
};

export default Plan