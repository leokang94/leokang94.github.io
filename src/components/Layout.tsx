import Navbar from '#components/Navbar';
import Footer from '#components/Footer';

interface LayoutProps {
  children?: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="px-4 md:w-[48rem] md:max-w-3xl md:m-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
