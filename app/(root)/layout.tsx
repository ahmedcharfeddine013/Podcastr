import LeftSidebar from "../../components/LeftSidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        {children}
        RIGHT SIDEBAR
      </main>
    </div>
  );
}
