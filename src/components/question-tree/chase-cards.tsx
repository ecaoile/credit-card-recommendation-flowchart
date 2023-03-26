import { NavLink } from "react-router-dom";

export default function ChaseCards() {
    return (
        <div className="m-5">
            <div className="m-5">
                <h2 className="text-lg font-semibold">Chase Cards</h2>
                <NavLink to="/question-tree?node=chase-or-not">
                    <p className="text-blue-600 no-underline hover:underline">Return to Parent Section</p>
                </NavLink>
                <div className="m-5">
                    <h3 className="text-md m-2">Depending on your #/24-status, you'll be able to get up to 5 Chase personal cards. My suggested priority order for Chase personal cards:</h3>
                    <ol className="list-decimal list-inside m-2">
                        <li>Chase Sapphire Preferred or Reserve</li>
                        <li>United Quest, Explorer and/or Club</li>
                        <li>World of Hyatt</li>
                        <li>Aeroplan</li>
                        <li>SW Priority or Plus (see * below)</li>
                        <li>Maybe&nbsp;Marriott Boundless (see ** below)</li>
                        <li>IHG Premier</li>
                        <li>British Airways / Aer Lingus / Iberia</li>
                        <li>Freedom Flex and/or Unlimited</li>
                    </ol>
                </div>
                <div className="m-5">
                    <h3 className="text-md m-2">For Chase business cards, my suggested priority order is:</h3>
                    <ol className="list-decimal list-inside m-2">
                        <li>Ink Cash, Unlimited and/or Preferred (check current bonuses to pick which)</li>
                        <li>United Business</li>
                        <li>Hyatt Business</li>
                        <li>SW Business Premier and/or Performance (see * below for timing)</li>
                    </ol>
                </div>
                <div className="m-5"><b>Remember:</b> One Chase card per 3+ months is the recommended sustained velocity, counting both personal and business Chase cards together.</div>
            </div>
            <div className="m-5">
                <NavLink to="/question-tree?node=non-chase-biz">
                    <p className="text-blue-600 no-underline hover:underline">View Non-Chase Business Cards</p>
                </NavLink>
                <NavLink to="/question-tree?node=cards-worth-burning-five-twenty-four">
                    <p className="text-blue-600 no-underline hover:underline">View Cards Possibly Worth Burning a 5/24 Slot</p>
                </NavLink>
            </div>
        </div>
    );
}