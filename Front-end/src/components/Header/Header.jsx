import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import Navigation from "./Navigation";
import { useEffect } from "react";

function Header(props) {
  console.log("🧩 Header component rendering");
  useEffect(() => {
    console.log("🔄 Header component mounted");
    return () => console.log("🔄 Header component unmounted");
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopBar />
      <MainHeader />
      <Navigation />
    </header>
  );
}

export default Header;
