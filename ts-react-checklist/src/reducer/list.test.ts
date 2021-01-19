import { fetchListSuccess } from '../action'
import listReducer from './list'

type ActionType = ReturnType<typeof fetchListSuccess>

describe('List Reducer Test Suits', () => {
    it('test reducer without any action', () => {
        expect(listReducer(undefined, {} as ActionType)).toEqual([])
    })
})