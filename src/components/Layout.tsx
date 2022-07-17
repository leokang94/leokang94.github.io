import Navbar from '#components/NavBar';
import Footer from '#components/Footer';

interface LayoutProps {
  children?: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-auto min-h-[100vh]">
      <Navbar />
      <main className="flex-1 px-4 md:w-[48rem] md:max-w-3xl md:m-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
