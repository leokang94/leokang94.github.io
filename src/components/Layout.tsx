import Navbar from '#components/NavBar';
import Footer from '#components/Footer';

interface LayoutProps {
  children?: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-auto min-h-[100vh]">
      <Navbar />
      <main className="flex-1 px-4">
        <div className="m-auto md:max-w-screen-md">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
