import { NavLink } from "react-router-dom";
import DownArrow from "../../assets/down-arrow";
import UpArrow from "../../assets/up-arrow";

export default function CardsWorthBurningFiveTwentyFour() {
    return (
        <>
            <div className="my-5">
                <NavLink to="/question-tree?node=chase-or-not">
                    <p className="text-blue-600 no-underline hover:underline">Return to Parent Section <UpArrow className="inline-block" /></p>
                </NavLink>
            </div>
            <div className="my-5">
                <div className="py-2 border-solid border-4 border-green-500">
                    <h2 className="text-lg font-semibold">Cards possibly worth burning a 5/24-slot for:</h2>
                    <div className="m-5">
                        <h3 className="text-md m-2">Cards possibly worth burning a 5/24-slot for:</h3>
                        <ul className="list-disc list-inside m-2">
                        <li><b>Amex Platinum:</b> Resy offer of 125k MRs + 15x on restaurants+ShopSmall for 6 months is spectacular if you have a lot of spend in the 15x category.&nbsp; Or the targeted 150k + 10x offer if you don't have much restaurants+ShopSmall&nbsp;spend.</li>
                            <li><b>Cap1 Venture or Venture X 100k offer:</b> Cap1 does not have a hard #/24-like rule, though for practical purposes they almost never approve above 5-6/24.&nbsp; Cap1 Venture points can be quite valuable (transfer 1:1 to various airlines), so can be worth burning a 5/24 slot for.</li>
                            <li><b>Cap1 Spark Miles 200k offer:</b> For very high-spenders who can meet the $50k spend in 6 months for 200k points offer.&nbsp; See *** below for why this business card burns a 5/24 slot.</li>
                            <li><b>New all-time high offers:</b> We cannot predict every possible bonus offer for every card in the future, very occasionally a "too good to pass up" offer comes around worth burning a 5/24 slot on.&nbsp; For example, if US Bank Altitude Reserve has a 100k bonus, Amex Marriott Brilliant has a 150k bonus, or Citi Premier has an 80k bonus, that may be worth it.</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <NavLink to="/question-tree?node=notes-for-under-five-twenty-four">
                        <p className="text-blue-600 no-underline hover:underline my-3">View Notes for Under 5/24 <DownArrow className="inline-block" /></p>
                    </NavLink>
                </div>
            </div>
        </>
    );
}