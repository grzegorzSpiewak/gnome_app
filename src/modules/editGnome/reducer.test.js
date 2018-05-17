import reducer from './reducer.js'
import * as types from './actions.js'
import expect from 'expect'

/* Mocks **/
const initialState = {
  gnomeToEdit: [],
  showEdit: false,
  showForm: false,
  showNotification: false,
  showFormFor: '',
  patchStatus: '',
}

const gnomeMock = {
  name: 'test',
  id: 3999
}

describe('Edit gnome reducer', () => {

  it('Should return initial state', () => {
    const result = reducer(undefined, { type: 'unknown' })
    expect(result).toEqual(initialState)
  })

  it('Should handle SELECTED_GNOME', () => {
    const stateMock = {
      gnomeToEdit: [],
      showEdit: false
    }
    const actionMock = {
      type: types.SELECTED_GNOME,
      gnome: gnomeMock
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      gnomeToEdit: gnomeMock,
      showEdit: true
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle SHOW_EDIT_FOR_PROP', () => {
    const stateMock = {
      showForm: false,
      showFormFor: ''
    }
    const actionMock = {
      type: types.SHOW_EDIT_FOR_PROP,
      prop: 'id' /* can use any key from gnome object */
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      showForm: true,
      showFormFor: 'id'
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle CLOSE_EDIT', () => {
    const stateMock = {
      gnomeToEdit: gnomeMock,
      showEdit: true,
      showForm: true,
      patchStatus: '',
      showFormFor: 'id',
      showNotification: false
    }
    const actionMock = {
      type: types.CLOSE_EDIT,
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = initialState
    expect(result).toEqual(expectedResult)
  })

  it('Should handle PATCH_GNOME_SUCCES', () => {
    const stateMock = {
      patchStatus: '',
      showForm: true,
      gnomeToEdit: [],
      showNotification: false
    }
    const actionMock = {
      type: types.PATCH_GNOME_SUCCES,
      gnome: gnomeMock,
      id: gnomeMock.id
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      patchStatus: 'SUCCES',
      showForm: false,
      gnomeToEdit: gnomeMock,
      showNotification: true
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle PATCH_GNOME_FAIL', () => {
    const stateMock = {
      patchStatus: '',
      showForm: true,
      showNotification: false
    }
    const actionMock = {
      type: types.PATCH_GNOME_FAIL,
      id: gnomeMock.id
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      patchStatus: 'FAIL',
      showForm: false,
      showNotification: true
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle CLOSE_NOTIFICATION', () => {
    const stateMock = {
      showNotification: true
    }
    const actionMock = {
      type: types.CLOSE_NOTIFICATION,
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      showNotification: false
    }
    expect(result).toEqual(expectedResult)
  })
})
