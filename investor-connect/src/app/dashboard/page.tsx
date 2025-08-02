"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Users,
  DollarSign,
  Briefcase,
  Building2,
  GraduationCap,
  Bell,
  TrendingUp,
  Clock,
  ThumbsUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock user data - in a real app, this would come from your authentication system
const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  userType: "business", // One of: investor, business, professional, student
  avatar: null,
};

// Mock recent activities
const recentActivities = [
  {
    id: 1,
    title: "New investor viewed your profile",
    description: "Sarah Johnson from Tech Ventures showed interest in your business.",
    time: "2 hours ago",
    icon: Users,
    color: "text-blue-500 bg-blue-100",
  },
  {
    id: 2,
    title: "New message received",
    description: "David from CapitalFund sent you a message about your funding request.",
    time: "5 hours ago",
    icon: Bell,
    color: "text-amber-500 bg-amber-100",
  },
  {
    id: 3,
    title: "Service provider responded",
    description: "Marketing expert Maria accepted your service request.",
    time: "Yesterday",
    icon: ThumbsUp,
    color: "text-green-500 bg-green-100",
  },
  {
    id: 4,
    title: "Business profile views up 23%",
    description: "Your profile visibility has increased this week.",
    time: "2 days ago",
    icon: TrendingUp,
    color: "text-purple-500 bg-purple-100",
  },
];

// Mock recommended connections
const recommendedConnections = [
  {
    id: 1,
    name: "Tech Ventures Capital",
    category: "Investor",
    specialization: "Technology Startups",
    matchPercentage: 92,
    icon: DollarSign,
    color: "text-blue-500 bg-blue-100",
  },
  {
    id: 2,
    name: "Sarah Williams",
    category: "Professional",
    specialization: "Marketing Strategy",
    matchPercentage: 88,
    icon: Briefcase,
    color: "text-purple-500 bg-purple-100",
  },
  {
    id: 3,
    name: "GreenField Innovations",
    category: "Business",
    specialization: "Sustainable Products",
    matchPercentage: 85,
    icon: Building2,
    color: "text-green-500 bg-green-100",
  },
  {
    id: 4,
    name: "Alex Johnson",
    category: "Student",
    specialization: "Business Analytics",
    matchPercentage: 80,
    icon: GraduationCap,
    color: "text-amber-500 bg-amber-100",
  },
];

// Dashboard stats based on user type
const userTypeStats = {
  investor: [
    { id: "inv-1", title: "Active Investments", value: "12", icon: DollarSign, color: "text-blue-500 bg-blue-100" },
    { id: "inv-2", title: "Investment Inquiries", value: "8", icon: Users, color: "text-amber-500 bg-amber-100" },
    { id: "inv-3", title: "Return Rate", value: "14.2%", icon: TrendingUp, color: "text-green-500 bg-green-100" },
    { id: "inv-4", title: "Pending Reviews", value: "3", icon: Clock, color: "text-purple-500 bg-purple-100" },
  ],
  business: [
    { id: "biz-1", title: "Investor Views", value: "28", icon: Users, color: "text-blue-500 bg-blue-100" },
    { id: "biz-2", title: "Funding Opportunities", value: "5", icon: DollarSign, color: "text-amber-500 bg-amber-100" },
    { id: "biz-3", title: "Service Providers", value: "12", icon: Briefcase, color: "text-green-500 bg-green-100" },
    { id: "biz-4", title: "Talent Applications", value: "7", icon: GraduationCap, color: "text-purple-500 bg-purple-100" },
  ],
  professional: [
    { id: "pro-1", title: "Client Requests", value: "9", icon: Building2, color: "text-blue-500 bg-blue-100" },
    { id: "pro-2", title: "Active Projects", value: "4", icon: Briefcase, color: "text-amber-500 bg-amber-100" },
    { id: "pro-3", title: "Completed Services", value: "23", icon: ThumbsUp, color: "text-green-500 bg-green-100" },
    { id: "pro-4", title: "Profile Views", value: "42", icon: Users, color: "text-purple-500 bg-purple-100" },
  ],
  student: [
    { id: "stu-1", title: "Internship Offers", value: "3", icon: Building2, color: "text-blue-500 bg-blue-100" },
    { id: "stu-2", title: "Applications Sent", value: "8", icon: GraduationCap, color: "text-amber-500 bg-amber-100" },
    { id: "stu-3", title: "Learning Resources", value: "15", icon: Briefcase, color: "text-green-500 bg-green-100" },
    { id: "stu-4", title: "Company Views", value: "34", icon: Users, color: "text-purple-500 bg-purple-100" },
  ],
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Get the stats for the current user type
  const userType = mockUser.userType as keyof typeof userTypeStats;
  const stats = userTypeStats[userType] || [];

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, {mockUser.name}</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your {userType === "investor" ? "investments" : userType === "business" ? "business" : userType === "professional" ? "services" : "internship journey"} today.
          </p>
        </div>
        <div className="mt-4 flex space-x-2 md:mt-0">
          <Button variant="outline">Download Report</Button>
          <Button>View Opportunities</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activities">Recent Activities</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className={`rounded-full p-2 ${stat.color}`}>
                    <stat.icon className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    +{Math.floor(Math.random() * 20) + 1}% from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Things you can do right now</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-between">
                  Complete Your Profile
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Browse {userType === "investor" ? "Investment Opportunities" : userType === "business" ? "Investors" : userType === "professional" ? "Business Needs" : "Internships"}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Check Messages
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Connections</CardTitle>
                <CardDescription>People who connected with you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.slice(0, 3).map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`rounded-full p-2 ${activity.color}`}>
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full">View All</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Networking and learning opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Investor Meetup</div>
                    <div className="text-xs text-muted-foreground">May 15, 2025</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Connect with potential investors in a casual setting.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Entrepreneur Workshop</div>
                    <div className="text-xs text-muted-foreground">May 22, 2025</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Learn strategies to scale your business effectively.
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full">View Calendar</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <h3 className="text-lg font-medium">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <Card key={activity.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={`rounded-full p-3 ${activity.color}`}>
                      <activity.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{activity.title}</h4>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <h3 className="text-lg font-medium">Recommended Connections</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {recommendedConnections.map((connection) => (
              <Card key={connection.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={`rounded-full p-3 ${connection.color}`}>
                      <connection.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{connection.name}</h4>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {connection.matchPercentage}% Match
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{connection.category}</p>
                      <p className="text-xs text-muted-foreground mt-1">Specialization: {connection.specialization}</p>
                      <div className="mt-3 flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">View Profile</Button>
                        <Button size="sm" className="flex-1">Connect</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button>Discover More Connections</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
