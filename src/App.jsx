import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Mainpage from './pages/mainpage/Mainpage'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import { useEffect, useState } from 'react'
import RecipePage from './pages/recipepage/Recipepage'

function App() {
    const url = "/api/recipes";
    const [recipes, SetRecipes] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => SetRecipes(data));
    }, []);


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/recipe/:id' element={<RecipePage recipes={recipes} />} />
                <Route path='*' element={<Mainpage recipes={recipes} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
