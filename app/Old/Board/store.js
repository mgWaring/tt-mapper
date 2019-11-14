import { createStore } from 'redux';

const actions = (state = null, action) => {
    if (null === state) {
        state = {
            miniMenu: { hidden: true, pos: { x: null, y: null }, target: null },
            actiMenu: { hidden: true, pos: { x: null, y: null }, target: null },
            grid: { x:25, y: 25 },
            user: { active: {}, },
            activeSprites : {
                sprite1: { pos:{ x:10, y:12 }, name:"sprite1" },
            }
        };
    }
    let newState = {...state};
    //this seems like a pretty shitty way to handle state changes...
    switch (action.type) {
        case 'EMPTY_GRID_CLICK':
            newState.miniMenu = { hidden: false, pos: { x: null, y: null }, target: null };
            console.log(action, state);
            return newState;
        case 'KEYPRESS':
            console.log(action);
            if(action.key === 'Escape'){
                newState.miniMenu = { hidden: true, pos: { x: null, y: null }, target: null };
                newState.actiMenu = { hidden: true, pos: { x: null, y: null }, target: null };
            }
            return newState;
        case 'PIECE_CLICK':
            console.log(action);
            newState.actiMenu = {hidden: false, pos:action.target.pos, target:action.target};
            return newState;
        case 'MOVE':
            console.log(action);
            newState.activeSprites[action.source].pos = {...action.target.pos}
            return newState;
        case 'ATTACK':
            console.log(action);
            //what attack what eh?
            newState.activeSprites[action.source].pos = {...action.target.pos}
            return newState;
        case 'SHOW_MENU':
            console.log(action);
            let menu = action.menu;
            let pos = action.pos;
            newState[menu] = {hidden: false, pos: pos};
            return newState;
        default:
        console.log(`Looks like event: ${action.type} is not cofigured`, action)
            return newState;
    }
}

const store = createStore(actions);
export default store;