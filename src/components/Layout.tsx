import Navbar from '#components/Navbar';
import Footer from '#components/Footer';

interface LayoutProps {
  children?: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="max-w-3xl m-auto">{children}</main>
      <Footer />
    </div>
  );
}
