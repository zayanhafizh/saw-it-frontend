"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, MapPin, Brain, Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Fitur", href: "#features" },
  { name: "Kontak", href: "#contact" },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Saw-It</span>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shadow-lg overflow-hidden">
                  <img src="/saw-it-logo.png" alt="Saw-It Logo" className="h-8 w-8 object-contain" />
                </div>
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Saw-It</span>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <ThemeToggle />
            <Link href="/dashboard">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Masuk Dashboard</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Saw-It</span>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 overflow-hidden">
                    <img src="/saw-it-logo.png" alt="Saw-It Logo" className="h-6 w-6 object-contain" />
                  </div>
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Saw-It</span>
                </div>
              </Link>
              <Button
                variant="ghost"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Masuk Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-cyan-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20">
              Platform AI terdepan untuk kelapa sawit.{" "}
              <Link href="/about" className="font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="absolute inset-0" aria-hidden="true" />
                Pelajari lebih lanjut <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
              Revolusi Manajemen{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Kelapa Sawit
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Tingkatkan produktivitas perkebunan dengan teknologi AI canggih, analitik real-time, dan prediksi yang
              akurat untuk hasil panen optimal.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/dashboard">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                  Mulai Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Demo Langsung <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-cyan-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">Fitur Unggulan</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Semua yang Anda butuhkan untuk mengelola perkebunan
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Platform lengkap dengan teknologi AI terdepan untuk optimasi perkebunan kelapa sawit Anda.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-600">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  Estimasi Produksi
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">
                    Prediksi akurat hasil panen berdasarkan data historis, kondisi cuaca, dan analisis NDVI dengan AI.
                  </p>
                  <p className="mt-6">
                    <Link
                      href="/estimate"
                      className="text-sm font-semibold leading-6 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                    >
                      Lihat estimasi <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-cyan-600">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  Asisten Palm-AI
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">
                    Konsultasi dengan AI untuk mendapatkan rekomendasi pemeliharaan, pupuk, dan strategi peningkatan
                    hasil.
                  </p>
                  <p className="mt-6">
                    <Link
                      href="/palm-ai"
                      className="text-sm font-semibold leading-6 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                    >
                      Chat dengan AI <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-teal-600">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  Pemetaan Spasial
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">
                    Visualisasi area produktif dan monitoring kesehatan tanaman dengan peta interaktif real-time.
                  </p>
                  <p className="mt-6">
                    <Link
                      href="/dashboard"
                      className="text-sm font-semibold leading-6 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                    >
                      Lihat peta <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-emerald-50 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                Dipercaya oleh ribuan petani
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Platform yang telah membantu meningkatkan produktivitas perkebunan di seluruh Indonesia
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-white dark:bg-gray-900 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">Hektar Termonitor</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  50,000+
                </dd>
              </div>
              <div className="flex flex-col bg-white dark:bg-gray-900 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">Peningkatan Hasil</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">25%</dd>
              </div>
              <div className="flex flex-col bg-white dark:bg-gray-900 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">Pengguna Aktif</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  5,000+
                </dd>
              </div>
              <div className="flex flex-col bg-white dark:bg-gray-900 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">Akurasi Prediksi</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">94%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600 dark:bg-emerald-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siap meningkatkan produktivitas perkebunan?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100">
              Bergabunglah dengan ribuan petani yang telah merasakan manfaat teknologi AI untuk kelapa sawit.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                  Mulai Gratis
                </Button>
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-emerald-100">
                Pelajari lebih lanjut <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/about" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              Tentang
            </Link>
            <Link href="/dashboard" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              Dashboard
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              Kontak
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
              &copy; 2024 Saw-It Platform. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
