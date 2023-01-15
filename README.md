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


### Building the same thing(Counter Application) with redux toolkit
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