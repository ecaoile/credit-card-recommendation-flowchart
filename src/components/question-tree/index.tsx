import ChaseCards from "./chase-cards";
import ChaseOrNot from "./chase-or-not";
import FiveTwentyFour from "./five-twenty-four";
import NonChaseBiz from "./non-chase-biz";
import { QTreeNode } from "./tree-structure";


function QuestionTreeWalkthrough(props: any) {
    // const { state } = useLocation();
    console.log(window.location);
    // let params = (new URL(document.location)).searchParams;
    // let paramsString = "name=foo&age=1337"

    const QuestionTreeComponent = function() {
        const searchParams = new URLSearchParams(window.location.search);
        const node: QTreeNode = (searchParams.get('node') ?? 'five-twenty-four') as QTreeNode;
        console.log('node?', searchParams.get('node'));
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
        }
    };
    return (
        <div className="App m-5 min-w-[275px]">
            <QuestionTreeComponent />
        </div>
    );
}

export default QuestionTreeWalkthrough;