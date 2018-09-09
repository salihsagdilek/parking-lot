import {Module} from 'vuex';

import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';

import {ParkingLotState} from './types';
import {RootState} from '@/store/types';

import {parkingLotPlugin} from './plugin';

const SETTINGS_KEY: string = process.env.VUE_APP_PL_SETTINGS_KEY || '';
const SLOTS_KEY: string = process.env.VUE_APP_PL_SLOTS_KEY || '';


const storageSettingsData: object = JSON.parse((window.localStorage.getItem(SETTINGS_KEY) || ''));
const storageSlotsData: [] = JSON.parse((window.localStorage.getItem(SLOTS_KEY) || ''));

export const state: ParkingLotState = {
  slots: storageSlotsData,
  settings: Object.assign({
    name: '',
    x: [],
    y: [],
  }, storageSettingsData),
};


const namespaced: boolean = true;

export const parkingLot: Module<ParkingLotState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
  getters,
};
export {parkingLotPlugin};
