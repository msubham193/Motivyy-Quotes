import Provider from "@/components/Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "motivational",
  description: "motivational thoughts sharing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className='app'>
        <Nav/>
          {children}
        </main>
        </Provider>
      </body>
    </html>
  );
}
