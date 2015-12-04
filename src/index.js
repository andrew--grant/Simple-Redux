+ require("!style!css!./styles.css");


// A simple reducer (a'pure' function)
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Redux
const {
    createStore
    } = Redux;

// Create a store, passing it the 'reducer'
const store = createStore(counter);

const render = () => {
    document.querySelector('#count').innerHTML = store.getState();
}
render();

store.subscribe(() => {
    render();
});

document.querySelector('.btn').addEventListener('click', () => {
    store.dispatch({type:'INCREMENT'});
});