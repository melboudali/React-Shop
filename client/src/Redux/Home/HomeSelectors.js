import { createSelector } from 'reselect';

const SelectHome = state => state.Home;

export const SelectSections = createSelector([SelectHome], Home => Home.Sections);
