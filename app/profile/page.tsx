"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  UserCircle,
  Lock,
  Mail,
  Plus,
  Shield,
  Key,
  Smartphone,
} from "lucide-react";
import AddressCard from "../../components/Address/AddressContent";

type ActiveTab = "profile" | "security" | "address";

interface EmailAddress {
  email: string;
  isPrimary?: boolean;
}

interface ProfileData {
  name: string;
  profileImage: string;
  emailAddresses: EmailAddress[];
  phoneNumber: string;
  connectedAccounts: {
    provider: string;
    email: string;
  }[];
}

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("profile");

  const profileData: ProfileData = {
    name: "Jaylon Dias",
    profileImage: "/api/placeholder/32/32",
    emailAddresses: [
      { email: "example@clerk.dev", isPrimary: true },
      { email: "example@personal.com" },
      { email: "email@work.io" },
    ],
    phoneNumber: "+1 (555) 123-4567",
    connectedAccounts: [{ provider: "Google", email: "example@email.com" }],
  };

  const ProfileContent = () => (
    <div className="space-y-8">
      {/* Profile Details */}
      <div>
        <h2 className="text-base font-medium mb-4">Profile details</h2>
        <div className="flex items-center gap-3">
          <Image
            src={profileData.profileImage}
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{profileData.name}</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 mt-0.5">
              Edit profile
            </button>
          </div>
        </div>
      </div>

      {/* Email Addresses */}
      <div>
        <h2 className="text-base font-medium mb-4">Email addresses</h2>
        <div className="space-y-3">
          {profileData.emailAddresses.map((email, index) => (
            <div key={index} className="flex items-center text-sm">
              <Mail className="w-4 h-4 text-gray-400 mr-2" />
              <span className="flex-1">{email.email}</span>
              {email.isPrimary && (
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded ml-2">
                  Primary
                </span>
              )}
            </div>
          ))}
          <button className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 mt-2">
            <Plus className="w-3.5 h-3.5" />
            Add email address
          </button>
        </div>
      </div>

      {/* Phone Number */}
      <div>
        <h2 className="text-base font-medium mb-4">Phone number</h2>
        <div className="flex items-center text-sm">
          <Smartphone className="w-4 h-4 text-gray-400 mr-2" />
          <span className="flex-1">{profileData.phoneNumber}</span>
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded ml-2">
            Primary
          </span>
        </div>
        <button className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 mt-3">
          <Plus className="w-3.5 h-3.5" />
          Add phone number
        </button>
      </div>

      {/* Connected Accounts */}
      <div>
        <h2 className="text-base font-medium mb-4">Connected accounts</h2>
        <div className="space-y-3">
          {profileData.connectedAccounts.map((account, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-5 h-5 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm">G</span>
              </div>
              <span>{account.provider}</span>
              <span className="text-gray-500 mx-1.5">•</span>
              <span className="text-gray-600">{account.email}</span>
            </div>
          ))}
          <button className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 mt-2">
            <Plus className="w-3.5 h-3.5" />
            Connect account
          </button>
        </div>
      </div>
    </div>
  );

  const SecurityContent = () => (
    <div className="space-y-8">
      {/* Password Section */}
      <div>
        <h2 className="text-base font-medium mb-4">Password</h2>
        <div className="flex items-center text-sm">
          <Key className="w-4 h-4 text-gray-400 mr-2" />
          <span className="flex-1">Last changed 3 months ago</span>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            Change password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div>
        <h2 className="text-base font-medium mb-4">
          Two-factor authentication
        </h2>
        <div className="flex items-center text-sm">
          <Shield className="w-4 h-4 text-gray-400 mr-2" />
          <span className="flex-1">Not configured</span>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            Set up 2FA
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="px-8 pt-6">
          <h1 className="text-xl font-semibold">Account</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your account info.
          </p>
        </div>

        <div className="flex mt-8">
          {/* Sidebar */}
          <div className="w-56 px-4">
            <div className="space-y-0.5">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-2 w-full px-4 py-2 text-sm rounded-md ${
                  activeTab === "profile"
                    ? "bg-gray-100"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <UserCircle className="w-4 h-4" />
                <span>Profile</span>
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`flex items-center gap-2 w-full px-4 py-2 text-sm rounded-md ${
                  activeTab === "security"
                    ? "bg-gray-100"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>Security</span>
              </button>
              <button
                onClick={() => setActiveTab("address")}
                className={`flex items-center gap-2 w-full px-4 py-2 text-sm rounded-md ${
                  activeTab === "address"
                    ? "bg-gray-100"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>Address</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 px-8 pb-8">
            {activeTab === "profile" ? (
              <ProfileContent />
            ) : activeTab === "security" ? (
              <SecurityContent />
            ) : (
              <AddressCard />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
