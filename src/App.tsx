import { motion, useScroll, useSpring } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import avatarHieu from "./assets/avthieu.jpg";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Server,
  Network,
  Cloud,
  Code2,
  Wrench,
  Github,
  ChevronDown,
  Sparkles,
  Cpu,
  Shield,
  Rocket,
  BookOpen,
  User,
  Briefcase,
  Languages,
  ArrowUpRight,
  Download,
  CircleDot,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const skillGroups = [
  {
    title: "Hệ điều hành & Hệ thống",
    icon: Server,
    items: [
      "Linux (Ubuntu/CentOS): file system, permission, process, service (systemctl)",
      "SSH: key-based authentication, SSH config, remote server management",
      "Quản lý user/group, phân quyền, log cơ bản",
      "System administration & troubleshooting cơ bản",
    ],
  },
  {
    title: "Mạng máy tính",
    icon: Network,
    items: [
      "TCP/IP, UDP, HTTP/HTTPS, DNS, mô hình OSI & TCP/IP",
      "LAN/WAN, subnetting, NAT, routing (kiến thức nền)",
      "Firewall cơ bản với iptables/ufw",
      "Client-server, socket, load traffic cơ bản",
      "Công cụ mạng: ping, traceroute, netstat, ss",
    ],
  },
  {
    title: "Cloud & Ảo hóa",
    icon: Cloud,
    items: [
      "AWS cơ bản: EC2, S3, IAM, VPC",
      "Hiểu khái niệm VM, security group, key pair",
      "Tư duy hạ tầng Cloud (IaaS)",
    ],
  },
  {
    title: "Công cụ & DevOps cơ bản",
    icon: Wrench,
    items: [
      "Git/GitHub: clone, branch, commit, pull request",
      "Docker: image, container, volume (mức cơ bản)",
      "Hiểu khái niệm CI/CD, containerization",
    ],
  },
  {
    title: "Ngôn ngữ lập trình & Script",
    icon: Code2,
    items: [
      "C/C++, Java, C# (cơ bản)",
      "JavaScript & Python (cơ bản, phục vụ automation/script)",
      "Có khả năng đọc hiểu và chỉnh sửa code",
    ],
  },
  {
    title: "Kỹ năng khác",
    icon: Languages,
    items: [
      "Đọc hiểu tài liệu kỹ thuật tiếng Anh tốt",
      "Giao tiếp tiếng Anh ở mức tốt",
      "Tư duy logic, chủ động học hỏi và tìm hiểu công nghệ mới",
      "Sẵn sàng học hỏi, tiếp thu công việc mới và làm việc full-time trong thời gian thực tập",
    ],
  },
];

const certificates = [
  { year: "2025", title: "TOEIC LR", score: "890/990" },
  {
    year: "2025",
    title: "AWS Educate - Cloud Fundamentals",
    score: "EC2, S3, IAM, VPC (basic)",
  },
  { year: "2026", title: "TOEIC SW", score: "340/400" },
];

const projects = [
  {
    title: "Mini Lab Linux & System",
    icon: Shield,
    points: [
      "Thực hành cài đặt Linux và cấu hình SSH",
      "Quản lý user, group và phân quyền file",
      "Chạy và quản lý service cơ bản",
    ],
  },
  {
    title: "Dự án học tập – Mạng máy tính",
    icon: Cpu,
    points: [
      "Thực hành mô hình client-server",
      "Tìm hiểu cơ chế truyền dữ liệu TCP",
      "Củng cố nền tảng về giao tiếp mạng và luồng dữ liệu",
    ],
  },
  {
    title: "Update in the future",
    icon: Rocket,
    points: [
      "Các dự án thực tế chuyên sâu hơn sẽ được cập nhật sau",
      "Cloud / DevOps / Automation projects sẽ bổ sung trong tương lai",
      "Case study và kết quả triển khai thực tế sẽ update in the future",
    ],
  },
];

const futureBlocks = [
  "Work Experience - Update in the future",
  "Featured Case Studies - Update in the future",
  "Open Source Contributions - Update in the future",
  "Professional Achievements - Update in the future",
  "Testimonials - Update in the future",
  "Blog / Sharing Knowledge - Update in the future",
];

const stats = [
  { label: "Định hướng", value: "System / Cloud / DevOps" },
  { label: "TOEIC LR", value: "890/990" },
  { label: "TOEIC SW", value: "340/400" },
  { label: "Học vấn", value: "VNU-UIT 2023-2027" },
];

