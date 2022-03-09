import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    console.log('constructor');
    super();
    this.state = {
      name: 'lalchand'
    }
   this.handleClick = this.handleClick.bind(this)
  }
  handleClick (){
    this.setState({ name: 'kanchan' })
  }
  // static getDerivedStateFromProps(){
  //   console.log('getDerivedFromProps');
  //   return {name:'suresh'}
  // }
  // el = document.createElement("div");

  componentDidMount() {
    console.log('componentdid mount');
    // document.querySelector("body").appendChild(this.el);
    this.setState({ name: 'ashok' })
  }
  // shouldComponentUpdate() {
  //   console.log('componentShouldUpdate');
  //   return this.state.name === 'lalchand' ? true : false
  // }


  render() {
    console.log('render');
    return (
      <Fragment>
        <h1>
          welcome to class Component
        </h1>
        <h2>my name is -- {this.state.name}</h2>
        <button onClick={this.handleClick}>change state</button>
      </Fragment>
    )
  }
}

export default App





















// import './App.css';
// // import { Routes, Route, Link } from 'react-router-dom';
// // import Home from './home';
// // import About from './about';

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to React Router!</h1>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//       </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//       </Routes>
//     </div>

//   );
// }

// export default App;