import { useState, useEffect, useContext } from "react"
import FeedbackContext from "../../context/FeedbackContext"
import Navbar from "../../components/globals/Navbar/Navbar";
import uuid from "react-uuid"
import RoadmapCard from "../../components/elements/RoadmapCard/RoadmapCard";

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

    return <main className="roadmap-page max-w-[1110px] w-10/12 mx-auto pt-16 pb-44">
        <Navbar hasBreadcrumb={true} titleOptions={{ title: "Roadmap", icon: "" }} />
        <section className="roadmap-board grid grid-cols-1 sm:grid-cols-3 mt-12 gap-8">
            {roadmaps.map(status => {
                return <div className="board" key={uuid()}>
                    <header className="mb-8">
                        <h3>{status.label} ({status.relatedSuggestions.length})</h3>
                    </header>
                    <ul className="roadmap-suggestions flex flex-col gap-y-6">
                        {status.relatedSuggestions.map(suggestion => {
                            return <RoadmapCard key={uuid()} status={status} suggestion={suggestion} />
                        })}
                    </ul>
                </div>
            })}
        </section>
    </main>
}

export default RoadmapBoard