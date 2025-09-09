import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Target, Users, Award, Mail, Phone, Globe, Star, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl mx-auto space-y-8 md:space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 relative">
          <div className="flex justify-center">
            <div className="relative">
              <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl">
                <Leaf className="h-10 w-10 md:h-12 md:w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              About Saw-It
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing palm oil plantation management through intelligent data analytics, AI-powered insights, and sustainable practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                <Globe className="mr-2 h-5 w-5" />
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100 hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-emerald-700 text-xl md:text-2xl">
                <div className="p-3 bg-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-white" />
                </div>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                To empower palm oil plantation managers with cutting-edge technology that optimizes production, enhances
                sustainability, and drives informed decision-making through comprehensive data analytics and artificial
                intelligence solutions.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-emerald-200 text-emerald-800 border-emerald-300">Innovation</Badge>
                <Badge className="bg-emerald-200 text-emerald-800 border-emerald-300">Sustainability</Badge>
                <Badge className="bg-emerald-200 text-emerald-800 border-emerald-300">Optimization</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-teal-700 text-xl md:text-2xl">
                <div className="p-3 bg-teal-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-white" />
                </div>
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                To become the leading digital platform for sustainable palm oil plantation management, contributing to
                increased productivity while maintaining environmental responsibility and supporting the livelihoods of
                farming communities worldwide.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-teal-200 text-teal-800 border-teal-300">Leadership</Badge>
                <Badge className="bg-teal-200 text-teal-800 border-teal-300">Environment</Badge>
                <Badge className="bg-teal-200 text-teal-800 border-teal-300">Community</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Overview */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-100">
            <div className="text-center">
              <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Platform Features
              </CardTitle>
              <CardDescription className="text-base md:text-lg mt-2">
                Comprehensive tools designed for modern plantation management
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: Star,
                  title: "Dashboard Analytics",
                  description: "Real-time production monitoring with interactive charts and comprehensive leaderboards",
                  color: "emerald"
                },
                {
                  icon: Target,
                  title: "Production Estimates",
                  description: "Advanced AI-powered forecasting with sophisticated filtering and search capabilities",
                  color: "teal"
                },
                {
                  icon: Zap,
                  title: "Palm-AI Assistant",
                  description: "Intelligent chatbot providing instant insights and personalized recommendations",
                  color: "cyan"
                },
                {
                  icon: Shield,
                  title: "Data Management",
                  description: "Secure data upload and processing for accurate analytics and reporting",
                  color: "indigo"
                }
              ].map((feature, index) => (
                <div key={index} className="group space-y-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`p-3 bg-${feature.color}-100 rounded-xl w-fit group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className={`font-semibold text-${feature.color}-700 text-lg`}>{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team & Technology */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-indigo-50 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-cyan-700 text-xl md:text-2xl">
                <div className="p-3 bg-cyan-600 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Built by a dedicated team of agricultural technologists, data scientists, and software engineers
                passionate about sustainable agriculture and digital innovation.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Core Values</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Sustainability & Environmental Responsibility",
                    "Data-Driven Decision Making",
                    "User-Centric Design & Experience", 
                    "Continuous Innovation & Improvement"
                  ].map((value, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white/70 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-indigo-700 text-xl md:text-2xl">
                <div className="p-3 bg-indigo-600 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Powered by modern web technologies and cloud infrastructure for reliability, scalability, and performance.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js", "TypeScript", "Tailwind CSS", "AI/ML Integration", 
                    "Real-time Analytics", "Cloud Infrastructure", "PostgreSQL", "Docker"
                  ].map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-sm px-3 py-1 hover:bg-indigo-50 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader className="border-b border-emerald-100 text-center">
            <CardTitle className="text-2xl md:text-3xl text-emerald-700">Get in Touch</CardTitle>
            <CardDescription className="text-base md:text-lg">
              Ready to transform your plantation management? Contact us to learn more about our solutions.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "info@saw-it.com",
                  description: "General inquiries"
                },
                {
                  icon: Phone,
                  title: "Support",
                  value: "support@saw-it.com",
                  description: "Technical assistance"
                },
                {
                  icon: Globe,
                  title: "Version",
                  value: "v2.0.0 Beta",
                  description: "Current release"
                }
              ].map((contact, index) => (
                <div key={index} className="text-center group p-4 rounded-xl hover:bg-white/50 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">{contact.title}</h4>
                  <p className="text-emerald-600 font-medium mb-1">{contact.value}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                <Mail className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
