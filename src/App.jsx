import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ViewFilms from "./pages/ViewFilms";
import ViewPeople from "./pages/ViewPeople";
import Locations from "./pages/Locations";


import FilmDetails from "./pages/FilmDetails";
import PersonDetails from "./pages/PersonDetails";
import LocationDetails from "./pages/LocationDetails"


const App = () => {

    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewfilms" element={<ViewFilms />}/>
            <Route path="/viewfilms/:filmid" element={<FilmDetails />}/>
            <Route path="/viewpeople" element={<ViewPeople />}/>
            <Route path="/viewpeople/:personid" element={<PersonDetails />}/>
            <Route path="/locations" element={<Locations />}/>
            <Route path="/locations/:locationid" element={<LocationDetails />}/>
        </Routes>
        </BrowserRouter>
    );
};

export default App;