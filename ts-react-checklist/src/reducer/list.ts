// src/reducer/list.ts

import { fetchListSuccess, FETCH_LIST_SUCCESS_TYPE } from '../action/index'

const defaultState: IList = []

type actionType = ReturnType<typeof fetchListSuccess>

export default (state = defaultState, action: actionType) => {
    switch (action.type) {
        case FETCH_LIST_SUCCESS_TYPE: {
            return action.payload
        }
        default: {
            return state
        }
    }
}