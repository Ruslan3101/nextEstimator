import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Inter Font and Antialiased Class: Combined the Inter font class and the antialiased class  Utility for controlling the font smoothing of an element.. */}
      <body className={`${inter.className} antialiased`}>{children}</body> 
    </html>
  );
}
