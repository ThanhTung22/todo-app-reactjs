import update from 'immutability-helper';

export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false
        }, {
            id: 2,
            text: 'Learn React',
            completed: false
        }, {
            id: 3,
            text: 'Build a React App',
            completed: false
        }
    ]
};

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
};

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(items => items.id === itemId);

    return update(items, {
        [index]: {
            completed: { $set: completed }
        }
    })
}

let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
};

export function addToList(list, data) {
    let items = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([items]);
}