"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
  Textarea,
  Dropdown,
} from "@nextui-org/react";

const AddressCard = () => {
  const [addressData, setAddressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    type: "Home",
    label: "",
    town: "",
    city: "",
    state: "",
    country: "India",
    zipCode: "",
    location: { type: "Point", coordinates: [] },
    additionalInfo: "",
    isDefault: true,
  });

  const handleDefaultAddress = async (id) => {
    console.log("deafult clicked...")
    try {
      const response = await fetch(`http://localhost:3002/v1/api/address/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status) {
        const updatedAddress = await response.json();
        setAddressData((prev) =>
          prev.map((address) =>
            address._id === updatedAddress.data._id
              ? { ...address, isDefault: true }
              : { ...address, isDefault: false }
          )
        );
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to set default address");
      }
    } catch (err) {
      alert(err.message);
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddAddress = async () => {
    try {
      const response = await fetch("http://localhost:3002/v1/api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newAddress = await response.json();
        setAddressData((prev) => [...prev, newAddress.data]);
        setIsModalOpen(false);
        setFormData({
          type: "Home",
          label: "",
          town: "",
          city: "",
          state: "",
          country: "India",
          zipCode: "",
          location: { type: "Point", coordinates: [] },
          additionalInfo: "",
          isDefault: true,
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add address");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        const response = await fetch("http://localhost:3002/v1/api/address");
        const result = await response.json();
        if (result.status) {
          setAddressData(result.data);
        } else {
          throw new Error(result.message || "Failed to fetch addresses");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddressData();
  }, []);

  if (loading) return <p>Loading addresses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-semibold text-default-900 mb-5">
          Address Book
        </h1>
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add Address
        </Button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Add Address</h3>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
              >
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
              <Input
                label="Label"
                value={formData.label}
                onChange={(e) => handleInputChange("label", e.target.value)}
              />
              <Input
                label="Town"
                value={formData.town}
                required
                onChange={(e) => handleInputChange("town", e.target.value)}
              />
              <Input
                label="City"
                value={formData.city}
                required
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
              <Input
                label="State"
                value={formData.state}
                required
                onChange={(e) => handleInputChange("state", e.target.value)}
              />
              <Input
                label="Zip Code"
                value={formData.zipCode}
                required
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
              />
              <Textarea
                label="Additional Info"
                value={formData.additionalInfo}
                onChange={(e) =>
                  handleInputChange("additionalInfo", e.target.value)
                }
              />
            </div>
            <div className="flex justify-end mt-4 space-x-3">
              <Button color="success" onClick={handleAddAddress}>
                Submit
              </Button>
              <Button color="error" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <p className="text-default-400 text-small mb-5">
        Your saved addresses are shown below. You can set a default address for
        your orders.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {addressData.map((address, index) => (
          <Card key={address._id || index} className="max-w-[340px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src={`https://via.placeholder.com/150?text=${address.type}`}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {address.label || address.type}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    {address.city}, {address.state}
                  </h5>
                </div>
              </div>
              <Button
                color="primary"
                radius="full"
                size="sm"
                variant={address.isDefault ? "solid" : "bordered"}
                onClick={() => {handleDefaultAddress(address._id)}}
              >
                {address.isDefault ? "Default" : "Set Default"}
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>
                <strong>Town:</strong> {address.town}
              </p>
              <p>
                <strong>Zip Code:</strong> {address.zipCode}
              </p>
              <p>
                <strong>Country:</strong> {address.country}
              </p>
              <p>
                <strong>Coordinates:</strong>{" "}
                {address.location.coordinates.join(", ")}
              </p>
              <p>
                <strong>Additional Info:</strong>{" "}
                {address.additionalInfo || "N/A"}
              </p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="text-default-400 text-small">
                  <strong>Created At:</strong>{" "}
                  {new Date(address.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-default-400 text-small">
                  <strong>Updated At:</strong>{" "}
                  {new Date(address.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AddressCard;
