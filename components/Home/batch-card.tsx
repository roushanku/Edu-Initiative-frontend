"use client"
import { Card, CardHeader, CardBody, Image, Button, Modal, ModalBody, ModalHeader } from "@nextui-org/react";
import { FaStar } from 'react-icons/fa';
import { useState } from "react";
import React from "react";
interface TutorCardProps {
  tutorName: string;
  expertise: string; // Expertise like "Physics, Maths, etc."
  feesPerHour: number;
  rating: number; // rating out of 5
  imageUrl: string;
  description: string; // Additional info for modal
}

export default function TutorCard({
  tutorName,
  expertise,
  feesPerHour,
  rating,
  imageUrl,
  description,
}: TutorCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Create an array to display star ratings
  const stars = Array(5).fill(0).map((_, index) => (
    <FaStar key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"} />
  ));

  // Handle Modal open/close
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative">
      <Card className="py-6 px-6 relative w-full max-w-lg bg-gradient-to-r from-blue-50 to-indigo-100 shadow-xl rounded-xl transform transition duration-500 hover:scale-105">
        {/* Tutor name and round image at the top */}
        <CardHeader className="pb-0 pt-2 px-0 flex-col items-start w-full">
          <div className="flex justify-between w-full items-center">
            <h4 className="font-bold text-2xl text-indigo-800">{tutorName}</h4>
            <Image
              alt="Tutor profile picture"
              className="rounded-full object-cover border-2 border-indigo-500 shadow-md"
              src={imageUrl}
              width={90} // Increased the size of the image
              height={90}
            />
          </div>
          <p className="text-lg font-semibold mt-2 text-indigo-700">Expertise:</p>
          <small className="text-gray-600 text-lg">{expertise}</small> {/* Increased font size */}
        </CardHeader>

        <CardBody className="py-4">
          <div className="mt-4">
            <p className="font-bold text-lg text-indigo-600">Fees per hour: ₹{feesPerHour}</p>
            <div className="flex items-center mt-2">
              <p className="mr-2 font-bold text-lg text-indigo-600">Rating:</p>
              <div className="flex">{stars}</div>
            </div>
            <Button onClick={toggleModal} className="mt-4 bg-indigo-600 text-white hover:bg-indigo-500">Show More</Button>
          </div>
        </CardBody>
      </Card>

      {/* Modal for more details */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ModalHeader>
          <h2 className="text-2xl font-bold">{tutorName}</h2>
        </ModalHeader>
        <ModalBody>
          <p className="text-lg">{description}</p>
          <p className="mt-4 font-bold">Expertise: {expertise}</p>
          <p>Fees per hour: ₹{feesPerHour}</p>
          <div className="flex items-center mt-2">
            <p className="mr-2 font-bold">Rating:</p>
            <div className="flex">{stars}</div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}


