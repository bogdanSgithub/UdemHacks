import React from "react";
import AnimalCardGrid from "@/components/AnimalCardGrid";
import AnimalHourlyChart from "@/components/AnimalHourlyChart";
import AnimalWeeklyChart from "@/components/AnimalWeeklyChart";
import EyeCropChatbot from "@/components/EyeCropChatbot";

const Report = () => {
  return (
    <>
      <AnimalCardGrid />
      <div className="container mx-auto p-4 mt-24">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Animal Data Charts
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <AnimalHourlyChart />
          <AnimalWeeklyChart />
        </div>
      </div>

      <EyeCropChatbot />
    </>
  );
};

export default Report;
