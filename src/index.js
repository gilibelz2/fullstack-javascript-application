/**
 * Created by Gili Belz on 25/02/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const color= Math.random() > 0.5 ? 'green' : 'red';

ReactDOM.render(
    <h2 className="text-center" style={{color}}>
        Hello React with JSX!!
    </h2>,
    document.getElementById('root')
);

//React.createElement('h2', null, 'Hello React'),