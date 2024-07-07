import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "𝙎𝙝𝙖𝙧𝙟𝙚𝙚𝙡 𝙃𝙪𝙨𝙨𝙖𝙞𝙣- 𝙈𝙚𝙧𝙣 𝙨𝙩𝙖𝙘𝙠 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧",
  description: "Open source portfolio for biggners!",
  icon: '/avatar.png',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.icon} />
        <script
          src="https://kit.fontawesome.com/3b2468ae5a.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
