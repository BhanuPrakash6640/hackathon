"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Users,
  DollarSign,
  Briefcase,
  Building2,
  GraduationCap,
  MapPin,
  Shield,
  Star,
  ArrowUpDown,
  ThumbsUp,
  Heart,
  X,
  Check,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

// Mock user data - in a real app, this would come from your authentication system
const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  userType: "business", // One of: investor, business, professional, student
  avatar: null,
};

// Mock data for discovery
const investorData = [
  {
    id: 1,
    name: "Tech Ventures Capital",
    image: null,
    location: "San Francisco, CA",
    description: "Investing in early-stage tech startups with focus on AI, SaaS, and fintech.",
    investmentRange: "$250K - $2M",
    sectors: ["Technology", "AI", "SaaS", "Fintech"],
    matchScore: 92,
    connectionStatus: "connect", // connect, pending, connected
    verified: true,
    portfolioCount: 48,
    userType: "investor",
  },
  {
    id: 2,
    name: "Green Future Fund",
    image: null,
    location: "Boston, MA",
    description: "Impact investing firm focused on sustainable technology and renewable energy solutions.",
    investmentRange: "$500K - $5M",
    sectors: ["CleanTech", "Sustainability", "Renewable Energy"],
    matchScore: 85,
    connectionStatus: "connected",
    verified: true,
    portfolioCount: 27,
    userType: "investor",
  },
  {
    id: 3,
    name: "Growth Partners LLC",
    image: null,
    location: "New York, NY",
    description: "We help businesses scale through strategic investments and operational expertise.",
    investmentRange: "$1M - $10M",
    sectors: ["Retail", "Healthcare", "Education", "Manufacturing"],
    matchScore: 78,
    connectionStatus: "connect",
    verified: true,
    portfolioCount: 32,
    userType: "investor",
  },
  {
    id: 4,
    name: "Angel Investors Network",
    image: null,
    location: "Austin, TX",
    description: "Group of angel investors looking for innovative startups with high growth potential.",
    investmentRange: "$50K - $500K",
    sectors: ["Technology", "E-commerce", "Health Tech"],
    matchScore: 90,
    connectionStatus: "pending",
    verified: false,
    portfolioCount: 15,
    userType: "investor",
  },
];

const businessData = [
  {
    id: 1,
    name: "EcoSolutions Inc.",
    image: null,
    location: "Portland, OR",
    description: "Developing innovative sustainable packaging solutions for businesses.",
    fundingNeeded: "$1.5M",
    sectors: ["CleanTech", "Sustainability", "Packaging"],
    stage: "Growth",
    matchScore: 88,
    connectionStatus: "connect",
    verified: true,
    founded: 2019,
    userType: "business",
  },
  {
    id: 2,
    name: "HealthTech Innovations",
    image: null,
    location: "Chicago, IL",
    description: "Creating AI-powered diagnostics tools for healthcare providers.",
    fundingNeeded: "$3M",
    sectors: ["Healthcare", "AI", "MedTech"],
    stage: "Series A",
    matchScore: 94,
    connectionStatus: "connected",
    verified: true,
    founded: 2020,
    userType: "business",
  },
  {
    id: 3,
    name: "EdLearn Platform",
    image: null,
    location: "Seattle, WA",
    description: "Online learning platform with personalized education paths.",
    fundingNeeded: "$750K",
    sectors: ["Education", "EdTech", "SaaS"],
    stage: "Seed",
    matchScore: 80,
    connectionStatus: "connect",
    verified: false,
    founded: 2022,
    userType: "business",
  },
  {
    id: 4,
    name: "Smart Retail Solutions",
    image: null,
    location: "Atlanta, GA",
    description: "Helping retail businesses with smart inventory and customer engagement.",
    fundingNeeded: "$2M",
    sectors: ["Retail", "Technology", "E-commerce"],
    stage: "Growth",
    matchScore: 75,
    connectionStatus: "connect",
    verified: true,
    founded: 2018,
    userType: "business",
  },
];

const professionalData = [
  {
    id: 1,
    name: "Sarah Williams",
    image: null,
    location: "New York, NY",
    description: "Marketing consultant specializing in digital growth strategies.",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Social Media"],
    experience: "8 years",
    rate: "$100/hr",
    matchScore: 95,
    connectionStatus: "connect",
    verified: true,
    completedProjects: 124,
    userType: "professional",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: null,
    location: "San Francisco, CA",
    description: "Full-stack developer with focus on scalable web applications.",
    skills: ["JavaScript", "React", "Node.js", "AWS", "MongoDB"],
    experience: "6 years",
    rate: "$120/hr",
    matchScore: 87,
    connectionStatus: "pending",
    verified: true,
    completedProjects: 78,
    userType: "professional",
  },
  {
    id: 3,
    name: "Emily Watson",
    image: null,
    location: "Chicago, IL",
    description: "Financial consultant helping businesses with fundraising and financial planning.",
    skills: ["Financial Analysis", "Investment Planning", "Pitch Deck Creation", "Fundraising"],
    experience: "10 years",
    rate: "$150/hr",
    matchScore: 90,
    connectionStatus: "connected",
    verified: true,
    completedProjects: 96,
    userType: "professional",
  },
  {
    id: 4,
    name: "David Rodriguez",
    image: null,
    location: "Miami, FL",
    description: "Business strategist with expertise in market expansion and growth planning.",
    skills: ["Business Strategy", "Market Analysis", "Growth Hacking", "Sales"],
    experience: "7 years",
    rate: "$125/hr",
    matchScore: 82,
    connectionStatus: "connect",
    verified: true,
    completedProjects: 63,
    userType: "professional",
  },
];

