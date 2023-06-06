import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router"
import FeedbackContext from "../../context/FeedbackContext"
import BreadcrumbNav from "../../components/globals/BreadcrumbNav/BreadcrumbNav"
import FeedbackForm from "../../components/globals/FeedbackForm/FeedbackForm"
import { useNavigate } from "react-router"

const EditFeedback = () => {
    let { value } = useContext(FeedbackContext);
    let { suggestions, categories, setSuggestions, roadmapData } = value;

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
    const [ defaultStatus, setDefaultStatus ] = useState(currentFeedback.status);
    const [ loadingWait, setLoadingWait ] = useState(false);

    let statuses = roadmapData.map(status => status.label);

    let navigate = useNavigate();

    const submitUpdatedFeedback = (e) => {
        e.preventDefault();
        console.log(currentFeedback)
        setSuggestions(suggestions.map(suggestion => (suggestion.id == currentFeedback.id ? { ...suggestion, currentFeedback } : suggestion )));
    }
    
    const deleteFeedback = (e, currentSuggestion) => {
        console.log(currentSuggestion);
        setSuggestions(suggestions.filter(suggestion => suggestion.id !== currentSuggestion.id));
        navigate("/suggestions")
    }

    useEffect(() => {
        setCurrentFeedback({
            ...currentFeedback,
            category: defaultCategory,
            status: defaultStatus
        })
    }, [currentFeedback.category, currentFeedback.status]);

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
            defaultStatus={defaultStatus}
            setDefaultStatus={setDefaultStatus}
            submitFeedback={submitUpdatedFeedback}
            deleteFeedback={deleteFeedback}
            statuses={statuses}
        />
    </main>
}

export default EditFeedback