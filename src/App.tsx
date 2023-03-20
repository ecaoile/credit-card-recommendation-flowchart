import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Credit Card Recommendation Flowchart (Mobile Friendly Edition)</h1>
      <h2>Credit to the r/churning Reddit community. See original chart <a href="https://m16p-churning.s3.us-east-2.amazonaws.com/Card+Recommendation+Flowchart+Latest.html">here</a>.</h2>
      <h2>Would you go through a series of question to figure out which section you want to see or just see the whole thing at once?</h2>
      <div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Answer questions.</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Just let me see the whole thing!</button>
      </div>
    </div>
  );
}

export default App;
