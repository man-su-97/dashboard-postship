import FunctionalityShowcase from "@/Pages/FunctionalityShowcase";
import PerformanceDashboard from "@/Pages/Perfomancematrix";
import Topnav from "@/Pages/Topnav";
import { Welcomesection } from "@/Pages/Welcomesection";

export const Homelayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topnav />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Welcomesection />
        <PerformanceDashboard />
        <FunctionalityShowcase />
      </main>
    </div>
  );
};
