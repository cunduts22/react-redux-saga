import {SELECTED_USER} from '../actions/types'
const selectUser = (selectUser = {}, action) => {
    switch(action.type) {             
        case SELECTED_USER:
            return {
                    ...selectUser,
                    receiveData: action.receiveData
                }
        default: 
            return selectUser
    }

}

export default selectUser