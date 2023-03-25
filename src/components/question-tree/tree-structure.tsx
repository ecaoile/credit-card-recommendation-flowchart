// import QuestionTreeWalkthrough from ".";

// export class TreeNode {
//     left: TreeNode | null;
//     right: TreeNode | null;
//     parent: TreeNode | null;
//     page: JSX.Element;

//     constructor(page: JSX.Element, left = null, right = null, parent = null) {
//         this.page = page;
//         this.left = left;
//         this.right = right;
//         this.parent = parent;
//     }
// }

// export const treeRoot: TreeNode = new TreeNode(QuestionTreeWalkthrough());
enum QTreePages {
    FiveTwentyFour = 1,
    ChaseOrNot,
    ChaseCards,
    NonChaseBiz,
    WorthBurningFiveTwentyFour,
    NotesForUnderFiveTwentyFour
}

export default QTreePages;