import { Button } from "@/components/ui/button";
import { StarIcon, BoltIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "@/components/ui/input";

export default function FunctionalityShowcase() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold mb-6">
        Discover the Heart of Our Functionality
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto  gap-6">
        <Card className="md:col-span-1 row-span-2">
          <CardHeader>
            <CardTitle>
              Elevate Your Brand Aesthetics with Custom Tracking Page Styles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Immerse your customers in a branded experience by personalizing
              the colors on your tracking page.
            </p>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="accent-color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Accent Color
                </label>
                <div className="flex items-center mt-1">
                  <Input
                    id="accent-color"
                    defaultValue="FF9898"
                    className="mr-2"
                  />
                  <div className="w-6 h-6 bg-[#FF9898] rounded"></div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text-color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Text Color
                </label>
                <div className="flex items-center mt-1">
                  <Input
                    id="text-color"
                    defaultValue="571010"
                    className="mr-2"
                  />
                  <div className="w-6 h-6 bg-[#571010] rounded"></div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="bg-color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Background Color
                </label>
                <div className="flex items-center mt-1">
                  <Input id="bg-color" defaultValue="FFEAEA" className="mr-2" />
                  <div className="w-6 h-6 bg-[#FFEAEA] rounded"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline">Preview</Button>
                <Button>Apply Colors</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 row-span-1">
          <CardHeader>
            <CardTitle>
              Exclusive Onboarding Support for High-Volume Brands
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Unlock personalized guidance! Book a one-on-one onboarding call to
              streamline your experience.
            </p>
            <Button>Schedule A Call</Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 row-span-1">
          <CardHeader>
            <CardTitle>Explore Our Integrated Ecosystem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Discover a variety of popular integrations tailored for your
              convenience.
            </p>
            <div className="flex space-x-4 mb-10">
              <StarIcon className="w-8 h-8 text-orange-500" />
              <BoltIcon className="w-8 h-8 text-pink-500" />
            </div>
            <Button>Explore Integrations</Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-1 ">
          <CardHeader>
            <CardTitle>Seamlessly Integrate Custom HTML Elements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Unleash creativity with our Custom HTML feature. Add links, custom
              messages, or any HTML content to elevate the tracking page
              experience for your customers.
            </p>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="html-link"
                  className="block text-sm font-medium text-gray-700"
                >
                  HTML Link
                </label>
                <Input id="html-link" placeholder="Value" className="mt-1" />
              </div>
              <div className="flex justify-between">
                <Button variant="outline">Preview</Button>
                <Button>Apply changes</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
