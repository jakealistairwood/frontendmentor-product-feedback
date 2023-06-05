import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../../../context/FeedbackContext"
import uuid from "react-uuid"
import Button from "../../globals/Button/Button"

const FeedbackFilters = ({ filters, originalFilters, originalSuggestions }) => {
    let { value } = useContext(FeedbackContext);
    let { suggestions, setSuggestions } = value;

    const [ currentFilter, setCurrentFilter ] = useState("");

    const handleFilter = (label) => {
        setCurrentFilter(label)
        setSuggestions(originalSuggestions)
        if(label == "all") {
            console.log(suggestions);
            return
        } else {
            console.log("button clicked");
            let filterdSuggestions = suggestions.filter(suggestion => suggestion.category == label)
            console.log(filterdSuggestions)
            // setSuggestions(...suggestions.filter(suggestion => suggestion.category == label))
            // setSuggestions([])
            setSuggestions([...filterdSuggestions])
        }
    }

    useEffect(() => {
        console.log("useEffect ran")
        setCurrentFilter("all")
    }, [handleFilter]);

    return <ul className={`feedback-filters rounded-xl p-6 bg-white flex flex-wrap gap-y-3.5 gap-x-2`}>
        <li className="">
            <Button 
                label={"All"} 
                isLink={false} 
                classNames={`btn-filter ${currentFilter == "all" && "btn-filter--active"} text-white`} 
                triggerFunctionality={() => handleFilter("all")}
            />
        </li>
        {originalFilters.map(filter => {
            return <li key={uuid()} className="">
                <Button 
                    label={filter} 
                    isLink={false} 
                    classNames={`btn-filter ${currentFilter == filter && "btn-filter--active"}`}
                    triggerFunctionality={() => handleFilter(filter)} 
                />
            </li>
        })}
    </ul>
}

export default FeedbackFilters;