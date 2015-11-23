import nock from "nock";
import expect from "expect";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { applyMiddleware } from "redux";

import * as actions from "src/actions/list";
import * as types from "src/actions/types";

const mockStore = configureStore([ thunk ]);

describe("Action::List", () => {
	it("#fetchList()", done => {
		nock(`http://jsonplaceholder.typicode.com`)
			.get(`/posts`)
			.reply(200, [
				{ userId: 1, id: 1, title: "yo", body: "man" }
			])
		
		const expectedActions = [
			{
				type: types.RECEIVE_LIST,
				list: [
					{ userId: 1, id: 1, title: "yo", body: "man" }
				]
			}
		];
		
		const store = mockStore({}, expectedActions, done);
		
		store.dispatch(actions.fetchList());
	})
})