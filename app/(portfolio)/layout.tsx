import { Nav } from "@/components/nav";
import { Footer7 } from "@/components/ui/footer-7";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-20">{children}</main>
      <Footer7 />
    </>
  );
}
