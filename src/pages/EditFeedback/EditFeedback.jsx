import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router"
import FeedbackContext from "../../context/FeedbackContext"
import BreadcrumbNav from "../../components/globals/BreadcrumbNav/BreadcrumbNav"
import FeedbackForm from "../../components/globals/FeedbackForm/FeedbackForm"

const EditFeedback = () => {
    let { value } = useContext(FeedbackContext);
    let { suggestions, categories, setSuggestions } = value;

    let { id } = useParams();

    let suggestion = suggestions.filter(item => item.id == id)[0];

    const [ currentFeedback, setCurrentFeedback ] = useState({
        id: suggestion.id,
        title: suggestion.title,
        category: suggestion.category,
        upvotes: suggestion.upvotes,
        status: suggestion.status,
        description: suggestion.description,
        comments: suggestion.comments
    });

    const [ defaultCategory, setDefaultCategory ] = useState(currentFeedback.category);

    const submitUpdatedFeedback = (e) => {
        e.preventDefault();
        console.log(currentFeedback)
        setSuggestions(suggestions.map(suggestion => (suggestion.id == currentFeedback.id ? { ...suggestion, currentFeedback } : suggestion )));
    }

    useEffect(() => {
        setCurrentFeedback({
            ...currentFeedback,
            category: defaultCategory
        })
    }, [currentFeedback.category]);

    return <main className="max-w-[540px] w-10/12 mx-auto py-20">
        <BreadcrumbNav hasAdditionalButton={false} />
        <FeedbackForm 
            suggestions={suggestions} 
            feedback={currentFeedback} 
            setFeedback={setCurrentFeedback} 
            title={"Edit Feedback"} 
            categories={categories} 
            toEdit={true} 
            defaultCategory={defaultCategory}
            setDefaultCategory={setDefaultCategory}
            submitFeedback={submitUpdatedFeedback}
        />
    </main>
}

export default EditFeedback