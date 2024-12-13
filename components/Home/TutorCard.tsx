"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa"; // Import star icons for ratings

interface TeacherCardProps {
  tutorName: string;
  expertise: string; // Expertise like "Physics, Maths, etc."
  feesPerHour: number;
  rating: number; // rating out of 5
  imageUrl: string;
  description: string; // Additional info for modal
}

export default function TeacherCard({
  tutorName,
  expertise,
  feesPerHour,
  rating,
  imageUrl,
  description,
}: TeacherCardProps) {
  const [showMore, setShowMore] = React.useState(false);

  // Create an array for star ratings
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src={imageUrl} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-sm font-semibold leading-none text-default-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                {tutorName.length > 14
                  ? tutorName.substring(0, 14) + "..."
                  : tutorName}
              </h4>

              <h5 className="text-small tracking-tight text-default-400">
                Experiece 4 yrs
              </h5>
            </div>
          </div>
          <Button
            className={
              showMore
                ? "bg-transparent text-foreground border-default-200"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={showMore ? "bordered" : "solid"}
            onPress={() => setShowMore(!showMore)}
          >
            {showMore ? "Unfollow" : "Details"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
            Expertise:{" "}
            {expertise.length > 14
              ? expertise.substring(0, 14) + "..."
              : expertise}
          </p>

          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small ">
              Classes:{" "}
            </p>
            <p className="text-default-400 text-small">6th,7th,8th</p>
          </div>
          <p className="pt-2">Fees per hour: ₹{feesPerHour}</p>

          <div className="flex items-center gap-1 pt-2">
            <p className="font-semibold text-default-600">Rating:</p>
            <div className="flex">{stars}</div>
          </div>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small "> </p>
            <p className="text-defau  lt-400 text-small">powered By</p>
          </div>
          <div className="flex gap-1">
            <p className="text-default-400 text-small">Mentored</p>
            <p className="font-semibold text-default-400 text-small">
              97.1K students
            </p>
          </div>
          {/* <div className="flex gap-1">
                    <p className="text-default-400 text-small">Mentored</p>
                    <p className="font-semibold text-default-400 text-small">97.1K students</p>
                </div> */}
        </CardFooter>
      </Card>
    </section>
  );
}
