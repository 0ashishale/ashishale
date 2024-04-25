import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const inter = Roboto_Serif({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata = {
  title: "Ashish Ale Magar",
  description: "Fullstack Developer & UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
