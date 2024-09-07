import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Info } from "lucide-react";
import bgImg from "../assets/bg.jpg";

export const Welcomesection = () => {
  return (
    <>
      <div className="relative p-6">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={bgImg}
            alt="Background pattern of gift boxes"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-yellow-100 opacity-0"></div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 my-6 ">
          Welcome, John Mathew!!
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="bg-white overflow-hidden shadow rounded-lg">
            <CardContent className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-medium text-gray-900">
                Order Sync Successful!
              </h3>
              <p className="mt-1 text-sm text-gray-600 mb-10">
                Your order details from the last 30 days have been successfully
                synced. Check them out now!
              </p>
              <div className="mt-4">
                <Button>Explore Your Orders</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 overflow-hidden shadow rounded-lg">
            <CardContent className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                <h3 className="text-base font-medium text-gray-900">
                  Customize Customer Notification
                </h3>
              </div>
              <p className="mt-1 text-sm text-gray-600 mb-10">
                Tailor Your Email Experience: Set the Sender Email and Choose
                Notification Triggers
              </p>
              <div className="mt-4">
                <Button>Configure Notifications</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 overflow-hidden shadow rounded-lg">
            <CardContent className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-2">
                <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <h3 className="text-base font-medium text-gray-900">
                  Your Tracking Link has been generated
                </h3>
              </div>
              <p className="mt-1 text-sm text-gray-600 mb-14">
                Include the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Link
                </a>{" "}
                to Your Store's Navigation Menu.
              </p>
              <div className="space-x-5">
                <Button variant="secondary">Copy Link</Button>
                <Button>Go To Navigation Menu</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
