import { VISIBILITY_FILTERS } from "../constants";

const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

const getTodoById = (store, id) =>
  store && store.todos && store.todos.byIds
    ? {id, ...store.todos.byIds[id]}
    : {};

const getTodoMap = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodoMapByVisibilityFilter = (store, visibilityFilter) => {
  const todoMap = getTodoMap(store)
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return todoMap.filter(todo => todo.completed)
    case VISIBILITY_FILTERS.INCOMPLETE:
      return todoMap.filter(todo => !todo.completed)
    case VISIBILITY_FILTERS.ALL:
    default:
      return todoMap
  }
}
