import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import { SearchProvider } from "./contexts/SearchContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <SearchProvider>
                    <Router>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route path="/" element={<Home />} />
                                <Route path="login" element={<SignIn />} />
                                <Route path="register" element={<SignUp />} />
                                <Route path="about" element={<About />} />
                                <Route path="contact" element={<Contact />} />
                                <Route path="categories" element={<Categories />} />
                                <Route path="products" element={<Products />} />
                            </Route>
                        </Routes>
                    </Router>
                </SearchProvider>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;