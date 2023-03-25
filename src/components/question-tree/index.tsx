import { useLocation } from "react-router-dom";
import ChaseCards from "./chase-cards";
import ChaseOrNot from "./chase-or-not";
import FiveTwentyFour from "./five-twenty-four";
import NonChaseBiz from "./non-chase-biz";
import QTreePages from "./tree-structure";


function QuestionTreeWalkthrough(props: any) {
    const { state } = useLocation();
    const QuestionTreeComponent = function(props: any) {
        switch(state.page) {
            case QTreePages.FiveTwentyFour:
            default:
                return <FiveTwentyFour />;
            case QTreePages.ChaseOrNot:
                return <ChaseOrNot />;
            case QTreePages.ChaseCards:
                return <ChaseCards />;
            case QTreePages.NonChaseBiz:
                return <NonChaseBiz />;
        }
    };
    return (
        <div className="App m-5 min-w-[275px]">
            <QuestionTreeComponent />
        </div>
    );
}

export default QuestionTreeWalkthrough;