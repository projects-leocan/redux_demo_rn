# RNRedux

- it's simple demonstration of React native Redux, This is the simple demo of counter increment and decrement using redux.

# Library installation

- react-redux
    - npm install react-redux 

- redux
    - npm install redux 

# Steps
Step 1 — Setting Up the Project and Installing Redux
Step 2 — Creating a Reducer
Step 3 — Creating an Action
Step 4 — Adding the Reducer to the App
Step 5 — Adding Redux to the Screens


# Note
# What is store?
The Redux store brings together the state, actions, and reducers that make up your app.

# What is Actions?
Actions are plain JavaScript objects that have a type field. As mentioned earlier, you can think of an action as an event that describes something that happened in the application.
In this example, 
- src/Actions/CounterActions contains all the actions which are used in application

# What is Reducers?
Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, 
(state, action) => newState.
In this example, 
- src/ReducersCounterReducer contains all the CounterActions which are used in application 

- A Redux app really only has one reducer function: the "root reducer" function that you will pass to createStore later on. That one root reducer function is responsible for handling all of the actions that are dispatched, and calculating what the entire new state result should be every time.

- create reducer.js file in the src folder, alongside index.js and App.js.

- Every reducer needs some initial state, so we'll add some fake todo entries to get us started. Then, we can write an outline for the logic inside the reducer function:
