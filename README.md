### REACT REDUX


## Redux: Single store, CDS
## Reducers: Manage state and return newly updated state
## Actions: 2 properties:
            i. Type: unique itentifier
            ii. Payload: which has data
## Dispatch: Send actions to update the data
## useSelector:    A hook to access the redux store's state. 
                This hook takes a selector function as an argument.
                The selector is called with the store state.

## A. Building a Counter Application, with Redux
    (a.) [ Libararies needed ]:
        i. npm i redux
        ii. npm i react-redux
    ## (b.) create a folder store in src, inside it create a file index.js
           -> Here we will handle all of our states(i.e increment, decrement, increment by value) in this single file,
            which is our single store.(Or single source of states).
        (i.) in index.js(above file)- 
                import createStore from redux, import {createStore} from "redux;
                create a reducer function with state and action as parameters, const reducerFn = (state, action)=>{}
                create a store variable and assign it to create store function const store = createStore();
                initialise the state with default property of counter with value 0, and return the state;
                provide the reducerFn to the createStore(); createStore(reducerFn);
                export the store; export deafault store;
        (ii) in the root index.js of the app:
               - import the provider from react-redux, this provider will have a property called the store which will
                hold our store, and this store will be like a context, which will be available to whole of our app
                so you have to wrap the whole app with provider;
                your index.js(root) will have these lines now
                    import {Provider} from 'react-redux';
                    import store from './store/index';
                wrapping the whole app with store,
                        <Provider store={store}>
                            <React.StrictMode>
                                <App />
                            </React.StrictMode>
                        </Provider>
        (iii) In App.js, we will create our counter Application
                - we have create a store in the src> store > index.js, our app can access the state with the help
                  of useSelector Hook, import it in app.js.
                - create increment and decrement buttons with respective increment and decrement functions, onClick
                - these function will not directly handle the state(add or decrement the counter), they will just Dispatch an action, which will be
                    increment or decrement.
                - to Dispatch any action you need a dispatcher function, which will be provide by useDispatch hook of react-redux,
                  so import it import {useDispatch} from 'react-redux'
                - now since it is a hook, you need to store it into a variable to use it: i.e const dispatch = useDispatch();
                - this dispatch variable has an object with the type, and paylod properties
                    type: 'Inc' , for incrementing the value, so the increment function will look like this: 
                        const increment = ()=>{
                            dispatch({
                                type: 'Inc'
                            });
                        }
                - Now the actual incrementing or decrementing is done in the store only by reducerFn, the app(component) only dispatch(or tells the reducerfn)
                    What it should do? Like: Hey Reducer Function I am dispatching and action with the type 'Inc', if you see it
                    increase the counter by 1.
                .NOTE: Reducer Functions have some limitations:
                    (a.) They are (should be) Synchronous functions, it should not contain an async code inside it
                    (b.) We should never mutate the original state, it should always be a copy of the original state. Main sate should never be updated
                - Now in the store file (src>store>index.js)
                    1. Check what is the type of the action, if it is 'INC', return the counter property of the store by incrementing it by one 
                     if(action.type === 'INC'){
                        return{ counter: state.counter + 1 }
                     }
                     Repeat the same for decrement.

### Ding the same thing with redux toolkit
    # In src> index.js- we will create a store with redux toolkit
    . import configure store from redux toolkit
    
    . create a slice(createSlice({.... inside it 🔽}))
        slice has the name , initial state, reducer function
        these reduer functions has the all the functionaly, that we wen at to implement with the state, incement, decrement etc.
    ▶ Now you have to export the store + actions seperately
        export const actions = counterSlice.actions;
        const store = configureStore({
        reducer:counterSlice.reducer
        });
        export default store;

    
    ▶ Now in main file / app.js import the above created actions
        import {actions } from './src/store/index.js';
        for each methods: instead of passing the dispatch type: we can just dispatch actions or the functions / reducer functions:

        so now => const increment = ()=>{
            dispatch(actions.increment())
        }

        previously it was =>
            const inscrement = ()=>{
                dispacth({
                    type="Inc"
                })
            }
### See commit Initial for the whole code.
### Reference FreecodeCamp : [Redux]