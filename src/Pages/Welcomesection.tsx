import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Info } from "lucide-react";

export const Welcomesection = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Welcome, John Mathew!!
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="bg-white overflow-hidden shadow rounded-lg">
          <CardContent className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Order Sync Successful!
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Your order details from the last 30 days have been successfully
              synced. Check them out now!
            </p>
            <div className="mt-4">
              <Button variant="secondary">Explore Your Orders</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 overflow-hidden shadow rounded-lg">
          <CardContent className="px-4 py-5 sm:p-6">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
              <h3 className="text-lg font-medium text-gray-900">
                Customize Customer Notification
              </h3>
            </div>
            <p className="mt-1 text-sm text-gray-600">
              Tailor Your Email Experience: Set the Sender Email and Choose
              Notification Triggers
            </p>
            <div className="mt-4">
              <Button variant="secondary">Configure Notifications</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 overflow-hidden shadow rounded-lg">
          <CardContent className="px-4 py-5 sm:p-6">
            <div className="flex items-center mb-2">
              <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
              <h3 className="text-lg font-medium text-gray-900">
                Your Tracking Link has been generated
              </h3>
            </div>
            <p className="mt-1 text-sm text-gray-600">
              Include the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Link
              </a>{" "}
              to Your Store's Navigation Menu.
            </p>
            <div className="mt-4 space-x-2">
              <Button variant="secondary">Copy Link</Button>
              <Button>Go To Navigation Menu</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
