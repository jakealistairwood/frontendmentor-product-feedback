import { useState, useContext } from "react"
import BreadcrumbNav from "../../components/globals/BreadcrumbNav/BreadcrumbNav"
import FeedbackForm from "../../components/globals/FeedbackForm/FeedbackForm"
import FeedbackContext from "../../context/FeedbackContext";

const AddFeedback = () => {
    const { value } = useContext(FeedbackContext);
    let { suggestions, setSuggestions} = value;

    const [ newFeedback, setNewFeedback ] = useState({
        id: suggestions.length + 1,
        title: "",
        category: "",
        upvotes: 0,
        status: "",
        description: "",
        comments: []
    });


    return <main className="max-w-[540px] w-full mx-auto py-20">
        <BreadcrumbNav hasAdditionalButton={false} />
        <FeedbackForm feedbackData={newFeedback} title={"Create New Feedback"} />
    </main>
}

export default AddFeedback