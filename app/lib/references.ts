export type ReferenceLink = {
  title: string;
  url: string;
  source: string;
  type: string;
  summary: string;
  for: string;
  labUse: string;
};

export type ReferenceGroup = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  links: ReferenceLink[];
};

export const referenceGroups: ReferenceGroup[] = [
  {
    id: "referensi-aplikasi",
    shortTitle: "Aplikasi & EC2",
    title: "Aplikasi Next.js, Docker, dan server EC2",
    description:
      "Bacaan untuk memahami cara membungkus aplikasi dalam container dan menjalankannya di mesin virtual EC2. Mulai dari sini jika baru pertama kali melakukan deployment.",
    links: [
      {
        title:
          "Next.js deployment on AWS EC2 with CI/CD using Docker and CodePipeline",
        url: "https://awstip.com/next-js-deployment-on-aws-ec2-with-ci-cd-using-docker-and-codepipeline-e8a4bb502227",
        source: "AWS Tip",
        type: "Artikel praktik",
        summary:
          "Membahas alur deployment Next.js ke EC2 memakai Docker dan CodePipeline. Berguna untuk memahami hubungan antara proses build, image container, dan pipeline rilis.",
        for: "Memahami deployment aplikasi dan CodePipeline",
        labUse:
          "Petakan tahapan source, build, dan rilis pada artikel ke urutan kerja aplikasi lab. Cocokkan setiap perintah dengan Dockerfile dan struktur proyek yang benar-benar dipakai.",
      },
      {
        title: "Deploy a Next.js book reader app on AWS with Docker",
        url: "https://hackernoon.com/how-to-deploy-a-nextjs-book-reader-app-on-aws-with-docker?source=rss#1",
        source: "HackerNoon",
        type: "Tutorial aplikasi",
        summary:
          "Contoh penerapan aplikasi Next.js yang dikemas dengan Docker di AWS. Gunakan untuk melihat pola deployment aplikasi nyata, lalu sesuaikan konfigurasi dengan kebutuhan lab.",
        for: "Melihat contoh aplikasi Next.js dalam container",
        labUse:
          "Bandingkan cara aplikasi dibangun dan dijalankan di container dengan konfigurasi Next.js lab. Jangan menyalin pengaturan aplikasi contoh tanpa memeriksa port, variabel, dan kebutuhan datanya.",
      },
      {
        title: "Automate Next.js deployment to AWS EC2 with GitLab CI",
        url: "https://aws.plainenglish.io/automate-next-js-deployment-to-aws-ec2-with-gitlab-ci-ba0c1459e09f",
        source: "AWS in Plain English",
        type: "Tutorial CI/CD",
        summary:
          "Mengulas otomatisasi pengiriman aplikasi ke EC2 menggunakan GitLab CI. Pilihan pembanding jika tim memakai GitLab, bukan GitHub Actions.",
        for: "Membandingkan platform pipeline",
        labUse:
          "Identifikasi pemicu pipeline, kredensial deployment, dan langkah verifikasi. Adaptasi konsepnya ke GitHub Actions hanya setelah izin akses dan rahasia CI ditinjau.",
      },
      {
        title: "EC2 backend deployer full guide",
        url: "https://github.com/shipshitdev/skills/blob/366150f6ff4abf908164df8b94a6a49d65f46295/skills/ec2-backend-deployer/references/full-guide.md",
        source: "GitHub",
        type: "Panduan teknis",
        summary:
          "Panduan backend di EC2 yang dapat dijadikan daftar pemeriksaan saat menyiapkan server. Cocok untuk meninjau prasyarat, konfigurasi, dan langkah deployment.",
        for: "Checklist implementasi backend di EC2",
        labUse:
          "Gunakan sebagai daftar pemeriksaan server dan deployment, lalu tandai mana yang sudah dicakup oleh Docker, Nginx, health check, dan konfigurasi jaringan lab.",
      },
      {
        title: "Deploy a Next.js portfolio with Docker, AWS, and CI/CD",
        url: "https://dev.to/ritesh355/building-deploying-my-nextjs-portfolio-with-docker-aws-and-cicd-54cf#comments#1",
        source: "DEV Community",
        type: "Studi kasus",
        summary:
          "Catatan pengalaman membangun dan menerbitkan portfolio Next.js dengan Docker, AWS, dan CI/CD. Berguna sebagai gambaran alur dari proyek sampai aplikasi online.",
        for: "Melihat perjalanan deployment end-to-end",
        labUse:
          "Ambil gambaran urutan pengerjaan dan titik validasinya. Bedakan pengalaman pribadi dari rekomendasi resmi dan periksa ulang detail keamanan serta versi layanan.",
      },
      {
        title: "Deploy Next.js to EC2 with Docker, Nginx, and GitHub Actions",
        url: "https://medium.com/@kilamaelie/deploy-a-next-js-app-on-aws-ec2-with-docker-nginx-and-automate-with-github-actions-05a879d1a81b",
        source: "Medium",
        type: "Tutorial CI/CD",
        summary:
          "Menyatukan EC2, Docker, Nginx, dan GitHub Actions untuk menerbitkan Next.js. Relevan dengan pola lab ini; tetap cocokkan perintahnya dengan konfigurasi repository.",
        for: "Memahami Nginx dan deployment otomatis",
        labUse:
          "Bandingkan jalur request Nginx ke container dan urutan deploy dengan workflow lab. Pastikan port internal tidak dipublikasikan dan health check berjalan sebelum rilis dianggap sukses.",
      },
      {
        title: "EC2 deployment example",
        url: "https://gist.github.com/CynthiaWahome/6c417d4ac286223d096a3352ffc190a3",
        source: "GitHub Gist",
        type: "Contoh konfigurasi",
        summary:
          "Potongan contoh deployment EC2 dalam bentuk Gist. Perlakukan sebagai referensi singkat, bukan konfigurasi siap produksi; periksa variabel, izin, dan aturan jaringan.",
        for: "Membandingkan contoh konfigurasi",
        labUse:
          "Pakai untuk membandingkan bentuk skrip atau konfigurasi saja. Periksa pemilik, konteks, versi, dan setiap perintah sebelum menjalankannya.",
      },
      {
        title:
          "Deploy React/Vue.js Web Apps on a Single VM with Docker & Nginx",
        url: "https://medium.com/@bensatriya3/deploy-react-vue-js-web-apps-on-a-single-vm-with-docker-nginx-12cd4f103322",
        source: "Medium",
        type: "Tutorial arsitektur",
        summary:
          "Menjelaskan pola dua aplikasi (React dan Vue) di satu VM dengan Docker dan Nginx sebagai reverse proxy, termasuk pemetaan port host ke container dan server_name per aplikasi.",
        for: "Memahami Nginx reverse proxy multi-aplikasi",
        labUse:
          "Gunakan pola dua server block Nginx sebagai pembanding konfigurasi lab. Jangan publikasikan port container langsung ke internet; selalu lewatkan lewat Nginx dengan header X-Forwarded-* yang benar.",
      },
      {
        title:
          "From Localhost to AWS: Deploying Your First Full-Stack Application",
        url: "https://builder.aws.com/content/3KN1zYiGLDy7DchXKQL4jPOOzQB/from-localhost-to-aws-deploying-your-first-full-stack-application",
        source: "AWS Builder Center",
        type: "Panduan konsep",
        summary:
          "Peta jalan dari localhost ke produksi AWS: GitHub, Docker, IAM, EC2, RDS, domain, HTTPS, monitoring, dan CI/CD. Cocok untuk melihat gambaran besar sebelum memilih layanan satu per satu.",
        for: "Memahami peta jalan deployment penuh",
        labUse:
          "Gunakan sebagai peta konsep. Untuk Part 1, ambil hanya yang relevan: EC2, Docker, Nginx, dan GitHub Actions. Lewati S3/CloudFront sampai aplikasi benar-benar membutuhkan CDN.",
      },
      {
        title:
          "Ditching Baremetal: Why I Moved My Vue & FastAPI Stack to Docker Compose on EC2",
        url: "https://builder.aws.com/content/3JcS2C8Fy9liHBBLvFDVCLEkTaM/ditching-baremetal-why-i-moved-my-vue-and-fastapi-stack-to-docker-compose-on-ec2#1",
        source: "AWS Builder Center",
        type: "Studi kasus",
        summary:
          "Perbandingan hosting baremetal vs Docker Compose pada EC2 kecil: rollback mudah, konsistensi environment, dan trade-off biaya disk serta memori dari Docker engine.",
        for: "Membandingkan baremetal vs container",
        labUse:
          "Terapkan argumennya pada pilihan Part 1 (satu EC2 + Docker Compose). Catat kebutuhan disk dan memori Docker engine sebelum memilih ukuran instance.",
      },
      {
        title:
          "From Code to Cloud: Deploying Next.js Portfolio on AWS EC2 with GitHub Actions and Docker",
        url: "https://kaxun.medium.com/from-code-to-cloud-deploying-next-js-portfolio-on-aws-ec2-with-github-actions-and-docker-061ff609b682",
        source: "Medium",
        type: "Tutorial CI/CD",
        summary:
          "Menjelaskan pipeline GitHub Actions: build image Docker, push ke Docker Hub, lalu self-hosted runner di EC2 menarik image dan menjalankannya di port 80.",
        for: "Memahami self-hosted runner vs SSH deploy",
        labUse:
          "Bandingkan pola self-hosted runner dengan pola SSH (misalnya appleboy/ssh-action) seperti di workflow lab. Pilih satu mekanisme deploy saja untuk aplikasi yang sama.",
      },
      {
        title: "application-tracker (README)",
        url: "https://github.com/Conceal34/application-tracker",
        source: "GitHub",
        type: "Contoh proyek nyata",
        summary:
          "README proyek portfolio lengkap: push ke main membangun image, mendorong ke Docker Hub, SSH ke EC2, lalu docker compose pull dan up -d. Dilengkapi daftar masalah nyata (binary Prisma, docker socket, path absolut, race condition depends_on).",
        for: "Melihat CI/CD yang benar-benar berjalan",
        labUse:
          "Tiru bagian paling sederhana: checkout, build, push, SSH, compose pull, up -d. Pelajari bagian 'known issues' — itu persis contoh masalah yang ditanyakan saat review tugas.",
      },
    ],
  },
  {
    id: "referensi-pipeline",
    shortTitle: "Pipeline & AWS",
    title: "Pipeline CI/CD dan arsitektur AWS",
    description:
      "Sumber untuk membandingkan cara otomatisasi build dan rilis. Istilah CI/CD berarti pemeriksaan, pembuatan, dan pengiriman perubahan aplikasi secara berulang.",
    links: [
      {
        title:
          "AWS Cloud-Native Architecture Handbook: CodePipeline and CodeBuild",
        url: "https://codingbbq.github.io/docs/Cloud/AWS-Cloud-Native-Architecture-Handbook/#28-aws-cicd-codepipeline--codebuild",
        source: "Cloud-Native Architecture Handbook",
        type: "Dokumentasi arsitektur",
        summary:
          "Bagian buku pegangan yang membahas CodePipeline dan CodeBuild. Membantu mengenali peran layanan AWS untuk menyusun tahapan source, build, dan deployment.",
        for: "Memahami layanan CI/CD bawaan AWS",
        labUse:
          "Catat peran tiap layanan dan titik perpindahan artifact. Gunakan untuk membandingkan CodePipeline dengan GitHub Actions, bukan sebagai langkah membuat resource otomatis di halaman ini.",
      },
      {
        title:
          "Build a CI/CD pipeline with Jenkins, Docker, Terraform, and Ansible",
        url: "https://aws.plainenglish.io/building-a-complete-ci-cd-pipeline-with-jenkins-docker-terraform-and-ansible-4a643489a1c1",
        source: "AWS in Plain English",
        type: "Artikel arsitektur",
        summary:
          "Membahas pipeline yang menggabungkan Jenkins, Docker, Terraform, dan Ansible. Gunakan sebagai pembanding arsitektur; komponennya lebih banyak daripada kebutuhan lab satu EC2.",
        for: "Membandingkan otomasi dan Infrastructure as Code",
        labUse:
          "Pisahkan fungsi build, provisioning, dan konfigurasi server. Untuk lab awal, pertimbangkan hanya komponen yang menyelesaikan kebutuhan dan pahami biaya operasional tambahannya.",
      },
      {
        title: "[V1] CI/CD 워크플로우 작성 — KTB4-15th-CLOUD Wiki",
        url: "https://github.com/100-hours-a-week/KTB4-15th-CLOUD/wiki/%5BV1%5D-CI-CD-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EC%9E%91%EC%84%B1",
        source: "GitHub Wiki",
        type: "Dokumen arsitektur produksi",
        summary:
          "Contoh alur CI/CD tingkat produksi: build lewat Dockerfile multi-stage, autentikasi AWS via OIDC (tanpa kunci jangka panjang di GitHub Secrets), deploy via SSM (port 22 tetap tertutup), flock untuk mencegah dua deploy berjalan bersamaan, dan rollback otomatis ke tag SHA sebelumnya saat health check gagal.",
        for: "Memahami CD tanpa SSH dengan OIDC dan SSM",
        labUse:
          "Bandingkan dengan workflow lab yang memakai SSH langsung. Ambil prinsipnya saja: image ditag dengan SHA, pull sebelum swap, health check sebagai gerbang, dan rollback otomatis bila rilis gagal.",
      },
      {
        title: "cicd-pipeline (README)",
        url: "https://github.com/nanskee/cicd-pipeline",
        source: "GitHub",
        type: "Contoh repositori",
        summary:
          "Repositori contoh Next.js + Terraform + GitHub Actions + EC2: push ke main memicu workflow yang menjalankan terraform init/plan/apply dan menjalankan container aplikasi di EC2. Contoh jalur Infrastructure as Code yang paling sederhana.",
        for: "Melihat Infrastructure as Code untuk pemula",
        labUse:
          "Bandingkan urutan terraform init → plan → apply dengan folder terraform proyek lab. Baca ulang setiap resource sebelum apply; repositori contoh ini dibuat untuk belajar, bukan untuk langsung dipakai di produksi.",
      },
    ],
  },
  {
    id: "referensi-iac",
    shortTitle: "Terraform & OpenTofu",
    title: "Terraform, OpenTofu, dan AWS provider",
    description:
      "Dokumentasi teknis untuk mencari resource, argumen, dan versi provider AWS. Rujuk saat menulis atau memeriksa konfigurasi Infrastruktur sebagai Kode (IaC).",
    links: [
      {
        title: "OpenTofu AWS provider v6.17.0",
        url: "https://search.opentofu.org/provider/hashicorp/aws/v6.17.0?lang=python",
        source: "OpenTofu Registry",
        type: "Dokumentasi provider",
        summary:
          "Referensi provider AWS versi 6.17.0 pada registry OpenTofu. Periksa halaman resource yang digunakan dan pastikan versi sesuai dengan deklarasi proyek.",
        for: "Mencari sintaks resource OpenTofu",
        labUse:
          "Cari resource yang diperlukan, lalu cocokkan nama argumen, nilai wajib, dan catatan versi dengan constraint provider proyek sebelum menulis konfigurasi.",
      },
      {
        title:
          "Terraform AWS provider documentation at a pinned revision",
        url: "https://github.com/hashicorp/terraform-provider-aws/blob/c23a48ea3fa342114a023f36518bc7ae1a5498ff/website/docs/index.html.markdown",
        source: "GitHub",
        type: "Dokumentasi versi tertentu",
        summary:
          "Dokumentasi provider AWS Terraform pada revisi Git tertentu. Revisi yang dipatok membuat isi dapat dirujuk secara konsisten, tetapi bisa berbeda dari dokumentasi versi terbaru.",
        for: "Memeriksa dokumentasi pada revisi tertentu",
        labUse:
          "Gunakan revisi ini saat perlu membahas dokumentasi yang tetap, kemudian bandingkan dengan versi provider yang dipasang agar contoh lama tidak diterapkan begitu saja.",
      },
      {
        title: "OpenTofu AWS provider v6.7.0",
        url: "https://search.opentofu.org/provider/hashicorp/aws/v6.7.0",
        source: "OpenTofu Registry",
        type: "Dokumentasi provider",
        summary:
          "Referensi provider AWS versi 6.7.0. Bandingkan dengan versi 6.17.0 sebelum mengikuti contoh karena argumen atau dukungan resource dapat berubah antarversi.",
        for: "Membandingkan dokumentasi antarversi",
        labUse:
          "Pilih dokumentasi yang sesuai dengan versi provider proyek. Saat membandingkan versi, perhatikan perubahan schema dan perilaku resource, bukan hanya nomor versinya.",
      },
    ],
  },
];

export const totalReferences = referenceGroups.reduce(
  (total, group) => total + group.links.length,
  0,
);
