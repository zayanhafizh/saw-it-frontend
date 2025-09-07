import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Target, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <Leaf className="h-8 w-8 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">About Saw-It</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Revolutionizing palm oil plantation management through intelligent data analytics and AI-powered insights
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-emerald-600" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              To empower palm oil plantation managers with cutting-edge technology that optimizes production, enhances
              sustainability, and drives informed decision-making through comprehensive data analytics and artificial
              intelligence.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-600" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              To become the leading digital platform for sustainable palm oil plantation management, contributing to
              increased productivity while maintaining environmental responsibility and supporting the livelihoods of
              farming communities.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Features Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Features</CardTitle>
          <CardDescription>Comprehensive tools designed for modern plantation management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                Dashboard Analytics
              </Badge>
              <p className="text-sm text-gray-600">
                Real-time production monitoring with interactive charts and leaderboards
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                Production Estimates
              </Badge>
              <p className="text-sm text-gray-600">Advanced forecasting with filtering and search capabilities</p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                Palm-AI Assistant
              </Badge>
              <p className="text-sm text-gray-600">AI-powered chatbot for instant insights and recommendations</p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                Data Management
              </Badge>
              <p className="text-sm text-gray-600">Streamlined data upload and processing for accurate analytics</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team & Technology */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-600" />
              Our Team
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Built by a dedicated team of agricultural technologists, data scientists, and software engineers
              passionate about sustainable agriculture and digital innovation.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Core Values</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sustainability and environmental responsibility</li>
                <li>• Data-driven decision making</li>
                <li>• User-centric design and experience</li>
                <li>• Continuous innovation and improvement</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Powered by modern web technologies and cloud infrastructure for reliability, scalability, and performance.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">AI/ML Integration</Badge>
              <Badge variant="outline">Real-time Analytics</Badge>
              <Badge variant="outline">Cloud Infrastructure</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Ready to transform your plantation management? Contact us to learn more.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-sm text-gray-600">info@saw-it.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Support</h4>
              <p className="text-sm text-gray-600">support@saw-it.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Version</h4>
              <p className="text-sm text-gray-600">v1.0.0 Beta</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
