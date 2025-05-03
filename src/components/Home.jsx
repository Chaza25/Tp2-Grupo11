import Footer from "./Footer";
import Header from "./Header";
import MainHome from "./MainHome";

export default function Home() {
    return(
        <div className="flex flex-col w-full">
            
        <Header />
        <MainHome />

        <Footer/>
        </div>
        
    )
}