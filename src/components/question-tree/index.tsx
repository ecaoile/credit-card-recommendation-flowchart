import CardsWorthBurningFiveTwentyFour from "./cards-worth-burning-five-twenty-four";
import ChaseCards from "./chase-cards";
import ChaseOrNot from "./chase-or-not";
import FiveTwentyFour from "./five-twenty-four";
import NonChaseBiz from "./non-chase-biz";
import NotesForUnderFiveTwentyFour from "./notes-for-under-five-twenty-four";
import { QTreeNode } from "./tree-structure";


function QuestionTreeWalkthrough(props: any) {
    const QuestionTreeComponent: () => JSX.Element = function() {
        const searchParams = new URLSearchParams(window.location.search);
        const node: QTreeNode = (searchParams.get('node') ?? 'five-twenty-four') as QTreeNode;
        switch(node) {
            case 'five-twenty-four':
            default:
                return <FiveTwentyFour />;
            case 'chase-or-not':
                return <ChaseOrNot />;
            case 'chase-cards':
                return <ChaseCards />;
            case 'non-chase-biz':
                return <NonChaseBiz />;
            case 'cards-worth-burning-five-twenty-four':
                return <CardsWorthBurningFiveTwentyFour />
            case 'notes-for-under-five-twenty-four':
                return <NotesForUnderFiveTwentyFour />
        }
    };
    return (
        <div className="App min-w-[275px] m-2 mt-[11rem]">
            <QuestionTreeComponent />
        </div>
    );
}

export default QuestionTreeWalkthrough;