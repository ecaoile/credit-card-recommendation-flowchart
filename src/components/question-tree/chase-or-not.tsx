import { NavLink } from "react-router-dom";

export default function ChaseOrNot() {
    return (
        <div className='m-5'>
            <div className="m-5">
                <h2 className="text-lg font-semibold">Under-5/24 approach:</h2>
                <NavLink to="/question-tree?node=five-twenty-four">
                    <p className="text-blue-600 no-underline hover:underline">Return to Parent Section</p>
                </NavLink>
                <ol className="list-decimal list-inside m-5">
                    <li>
                        <b>Apply for a Chase card every 3+ months.</b> Occasionally getting Chase cards faster than that is fine, but repeatedly doing so will greatly heighten Chase Shutdown risk.
                    </li>
                    <li>
                        Since most business cards don't impact 5/24 (see *** below), <b>get non-Chase business cards whenever you'd like as "spacers" between Chase apps</b>
                    </li>
                    <li>
                        Consider burning a 5/24 slot on a few select non-Chase personal cards (see below).
                    </li>
                </ol>
            </div>
            <div className="m-5">
                <h2 className='text-lg'>Are you interested in Chase or non-Chase cards?</h2>
            </div>
            <div className='m-2'>
                <NavLink to="/question-tree?node=chase-cards">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-1 mx-5">Chase</button>
                </NavLink>
                <NavLink to="/question-tree?node=non-chase-biz">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-1 mx-5">Non-Chase</button>
                </NavLink>
            </div>
        </div>
    )
}