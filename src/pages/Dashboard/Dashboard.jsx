import { useState, useEffect, useContext } from "react"

import Navbar from "../../components/globals/Navbar/Navbar"
import Sidebar from "../../components/globals/Sidebar/Sidebar"
import appData from "../../assets/data/data.json"
import SuggestionCard from "../../components/elements/SuggestionCard/SuggestionCard";

import uuid from "react-uuid"
import NoSuggestions from "../../components/elements/NoSuggestions/NoSuggestions";
import FeedbackContext from "../../context/FeedbackContext";

const Dashboard = () => {

    const { value } = useContext(FeedbackContext);
    let { suggestions, categories, roadmapData } = value;
    
    return <section className="dashboard flex gap-8">
        <Sidebar suggestionCategories={categories} statuses={roadmapData} />
        <main className="grow flex flex-col gap-5">
            <Navbar noOfSuggestions={suggestions.length} />
            {suggestions.length ? suggestions.map(suggestion => {
                return <SuggestionCard key={uuid()} suggestion={suggestion} />
            }) : <NoSuggestions />}
        </main>
    </section>
}

export default Dashboard