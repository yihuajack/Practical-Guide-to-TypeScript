import fetch from 'jest-fetch-mock'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { editDraftAction } from '.'
import { fetchList, fetchListSuccess } from './index'

const isChecked = () => Math.random() >= 0.5

const middlewares = { thunk }
const mockStore = createMockStore(middlewares)

describe('Action Test Suits', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('test editDraftAction', () => {
        const payload = { id: Math.random(), content: Math.random().toString, isChecked: isChecked()}
        expect(editDraftAction(payload)).toEqual({ payload, type: 'draft/edit'})
    })

    it('test fetchList', async () => {
        const response = [{ id: Math.random(), content: Math.random().toString(), isChecked: isChecked()}]
        fetch.mockResponseOnce(JSON.stringify(response))
        const store = mockStore({})
        // tslint:disable-next-line:no-any
        await store.dispatch(fetchList() as any)
        expect(store.getActions()).toEqual([fetchListSuccess(response)])
    })
})