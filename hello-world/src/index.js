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

//Element Variables Handling Stateful Components
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
        Login</button>
    );
}

function LogoutButton(props) {
    return (<button onClick={props.onClick}>Logout</button>);

}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        button = isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick}/> : <LoginButton onClick={this.handleLoginClick}/>;
        return (
            <div><Greeting isLoggedIn={isLoggedIn}/>{button}</div>
        );
    }
}

//Inline IF and logical && operator
function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (<div><h1>Hello</h1>{unreadMessages.length>0 && <h2>You have {unreadMessages.length} unread messages.</h2>}</div>);
}

const messages = ['React', 'Re:React', 'Re:Re:React'];

//Conditional Rendering
function UserGreeting(props) {
    return <h1>Welcome Back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please Sign Up</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return (isLoggedIn ? <UserGreeting/> : <GuestGreeting/>);
}

const element = <Welcome name="shashank"/>;
ReactDOM.render(<MailBox unreadMessages={messages}/>,
    document.getElementById('root')
);
