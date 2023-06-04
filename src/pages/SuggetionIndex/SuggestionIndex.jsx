import { useState, useEffect, useContext } from "react" 
import BreadcrumbNav from "../../components/globals/BreadcrumbNav/BreadcrumbNav"
import { useParams } from "react-router"
import FeedbackContext from "../../context/FeedbackContext"
import SuggestionCard from "../../components/elements/SuggestionCard/SuggestionCard"
import CommentsBlock from "../../components/elements/CommentsBlock/CommentsBlock"
import AddComment from "../../components/elements/AddComment/AddComment"

const SuggestionIndex = () => {
    let { id } = useParams();
    const [ currentSuggestion, setCurrentSuggestion ] = useState({});

    const { value } = useContext(FeedbackContext);
    let { suggestions, categories, roadmapData, setSuggestions } = value;

    let suggestion = suggestions.filter(item => item.id == id)[0];
    
    // useEffect(() => {
    //     setSuggestion(suggestions.filter(item => item.id == id)[0]);
    // }, []);

    useEffect(() => {
        setCurrentSuggestion(suggestion)
    }, []);

    return <main className="max-w-[730px] w-full mx-auto py-20">
        <section>
            <BreadcrumbNav />
            <SuggestionCard suggestion={suggestion} />
            <CommentsBlock comments={suggestion.comments} />
            <AddComment currentSuggestion={currentSuggestion} setCurrentSuggestion={setCurrentSuggestion} />
        </section>
    </main>
}

export default SuggestionIndex