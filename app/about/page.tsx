import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, Target, Award, Mail, Phone, Globe, Star, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-xl">
              <Leaf className="h-10 w-10 text-white" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Tentang Saw-It
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Platform manajemen perkebunan kelapa sawit berbasis AI dengan analitik data real-time dan wawasan cerdas
              untuk optimalisasi produksi berkelanjutan
            </p>
          </div>
        </div>

        <Card className="border-0 shadow-xl bg-white/90">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Misi & Visi Kami
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-emerald-700 text-lg">Misi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Memberdayakan pengelola perkebunan dengan teknologi canggih untuk mengoptimalkan produksi dan
                  mendorong pengambilan keputusan berbasis data.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-teal-600" />
                  <h3 className="font-semibold text-teal-700 text-lg">Visi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi platform digital terdepan untuk manajemen perkebunan kelapa sawit berkelanjutan dengan
                  meningkatkan produktivitas dan tanggung jawab lingkungan.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-white/90">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Fitur Utama
            </CardTitle>
            <CardDescription className="text-lg">Solusi komprehensif untuk manajemen perkebunan modern</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Star,
                  title: "Dashboard Analitik",
                  description: "Monitoring produksi real-time dengan visualisasi data interaktif",
                  color: "emerald",
                },
                {
                  icon: Target,
                  title: "Estimasi Produksi",
                  description: "Prediksi berbasis AI untuk perencanaan produksi yang akurat",
                  color: "teal",
                },
                {
                  icon: Zap,
                  title: "Asisten Palm-AI",
                  description: "Chatbot cerdas untuk wawasan dan rekomendasi personal",
                  color: "cyan",
                },
                {
                  icon: Shield,
                  title: "Manajemen Data",
                  description: "Pengelolaan data aman untuk analitik dan pelaporan akurat",
                  color: "indigo",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`p-3 bg-${feature.color}-100 rounded-xl w-fit mx-auto`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className={`font-semibold text-${feature.color}-700`}>{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-emerald-700">Hubungi Kami</CardTitle>
            <CardDescription className="text-lg">
              Siap mentransformasi manajemen perkebunan Anda? Hubungi tim kami untuk informasi lebih lanjut.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="p-3 bg-emerald-600 rounded-xl w-fit mx-auto">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-emerald-600 font-medium">info@saw-it.com</p>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-teal-600 rounded-xl w-fit mx-auto">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Dukungan</h4>
                <p className="text-teal-600 font-medium">support@saw-it.com</p>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-cyan-600 rounded-xl w-fit mx-auto">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Versi</h4>
                <p className="text-cyan-600 font-medium">v2.0.0 Beta</p>
              </div>
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
