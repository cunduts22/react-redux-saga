import {FETCH_SUCCEDED_USER} from '../actions/types'
const allUser = (muser = {}, action) => {
    switch(action.type) {        
        case FETCH_SUCCEDED_USER:
            return {
                    ...muser,
                    receiveData: action.receiveData
                }
        default: 
            return muser
    }

}

export default allUser