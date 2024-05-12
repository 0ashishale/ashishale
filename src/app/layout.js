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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="fullstack developer, mern stack developer, ui/ux designer, ashish ale magar, 2AM"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
