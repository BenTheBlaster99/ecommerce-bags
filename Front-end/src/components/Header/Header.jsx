import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import Navigation from "./Navigation";



function Header(props) {
    return (
       <header className="sticky top-0 z-50 bg-white">
         <TopBar/>
         <MainHeader/>
         <Navigation/>
       </header>
    );
}

export default Header;