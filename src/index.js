/**
 * Created by Gili Belz on 25/02/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const color= Math.random() > 0.5 ? 'green' : 'red';

const Header = ( {message}) => {
    return (
        <h2 className="Header text-center" style={{color}}>
            {/*Hello React Components!!*/}
            {message}
        </h2>
    );
};

Header.propTypes= {
    message: React.PropTypes.string //assert string and is required- not needed when there is a defaultProps
};

const App = () => {
    return (
        <div className="App">
            <Header message="Naming Contests"/>
            <div>
                ...
            </div>
        </div>
    );
};

/*
//props validation---- types check
App.propTypes= {
    headerMessage: React.PropTypes.string.isRequired //assert string and is required- not needed when there is a defaultProps
};
*/

//props validation---- types check
/*App.propTypes= {
    headerMessage: React.PropTypes.string //assert string and is required- not needed when there is a defaultProps
};*/

/*App.defaultProps= {
    headerMessage: 'Hello You!'
};*/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

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