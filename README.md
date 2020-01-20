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

```
(a)Store takes in one parameter which is the store

```

```
Notes by Mbugua Caleb

```


**SETTING UP
```
(a)Implementing store index.js

(b)creating separate folders for actions and reducers.


```

```
tutor -Dev Ed

```
