import { useState, useEffect } from "react"

import Navbar from "../../components/globals/Navbar/Navbar"
import Sidebar from "../../components/globals/Sidebar/Sidebar"
import appData from "../../assets/data/data.json"
import SuggestionCard from "../../components/elements/SuggestionCard/SuggestionCard";

import uuid from "react-uuid"

const Dashboard = () => {

    const [ suggestions, setSuggestions ] = useState([]);

    const getCategories = (array) => {
        return [...new Set(array.map(item => {
            return item.category
        }))];
    }

    // const getStatusUpdates = (array) => {
    //     return [...new Set(array.map(item => {
    //         return {
    //             itemLabel: item.status,
    //             itemNumber: [item.status].length
    //         }
    //     }))]
    // }

    const getStatusUpdates = (array) => {
        return [...new Set(array.map(item => {
            return item.status
        }))]
    }

    const removeDuplicates = (array) => {
        let seen = {};
        return array.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        })
    }

    let categories = getCategories(suggestions);

    let statusUpdatesArr = [];

    let getArrayProperty = (array, property) => array.map(item => item[property]);

    let statusUpdates = getArrayProperty(suggestions, "status");
    console.log(statusUpdates);

    let cleanedStatusUpdates = statusUpdates.filter(item => item !== "suggestion");

    console.log(cleanedStatusUpdates)

    let removedStatusDuplicates = removeDuplicates(cleanedStatusUpdates);
    console.log(removedStatusDuplicates);

    // let categories = reduceCategories(suggestions);
    // console.log(categories);

    let statusInstances = {};

    cleanedStatusUpdates.forEach(element => {
        statusInstances[element] = (statusInstances[element] || 0) + 1;
    })

    console.log(statusInstances);

    let statusInstancesArr = Object.values(statusInstances);
    console.log(statusInstancesArr);

    let roadmapData = removedStatusDuplicates.map((item, index) => {
        return {
            updateLabel: item,
            numberOfUpdates: statusInstancesArr[index]
        }
    })

    console.log(roadmapData);

    useEffect(() => {
        setSuggestions([...appData.productRequests])
        console.log(suggestions)
    }, []);
    
    return <section className="dashboard flex gap-8">
        <Sidebar suggestionCategories={categories} statuses={roadmapData} />
        <main className="grow flex flex-col gap-5">
            <Navbar noOfSuggestions={suggestions.length} />
            {suggestions.map(suggestion => {
                return <SuggestionCard key={uuid()} suggestion={suggestion} />
            })}
        </main>
    </section>
}

export default Dashboard