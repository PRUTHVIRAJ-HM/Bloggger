import {Outfit} from'next/font/google'
import "./globals.css";

const outfit=Outfit({subsets:['latin'],weight:["400","500","600","700"]})

export const metadata = {
  title: "Bloggger",
  description: "A blog app for sharing your thoughts and ideas with the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
