
import Header from "./Home/Header";
import Navigations from "./Home/Navigations";
import Selectors from "./Home/Selectors";
import Services from "./Home/Services";

export default function Home() {
  return (
    <main className="space-y-4">
      <Header />
      <Navigations />
      <Selectors />
      <Services />
    </main>
  );
}
