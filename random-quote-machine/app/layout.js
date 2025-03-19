export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex justify-center items-center h-screen">
        {children}
      </body>
    </html>
  );
}
