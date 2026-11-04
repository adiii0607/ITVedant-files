import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Home.jsx'
import Counter from './Counter.jsx'

// create vite@latest "app name"
// react
// javascript
// eslint
// extension:- ES7+react/redux/react-native
// cd "app name"
// npm install
// npm run dev
// Feacture of React:
// 1: Library:-
// react is a library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when the state of the application changes. React uses a virtual DOM to optimize rendering performance, making it suitable for building complex and interactive web applications. It is maintained by Facebook and has a large community of developers contributing to its ecosystem.
// it was developed by Jordan Walke in 2011, a software engineer at Facebook, and was first released in 2013. React has since gained widespread adoption and has become one of the most popular JavaScript libraries for building user interfaces.
// additional modules needed to be installed saperately for router , form , backend connectivity, state management, etc. React is often used in combination with other libraries and frameworks to build full-featured web applications.
// 2:SPA [Single Page Application]:-
// React is commonly used to build single-page applications (SPAs), where the entire application runs on a single HTML page, and content is dynamically updated without requiring full page reloads. This approach provides a smoother user experience and faster navigation between different views or components within the application.
// 3:Component-Based Architecture:-
// React follows a component-based architecture, where the UI is divided into reusable and self-contained components. Each component encapsulates its own logic, state, and rendering, making it easier to manage and maintain complex applications. Components can be composed together to create a hierarchical structure, allowing for modular development and code reusability.
// 4:Declarative Syntax:-
// React uses a declarative syntax, which means developers describe what the UI should look like based on the application's state, rather than specifying how to manipulate the DOM directly. This approach simplifies the development process and makes it easier to reason about the application's behavior.
// 5:Virtual DOM:-
// React utilizes a virtual DOM, which is an in memory representation of the actual DOM. When the state of a component changes, React updates the virtual DOM and efficiently calculates the minimal set of changes needed to update the real DOM. This process, known as reconciliation, improves performance and reduces unnecessary re-rendering of components.


// state management is a crucial aspect of React development, as it allows components to maintain and update their own data. React provides a built-in state management mechanism through the useState hook, which enables functional components to have local state. Additionally, for more complex applications, developers can utilize external state management libraries like Redux or MobX to manage global state across multiple components.
function App() {
  // const [count, setCount] = useState(0)
  const username = "Aditya";
  
  return (
    <>
    <h1 style={{color: 'red'}}>Welcome to Vite + React</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, id.</p>
    <h3>Welcome {username}</h3>
    
    <Home/>
    <Counter/>
    </>

  )
}

export default App
