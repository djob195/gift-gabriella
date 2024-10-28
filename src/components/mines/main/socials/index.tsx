
import { Button } from "@/components/ui/button"
import { MessageCircle, Facebook, Instagram } from "lucide-react"

import data from '../../../../data/general.json'

export default function Socials() {


    const socialButtons = [
        {
            name: "WhatsApp",
            icon: <MessageCircle className="h-5 w-5" />,
            href: data.socials.whatsapp,
            color: "bg-green-500 hover:bg-green-600 focus:ring-green-400",
        },
        {
            name: "Facebook",
            icon: <Facebook className="h-5 w-5" />,
            href: data.socials.facebook,
            color: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
        },
        {
            name: "Instagram",
            icon: <Instagram className="h-5 w-5" />,
            href: data.socials.instagram,
            color: "bg-pink-600 hover:bg-pink-700 focus:ring-pink-500",
        },
    ]

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
            {socialButtons.map((button) => (
                <Button
                    key={button.name}
                    asChild
                    size="icon"
                    className={`h-12 w-12 rounded-full ${button.color}`}
                >
                    <a
                        href={button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Connect on ${button.name}`}
                    >
                        {button.icon}
                    </a>
                </Button>
            ))}
        </div>
    )
}