import {useState} from 'react'
import { MapPin, Phone, Clock } from "lucide-react"
import data from '../../../../../data/general.json'
const Contact = () => {
    const [name, setName] = useState('')
    const [consult, setConsult] = useState('')

    const getUrlWp = () =>{
        let text = `Hola doctora, soy ${name} y tengo la consulta: ${consult}`;
        let encodeConsult = encodeURIComponent(text);
        return `${data.socials.whatsapp}?text=${encodeConsult}`;
    }
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{data.contact.title}</h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        {data.contact.legend}
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex flex-col space-y-4">
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder={data.contact.form.name}
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <textarea
                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                                placeholder={data.contact.form.name}
                                value={consult}
                                onChange={e => setConsult(e.target.value)}
                            ></textarea>
                            <a className="cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" href={getUrlWp()}>{data.contact.form.message}</a>
                        </form>
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{data.contact.form.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <a href={`tel:+502${data.contact.form.phone}`}>{data.contact.form.phone}</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{data.contact.form.schedule}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact