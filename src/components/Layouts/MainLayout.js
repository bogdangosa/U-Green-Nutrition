import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";


const MainLayout = ({children}) =>{
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

export default MainLayout;