const studentData = [
  {
    id: 1,
    name: "Alex Johnson",
    image: null,
    location: "Boston, MA",
    description: "MBA student with background in business analytics and marketing.",
    university: "Harvard Business School",
    degree: "MBA - Business Administration",
    skills: ["Data Analysis", "Marketing", "Business Development"],
    graduationYear: 2024,
    matchScore: 89,
    connectionStatus: "connect",
    verified: true,
    userType: "student",
  },
  {
    id: 2,
    name: "Priya Patel",
    image: null,
    location: "San Diego, CA",
    description: "Computer Science student with focus on AI and machine learning.",
    university: "UC San Diego",
    degree: "BS - Computer Science",
    skills: ["Python", "Machine Learning", "Data Science", "TensorFlow"],
    graduationYear: 2023,
    matchScore: 92,
    connectionStatus: "connected",
    verified: true,
    userType: "student",
  },
  {
    id: 3,
    name: "Jordan Taylor",
    image: null,
    location: "Austin, TX",
    description: "Finance student seeking opportunities in investment banking or venture capital.",
    university: "University of Texas",
    degree: "BBA - Finance",
    skills: ["Financial Analysis", "Valuation", "Excel", "Financial Modeling"],
    graduationYear: 2023,
    matchScore: 83,
    connectionStatus: "connect",
    verified: false,
    userType: "student",
  },
  {
    id: 4,
    name: "Emma Wilson",
    image: null,
    location: "Seattle, WA",
    description: "Marketing student with experience in digital marketing and social media management.",
    university: "University of Washington",
    degree: "BA - Marketing",
    skills: ["Social Media Marketing", "Content Creation", "SEO", "Google Analytics"],
    graduationYear: 2024,
    matchScore: 85,
    connectionStatus: "pending",
    verified: true,
    userType: "student",
  },
];

// Combined data for "All" tab
const allData = [
  ...investorData,
  ...businessData,
  ...professionalData,
  ...studentData,
].sort((a, b) => b.matchScore - a.matchScore);

// Function to get icon based on user type
const getUserTypeIcon = (userType: string) => {
  switch (userType) {
    case "investor":
      return DollarSign;
    case "business":
      return Building2;
    case "professional":
      return Briefcase;
    case "student":
      return GraduationCap;
    default:
      return Users;
  }
};

