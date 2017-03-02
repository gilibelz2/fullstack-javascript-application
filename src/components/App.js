/**
 * Created by Gili Belz on 02/03/2017.
 */
import React from 'react';
import Header from './Header';

//class base component
//with state
//React.createClass..OR
//extends React.Component
class App extends React.Component{
    //state--not needed because of stage 2
    //constructor(props){
    //    super(props);
    //    this.state = { test: 42 };
    //}
    //state with stage 2
    state = {
        pageHeader: 'Naming Contests'
    };
    //for the console: $r.setState({pageHeader: 'Testing....'})
    //Components Life Cycle
    componentDidMount(){
        console.log('did mount');
        //debugger;
        //ajax
        //timers, listeners
    }
    componentWillUnmount(){
        console.log('will mount');
        //debugger;
        //clean timers, listeners
    }
    render(){
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    ...
                </div>
            </div>
        );
    }
}

/*
 setTimeout(() => {
 ReactDOM.render(
 <h2>......</h2>,
 document.getElementById('root')
 );
 }, 4000);
 */

//without state
/*const App = () => {
 return (
 <div className="App">
 <Header message="Naming Contests"/>
 <div>
 ...
 </div>
 </div>
 );
 };*/

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

export default App;