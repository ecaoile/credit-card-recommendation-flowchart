import { NavLink } from "react-router-dom";
import UpArrow from "../../assets/up-arrow";

export default function NotesForUnderFiveTwentyFour() {
    return (
        <>
            <div className="my-5">
                <NavLink to="/question-tree?node=cards-worth-burning-five-twenty-four">
                    <p className="text-blue-600 no-underline hover:underline">Return to Parent Section <UpArrow className="inline-block" /></p>
                </NavLink>
            </div>
            <div className="my-5 py-2 border-solid border-4 border-green-500">
                <h2 className="text-lg font-semibold">NOTES FOR UNDER 5/24</h2>

                <div className="m-5">
                    <ul className="list-disc list-inside m-2">
                        <li><b>Recommended gap between Chase apps (both personal and business) is <u>3+ months</u></b> Occasionally breaking that rule is okay, but doing so repeatedly will greatly heighten Chase's shutdown risk.</li>
                        <li>* <b>If you get the SW cards in fall/early-winter so that the bonuses post in January/February</b>, you'll maximize how long you have the Companion Pass.</li>
                        <li>** <b>We usually suggest skipping Chase Marriott Boundless</b> and rather getting Amex Marriott cards (Biz while under 5/24, then Brilliant when past 5/24), due to the "One Lane" rule with Marriott cards. But if you are 0-1/24, you <u><b>may</b></u> want to start with the Chase Marriott Boundless first, since there are enough cards for someone just starting out to get to occupy 24 months of CC apps -- do so early though to get your 24 month clock ticking sooner rather than later. Also note that you can still upgrade Boundless to the old Ritz card, so that's a popular reason to get Boundless too.</li>
                        <li>*** <b>Most business cards</b> (including ones from Chase, Amex, Citi, Barclays, BoA, Wells Fargo, US Bank) <b><u>do not</u></b> show on your credit-report and hence <b><u>do not</u></b>&nbsp;count against 5/24.&nbsp; Cap1 Spark <i>Cash Plus</i>&nbsp;also <b><u>does not</u></b> show on personal report, though other Cap1 biz cards&nbsp;<b><u>do</u></b> show.&nbsp; Discover biz cards <b><u>do</u></b> too.&nbsp; Make sure to avoid business cards which show on your personal report while under 5/24.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <NavLink to="/question-tree?node=five-twenty-four">
                    <p className="text-blue-600 no-underline hover:underline my-3"><UpArrow className="inline-block" /> Return to Top of Question Tree <UpArrow className="inline-block" /></p>
                </NavLink>
            </div>
        </>
    );
}