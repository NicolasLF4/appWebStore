import React from "react";
import { HomeNav } from "../../components/Nav.jsx";
import { HomeCarousel } from "./HomeCarousel.jsx";
import { HomeCategories } from "./HomeCategories.jsx";
import { HomeNews } from "./HomeNews.jsx";
import { HomeFooter } from "../../components/Footer.jsx";

export const HomePage = () => {
    return (
        <>
            <HomeNav />
            <HomeCarousel />
            <HomeCategories />
            <HomeNews />
            <HomeFooter />
        </>
    )
}

export default HomePage;
