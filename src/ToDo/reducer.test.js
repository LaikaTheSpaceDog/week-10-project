import reducer, {
    addItem,
    removeItem,
    updateItem,
    completeItem
} from './reducer';

const initialState = {
    items: []
};

it('adds items', () => {
    let result = addItem(initialState, { value: "Hello" });
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items).not.toBe(initialState.items);
    result = addItem(result, { value: "Mum" });
    expect(result.items.length).toBe(2);
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items[1]).toEqual({ task: "Mum", completed: false });
});

it('removes items', () => {
    // start with a few items
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
            { task: "How", completed: false },
            { task: "Are", completed: true },
            { task: "You", completed: false },
            { task: "Today", completed: false },
        ]
    };

    let removed = removeItem(many, { index: 0 });
    expect(removed.items[0]).toEqual({ task: "Mum", completed: false });
    expect(removed.items).not.toBe(many.items);
    expect(removed.items.length).toBe(5);
    removed = removeItem(removed, { index: 2 });
    expect(removed.items[2]).toEqual({ task: "You", completed: false });
});

it('updates items', () => {
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };
    let updated = updateItem(many, { index: 1, value: "Dad" });
    expect(updated.items[1]).toEqual({ task: "Dad", completed: false });
    expect(updated.items[1]).not.toBe(many.items[1]);
    updated = updateItem(many, { index: 0, value: "Good Morning" });
    expect(updated.items[0]).toEqual({ task: "Good Morning", completed: true });
});

it('completes items', () => {
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };
        let completed = completeItem(many, { index: 1 });
        expect(completed.items[1]).toEqual({ task: "Mum", completed: true });
        expect(completed.items[1]).not.toBe(many.items[1]);
        completed = completeItem(many, { index: 0 });
        expect(completed.items[0]).toEqual({ task: "Hello", completed: true });
});

it('reduces', () => {
    let newState = reducer(initialState, { type: "GOTTA_CATCH_EM_ALL" });
    expect(newState).toBe(initialState);
    
    newState = reducer(initialState, { type: "NEW_ITEM", value: "Hello" });
    expect(newState.items[0]).toEqual({ task: "Hello", completed: false });
    
    newState = reducer(newState, { type: "NEW_ITEM", value: "Mum" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "How" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "Are" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "You" });
    expect(newState.items.length).toBe(5);
    newState = reducer(newState, { type: "REMOVE_ITEM", index: 2 });
    expect(newState.items[2]).toEqual({ task: "Are", completed: false });
    
    newState = reducer(newState, { type: "CHANGE_ITEM", index: 1, value: "Dad" });
    expect(newState.items[1]).toEqual({ task: "Dad", completed: false });

    newState = reducer(newState, { type: "MARK_COMPLETED", index: 1 });
    expect(newState.items[1]).toEqual({ task: "Dad", completed: true });
});