import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Package, Settings } from "lucide-react";

const data = [
  { name: "Exception", value: 30 },
  { name: "Intransit", value: 100 },
  { name: "Pending", value: 110 },
  { name: "Delivered", value: 114 },
  { name: "Out for delivery", value: 40 },
];

const COLORS = ["#8B4513", "#A0522D", "#CD853F", "#DEB887", "#F4A460"];

export default function PerformanceDashboard() {
  return (
    <div className="container mx-auto p-4 sm:p-6 bg-[#FFF5E6]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Instant Dive into Your Performance Metrics
      </h1>

      <Tabs defaultValue="lifetime" className="mb-4 sm:mb-6">
        <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ">
          <TabsTrigger
            value="lifetime"
            className="rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            Lifetime
          </TabsTrigger>
          <TabsTrigger
            value="last-week"
            className="rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            Last Week
          </TabsTrigger>
          <TabsTrigger
            value="last-month"
            className="rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            Last Month
          </TabsTrigger>
          <TabsTrigger
            value="last-year"
            className="rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            Last Year
          </TabsTrigger>
          <TabsTrigger
            value="custom"
            className="rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            Customize Time Line
          </TabsTrigger>
          <Button variant="ghost" size="icon" className="ml-2">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Customize time line</span>
          </Button>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 sm:gap-6">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg">
              <span>Shipment Updates</span>
              <span className="text-sm font-normal mt-2 sm:mt-0">
                Total Orders: 394
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Button variant="outline" size="sm" className=" text-xs">
                Delivered
              </Button>
              <Button variant="outline" size="sm" className=" text-xs">
                Out for delivery
              </Button>
              <Button variant="outline" size="sm" className=" text-xs">
                Intransit
              </Button>
              <Button variant="outline" size="sm" className=" text-xs">
                Pending
              </Button>
              <Button variant="outline" size="sm" className=" text-xs">
                Exception
              </Button>
            </div>
            <div className="h-[200px] sm:h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {data.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              {data.map((entry, index) => (
                <div key={entry.name} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-xs">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-[#B8860B] text-white">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">
              Star Facts about your orders!!!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                There are 8 shipments that have been in out for delivery for
                more than 3 days.
              </li>
              <li>There are 5 shipments in exception right now.</li>
              <li>The maximum chargebacks are from Miami.</li>
            </ul>
            <Button className="mt-4 w-full text-xs sm:text-sm bg-white text-[#B8860B] hover:bg-gray-100">
              Check Orders Page
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">
              Tracking Page Views Vs Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-xs sm:text-sm">
              Understand user engagement patterns and optimize your tracking
              page for enhanced customer experiences.
            </p>
            <div className="flex flex-col gap-4">
              <Card className="bg-[#FFDAB9]">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-xs font-medium">Orders</p>
                    <p className="text-2xl sm:text-3xl font-bold">80</p>
                  </div>
                  <Package className="w-6 h-6" />
                </CardContent>
              </Card>
              <Card className="bg-[#FFD700]">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-xs font-medium">Tracking Page Views</p>
                    <p className="text-2xl sm:text-3xl font-bold">44</p>
                  </div>
                  <Eye className="w-6 h-6" />
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
