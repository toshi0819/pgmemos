import { CLICK } from "../actions"
const initState = {title: "defaultTitle"}
export default(state = initState,action) =>{
    switch (action.type) {
        case CLICK:
            return {title: "ClickTitle"}
    
        default:
            return state;
    }
}