import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSideBar from "@/components/AppSideBar";



export const metadata = {
  title: "QuickNotes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSideBar />
            <div className="flex min-h-screen w-full flex-col">
              <Header />

              <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                {children}
              </main>

            </div>
            </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
