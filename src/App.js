import React, {Component} from 'react';import logo from './logo.svg';
import './App.css';
import PieChart from './PieChart';
//import FrequencyChart from './BarChart';
import CustomTable from './table';


class App extends React.Component {
  render() {


    return (
      <div>
<div>

  {/* <div> This is a test</div> */}
      <svg >
        <PieChart />

      </svg>
      <svg >
        <PieChart />

      </svg>
      <svg >
        <PieChart />

      </svg>
      <div>
        <CustomTable />
      </div>
</div>
</div>

    
    );
  }
}

// ReactDOM.render(
//   // App takes one prop: the pie chart data as an array of values
//   <App data={[5, 2, 7, 1, 1, 3, 4, 9]} />,
//   document.getElementById('app')
// );
export default App