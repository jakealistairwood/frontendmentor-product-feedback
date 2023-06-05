import { useState, useContext, useEffect } from "react"
import BreadcrumbNav from "../../components/globals/BreadcrumbNav/BreadcrumbNav"
import FeedbackForm from "../../components/globals/FeedbackForm/FeedbackForm"
import FeedbackContext from "../../context/FeedbackContext";

const AddFeedback = () => {
    const { value } = useContext(FeedbackContext);
    let { suggestions, setSuggestions, categories } = value;

    const [ newFeedback, setNewFeedback ] = useState({
        id: suggestions.length + 1,
        title: "",
        category: "",
        upvotes: 0,
        status: "suggestion",
        description: "",
        comments: []
    });

    const [ defaultCategory, setDefaultCategory ] = useState("feature");

    const submitNewFeedback = (e) => {
        e.preventDefault();
        suggestions.push(newFeedback)
        setNewFeedback({
            id: suggestions.length + 1,
            title: "",
            category: "",
            upvotes: 0,
            status: "suggestion",
            description: "",
            comments: []
        })
    }

    useEffect(() => {
        setNewFeedback({
            ...newFeedback,
            category: defaultCategory
        })
    }, []);



    return <main className="max-w-[540px] w-full mx-auto py-20">
        <BreadcrumbNav hasAdditionalButton={false} />
        <FeedbackForm 
            suggestions={suggestions} 
            feedback={newFeedback} 
            setFeedback={setNewFeedback} 
            title={"Create New Feedback"} 
            categories={categories}
            defaultCategory={defaultCategory}
            setDefaultCategory={setDefaultCategory} 
            submitFeedback={submitNewFeedback}
        />
    </main>
}

export default AddFeedback