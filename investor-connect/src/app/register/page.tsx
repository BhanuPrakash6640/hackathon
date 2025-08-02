"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
import {
  Building2,
  Briefcase,
  GraduationCap,
  DollarSign,
  HandshakeIcon,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the user types
const userTypes = [
  {
    id: 'investor',
    title: 'Investor',
    description: 'Looking to invest in promising businesses',
    icon: DollarSign,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'business',
    title: 'Business Owner',
    description: 'Looking for investment or business support',
    icon: Building2,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'professional',
    title: 'Professional',
    description: 'Offering services and expertise to businesses',
    icon: Briefcase,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'student',
    title: 'Student',
    description: 'Looking for internships and learning opportunities',
    icon: GraduationCap,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  }
];

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function RegisterPage() {
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);
  const [registrationStep, setRegistrationStep] = useState<'userType' | 'details'>('userType');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleUserTypeSelection = (userType: string) => {
    setSelectedUserType(userType);
  };

  const proceedToDetails = () => {
    if (selectedUserType) {
      setRegistrationStep('details');
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // In a real app, this would call an API with the form values and selectedUserType
    console.log({
      ...values,
      userType: selectedUserType
    });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard would happen here after successful registration
      window.location.href = "/dashboard";
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center">
            <HandshakeIcon className="h-8 w-8 text-blue-600 mr-2" />
            <span className="font-bold text-2xl">WolfConnects</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Tabs defaultValue="userType" value={registrationStep}>
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="userType">
                <span className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">1</span>
                  Select User Type
                </span>
              </TabsTrigger>
              <TabsTrigger value="details" disabled={!selectedUserType}>
                <span className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">2</span>
                  Account Details
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="userType" className="p-6">
              <h3 className="text-xl font-semibold mb-6">I'm joining as...</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`
                      border-2 rounded-lg p-4 cursor-pointer transition-all
                      ${selectedUserType === type.id ? `${type.borderColor} ring-2 ring-offset-2 ring-blue-400` : 'border-gray-200 hover:border-gray-300'}
                    `}
                    onClick={() => handleUserTypeSelection(type.id)}
                  >
                    <div className="flex items-start">
                      <div className={`${type.bgColor} p-3 rounded-full mr-4`}>
                        <type.icon className={`h-6 w-6 ${type.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{type.title}</h4>
                        <p className="text-sm text-gray-500">{type.description}</p>
                      </div>
                      {selectedUserType === type.id && (
                        <CheckCircle2 className="h-6 w-6 text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={proceedToDetails}
                  disabled={!selectedUserType}
                  className="flex items-center"
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="details" className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="pt-4 flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                      I agree to the{" "}
                      <Link href="/terms" className="font-medium text-blue-600 hover:text-blue-500">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setRegistrationStep('userType')}
                    >
                      Back
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create account"}
                    </Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
