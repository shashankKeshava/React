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

//Prevent Component From Rendering
function WarningBanner(props) {
    if (!props.warn) return null;
    return (<div className="warning">Warning!</div>);
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
    }
    handleToggleClick = () => {
        this.setState(prevState => ({ showWarning: !prevState.showWarning }));
    }
    render() {
        return (<div>
            <WarningBanner warn={this.state.showWarning}/>
            <button onClick={this.handleToggleClick}>{this.state.showWarning?'Hide':'Show'}</button>
            </div>);
    }
}

//Lists and Keys
const numbers = [2, 6, 8, 22, 21, 56];
const doubled = numbers.map((number) => number * 2);
const listItem = numbers.map((number) => <li>{number * 2}</li>);

function ListItem(props) {
    return (<li>{props.value}</li>);
}


function NumberList(props) {
    const number = props.numbers;
    const listItem = numbers.map((number) => <ListItem key={number.toString()} value={number * 2}/>);
    return (<ul>{ listItem }</ul>);

}

function Blog(props) {
    const sidebar = (
        <ul>{props.posts.map((post)=>
            <li key={post.id}>{post.title}</li>
            )}</ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        </div>
    );
    return (<div>{sidebar}<hr/>{content}</div>)
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

//Forms
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

class FlavourForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ value: 'Coconut' });
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    handleSubmit = (event) => {
        alert(`Your Favorite is:${this.state.value}`);
        event.preventDefault();
    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>
            Pick Your Favorite Icecream Flavour:
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="grape">Grape</option>
            <option value="mango">Mango</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            </select></label>
            <input type="submit" value="Submit"/>
            </form>)
    }
}

//Handling Multiple Inputs
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form><label>Is Going:<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/></label></form>
        );
    }
}

//Lifting States
function BoilingVerdict(props) {
    return props.celsius >= 100 ? <p>The water will boil</p> : <p>The water will not boil</p>;

}

const scaleName = {
    c: 'Celsius',
    f: 'Farhenheit'
}

//Conversions of C and F 
function toCelsius(farhenheit) {
    return (farhenheit - 32) * 5 / 9;
}

function toFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input))
        return '';
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '', scale: 'c' };
    }
    handleCelsiusChange = (temperature) => {
        this.setState({ scale: 'c', temperature });
    }
    handleFarhenheitChange = (temperature) => {
        this.setState({ scale: 'f', temperature })
    }
    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const farhenheit = scale === 'c' ? tryConvert(temperature, toFarenheit) : temperature;
        return (
            <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
            <TemperatureInput scale="f" temperature={farhenheit} onTemperatureChange={this.handleFarhenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' };
    }
    handleChange = (e) => {
        //this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        //const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
            <legend>Enter Temperature in {scaleName[scale]}:</legend>
            <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}


//Composition VS Inheritence

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
        </div>
    );
}


function Dialog(props) {
    return (
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
        {props.title}
        </h1>
        <p className="Dialog-message">
        {props.message}
        </p>
        {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '' };
    }
    handleChange = (e) => {
        this.setState({ login: e.target.value });
    }
    handleSignUp = () => {
        alert(`Welcome Aboard ${this.state.login}`);
    }
    render() {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer you">
            <input value={this.state.login} onChange={this.handleChange}/>
            <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Dialog>
        )
    }

}

var PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];


//Thinking in React
class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
            <SearchBar/>
            <ProductTable products={this.props.products}/>
            </div>
        )
    }
}

//Search Bar
class SearchBar extends React.Component {
    render() {
        return (
            <div>
            <input type="text" placeholder="Search.."/> <br/>
            <input type="checkbox" /> <label>Only show products in stock</label>
            </div>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        let rows = [];
        let lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.category != lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
                rows.push(<ProductRow product={product} key={product.name}/>);
                lastCategory = product.category;

            }

        })

        return (<table>
            <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
            </table>)
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return <tr><th colspan="2">{this.props.category}</th></tr>
    }
}

class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
        );
    }
}

const element = <Welcome name="shashank"/>;
ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('root')
);