// Function to get color based on user type
const getUserTypeColor = (userType: string) => {
  switch (userType) {
    case "investor":
      return "bg-blue-100 text-blue-600";
    case "business":
      return "bg-green-100 text-green-600";
    case "professional":
      return "bg-purple-100 text-purple-600";
    case "student":
      return "bg-amber-100 text-amber-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default function DiscoverPage() {
  const [currentTab, setCurrentTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("match"); // match, name, location
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Get the right data based on the active tab
  const getTabData = () => {
    switch (currentTab) {
      case "investors":
        return investorData;
      case "businesses":
        return businessData;
      case "professionals":
        return professionalData;
      case "students":
        return studentData;
      default:
        return allData;
    }
  };

  // Filter and sort data
  const filteredData = getTabData()
    .filter((item) => {
      // Search filter
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !item.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Active filters (simplified - in a real app, this would be more sophisticated)
      if (activeFilters.length > 0) {
        // Simple example: if we have a "verified" filter, only show verified profiles
        if (activeFilters.includes("verified") && !item.verified) {
          return false;
        }

        // If we have a "connected" filter, only show already connected profiles
        if (activeFilters.includes("connected") && item.connectionStatus !== "connected") {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      // Sort data based on sortBy value
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "location") {
        return a.location.localeCompare(b.location);
      } else {
        return b.matchScore - a.matchScore; // Default sort by match score
      }
    });

  // Toggle a filter
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  // Function to render the connection button
  const renderConnectionButton = (status: string) => {
    switch (status) {
      case "connect":
        return (
          <Button size="sm" className="w-full">
            <Users className="mr-2 h-4 w-4" /> Connect
          </Button>
        );
      case "pending":
        return (
          <Button size="sm" variant="outline" className="w-full" disabled>
            <Clock className="mr-2 h-4 w-4" /> Pending
          </Button>
        );
      case "connected":
        return (
          <Button size="sm" variant="outline" className="w-full text-green-600 border-green-600 hover:bg-green-50">
            <ThumbsUp className="mr-2 h-4 w-4" /> Connected
          </Button>
        );
      default:
        return (
          <Button size="sm" className="w-full">
            <Users className="mr-2 h-4 w-4" /> Connect
          </Button>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Discover</h2>
        <p className="text-muted-foreground">
          Find and connect with investors, businesses, professionals, and students.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search by name, description, or skills..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Sort dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-1">
              <ArrowUpDown className="h-4 w-4" />
              Sort by: {sortBy === "match" ? "Match Score" : sortBy === "name" ? "Name" : "Location"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSortBy("match")}>
              Match Score {sortBy === "match" && <Check className="ml-2 h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("name")}>
              Name {sortBy === "name" && <Check className="ml-2 h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("location")}>
              Location {sortBy === "location" && <Check className="ml-2 h-4 w-4" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Filter dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-1">
              <Filter className="h-4 w-4" />
              Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toggleFilter("verified")}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                  checked={activeFilters.includes("verified")}
                  readOnly
                />
                <Shield className="mr-2 h-4 w-4" /> Verified Only
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleFilter("connected")}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                  checked={activeFilters.includes("connected")}
                  readOnly
                />
                <ThumbsUp className="mr-2 h-4 w-4" /> Connected Only
              </div>
            </DropdownMenuItem>
            {/* Add more filters as needed */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => (
            <Badge variant="outline" key={filter} className="flex items-center gap-1">
              {filter === "verified" ? (
                <>
                  <Shield className="h-3 w-3" /> Verified Only
                </>
              ) : filter === "connected" ? (
                <>
                  <ThumbsUp className="h-3 w-3" /> Connected Only
                </>
              ) : (
                filter
              )}
              <button onClick={() => toggleFilter(filter)}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={() => setActiveFilters([])}>
            Clear All
          </Button>
        </div>
      )}

      {/* Tabs for different user types */}
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="investors">Investors</TabsTrigger>
          <TabsTrigger value="businesses">Businesses</TabsTrigger>
          <TabsTrigger value="professionals">Professionals</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>

        {["all", "investors", "businesses", "professionals", "students"].map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-4">
            {filteredData.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg font-medium">No results found</p>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredData.map((item) => {
                  const UserTypeIcon = getUserTypeIcon(item.userType);
                  const typeColor = getUserTypeColor(item.userType);

                  return (
                    <Card key={`${item.userType}-${item.id}`} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={item.image || ""} alt={item.name} />
                              <AvatarFallback className="bg-gray-100 text-gray-800">
                                {item.name.split(" ").map((n) => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{item.name}</CardTitle>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3 mr-1" />
                                {item.location}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <Badge className={`${typeColor}`}>
                              <UserTypeIcon className="h-3 w-3 mr-1" />
                              {item.userType.charAt(0).toUpperCase() + item.userType.slice(1)}
                            </Badge>
                            {item.verified && (
                              <div className="flex items-center text-sm text-blue-600 mt-1">
                                <Shield className="h-3 w-3 mr-1" />
                                Verified
                              </div>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-700 line-clamp-2 mb-3">{item.description}</p>

                        {/* User type specific details */}
                        {item.userType === "investor" && (
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="font-medium">Range:</span>
                              <span className="ml-2">{(item as any).investmentRange}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="font-medium">Portfolio:</span>
                              <span className="ml-2">{(item as any).portfolioCount} companies</span>
                            </div>
                          </div>
                        )}

                        {item.userType === "business" && (
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="font-medium">Seeking:</span>
                              <span className="ml-2">{(item as any).fundingNeeded}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Building2 className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="font-medium">Stage:</span>
                              <span className="ml-2">{(item as any).stage}</span>
                            </div>
                          </div>
                        )}

                        {item.userType === "professional" && (
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="font-medium">Experience:</span>
                              <span className="ml-2">{(item as any).experience}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="font-medium">Rate:</span>
                              <span className="ml-2">{(item as any).rate}</span>
                            </div>
                          </div>
                        )}

                        {item.userType === "student" && (
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="font-medium">Education:</span>
                              <span className="ml-2">{(item as any).degree}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="font-medium">Graduation:</span>
                              <span className="ml-2">{(item as any).graduationYear}</span>
                            </div>
                          </div>
                        )}

                        {/* Sectors/Skills */}
                        <div className="mt-3">
                          {item.userType === "investor" || item.userType === "business" ? (
                            <div className="flex flex-wrap gap-1">
                              {(item as any).sectors.slice(0, 3).map((sector: string) => (
                                <Badge key={sector} variant="secondary" className="text-xs">
                                  {sector}
                                </Badge>
                              ))}
                              {(item as any).sectors.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{(item as any).sectors.length - 3} more
                                </Badge>
                              )}
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-1">
                              {(item as any).skills.slice(0, 3).map((skill: string) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {(item as any).skills.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{(item as any).skills.length - 3} more
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-4 border-t">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-bold">{item.matchScore}%</span>
                          <span className="text-sm text-muted-foreground ml-1">Match</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost">
                            <Heart className="h-4 w-4" />
                          </Button>
                          {renderConnectionButton(item.connectionStatus)}
                        </div>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            )}

            {filteredData.length > 0 && (
              <div className="flex justify-center mt-6">
                <Button variant="outline">Load More</Button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
