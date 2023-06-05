import { useState, useEffect, createContext } from "react"
import appData from "../assets/data/data.json"
import { getArrayProperty, getCategories, removeDuplicates } from "../assets/utils/helpers";

const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {

    const [ suggestions, setSuggestions ] = useState([]);
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

    let originalSuggestions = appData.productRequests;
    let filterCategories = getCategories(appData.productRequests);

    let categories = getCategories(suggestions);
    let statusUpdates = getArrayProperty(suggestions, "status");

    let cleanedStatusUpdates = statusUpdates.filter(item => item !== "suggestion")
    let removedStatusDuplicates = removeDuplicates(cleanedStatusUpdates);

    let statusInstances = {};

    cleanedStatusUpdates.forEach(item => {
        statusInstances[item] = (statusInstances[item] || 0) + 1;
    })

    let statusInstancesArr = Object.values(statusInstances);

    let roadmapData = removedStatusDuplicates.map((item, index) => {
        return {
            label: item,
            numberOfUpdates: statusInstancesArr[index]
        }
    })

    useEffect(() => {
        setSuggestions([...appData.productRequests]);
    }, []);

    const value = {
        suggestions,
        originalSuggestions,
        mobileMenuOpen,
        setMobileMenuOpen,
        setSuggestions,
        filterCategories,
        categories,
        roadmapData
    };

    return <FeedbackContext.Provider value={{value}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext