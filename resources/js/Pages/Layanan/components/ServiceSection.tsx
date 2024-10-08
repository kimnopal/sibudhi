import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import React from "react";

interface ServiceSectionProps {
    title: string;
    description: string;
    image: string;
    href: string;
    id: string;
    buttonText: string;
}

const ServiceSection = (props: ServiceSectionProps) => {
    return (
        <section
            className="container w-full max-w-screen-lg flex flex-col-reverse md:flex-row md:even:flex-row-reverse justify-between items-center gap-8 md:gap-12 py-10"
            id={props.id}
        >
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="font-bold text-3xl">{props.title}</h2>
                <p className="font-medium text-justify">{props.description}</p>
                <Link href={props.href}>
                    <Button>{props.buttonText}</Button>
                </Link>
            </div>
            <div className="flex-1">
                <img src={props.image} alt={props.title} className="" />
            </div>
        </section>
    );
};

export default ServiceSection;
