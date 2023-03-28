import { NavLink } from "react-router-dom";
import UpArrow from "../../assets/up-arrow";

function FiveTwentyFour(props: any) {
    return (
        <>
            <div className="m-5">
                <NavLink to="/">
                    <p className="text-blue-600 no-underline hover:underline my-3">Return to Parent Section <UpArrow className="inline-block" /></p>
                </NavLink>
            </div>
            <div className="m-5 p-5 bg-blue-50">
            <div className="m-5">
                <h2 className='text-lg'>Are you under 5/24?</h2>
                <p>Click <a href="https://old.reddit.com/r/churning/wiki/index#wiki_chase_cc_rules.2C_including_5.2F24" target="_blank" rel="noreferrer" className="text-blue-600 no-underline hover:underline">this link</a> if you don't know what 5/24 means.</p>
            </div>
            <div className='m-2'>
                <NavLink to="/question-tree?node=chase-or-not">
                    <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded my-1 mx-5">Yes</button>
                </NavLink>
                <NavLink to="/question-tree">
                    <button className="bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded my-1 mx-5">No</button>
                </NavLink>
            </div>
            </div>
        </>
    );
}

export default FiveTwentyFour;