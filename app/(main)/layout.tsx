export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <div className="w-full border-x border-t border-black/10">
          {children}
        </div>
      </div>
    </>
  );
}
