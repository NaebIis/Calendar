import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import rootReducer from "../reducers/index";

const URL = "http://localhost:3000";

const makeStore = () => {
  const store = createStore(
    // reducer,
    rootReducer,
    compose(
      applyMiddleware(promise(), thunk, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
};

export const store = makeStore();

store.dispatch({
  type: "EVENTS",
  payload: fetch(`${URL}/events`).then(resp => resp.json())
});

export const getClickedDayNotes = () => {
  store.dispatch({
    type: "CLICKED_DAY_NOTES",
    payload: fetch(`${URL}/clicked_day_notes`).then(resp => resp.json())
  });
};
export const getInventoryItems = () => {
  store.dispatch({
    type: "INVENTORY_ITEMS",
    payload: fetch(`${URL}/inventory_items`).then(resp => resp.json())
  });
};

store.dispatch({
  type: "INVENTORY_ITEM_CATEGORIES",
  payload: fetch(`${URL}/inventory_item_categories`).then(resp => resp.json())
});

store.dispatch({
  type: "CATEGORY_ITEM_JOIN",
  payload: fetch(`${URL}/category_item_joins`).then(resp => resp.json())
});

export const getPartyEvents = () => {
  store.dispatch({
    type: "PARTY_EVENTS",
    payload: fetch(`${URL}/party_events`).then(resp => resp.json())
  });
};

export const getPartyEventJoins = () => {
  store.dispatch({
    type: "PARTY_EVENT_ITEM_JOINS",
    payload: fetch(`${URL}/party_event_item_joins`).then(resp => resp.json())
  });
};
getPartyEvents();
getInventoryItems();
getPartyEventJoins();
getClickedDayNotes();

// store.dispatch(dispatch => {
//   dispatch({ type: "FETCHING_EVENTS" })
//   fetch(`${URL}/events`).then(resp => resp.json())
//     .then(data => {
//       dispatch({ type: "FETCH_COMPLETE", payload: data })
//     }).catch(err => {
//       dispatch({ type: "FETCH_EVENT_ERROR", payload: err })
//     })
// })