const profileItems = [
  { icon: User, label: "Họ tên", value: "Huỳnh Minh Hiếu" },
  { icon: Calendar, label: "Ngày sinh", value: "31/10/2005" },
  { icon: MapPin, label: "Khu vực", value: "Thủ Đức, TP. Hồ Chí Minh" },
  { icon: Phone, label: "Điện thoại", value: "0854474979" },
  { icon: Mail, label: "Email", value: "minhhieu31005@gmail.com" },
  {
    icon: Github,
    label: "Mục tiêu",
    value: "System / Cloud / DevOps Engineer",
  },
];

const contactItems = [
  { icon: Mail, label: "Email", value: "minhhieu31005@gmail.com" },
  { icon: Phone, label: "Điện thoại", value: "0854474979" },
  { icon: MapPin, label: "Địa chỉ", value: "Thủ Đức, TP. Hồ Chí Minh" },
];

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/[0.05] shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs font-medium tracking-wide",
        className,
      )}
    >
      {children}
    </span>
  );
}

function Button({
  className,
  children,
  href,
  variant = "primary",
}: {
  className?: string;
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300";
  const tone =
    variant === "primary"
      ? "bg-white text-slate-900 hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(255,255,255,0.18)]"
      : "border border-white/12 bg-white/[0.05] text-white hover:bg-white/[0.1]";

  if (href) {
    return (
      <a href={href} className={cn(base, tone, className)}>
        {children}
      </a>
    );
  }

  return <button className={cn(base, tone, className)}>{children}</button>;
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="mb-10 md:mb-14"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/70">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
        {subtitle}
      </p>
    </motion.div>
  );
}

function GlowOrb({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute rounded-full opacity-70 blur-3xl", className)}
    />
  );
}

function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] opacity-20"
    />
  );
}

function FloatingChip({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      className={cn(
        "absolute hidden rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs text-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl lg:block",
        className,
      )}
    >
      {text}
    </motion.div>
  );
}

