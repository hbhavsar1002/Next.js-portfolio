//useing react context api to send the active section details from header components to other components.
//here we can see that in this file we have header component and then children which are present in page file which holds other important components which should interact based on the active section.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContext from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/themeswitch";
import ThemeContextProvider from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Bhasvar | Perosnal Portfolio",
  description:
    "Harsh Bhavsar is a software developer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50
      text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark-text-opacity-90`}
      >
        <div
          className="bg-[#4ab3ac] absolute top-[-6rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>
        <div
          className="bg-[#86addd] absolute top-[-1rem] left-[-35rem] h-[31.25rem] 
        w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContext>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContext>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
