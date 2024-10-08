import React from "react";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import { LucideProps } from "lucide-react";

interface ServiceItemProps {
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
}

const ServiceItem = (props: ServiceItemProps) => {
    return (
        <Card className="h-full w-full flex flex-col">
            <CardHeader>
                {<props.icon className="w-12 h-12 lg:w-14 lg:h-14" />}
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between gap-3">
                <h3 className="font-bold text-xl lg:text-2xl">{props.title}</h3>
                <p>{props.description}</p>
            </CardContent>
        </Card>
    );
};

export default ServiceItem;
