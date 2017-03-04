/**
 * Created by Gili Belz on 02/03/2017.
 */
import React from 'react';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) =>
    window.history.pushState(obj,'', url);

const onPopState = handler => {
    window.onpopstate = handler;
};

//import ReactDOM from 'react-dom';
import Header from './Header';


//import data from '../testData';

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
    static propTypes = {
        initialData: React.PropTypes.object.isRequired
    };
    state = this.props.initialData;
    //for the console: $r.setState({pageHeader: 'Testing....'})
    //Components Life Cycle
    componentDidMount(){
        //ajax...
        onPopState((event) => {
            this.setState({
                currentContestId: (event.state || {}).currentContestId
            });
        });
    }
    componentWillUnmount(){
        //console.log('will mount');
        //debugger;
        //clean timers, listeners
        onPopState(null);
    }
    fetchContest = (contestId) => {
        pushState(
            { currentContestId : contestId },
            `/contest/${contestId}`
        );
        //lookup the contest
        //this.state.contests[contestId]
        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            });
        });
    } ;
    fetchContestList = (contestId) => {
        pushState(
            { currentContestId : null },
            `/`
        );
        //lookup the contest
        //this.state.contests[contestId]
        api.fetchContestList().then(contests => {
            this.setState({
                currentContestId: null,
                contests
            });
        });
    } ;
    currentContest(){
        return this.state.contests[this.state.currentContestId]
    }
    pageHeader(){
        if(this.state.currentContestId){
            return this.currentContest().contestName;
        }
        return 'Naming Contests';
    }
    currentContent(){
        if(this.state.currentContestId) {
            return <Contest
                contestListClick= {this.fetchContestList}
                {...this.currentContest()} />;
        }
        return <ContestList
            onContestClick = {this.fetchContest}
            contests={this.state.contests} />;
    }
    render(){
        return (
            <div className="App">
                <Header message={this.pageHeader()}/>
                {this.currentContent()}
            </div>
        );
    }
}
//every time you have a map call you need to provide a unique key- don't use array index!!!

/*
 setTimeout(() => {
 ReactDOM.render(
 <h2>......</h2>,
 document.getElementById('root')
 );
 }, 4000);


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