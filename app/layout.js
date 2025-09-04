import { Almarai } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import { MenuProvider } from "./context/MenuContext";
import Main from "./components/main";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata = {
  title: "Apple Cover",
  description: "Recreated by Robert Grabowski",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${almarai.variable} antialiased overflow-x-hidden`}>
        <MenuProvider>
          <Navigation />
          <Main>{children}</Main>
        </MenuProvider>
      </body>
    </html>
  );
}
