import { useState, useEffect, useContext } from "react"
import FeedbackContext from "../../context/FeedbackContext"
import Navbar from "../../components/globals/Navbar/Navbar";
import uuid from "react-uuid"
import Button from "../../components/globals/Button/Button";
import { ReactComponent as ArrowUpIcon } from "../../assets/images/shared/icon-arrow-up.svg"
import { ReactComponent as CommentsIcon } from "../../assets/images/shared/icon-comments.svg"

const RoadmapBoard = () => {
    let { value } = useContext(FeedbackContext);
    let { suggestions, roadmapData } = value;

    const [ roadmaps, setRoadmaps ] = useState([]);

    // let statusLabels = [];
    
    const renderSuggestions = () => {
        let boards = [];
        roadmapData.map(status => boards.push({ 
            label: status.label, 
            relatedSuggestions: suggestions.filter(suggestion => suggestion.status == status.label) 
        }))
        return boards;
    }
    
    useEffect(() => {
        // renderSuggestions();
        setRoadmaps(renderSuggestions());
    }, []);

    return <main className="max-w-[1110px] mx-auto pt-16 pb-44">
        <Navbar />
        <section className="roadmap-board grid grid-cols-3 mt-12 gap-8">
            {roadmaps.map(status => {
                return <div className="board" key={uuid()}>
                    <header className="mb-8">
                        <h3>{status.label} ({status.relatedSuggestions.length})</h3>
                    </header>
                    <ul className="roadmap-suggestions flex flex-col gap-y-6">
                        {status.relatedSuggestions.map(suggestion => {
                            return <li className={`suggestion suggestion--${suggestion.status} rounded-xl`}>
                                <div className="bg-white p-8 rounded-t-none">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className={`w-[8px] h-[8px] rounded-full indicator-${status.label}`}></div>
                                        <p className="text-paler-navy">{status.label}</p>
                                    </div>
                                    <h4 className="mb-2 text-lg">{suggestion.title}</h4>
                                    <p>{suggestion.description}</p>
                                    <footer className="flex justify-between items-center mt-4">
                                        <Button classNames={"btn-upvote"} label={suggestion.upvotes} icon={<ArrowUpIcon />} />
                                        <div className="suggestion-card__comments-indicator flex items-center gap-2">
                                            <CommentsIcon />
                                            {/* {suggestion.comments ? (
                                                <span>{suggestions.comments.length}</span>
                                            ): <span>0</span>} */}
                                        </div>
                                    </footer>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            })}
        </section>
    </main>
}

export default RoadmapBoard