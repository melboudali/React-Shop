import { createSelector } from 'reselect';

const SelectUser = state => state.User;

export const SelectCurrentUser = createSelector([SelectUser], User => User.currentUser);

export const SelectAuthErrors = createSelector([SelectUser], User => User.authErrors);
