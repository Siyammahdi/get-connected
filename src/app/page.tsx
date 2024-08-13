
import Header from "@/app/components/common/Header";
import Navigations from "@/app/components/common/Navigations";
import SearchFilters from "@/app/components/Home/SearchFilters";
import Services from "@/app/components/Home/Services";

export default function Home() {
  return (
    <main className="space-y-4">
      <Header />
      <Navigations />
      <SearchFilters />
      <Services />
    </main>
  );
}
