import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "𝙎𝙝𝙖𝙧𝙟𝙚𝙚𝙡 𝙃𝙪𝙨𝙨𝙖𝙞𝙣- 𝙁𝙧𝙤𝙣𝙩-𝙚𝙣𝙙 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧",
  description: "Open source portfolio for biggners!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/3b2468ae5a.js"
          crossOrigin="anonymous"
        ></script>
        {/* <script src="node_modules/@material-tailwind/html/scripts/collapse.js"></script> */}
        {/* <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
