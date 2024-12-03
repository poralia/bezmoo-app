import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customerFeatureKey, CustomerState } from '../reducers/customer.reducer';

export const selectCustomerFeatureKey = createFeatureSelector<CustomerState>(customerFeatureKey);

export const listOrder = createSelector(
	selectCustomerFeatureKey,
	(state: CustomerState) => {
		return state.sales.order.list;
	}
);

export const retrieveOrder = createSelector(
	selectCustomerFeatureKey,
	(state: CustomerState) => {
		return state.sales.order.retrieve
	}
);

export const Queue = createSelector(
	selectCustomerFeatureKey,
	(state: CustomerState) => {
		return state.sales.queue;
	}
);

export const profile = createSelector(
	selectCustomerFeatureKey,
	(state: CustomerState) => {
		return state.profile;
	}
);

export const company = createSelector(
	selectCustomerFeatureKey,
	(state: CustomerState) => {
		return state.company;
	}
);