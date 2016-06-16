import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text, meta: { appInsights: { trackPayload: true }} }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id, meta: { appInsights: { trackPayload: true }} }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text, meta: { appInsights: { trackPayload: true }} }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id, meta: { appInsights: { trackPayload: true }} }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL, meta: { appInsights: { trackPayload: true }} }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED, meta: { appInsights: { trackPayload: true }} }
}
