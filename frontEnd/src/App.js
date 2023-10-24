import { Outlet, Route, Routes } from "react-router-dom";
import About from "./pages/AboutUs";
import ProductSection from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import CategorySection from "./pages/Category/CategorySection";
import CategoryDetails from "./pages/Category/CategoryDetails";
import CategoryAdd from "./pages/Category/CategoryAdd";
import CategoryEdit from "./pages/Category/CategoryEdit";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";
import "./assets/styles/App.css";

function App() {

  function NotFound (){
    return <p> Error</p>
  }


  return (<>
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row home">
          <div className="col-md-3 col-sm-12">
            <SideBar />
          </div>
          <div className="col-md-9 col-sm-12">
            <Routes>
              <Route path="/" element={<ProductSection />} />

              <Route path="/product" element={<> <Outlet/> </>} >
                <Route path="" element={<ProductSection />} />
                <Route path=":id" element={<ProductDetails />} />
                <Route path="add_product" element={<ProductAdd />} />
                <Route path="edit_product/:id" element={<ProductEdit />} />
              </Route>

              <Route path="/category" element={ <><Outlet /> </> }>
                <Route path="" element={<CategorySection />} />
                <Route path=":id" element={<CategoryDetails />} />
                <Route path="add_category" element={<CategoryAdd />} />
                <Route path="edit_category/:id" element={<CategoryEdit />} />
              </Route>

              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
