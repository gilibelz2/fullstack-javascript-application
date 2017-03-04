/**
 * Created by Gili Belz on 25/02/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';


import data from './testData';

import App from './components/App';

ReactDOM.render(
    <App initialData={window.initialData}/>,
    document.getElementById('root')
);

//console.log(resp.data.contests);
//this.setState({
//    contests: resp.data.contests
//});

//console.log('did mount');
//debugger;
//timers, listeners



//<App contests={data.contests}/>,--static data
//contests={[]}

/*ReactDOM.render(
    <App headerMessage="Hello props!!"/>,
    document.getElementById('root')
);*/

/*
ReactDOM.render(
    <h2 className="text-center" style={{color}}>
        Hello React with JSX!!
    </h2>,
    document.getElementById('root')
);
*/

//React.createElement('h2', null, 'Hello React'),