import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Calendar, Settings, Shield, Bell, Edit, Save, Camera } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                Profil Pengguna
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                Kelola informasi profil dan pengaturan akun Anda
              </p>
            </div>
            <Badge className="self-center md:self-start bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Akun Terverifikasi
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center border-b border-gray-100">
                <div className="relative mx-auto mb-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 text-2xl font-bold">JD</AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Camera className="h-3 w-3" />
                  </Button>
                </div>
                <CardTitle className="text-emerald-700">John Doe</CardTitle>
                <CardDescription>Administrator Perkebunan</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <Mail className="h-4 w-4 text-emerald-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">john.doe@sawit.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                    <Phone className="h-4 w-4 text-teal-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Telepon</p>
                      <p className="text-sm text-gray-600">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg">
                    <MapPin className="h-4 w-4 text-cyan-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Lokasi</p>
                      <p className="text-sm text-gray-600">Riau, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                    <Calendar className="h-4 w-4 text-indigo-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Bergabung</p>
                      <p className="text-sm text-gray-600">Januari 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 mt-6">
              <CardHeader>
                <CardTitle className="text-emerald-700 flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Statistik Aktivitas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Login Terakhir:</span>
                    <span className="text-sm font-medium">Hari ini, 09:15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Sesi:</span>
                    <span className="text-sm font-medium">156 kali</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Data Diunggah:</span>
                    <span className="text-sm font-medium">42 file</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Status Akun:</span>
                    <Badge className="bg-green-100 text-green-800 border-green-200">Aktif</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details & Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-emerald-700 flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Informasi Pribadi
                    </CardTitle>
                    <CardDescription>Kelola informasi profil Anda</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nama Depan</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nama Belakang</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@sawit.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input id="phone" defaultValue="+62 812-3456-7890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Posisi</Label>
                    <Input id="position" defaultValue="Administrator Perkebunan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Perusahaan</Label>
                    <Input id="company" defaultValue="PT Sawit Makmur" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Alamat</Label>
                    <Input id="address" defaultValue="Jl. Sawit Raya No. 123, Riau, Indonesia" />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="h-4 w-4 mr-2" />
                    Simpan Perubahan
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-emerald-700 flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Pengaturan Akun
                </CardTitle>
                <CardDescription>Kelola preferensi dan keamanan akun Anda</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Security Settings */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-emerald-600" />
                      Keamanan
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Autentikasi Dua Faktor</p>
                          <p className="text-sm text-gray-600">Tingkatkan keamanan akun dengan 2FA</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Kata Sandi</p>
                          <p className="text-sm text-gray-600">Terakhir diubah 3 bulan lalu</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Ubah
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Bell className="h-4 w-4 text-emerald-600" />
                      Notifikasi
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Email Notifikasi</p>
                          <p className="text-sm text-gray-600">Terima pembaruan via email</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Notifikasi Push</p>
                          <p className="text-sm text-gray-600">Notifikasi real-time di browser</p>
                        </div>
                        <Badge className="bg-gray-100 text-gray-800">Nonaktif</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Laporan Mingguan</p>
                          <p className="text-sm text-gray-600">Ringkasan kinerja setiap minggu</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Settings */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Privasi & Data</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Profil Publik</p>
                          <p className="text-sm text-gray-600">Tampilkan profil di direktori</p>
                        </div>
                        <Badge className="bg-gray-100 text-gray-800">Nonaktif</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Ekspor Data</p>
                          <p className="text-sm text-gray-600">Unduh semua data Anda</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Unduh
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardHeader className="border-b border-red-200">
                <CardTitle className="text-red-700">Zona Berbahaya</CardTitle>
                <CardDescription>Tindakan yang tidak dapat dibatalkan</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/70 rounded-lg border border-red-200">
                    <div>
                      <p className="font-medium text-gray-900">Nonaktifkan Akun</p>
                      <p className="text-sm text-gray-600">Nonaktifkan akun sementara</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                    >
                      Nonaktifkan
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/70 rounded-lg border border-red-200">
                    <div>
                      <p className="font-medium text-gray-900">Hapus Akun</p>
                      <p className="text-sm text-gray-600">Hapus akun dan semua data secara permanen</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-300 text-red-800 hover:bg-red-100 bg-transparent"
                    >
                      Hapus
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
