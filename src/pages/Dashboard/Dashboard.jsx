import { useState, useEffect, useContext } from "react"

import Navbar from "../../components/globals/Navbar/Navbar"
import Sidebar from "../../components/globals/Sidebar/Sidebar"
import appData from "../../assets/data/data.json"
import SuggestionCard from "../../components/elements/SuggestionCard/SuggestionCard";

import uuid from "react-uuid"
import NoSuggestions from "../../components/elements/NoSuggestions/NoSuggestions";
import FeedbackContext from "../../context/FeedbackContext";
import { ReactComponent as SuggestionsIcon } from "../../assets/images/suggestions/icon-suggestions.svg"

const Dashboard = () => {

    const { value } = useContext(FeedbackContext);
    let { 
        suggestions, 
        categories, 
        mobileMenuOpen,
        setMobileMenuOpen,
        roadmapData, 
        filterCategories, 
        originalSuggestions,
        windowWidth,
    } = value;
    
    return <section className="dashboard flex flex-col lg:flex-row gap-8">
        <Sidebar 
            originalSuggestions={originalSuggestions}
            suggestionCategories={categories} 
            filterCategories={filterCategories} 
            statuses={roadmapData} 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            windowWidth={windowWidth}
        />
        <main className="grow flex flex-col gap-5 pt-52 pb-12 sm:pt-0">
            <Navbar noOfSuggestions={suggestions.length} titleOptions={{ title: `${suggestions.length} Suggestions`, icon: <SuggestionsIcon /> }} />
            {suggestions.length ? suggestions.map(suggestion => {
                return <SuggestionCard windowWidth={windowWidth} key={uuid()} suggestion={suggestion} isLink={true} />
            }) : <NoSuggestions />}
        </main>
        <div className={`overlay ${mobileMenuOpen ? "overlay--active" : "overlay--hidden"}`}></div>
    </section>
}

export default Dashboard