"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/loading/Loading";
import { useEffect, useState } from "react";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.removeItem('theme');

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
