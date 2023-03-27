import { NavLink } from "react-router-dom";
import ChurnButter from "../assets/churn-butter";

export default function HeaderNavBar() {
    const toggleNavBar = function() {
      const element: HTMLElement = document.getElementById('nav-toggled-container') as HTMLElement;
      const classList = element.classList;
      if (classList.contains('max-lg:hidden')) classList.remove('max-lg:hidden');
      else classList.add('max-lg:hidden');
    }
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-700 p-6 fixed top-0 w-[100%]">
        <div className="flex items-center flex-shrink-0 text-white mr-6 max-lg:text-center">
          <NavLink to="/" className="flex max-sm:w-[87%]">
            <ChurnButter className="mx-2 max-sm:inline-block" />
            <span className="font-semibold text-xl tracking-tight cursor-pointer">Credit Card Recommendation Flowchart</span>
          </NavLink>
        </div>
        <div className="block lg:hidden my-3 max-sm:mx-auto">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={() => {toggleNavBar()}}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto max-lg:hidden" id="nav-toggled-container">
          <div className="text-sm lg:flex-grow">
            <NavLink to="/" onClick={() => {toggleNavBar()}} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </NavLink>
            <NavLink onClick={() => {toggleNavBar()}} to="/question-tree?node=five-twenty-four" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Question Tree
            </NavLink>
            <NavLink to="/whole-chart" onClick={() => {toggleNavBar()}} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Whole Chart
            </NavLink>
            {/* <NavLink onClick={() => {toggleNavBar()}} to="/blog?" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </NavLink> */}
          </div>
        </div>
      </nav>
    );
}