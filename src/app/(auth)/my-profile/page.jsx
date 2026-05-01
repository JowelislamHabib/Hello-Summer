"use client";

import React from "react";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import {
  IoSettingsOutline,
  IoMailOutline,
  IoLocationOutline,
  IoShieldCheckmarkOutline,
  IoCubeOutline,
  IoHeartOutline,
} from "react-icons/io5";

const MyProfile = () => {
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    location: "Dhaka, Bangladesh",
    status: "Verified Member",
    joined: "January 2026",
    avatar: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
  };

  const stats = [
    { label: "Orders", value: "12", icon: <IoCubeOutline /> },
    { label: "Wishlist", value: "24", icon: <IoHeartOutline /> },
    { label: "Reviews", value: "8", icon: <IoShieldCheckmarkOutline /> },
  ];

  return (
    <div className="min-h-screen bg-orange-50/30 pb-20 font-sans">
      {/* Editorial Header */}
      <div className="h-64 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-stone-900/20 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md rounded-3xl p-4">
              <Card.Content className="flex flex-col items-center text-center py-8">
                <Avatar
                  src={user.avatar}
                  className="w-32 h-32 ring-4 ring-orange-500 ring-offset-4 mb-6"
                />
                <h1 className="text-2xl font-bold text-stone-900 mb-1">
                  {user.name}
                </h1>
                <Chip
                  variant="flat"
                  className="bg-orange-100 text-orange-700 font-bold uppercase tracking-wider mb-6 text-[10px] h-6"
                >
                  {user.status}
                </Chip>

                <div className="w-full space-y-4 mb-8 text-left">
                  <div className="flex items-center gap-3 text-stone-600 px-4">
                    <IoMailOutline className="text-xl text-orange-500" />
                    <span className="text-sm font-medium">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600 px-4">
                    <IoLocationOutline className="text-xl text-orange-500" />
                    <span className="text-sm font-medium">{user.location}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-stone-900 text-white font-bold h-12 rounded-2xl transition-transform active:scale-95"
                  startContent={<IoSettingsOutline size={20} />}
                >
                  Edit Profile
                </Button>
              </Card.Content>
            </Card>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((item) => (
                <Card
                  key={item.label}
                  className="border-none shadow-md bg-white rounded-3xl"
                >
                  <Card.Content className="flex flex-col items-center py-6">
                    <div className="text-2xl text-orange-500 mb-2">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-bold text-stone-900">
                      {item.value}
                    </span>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                      {item.label}
                    </span>
                  </Card.Content>
                </Card>
              ))}
            </div>

            <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden">
              <Card.Header className="px-8 pt-8 pb-0 flex flex-col items-start">
                <Card.Title className="text-xl font-bold text-stone-900 uppercase tracking-tight">
                  Account Overview
                </Card.Title>
              </Card.Header>
              <Card.Content className="p-0">
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center text-left">
                    <div>
                      <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                        Member Since
                      </p>
                      <p className="text-stone-800 font-medium">
                        {user.joined}
                      </p>
                    </div>
                    <Button
                      variant="light"
                      size="sm"
                      className="font-bold text-orange-600"
                    >
                      Update
                    </Button>
                  </div>

                  {/* Manual Divider to avoid export issues */}
                  <div className="h-px bg-stone-100 w-full" />

                  <div className="flex justify-between items-center text-left">
                    <div>
                      <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                        Primary Shipping
                      </p>
                      <p className="text-stone-800 font-medium truncate max-w-[180px] md:max-w-none">
                        Uttara, Sector 7, Dhaka
                      </p>
                    </div>
                    <Button
                      variant="light"
                      size="sm"
                      className="font-bold text-orange-600"
                    >
                      Change
                    </Button>
                  </div>
                </div>

                <div className="bg-orange-500 p-8 text-white flex justify-between items-center">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold italic tracking-tight">
                      Solis Rewards
                    </h3>
                    <p className="text-orange-100 opacity-90 text-sm">
                      You have 450 summer points!
                    </p>
                  </div>
                  <Button className="bg-white text-orange-600 font-bold rounded-full px-8 shadow-lg transition-transform active:scale-95">
                    Redeem
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
