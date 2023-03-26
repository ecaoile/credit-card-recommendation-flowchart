import { NavLink } from "react-router-dom";

export default function NonChaseBiz() {
    return (
        <>
            <div className="my-5">
                <h2 className="text-lg font-semibold">Non-Chase Business Cards</h2>
                <NavLink to="/question-tree?node=chase-or-not">
                    <p className="text-blue-600 no-underline hover:underline">Return to Parent Section</p>
                </NavLink>
                <div className="m-5">
                    <h3 className="text-md m-2">Use non-Chase business cards as <b>spacers</b> between Chase apps.&nbsp; No card-specific priority order here since it should mostly depend on which cards are at good bonuses, but here are banks to consider along with key rules:</h3>
                    <ul className="list-disc list-inside m-2">
                        <li><b>Amex:</b>&nbsp; Easiest business cards to get by-far, and lot of great options.&nbsp; Bonuses vary wildly though, and due to the lifetime-rule you'll want to get cards at high/near-high bonuses.&nbsp; Note 1/5 and 2/90 rules and the 5-credit-card limit (charge cards exempt).</li>
                        <li><b>Barclays:</b>&nbsp; Has a (soft) 6/24 rule, so best to get the Barclays biz cards you want while under 5/24.&nbsp; Main biz options are AA, JetBlue, Hawaiian, and Wyndham.</li>
                        <li><b>BoA:</b>&nbsp; Alaska Biz and Biz Cash Rewards are popular options.&nbsp; BoA may require you to open a CD to "secure" the card though.</li>
                        <li><b>Cap1:</b>&nbsp; <u>Only Spark </u><i><u>Cash Plus</u></i>!&nbsp; Spark <i>Cash Select</i>&nbsp;and Spark&nbsp;<i>Miles</i>&nbsp;show on your personal report.</li>
                        <li><b>Citi:</b>&nbsp; Usually requires 5 yrs of credit history.&nbsp; AA Biz, or in-branch-only TYP Biz.</li><li><b>US Bank:</b>&nbsp; Biz Cash and Leverage are main options.&nbsp; Be <u>very</u>&nbsp;careful with MS.</li>
                        <li><b>Wells Fargo:</b>&nbsp; Requires a WF bank account 1+ year old.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <NavLink to="/question-tree?node=non-chase-biz">
                    <p className="text-blue-600 no-underline hover:underline m-2">View Non-Chase Business Cards</p>
                </NavLink>
                <NavLink to="/question-tree?node=cards-worth-burning-five-twenty-four">
                    <p className="text-blue-600 no-underline hover:underline m-2">View Cards Possibly Worth Burning a 5/24 Slot</p>
                </NavLink>
            </div>
        </>
    );
}