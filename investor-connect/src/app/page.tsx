import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Building2,
  Briefcase,
  GraduationCap,
  Users,
  ArrowRight,
  DollarSign,
  Lightbulb,
  HandshakeIcon
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center">
            <HandshakeIcon className="h-6 w-6 text-blue-600 mr-2" />
            <span className="font-bold text-xl">WolfConnects</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connect, Collaborate, and Grow Your Business
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                The ultimate platform connecting investors, businesses, professionals, and students in one ecosystem.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="flex gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#learn-more">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 border rounded-lg p-6 bg-white shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                  <DollarSign className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-medium text-center">Find Investors</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-green-600 mb-2" />
                  <h3 className="font-medium text-center">Showcase Ideas</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
                  <Users className="h-8 w-8 text-purple-600 mb-2" />
                  <h3 className="font-medium text-center">Hire Talent</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-amber-600 mb-2" />
                  <h3 className="font-medium text-center">Find Internships</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="features">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need to Succeed
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Our platform brings together all the essential components for business growth.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Investment Matching</h3>
              <p className="text-gray-500 mt-2">
                Connect with investors looking for opportunities matching your business profile.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-4">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Business Aid</h3>
              <p className="text-gray-500 mt-2">
                Get the resources, advice, and connections your business needs to thrive.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-purple-100 p-4">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Skill Marketplace</h3>
              <p className="text-gray-500 mt-2">
                Find professionals offering the exact skills your business needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-amber-100 p-4">
                <GraduationCap className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Internship Platform</h3>
              <p className="text-gray-500 mt-2">
                Connect students with businesses for meaningful internship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="how-it-works">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple Process, Powerful Results
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Getting started is easy. Follow these simple steps to begin your journey.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <span className="font-bold text-2xl text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold">Create Your Profile</h3>
              <p className="text-gray-500 mt-2">
                Sign up and build your profile as an investor, business owner, service provider, or student.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <span className="font-bold text-2xl text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold">Discover Opportunities</h3>
              <p className="text-gray-500 mt-2">
                Browse through our intelligent matching system to find the perfect connections.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <span className="font-bold text-2xl text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold">Connect & Collaborate</h3>
              <p className="text-gray-500 mt-2">
                Reach out, collaborate, and grow your network with our secure communication tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Join thousands of businesses, investors, professionals, and students already on our platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="flex gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Features</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Pricing</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">How it Works</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">About</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Team</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Careers</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Terms</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Privacy</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Cookies</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Licenses</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Twitter</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">LinkedIn</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Facebook</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600">Instagram</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between mt-8 pt-8 border-t border-gray-200 md:flex-row">
            <p className="text-sm text-gray-500">© 2025 WolfConnects. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
