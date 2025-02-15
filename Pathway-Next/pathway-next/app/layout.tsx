import './globals.css'; // Import global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className='justify-center flex'>{children}</body>
    </html>
  );
}