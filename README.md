**State Management With Redux**

```
Redux is a state management tool that we can use in our projects

We can use it in react and also theoritically in other frameworks as well.

```

**PreparedNess**

```
(a)There is a lot of boiler plates in your project when it comes to redux but once you master the flow all goes well.

(b)There is dispatch,match state to props,actions,reducers.
```

**Advantage**

```
The biggest advantage is that in large applications using of state managers is of great benefit.

Redux is the most popular state Management tool with React.

```

**Concept of Redux**

```
The concept of redux is to entirely separate the state from being tied to one particular component and placing it such that it may be accessed universally by all components.

One of the challages of react is that it is one way->data being progresssively rendered to the related components .

What about if you need to access the state from an unrelated component??

This is wwhere application level state and state managers come in.


                     APP
                      |
                      |
[ SEARCH<----------MOVIE LIST-------->LOG IN
                      |
                      |
                     MOVIE
```

```

Data in Redux is therefore completely separated from the components and you may pull it to the component tht needs the state.

It reduces the progressive passing of data via props which is very much handy when it comes to the Large Projects.

```

**Installation**

```
npm install redux react-redux

redux-Is the Actual State Management Package.
Whereas react redux helps us to connect redux with react.

```

**CONCEPTS**

```
(a)STORE-This is the globalized state.

(b)ACTION->Description of What you want to do eg increment,Decrement

(c)REDUCER ->Describes how your action transforms the state into the next state.

The reducer checks which action you did and based on the action it modifies the store.

(d)DISPATCH ->A way of sending that action to the reducer.


```

**SETTING UP**

```
(a)Implementing store index.js

(b)creating separate folders for actions and reducers.

(c)Remeber that reducers are hooked into the store.store is the representation of your state.

(d)When you have mutiple reducers you use combine reducer then hook them into the store.

(e)After implementing redux and combining reducers it is hooked to react via react-redux.

This is done by the Provider which combines the store(entire state to the app)

Thus when you run redux any component has got acess to the global state.

```

**ACESSING GLOBAL STATE FROM YOUR COMPONENTS**

```
We use the useSelector from react-redux which has the ability to be imported into any of our components.

import React from "react";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter);
  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
    </div>
  );
}

export default App;



```

**Adding Redux dev tools Chrome Extension**

```
It is hooked in the store as follows:

const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

It therefore has got access to all the state.

```

**TO REMEMBER**

```
(a)Remeber that action is just a description that is passed to the reducer and then the reducer acts accordingly after it is dispatched.

(b)A reducer takes in state as one of its parameters.

(c)JavaScript detects index.js by default incase it is the only  file in the folder.


```

**Note**

```
An action can take a parameter

(a)<button onClick={() => dispatch(increment(5))}>+</button>


(b) Action itself


(i)INITIAL BEFORE PARAM

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};


(ii)AFTER PARAM
export const increment = nr => {
  return {
    type: "INCREMENT",
    payload: nr
  };
};




(c)The reducer also does change because of this.


INITIAL REDCUER STATE
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      // need this for default case
      return state;
  }
};

FINAL REDCUER STATE


const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      // need this for default case
      return state;
  }
};


Everything that the action initends to do is implemented in the reducer.


```

**COMPLETION SUMMARY**

```
Every component therefore has access to the dispach and the actions.

and thus an effect to the state.

You therefore may always write all your reducer functions separately and executing them to components by dispatching actions into them.

This is excideenlgly awesome and this is the concept of redux.

upon dispactch it therefore has an effect to the reducer an thus the store and thus the state.


```

**REDUX IMPLEMENTED COMPONENT**

```
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;


```

```
Notes by Mbugua Caleb

```

```
tutor -Dev Ed

```
