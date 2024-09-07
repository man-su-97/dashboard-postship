import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "@/components/ui/input";
import PaypalIcon from "@/assets/IconComponenets/PaypalIcon";
import { InstagramIcon } from "@/assets/IconComponenets/InstgramIcon";
import GAnalyticsIcon from "@/assets/IconComponenets/GoogleAnalytics";
import ShopifyIcon from "@/assets/IconComponenets/ShopifyIcon";
import AliIcon from "@/assets/IconComponenets/AliIcon";

export default function FunctionalityShowcase() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold my-10">
        Discover the Heart of Our Functionality
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 auto-rows-auto  gap-6">
        <Card className="lg:col-span-3 lg:row-span-3">
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
                    className="mr-3"
                  />
                  <div className="w-20 h-7 bg-[#FF9898] rounded-md "></div>
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
                    className="mr-3"
                  />
                  <div className="w-20 h-7 bg-[#571010] rounded-md"></div>
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
                  <div className="w-20 h-7 bg-[#FFEAEA] rounded-md"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline">Preview</Button>
                <Button>Apply Colors</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4 lg:row-span-1">
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

        <Card className="lg:col-span-4 lg:row-span-2">
          <CardHeader>
            <CardTitle>Explore Our Integrated Ecosystem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Discover a variety of popular integrations tailored for your
              convenience.
            </p>
            <div className="flex space-x-5 mb-10 items-center">
              <PaypalIcon />
              <AliIcon />
              <InstagramIcon />
              <GAnalyticsIcon />
              <ShopifyIcon />
            </div>
            <Button>Explore Integrations</Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 lg:row-span-3 lg:col-start-8 lg:row-start-1 ">
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
                <Input
                  id="html-link"
                  placeholder="Value"
                  className="my-2 h-36"
                />
              </div>
              <div className="flex justify-between">
                <Button variant="outline">Preview</Button>
                <Button className="text-xs">Apply changes</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
