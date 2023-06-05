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
    const [ comment, setComment ] = useState({
        content: "",
        id: "",
        user: {
            image: "/images/image-suzanne.png",
            name: "Suzanne Smith",
            username: "suzie_smith1234"
        }
    })

    const { value } = useContext(FeedbackContext);
    let { suggestions, categories, roadmapData, setSuggestions } = value;

    let suggestion = suggestions.filter(item => item.id == id)[0];


    const postComment = (e) => {
        e.preventDefault(); 
        setCurrentSuggestion({
            ...currentSuggestion,
            comments: currentSuggestion.comments.push(comment)
        })
        setComment({
            content: "",
            id: "",
            user: {
                image: "/images/image-suzanne.png",
                name: "Suzanne Smith",
                username: "suzie_smith1234"
            }
        })
    }

    let editFeedbackLink = `/suggestions/${id}/edit-feedback`;

    console.log(editFeedbackLink);
    
    // useEffect(() => {
    //     setSuggestion(suggestions.filter(item => item.id == id)[0]);
    // }, []);

    useEffect(() => {
        setCurrentSuggestion(suggestion)
    }, [currentSuggestion.comments]);

    return <main className="max-w-[730px] w-10/12 mx-auto py-20">
        <section>
            <BreadcrumbNav hasAdditionalButton={true} href={editFeedbackLink} isLink={true} />
            <SuggestionCard suggestion={suggestion} />
            <CommentsBlock comments={suggestion.comments} />
            <AddComment 
                comment={comment}
                setComment={setComment}
                postComment={postComment}
                currentSuggestion={currentSuggestion} 
                setCurrentSuggestion={setCurrentSuggestion} 
            />
        </section>
    </main>
}

export default SuggestionIndex