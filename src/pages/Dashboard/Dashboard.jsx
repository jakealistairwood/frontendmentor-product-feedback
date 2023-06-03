import { useState, useEffect } from "react"

import Navbar from "../../components/globals/Navbar/Navbar"
import Sidebar from "../../components/globals/Sidebar/Sidebar"
import appData from "../../assets/data/data.json"
import SuggestionCard from "../../components/elements/SuggestionCard/SuggestionCard";

import uuid from "react-uuid"

const Dashboard = () => {

    const [ suggestions, setSuggestions ] = useState([]);

    const flattenCategories = (array) => {
        return [...new Set(array.map(item => {
            return item.category
        }))];
    }

    let categories = flattenCategories(suggestions);

    // let categories = reduceCategories(suggestions);
    // console.log(categories);

    useEffect(() => {
        setSuggestions([...appData.productRequests])
    }, []);
    
    return <section className="dashboard flex gap-8">
        <Sidebar suggestionCategories={categories} />
        <main className="grow flex flex-col gap-5">
            <Navbar noOfSuggestions={suggestions.length} />
            {suggestions.map(suggestion => {
                return <SuggestionCard key={uuid()} suggestion={suggestion} />
            })}
        </main>
    </section>
}

export default Dashboard