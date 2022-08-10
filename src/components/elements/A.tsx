interface AProps {
  href: string;
  children?: string;
}
export default function A({ href, children }: AProps) {
  return (
    <a
      className="underline text-blue-300 transition-colors duration-300 hover:text-blue-500 hover:cursor-pointer"
      href={href}
    >
      {children}
    </a>
  );
}
