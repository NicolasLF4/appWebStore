import React from "react";
import { HomeNav } from "./HomeNav.jsx";
import { HomeCarousel } from "./HomeCarousel.jsx";
import { HomeCategories } from "./HomeCategories.jsx";
import { HomeNews } from "./HomeNews.jsx";
import { HomeFooter } from "./HomeFooter.jsx";

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
