import './App.css';
import ClickEvent1 from '../components/clickEvent1';
import ClickEvent2 from '../components/ClickEvent2';
import ClickEvent3 from '../components/ClickEvent3';
import ClickEvent4 from '../components/ClickEvent4';
import UseState1 from '../components/UseState';
import UseState2 from '../components/UseState2';
import OutputtingList from '../components/OutputtingLists1';
import Props from '../components/Props';
import ReusingComponents from '../components/ReusingComponents';
import FuncctionAsProp from '../components/FuncctionAsProp'
import UseEffect from '../components/UseEffect';
import FetchingData from '../components/FetchingData';
import Loading from '../components/Loading';
import Home from '../components/Home';


function App() {
  return(
    <div>
      <h2>{'Click Events'}</h2>
      <div className='main'>
        <ClickEvent1 />
        <ClickEvent2 />
        <ClickEvent3 />
        <ClickEvent4 />
      </div>
      <h2>{'useState Hook'}</h2>
      <div className='main'>
        <UseState1 />
        <UseState2 />
      </div>
      <h2>{'Outputting List'}</h2>
      <div className='main'>
        <OutputtingList />
      </div>
      <h2>{'Props'}</h2>
      <div className='main'>
        <Props />
      </div>
      <h2>{'Reusing Components + filter method'}</h2>
      <div className='main'>
        <ReusingComponents />
      </div>
      <h2>{'Functions as props'}</h2>
      <div className='main'>
        <FuncctionAsProp />
      </div>
      <h2>{'useEffect + useEffect dependencies'}</h2>
      <div className='main'>
        <UseEffect />
      </div>
      <h2>{'Fetching Data with useEffect'}</h2>
      <div className='main'>
        <FetchingData />
      </div>
      <h2>{'Conditional Loading message + Handling Fetch errors'}</h2>
      <div className='main'>
        <Loading />
      </div>
      <h2>{'Making a custom hook'}</h2>
      <div className='main'>
        <Home />
      </div>
      
    </div>
  );
}


export default App;
