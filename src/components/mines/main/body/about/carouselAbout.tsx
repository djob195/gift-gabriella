import { useState, useEffect, useCallback } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

const CarouselAbout = () => {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [autoplay] = useState(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )
  const images = [
    "img/about/main.jpg",
    "img/about/main2.jpg",
    "img/about/main3.jpg"
  ]
  useEffect(() => {
    if (!api) return

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  return (
    <div className="w-full max-w-md mx-auto px-4">
      <Carousel
        setApi={setApi}
        plugins={[autoplay]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Card className="border-none bg-transparent">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <div className="relative w-64 h-64 overflow-hidden rounded-full">
                    <img
                      alt={`image-${index}`}
                      className="mx-auto rounded-full"
                      height="200"
                      src={src}
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
};

export default CarouselAbout