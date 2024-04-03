import React from "react";

import { Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";
import Image from "next/image";

interface InfoCardProps {
  image: string;
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children, image }: InfoCardProps) {
  return (
    <Card  className="mt-6 w-full h-96" placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}>
    <CardHeader placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''} color="blue-gray" className="relative h-56 ">
      <Image width={3000} height={3000}
        src={image}
        alt="card-image" className="object-cover object-center w-full"
      />
    </CardHeader>
    <CardBody placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}>
      <Typography placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''} variant="h5" color="blue-gray" className="mb-2">
        {title}
      </Typography>
      <Typography placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}>
        {children}
      </Typography>
    </CardBody>
  </Card>
  );
}

export default InfoCard;