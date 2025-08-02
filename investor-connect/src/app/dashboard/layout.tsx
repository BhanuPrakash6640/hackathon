"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Building2,
  Briefcase,
  GraduationCap,
  DollarSign,
  HandshakeIcon,
  Home,
  MessageSquare,
  User,
  Users,
  Search,
  Settings,
  LogOut,
  MenuIcon,
  X,
  Bell,
  BookOpen
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock user data - in a real app, this would come from your authentication system
const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  userType: "business", // One of: investor, business, professional, student
  avatar: null,
};

// Navigation links based on user type
const navigationLinks = {
  common: [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Messages", path: "/dashboard/messages", icon: MessageSquare },
    { name: "Profile", path: "/dashboard/profile", icon: User },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ],
  investor: [
    { name: "Investment Opportunities", path: "/dashboard/opportunities", icon: Search },
    { name: "My Investments", path: "/dashboard/investments", icon: DollarSign },
  ],
  business: [
    { name: "Find Investors", path: "/dashboard/find-investors", icon: DollarSign },
    { name: "Talent Pool", path: "/dashboard/talent", icon: Users },
    { name: "Business Services", path: "/dashboard/services", icon: Briefcase },
  ],
  professional: [
    { name: "My Services", path: "/dashboard/my-services", icon: Briefcase },
    { name: "Client Opportunities", path: "/dashboard/client-opportunities", icon: Building2 },
  ],
  student: [
    { name: "Internships", path: "/dashboard/internships", icon: GraduationCap },
    { name: "Learning Resources", path: "/dashboard/resources", icon: BookOpen },
  ],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Get the navigation links for the current user type
  const userType = mockUser.userType as keyof typeof navigationLinks;
  const userSpecificLinks = navigationLinks[userType] || [];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link href="/" className="flex items-center">
            <HandshakeIcon className="h-6 w-6 text-blue-600 mr-2" />
            <span className="font-bold text-xl">WolfConnects</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-5 px-2 space-y-1">
          {navigationLinks.common.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${
                    isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
          <div className="pt-5 border-t border-gray-200">
            <h4 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {userType === "investor"
                ? "Investments"
                : userType === "business"
                ? "Business Tools"
                : userType === "professional"
                ? "Professional"
                : "Student Resources"}
            </h4>
            <div className="mt-1 space-y-1">
              {userSpecificLinks.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex items-center h-16 flex-shrink-0 px-4 border-b">
              <Link href="/" className="flex items-center">
                <HandshakeIcon className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-bold text-xl">WolfConnects</span>
              </Link>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigationLinks.common.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <item.icon
                        className={`mr-3 h-5 w-5 ${
                          isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"
                        }`}
                      />
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-5 border-t border-gray-200">
                  <h4 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {userType === "investor"
                      ? "Investments"
                      : userType === "business"
                      ? "Business Tools"
                      : userType === "professional"
                      ? "Professional"
                      : "Student Resources"}
                  </h4>
                  <div className="mt-1 space-y-1">
                    {userSpecificLinks.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.name}
                          href={item.path}
                          className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          <item.icon
                            className={`mr-3 h-5 w-5 ${
                              isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"
                            }`}
                          />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-4 border-r border-gray-200 text-gray-500 md:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {pathname === "/dashboard"
                  ? "Dashboard"
                  : pathname.split("/").pop()?.replace("-", " ")}
              </h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <span className="sr-only">Open user menu</span>
                      <Avatar>
                        <AvatarImage src={mockUser.avatar || ""} alt={mockUser.name} />
                        <AvatarFallback>
                          {mockUser.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>{mockUser.name}</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 md:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
