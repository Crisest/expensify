import authReducer from '../../reducers/auth'
import { TestScheduler } from 'jest'

test('should set default state', () => {
    const state = authReducer({}, {type: '@@INIT'})
    expect(state).toEqual({})
})

test('should store userID', () => {
    const action = {
        type: 'LOGIN',
        uid: 'thisisid'
    }
    const state = authReducer({}, action)
    expect(state.uid).toEqual('thisisid')
})

test('should clear userid', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'asd'}, action)
    expect(state).toEqual({})
})