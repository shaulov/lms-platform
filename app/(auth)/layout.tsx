export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid items-center justify-center w-full h-full">
      {children}
    </main>
  );
}