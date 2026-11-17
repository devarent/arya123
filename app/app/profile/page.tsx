import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Cloud,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Profil Muhammad Arya Fatthurahman",
  description:
    "Profil, portofolio, keahlian, dan proyek UTS Cloud Computing Tugas Sesi #8 (1) oleh Muhammad Arya Fatthurahman.",
};

const skills = [
  {
    title: "Web & Software",
    icon: Code2,
    items: ["Next.js", "React", "Tailwind CSS", "HTML/CSS", "JavaScript", "PHP/Laravel", "Python", "C++", "Dart/Flutter", "C#/.NET"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS EC2", "Docker", "Kubernetes", "Terraform", "Ansible", "Linux", "GitHub Actions", "Prometheus", "Grafana", "Google Cloud"],
  },
  {
    title: "Data, AI & Security",
    icon: ShieldCheck,
    items: ["Machine Learning", "TensorFlow/Keras", "CNN/MobileNetV3", "NLP/BERT", "Databricks", "Neo4j", "Cisco Networking", "Fortinet"],
  },
];

const projects = [
  {
    label: "UTS · Sesi #8 (1) · Cloud Computing",
    title: "Website Next.js di AWS EC2",
    description:
      "Membangun website dengan Next.js dan Tailwind CSS, lalu menjalankannya sebagai container Docker di Amazon Linux 2023 agar bisa dibuka lewat Elastic IP.",
    details: ["Terraform, EC2, Elastic IP & Security Group", "PuTTY/SSH sebagai ec2-user; port 22 dibatasi ke IP admin", "Docker Compose, Nginx, Next.js, dan PostgreSQL privat"],
    featured: true,
  },
  {
    label: "Web · Laravel",
    title: "Sistem Manajemen Karyawan",
    description:
      "Aplikasi pengelolaan data karyawan dengan impor spreadsheet, validasi, audit log, dan struktur MVC.",
    details: ["Laravel & MySQL", "Impor data massal", "Validasi dan audit log"],
  },
  {
    label: "AI · Deep Learning",
    title: "Klasifikasi Citra dengan MobileNetV3",
    description:
      "Eksperimen klasifikasi citra memakai transfer learning, augmentasi data, dan evaluasi confusion matrix.",
    details: ["Python", "TensorFlow & Keras", "Evaluasi model"],
  },
  {
    label: "IoT · Data Engineering",
    title: "IoT dan Pipeline Data",
    description:
      "Proyek perangkat ESP32-C3 serta eksplorasi pipeline data, lakehouse, dan monitoring infrastruktur.",
    details: ["ESP32-C3", "Airflow & Spark", "Prometheus & Grafana"],
  },
];

const certifications = [
  { provider: "Cisco", items: ["Ethical Hacker", "Managing Cisco Network Operating Systems", "Automate AI Solutions on Cisco Infrastructure", "Network Technician Career Path"] },
  { provider: "IBM", items: ["Containers & Kubernetes Essentials", "Quantum Machine Learning", "Quantum-Safe Encryption Essentials", "Istio & IBM Cloud Kubernetes"] },
  { provider: "Google Cloud", items: ["Site Reliability Engineering", "Cloud Security Risk Management", "Transformer Models and BERT"] },
  { provider: "Fortinet", items: ["Fortinet Certified Associate Cybersecurity", "FortiGate 7.6 Operator"] },
  { provider: "The Linux Foundation", items: ["Introduction to Kubernetes (LFS158)", "Quantum Computing Essentials (LFQ102)", "EU Cyber Resilience Act (LFEL1001)"] },
  { provider: "Databricks & Neo4j", items: ["Data Ingestion with Lakeflow Connect", "Build Data Pipelines with Lakeflow Spark", "Neo4j Graph Data Science"] },
];

const anchors = [
  ["about", "Tentang"],
  ["skills", "Keahlian"],
  ["cloud", "Cloud"],
  ["portfolio", "Portofolio"],
  ["experience", "Pengalaman"],
  ["certification", "Sertifikasi"],
  ["contact", "Kontak"],
] as const;

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border bg-zinc-950 text-white">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-blue-600/25 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
            <div className="mb-8 flex flex-wrap gap-2">
              <Badge className="border-violet-300/30 bg-violet-300/10 text-violet-100">
                Tugas &mdash; Sesi #8 (1) &mdash; UTS
              </Badge>
              <Badge variant="outline" className="border-white/20 bg-white/5 text-zinc-200">
                Cloud Computing · Next.js · Docker · AWS EC2
              </Badge>
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
              <div>
                <p className="text-sm font-medium text-blue-200">
                  Mahasiswa S1 Teknologi Informasi · Universitas Darma Persada
                </p>
                <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Muhammad Arya Fatthurahman
                </h1>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-300">
                  <span>NIM <strong className="text-white">2023230006</strong></span>
                  <span>Kelas <strong className="text-white">TIFM</strong></span>
                  <span>Program Studi <strong className="text-white">Teknologi Informasi</strong></span>
                </div>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg">
                  Aspiring Software Developer dan DevOps Engineer dengan minat pada
                  pengembangan perangkat lunak, AI/Machine Learning, serta infrastruktur cloud.
                  Halaman ini menggabungkan profil pribadi dan tugas UTS Cloud Computing.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#portfolio" className={cn(buttonVariants({ variant: "brand", size: "lg" }), "group")}>
                    Lihat proyek UTS <ArrowDownRight className="transition-transform group-hover:translate-y-0.5" />
                  </Link>
                  <Link href="#certification" className={cn(buttonVariants({ variant: "outline", size: "lg", className: "border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" }))}>
                    <Award /> Sertifikasi
                  </Link>
                </div>
                <div className="mt-9 flex flex-wrap gap-2">
                  {anchors.map(([id, label]) => (
                    <a key={id} href={`#${id}`} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-white/35 hover:text-white">
                      {label}
                    </a>
                  ))}
                  <Link href="/guide" className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-white/35 hover:text-white">
                    Knowledge Base
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-xs rotate-1 overflow-hidden rounded-3xl border border-white/20 bg-white p-2 shadow-2xl shadow-blue-950/40">
                <Image
                  src="/foto-profil.jpg"
                  alt="Foto profil Muhammad Arya Fatthurahman"
                  width={320}
                  height={440}
                  priority
                  className="aspect-[8/10] w-full rounded-2xl object-cover object-top"
                />
                <div className="px-4 py-3 text-zinc-950">
                  <p className="font-semibold">Muhammad Arya Fatthurahman</p>
                  <p className="mt-0.5 text-xs text-zinc-500">2023230006 · UNSADA · TIFM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <Badge variant="secondary">Tentang Saya</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Belajar dengan membangun dan mencoba langsung.</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>Saya mahasiswa semester 4 Program Studi Teknologi Informasi di Universitas Darma Persada (UNSADA). Saya tertarik pada pengembangan web, kecerdasan buatan, dan cloud computing.</p>
              <p>Pengalaman proyek saya mencakup aplikasi manajemen karyawan berbasis Laravel, klasifikasi citra dengan CNN MobileNetV3, perangkat IoT ESP32-C3, serta pipeline data dan monitoring infrastruktur.</p>
              <p>Proyek ini mengembangkan website Next.js dengan Tailwind CSS, mengemasnya sebagai container, lalu menyiapkannya untuk EC2 Amazon Linux 2023 dengan Elastic IP publik.</p>
            </div>
          </div>
          <Card className="gap-0 p-0">
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold"><GraduationCap className="size-4 text-primary" /> Informasi akademik & tugas</div>
              <dl className="mt-4 divide-y divide-border text-sm">
                {[
                  ["Nama", "Muhammad Arya Fatthurahman"],
                  ["NIM / Kelas", "2023230006 · TIFM"],
                  ["Universitas", "Universitas Darma Persada (UNSADA)"],
                  ["Mata kuliah", "Cloud Computing"],
                  ["Tugas", "Sesi #8 (1) · UTS · Individu"],
                  ["Deadline", "19 November 2026 · 23.59 WIB"],
                  ["Platform", "AWS EC2 · Amazon Linux 2023"],
                  ["Web server", "Docker Compose · Nginx · HTTP 80 / HTTPS 443"],
                ].map(([term, value]) => (
                  <div key={term} className="grid grid-cols-[110px_1fr] gap-3 py-3">
                    <dt className="text-muted-foreground">{term}</dt>
                    <dd className="font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="border-t border-border bg-amber-50/70 px-6 py-4 text-xs leading-5 text-amber-950 dark:bg-amber-950/20 dark:text-amber-100">
              Aplikasi publik dibuka lewat Elastic IP EC2 melalui Nginx; alamat 192.168.x.x hanya berlaku di jaringan lokal. Port aplikasi 3000 dan PostgreSQL 5432 tetap privat; SSH/PuTTY pada port 22 dibatasi ke IP admin.
            </div>
          </Card>
        </section>

        <section id="skills" className="border-y border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <Badge variant="secondary">Keahlian</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Tools dan bidang yang saya pelajari.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Keahlian dikelompokkan berdasarkan bidang agar mudah ditelusuri.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {skills.map(({ title, icon: Icon, items }) => (
                <Card key={title} className="gap-0 p-6">
                  <h3 className="flex items-center gap-2 font-semibold"><Icon className="size-4 text-primary" />{title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cloud" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Badge variant="secondary">Cloud & DevOps</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Dari Next.js ke EC2 ber-IP publik.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Tailwind CSS membangun antarmuka Next.js; Docker Compose menjalankan aplikasi dan PostgreSQL; Terraform menyiapkan EC2 Amazon Linux 2023, Security Group, serta Elastic IP. PuTTY digunakan untuk administrasi SSH.</p>
            </div>
            <Cloud className="hidden size-8 text-primary sm:block" />
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Next.js + Tailwind", "Bangun antarmuka, route server, dan API; siapkan image produksi Next.js."],
              ["02", "Terraform + EC2", "Pakai Amazon Linux 2023, Elastic IP, Security Group, dan key pair SSH."],
              ["03", "PuTTY + Docker", "Masuk sebagai ec2-user dengan private key .ppk, lalu jalankan Docker Compose."],
              ["04", "Akses lewat IP publik", "Nginx meneruskan HTTP/HTTPS ke Next.js; PostgreSQL tetap di jaringan privat."],
            ].map(([number, title, description]) => (
              <Card key={number} className="gap-3 p-5">
                <span className="font-mono text-xs font-semibold text-primary">{number}</span>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Next.js", "Tailwind CSS", "Docker", "Amazon Linux 2023", "PuTTY", "Terraform", "Elastic IP", "Nginx", "Kubernetes", "Helm"].map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
          </div>
        </section>

        <section id="portfolio" className="border-y border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Badge variant="secondary">Portofolio</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Proyek pilihan.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title} className={cn("gap-0 p-6", project.featured && "border-primary/40 shadow-md")}>
                  <Badge variant={project.featured ? "brand" : "outline"}>{project.label}</Badge>
                  <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {project.details.map((detail) => <li key={detail} className="flex items-start gap-2"><span className="mt-1.5 size-1.5 rounded-full bg-primary" />{detail}</li>)}
                  </ul>
                  {project.featured ? <Link href="#uts" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Rincian tugas UTS <ArrowRight className="size-4" /></Link> : null}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="uts" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Card className="relative overflow-hidden gap-0 border-zinc-800 bg-zinc-950 p-6 text-white sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="relative">
              <Badge className="border-violet-300/30 bg-violet-300/10 text-violet-100">Tugas — Sesi #8 (1) — UTS</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">Website Next.js container dengan IP publik EC2.</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">Target proyek: profil personal memakai Next.js dan Tailwind CSS, dibangun sebagai container Docker, lalu disajikan melalui Nginx di Amazon Linux 2023. Terraform menyiapkan Elastic IP dan jaringan; Kubernetes/Helm menjadi jalur skala lanjut.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["01 · Terraform", "Buat VPC, Security Group, EC2 Amazon Linux 2023, dan Elastic IP."],
                  ["02 · PuTTY", "Masuk sebagai ec2-user dengan key .ppk; batasi SSH ke IP admin."],
                  ["03 · Docker", "Jalankan container Next.js, Nginx, dan PostgreSQL pada jaringan privat."],
                  ["04 · Uji", "Buka Elastic IP dari jaringan lain; verifikasi halaman dan /api/health."],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-zinc-400">{description}</p>
                  </div>
                ))}
              </div>
              <Separator className="my-6 bg-white/10" />
              <p className="max-w-4xl text-xs leading-5 text-zinc-400">Video demo memperlihatkan website online lewat Elastic IP, Next.js, Tailwind CSS, Docker, Amazon Linux 2023, Terraform, dan koneksi PuTTY yang aman; durasi 10–20 menit, lalu kumpulkan tautan YouTube Public/Unlisted melalui EdLink. Jelaskan Security Group dan alasan port database serta port aplikasi tidak dibuka ke internet.</p>
            </div>
          </Card>
        </section>

        <section id="experience" className="border-y border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Badge variant="secondary">Pengalaman</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Pengalaman dan pendidikan.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card className="gap-3 p-6"><BriefcaseBusiness className="size-5 text-primary" /><p className="text-xs font-medium text-muted-foreground">Proyek praktik</p><h3 className="text-lg font-semibold">Sistem Manajemen Karyawan</h3><p className="text-sm leading-6 text-muted-foreground">Mengembangkan aplikasi Laravel dan MySQL dari analisis kebutuhan hingga implementasi, termasuk impor Excel dan pencatatan perubahan.</p></Card>
              <Card className="gap-3 p-6"><GraduationCap className="size-5 text-primary" /><p className="text-xs font-medium text-muted-foreground">2023 — sekarang</p><h3 className="text-lg font-semibold">S1 Teknologi Informasi · UNSADA</h3><p className="text-sm leading-6 text-muted-foreground">NIM 2023230006, kelas TIFM. Fokus kuliah meliputi basis data, pemrograman web, AI/ML, data mining, dan mobile computing.</p></Card>
            </div>
          </div>
        </section>

        <section id="certification" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Badge variant="secondary">Sertifikasi</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Sertifikasi profesional.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Kumpulan sertifikat dan penyelesaian program yang tercantum pada profil saya.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map(({ provider, items }) => (
              <Card key={provider} className="gap-0 p-5">
                <h3 className="flex items-center gap-2 font-semibold"><Award className="size-4 text-primary" />{provider}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-5 text-muted-foreground">
                  {items.map((item) => <li key={item} className="flex gap-2"><span className="text-primary">•</span>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <Badge variant="secondary">Kontak</Badge>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">Terhubung dan lihat pekerjaan saya.</h2>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" />Cakung, Jakarta Timur · Indonesia</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a className={cn(buttonVariants({ variant: "outline" }))} href="mailto:aryafatthurahman4@gmail.com"><Mail /> Email</a>
                <a className={cn(buttonVariants({ variant: "outline" }))} href="https://github.com/AryaFatthurahman1" target="_blank" rel="noopener noreferrer"><Code2 /> GitHub</a>
                <a className={cn(buttonVariants({ variant: "outline" }))} href="https://www.linkedin.com/in/muhammad-arya-fatthurahman" target="_blank" rel="noopener noreferrer"><Code2 /> LinkedIn</a>
                <a className={cn(buttonVariants({ variant: "outline" }))} href="https://wa.me/628517445861" target="_blank" rel="noopener noreferrer"><Smartphone /> WhatsApp</a>
              </div>
            </div>
            <Separator className="my-8" />
            <p className="text-xs text-muted-foreground">Muhammad Arya Fatthurahman · NIM 2023230006 · TIFM · Tugas Sesi #8 (1) — UTS Cloud Computing</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
