import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Shashank',
    lastName: 'Keshava'
}

function Welcome(props) {
    return <h1> Welcome {props.name}</h1>;
}

function App() {
    return (
        <div>
        <Welcome name="shashank"/>
        <Welcome name = "Anu" / >
        <Welcome name="Cherry"/>
        </div>
    );
}

//Handling Events
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        //Binding necessary for Callbacks
        //this.handleClick binded with ????
        //this.handleClick = this.handleClick.bind(this);

    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
	{this.state.isToggleOn?'ON':'OFF'}
	</button>
        )
    }

}


// Components in Class 
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000);
    }
    componentWillMount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (<div>
        		<h1>Hello World</h1>
        		<h2>It is {this.state.date.toLocaleTimeString()}</h2>
        	</div>)
    }
}

const element = <Welcome name="shashank"/>;
ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);