export default function PortfolioHuynhMinhHieu() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-white selection:bg-cyan-300/30 selection:text-white">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
      />

      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(77,125,255,0.14),transparent_20%),radial-gradient(circle_at_20%_20%,rgba(0,198,255,0.10),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.12),transparent_28%),linear-gradient(180deg,#07111f_0%,#0b1323_46%,#060c16_100%)]" />
      <GlowOrb className="left-[-8rem] top-12 h-72 w-72 bg-cyan-400/30" />
      <GlowOrb className="right-[-5rem] top-20 h-80 w-80 bg-violet-500/25" />
      <GlowOrb className="bottom-20 left-1/3 h-96 w-96 bg-sky-500/15" />
      <GridLines />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07111f]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] shadow-[0_10px_30px_rgba(34,211,238,0.18)] ring-1 ring-white/10">
              <img
                src={avatarHieu}
                alt="Huỳnh Minh Hiếu"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Portfolio
              </div>
              <div className="text-sm font-medium tracking-wide text-white/90">
                Huỳnh Minh Hiếu
              </div>
            </div>
          </motion.div>

          <nav className="hidden items-center gap-6 text-sm text-white/60 lg:flex">
            {[
              ["Giới thiệu", "#about"],
              ["Kỹ năng", "#skills"],
              ["Dự án", "#projects"],
              ["Chứng chỉ", "#certs"],
              ["Liên hệ", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 md:px-6 md:pb-28 md:pt-20 lg:px-8 lg:pt-24">
          <FloatingChip
            text="Linux / Networking / Cloud"
            className="right-[7%] top-[16%]"
          />
          <FloatingChip
            text="Open to Internship"
            className="left-[58%] top-[60%]"
          />

          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
            >
              <Badge className="mb-6 bg-white/[0.06] text-cyan-100">
                <CircleDot className="mr-2 h-3.5 w-3.5 text-cyan-300" />
                System Administrator / IT Intern
              </Badge>

              <div className="mb-5 flex flex-wrap gap-2">
                <Badge className="bg-sky-400/10 text-sky-200">
                  Based in HCMC
                </Badge>
                <Badge className="bg-violet-400/10 text-violet-200">
                  Available 2026
                </Badge>
                <Badge className="bg-emerald-400/10 text-emerald-200">
                  Learning Fast
                </Badge>
              </div>

              <h1 className="max-w-5xl text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[4.7rem] lg:text-[5.7rem]">
                Hạ tầng gọn,
                <span className="block text-white/80">giao diện sạch,</span>
                <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
                  kỹ thuật chắc và trải nghiệm tinh tế.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
                Mình là{" "}
                <span className="font-medium text-white/90">
                  Huỳnh Minh Hiếu
                </span>
                , sinh viên ngành Mạng Máy Tính và Truyền Thông Dữ Liệu tại
                VNU-UIT. Mục tiêu ngắn hạn là hoàn thành tốt kỳ thực tập doanh
                nghiệp và tích lũy kinh nghiệm thực tế; mục tiêu dài hạn là phát
                triển thành{" "}
                <span className="font-medium text-cyan-200">
                  System / Cloud / DevOps Engineer
                </span>
                .
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#about">
                  Khám phá portfolio
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button href="#contact" variant="secondary">
                  Liên hệ ngay
                </Button>
                <Button variant="secondary">
                  <Download className="h-4 w-4" />
                  CV update later
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 * idx, duration: 0.5 }}
                    className="group rounded-[24px] border border-white/8 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/[0.06]"
                  >
                    <div className="text-xs uppercase tracking-[0.22em] text-white/40">
                      {item.label}
                    </div>
                    <div className="mt-3 text-lg font-medium text-white/92">
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-cyan-400/14 via-white/5 to-violet-500/14 blur-2xl" />

              <Card className="relative overflow-hidden rounded-[34px] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_34%,transparent_62%,rgba(255,255,255,0.05))]" />
                <div className="relative rounded-[28px] border border-white/10 bg-[#0a1323]/95 p-6 md:p-7">
                  <div className="mb-7 flex items-center justify-between">
                    <Badge className="bg-emerald-400/10 text-emerald-200">
                      Available for Internship
                    </Badge>
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-200/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-200/80" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {profileItems.map((item) => {
                      const Icon = item.icon as LucideIcon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4 transition hover:border-cyan-200/20 hover:bg-white/[0.06]"
                        >
                          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-200">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="text-xs uppercase tracking-[0.18em] text-white/35">
                            {item.label}
                          </div>
                          <div className="mt-2 text-sm font-medium leading-6 text-white/88 md:text-[15px]">
                            {item.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="mx-auto mt-14 flex w-fit items-center gap-2 text-sm text-white/50"
          >
            Cuộn xuống để xem thêm <ChevronDown className="h-4 w-4" />
          </motion.a>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 md:py-28"
        >
          <SectionHeader
            eyebrow="About Me"
            title="Huỳnh Minh Hiếu"
            subtitle="Sinh viên ngành Mạng Máy Tính, định hướng System / Cloud / DevOps Engineer, đam mê hệ thống, mạng và công nghệ hạ tầng. Mình yêu thích cách hệ thống vận hành, cách dữ liệu đi qua mạng, và cách hạ tầng được tổ chức để đạt sự ổn định, bảo mật và hiệu suất tốt."
          />

          <div className="grid gap-6 lg:grid-cols-[1.16fr_0.84fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="p-7 md:p-8">
                <div className="mb-5 flex items-center gap-3 text-cyan-200">
                  <Briefcase className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-[0.24em] text-white/55">
                    Career Focus
                  </span>
                </div>
                <p className="text-base leading-8 text-white/72">
                  Là sinh viên chuyên ngành Mạng Máy Tính và Truyền Thông Dữ
                  Liệu, mình định hướng phát triển sự nghiệp theo lộ trình từ{" "}
                  <span className="font-medium text-white">
                    System Administrator / IT Intern
                  </span>{" "}
                  đến{" "}
                  <span className="font-medium text-white">
                    System / Cloud / DevOps Engineer
                  </span>
                  . Mình yêu thích cách hệ thống vận hành, cách dữ liệu đi qua
                  mạng, và cách hạ tầng được tổ chức để đạt sự ổn định, bảo mật
                  và hiệu suất tốt.
                </p>
                <p className="mt-4 text-base leading-8 text-white/60">
                  Mục tiêu ngắn hạn là học nhanh trong môi trường thực tế, hoàn
                  thành tốt kỳ thực tập doanh nghiệp và tích lũy trải nghiệm
                  chuyên môn. Trong dài hạn, mình muốn phát triển nền tảng
                  Linux, Cloud và automation để có thể đóng góp vào các hệ thống
                  có quy mô và độ phức tạp cao hơn.
                </p>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
              className="grid gap-6"
            >
              <Card className="bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.03))] p-7">
                <div className="flex items-center gap-3 text-sky-200">
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-medium">Học vấn</span>
                </div>
                <h3 className="mt-4 text-xl font-medium text-white">
                  Đại học Công Nghệ Thông Tin – ĐHQG TP.HCM (VNU-UIT)
                </h3>
                <p className="mt-2 text-white/65">
                  Ngành: Mạng Máy Tính và Truyền Thông Dữ Liệu
                </p>
                <p className="mt-1 text-white/45">2023 – 2027</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className="bg-white/[0.06] text-white/85">
                    Tốt nghiệp loại Giỏi
                  </Badge>
                  <Badge className="bg-white/[0.06] text-white/85">
                    Học bổng kỳ 1 năm học 2025–2026
                  </Badge>
                </div>
              </Card>

              <Card className="bg-[linear-gradient(180deg,rgba(139,92,246,0.10),rgba(255,255,255,0.03))] p-7">
                <div className="flex items-center gap-3 text-violet-200">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">
                    Sở thích & Tinh thần làm việc
                  </span>
                </div>
                <p className="mt-4 leading-8 text-white/65">
                  Tìm hiểu hệ thống, công nghệ mới, học hỏi từ người khác và
                  liên tục tự nâng cấp kỹ năng thông qua tài liệu, thực hành cá
                  nhân và các mini lab.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 md:py-28"
        >
          <SectionHeader
            eyebrow="Core Skills"
            title="Kỹ năng chuyên môn"
            subtitle="Nền tảng tập trung vào Linux, hệ thống, mạng máy tính, cloud cơ bản và tư duy tự học để thích nghi nhanh với môi trường thực tế."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon as LucideIcon;
              return (
                <motion.div
                  key={group.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                >
                  <Card className="group h-full p-7 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-200 transition group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white">
                      {group.title}
                    </h3>
                    <div className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 text-sm leading-7 text-white/62"
                        >
                          <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 md:py-28"
        >
          <SectionHeader
            eyebrow="Projects & Practice"
            title="Dự án & thực hành"
            subtitle="Các hoạt động hiện tại thể hiện quá trình xây nền tảng kỹ thuật qua lab, thực hành hệ thống và định hướng phát triển chuyên sâu trong tương lai."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon as LucideIcon;
              return (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <Card className="h-full p-7 transition duration-300 hover:-translate-y-1 hover:border-white/15">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white/85">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-medium text-white">
                      {project.title}
                    </h3>
                    <div className="mt-5 space-y-3">
                      {project.points.map((point) => (
                        <div
                          key={point}
                          className="flex gap-3 text-sm leading-7 text-white/62"
                        >
                          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section
          id="certs"
          className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 md:py-28"
        >
          <SectionHeader
            eyebrow="Certificates"
            title="Chứng chỉ & thành tích"
            subtitle="Các chứng chỉ hiện có phản ánh năng lực tiếng Anh, nền tảng cloud cơ bản và sự chuẩn bị nghiêm túc cho môi trường làm việc chuyên nghiệp."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Card className="h-full p-7 transition duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/[0.06] text-white/85">
                      {cert.year}
                    </Badge>
                    <Award className="h-5 w-5 text-cyan-200" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/62">{cert.score}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 md:py-28">
          <SectionHeader
            eyebrow="Future Sections"
            title="Các mục sẽ được cập nhật thêm"
            subtitle="Portfolio sẽ tiếp tục được bổ sung khi có thêm dự án thực tế, kinh nghiệm làm việc, case studies và các dấu ấn chuyên môn mới."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {futureBlocks.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-[24px] border border-dashed border-white/12 bg-white/[0.03] p-5 text-white/52 backdrop-blur-md transition hover:bg-white/[0.05]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 pb-24 pt-10 md:px-6 lg:px-8 lg:pb-32"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 backdrop-blur-2xl md:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),linear-gradient(135deg,transparent,rgba(255,255,255,0.04),transparent)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <Badge className="mb-4 bg-white/[0.06] text-white/78">
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  Let’s build something reliable together
                </Badge>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Sẵn sàng cho cơ hội thực tập
                  <span className="block bg-gradient-to-r from-cyan-200 to-violet-200 bg-clip-text text-transparent">
                    chuyên nghiệp và dài hạn.
                  </span>
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
                  Mình mong muốn được tham gia môi trường thực tế để học hỏi quy
                  trình vận hành hệ thống, nâng cao kỹ năng Linux, mạng và
                  cloud, đồng thời đóng góp bằng tinh thần chủ động và khả năng
                  tiếp thu nhanh.
                </p>
              </div>

              <div className="grid gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon as LucideIcon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-[24px] border border-white/10 bg-[#0a1323]/58 p-5 backdrop-blur-xl transition hover:border-white/15 hover:bg-[#0d1728]/80"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-white/35">
                            {item.label}
                          </div>
                          <div className="mt-2 font-medium text-white/88">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
