import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Target, Users, Award, Mail, Phone, Globe, Star, Zap, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl mx-auto space-y-8 md:space-y-12">
        {/* Back Button */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Kembali ke Dashboard</Button>
          </Link>
        </div>

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-600 dark:text-emerald-400">
              Tentang Saw-It
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Merevolusi manajemen perkebunan kelapa sawit melalui analitik data cerdas, wawasan bertenaga AI, dan
              praktik berkelanjutan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                <Globe className="mr-2 h-5 w-5" />
                Pelajari Lebih Lanjut
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Hubungi Kami
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
                Misi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Memberdayakan pengelola perkebunan kelapa sawit dengan teknologi terdepan yang mengoptimalkan produksi,
                meningkatkan keberlanjutan, dan mendorong pengambilan keputusan yang tepat melalui analitik data
                komprehensif dan solusi kecerdasan buatan.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-emerald-200 text-emerald-800 border-emerald-300">Inovasi</Badge>
                <Badge className="bg-emerald-200 text-emerald-800 border-emerald-300">Keberlanjutan</Badge>
                <Badge className="bg-emerald-200 text-emerald-800 border-emerald-300">Optimalisasi</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-teal-700 text-xl md:text-2xl">
                <div className="p-3 bg-teal-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-white" />
                </div>
                Visi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Menjadi platform digital terdepan untuk manajemen perkebunan kelapa sawit berkelanjutan, berkontribusi
                pada peningkatan produktivitas sambil mempertahankan tanggung jawab lingkungan dan mendukung mata
                pencaharian komunitas petani di seluruh dunia.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-teal-200 text-teal-800 border-teal-300">Kepemimpinan</Badge>
                <Badge className="bg-teal-200 text-teal-800 border-teal-300">Lingkungan</Badge>
                <Badge className="bg-teal-200 text-teal-800 border-teal-300">Komunitas</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Overview */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-100">
            <div className="text-center">
              <CardTitle className="text-2xl md:text-3xl text-emerald-600 dark:text-emerald-400">
                Fitur Platform
              </CardTitle>
              <CardDescription className="text-base md:text-lg mt-2">
                Alat komprehensif yang dirancang untuk manajemen perkebunan modern
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: Star,
                  title: "Analitik Dashboard",
                  description:
                    "Pemantauan produksi real-time dengan grafik interaktif dan papan peringkat komprehensif",
                  color: "emerald",
                },
                {
                  icon: Target,
                  title: "Estimasi Produksi",
                  description: "Perkiraan bertenaga AI canggih dengan kemampuan filter dan pencarian yang canggih",
                  color: "teal",
                },
                {
                  icon: Zap,
                  title: "Asisten Palm-AI",
                  description: "Chatbot cerdas yang memberikan wawasan instan dan rekomendasi yang dipersonalisasi",
                  color: "cyan",
                },
                {
                  icon: Shield,
                  title: "Manajemen Data",
                  description: "Unggahan dan pemrosesan data aman untuk analitik dan pelaporan yang akurat",
                  color: "indigo",
                },
              ].map((feature, index) => (
                <div key={index} className="group space-y-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div
                    className={`p-3 bg-${feature.color}-100 rounded-xl w-fit group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className={`font-semibold text-${feature.color}-700 text-lg`}>{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
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
                Tim Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Dibangun oleh tim ahli teknologi pertanian, ilmuwan data, dan insinyur perangkat lunak yang berdedikasi
                dan bersemangat tentang pertanian berkelanjutan dan inovasi digital.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Nilai-nilai Inti</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Keberlanjutan & Tanggung Jawab Lingkungan",
                    "Pengambilan Keputusan Berbasis Data",
                    "Desain & Pengalaman Berpusat pada Pengguna",
                    "Inovasi & Perbaikan Berkelanjutan",
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
                Stack Teknologi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Didukung oleh teknologi web modern dan infrastruktur cloud untuk keandalan, skalabilitas, dan kinerja.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Teknologi</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Integrasi AI/ML",
                    "Analitik Real-time",
                    "Infrastruktur Cloud",
                    "PostgreSQL",
                    "Docker",
                  ].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm px-3 py-1 hover:bg-indigo-50 transition-colors"
                    >
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
            <CardTitle className="text-2xl md:text-3xl text-emerald-700">Hubungi Kami</CardTitle>
            <CardDescription className="text-base md:text-lg">
              Siap mentransformasi manajemen perkebunan Anda? Hubungi kami untuk mempelajari lebih lanjut tentang solusi
              kami.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "info@saw-it.com",
                  description: "Pertanyaan umum",
                },
                {
                  icon: Phone,
                  title: "Dukungan",
                  value: "support@saw-it.com",
                  description: "Bantuan teknis",
                },
                {
                  icon: Globe,
                  title: "Versi",
                  value: "v2.0.0 Beta",
                  description: "Rilis saat ini",
                },
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
                Hubungi Tim Kami
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
