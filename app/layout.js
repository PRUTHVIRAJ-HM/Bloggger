import {Poppins} from'next/font/google'
import "./globals.css";

const poppins=Poppins({subsets:['latin'],weight:["400","500","600","700"]})

export const metadata = {
  title: "Bloggger",
  description: "A blog app for sharing your thoughts and ideas with the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
