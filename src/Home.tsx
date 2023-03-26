import { NavLink } from "react-router-dom";

function Home() {
    return(
        <div className='App m-5 min-w-[275px]'>
            <h1 className='text-2xl'>Credit Card Recommendation Flowchart (Mobile Friendly Edition)</h1>
            <h2 className='text-lg'>Credit to the r/churning Reddit community. See original chart <a href="https://m16p-churning.s3.us-east-2.amazonaws.com/Card+Recommendation+Flowchart+Latest.html" className="text-blue-600 no-underline hover:underline" target="_blank" rel="noreferrer">here</a>.</h2>
            <div className='m-5'>
                <h2 className='text-lg'>Would you go through a series of question to figure out which section you want to see or just see the whole thing at once?</h2>
                <div className="m-3">
                    <NavLink to="/question-tree?node=five-twenty-four">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-1 mx-5">Answer questions.</button>
                    </NavLink>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-1 mx-5">Just let me see the whole thing!</button>
                </div>
            </div>
        </div>
    );
}

export default Home;