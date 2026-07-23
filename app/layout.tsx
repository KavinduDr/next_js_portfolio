import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kavindu Dhananjaya | Software Engineer & Computer Engineering Graduate",
  description: "Portfolio of Kavindu Dhananjaya, a Computer Engineering graduate from University of Ruhuna and former Software Engineering Intern at WSO2 Lanka. Specializing in Microservices, Security Frameworks, Cloud Native & Full Stack Web Development.",
  keywords: [
    "Kavindu Dhananjaya",
    "Computer Engineer",
    "Software Engineer",
    "WSO2 Intern",
    "Sri Lanka Developer",
    "Rust Security Framework",
    "Next.js Developer",
    "Full Stack Engineer",
    "Microservices",
    "University of Ruhuna"
  ],
  authors: [{ name: "Kavindu Dhananjaya" }],
  openGraph: {
    title: "Kavindu Dhananjaya | Software Engineer & Computer Engineer",
    description: "BSc (Hons) Computer Engineering Graduate & Ex-WSO2 Software Engineering Intern. Building scalable security frameworks and cloud native web platforms.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-[#07090e] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
