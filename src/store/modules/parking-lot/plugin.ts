import {Store} from 'vuex';

const SETTINGS_KEY: string = process.env.VUE_APP_PL_SETTINGS_KEY || '';
const SLOTS_KEY: string = process.env.VUE_APP_PL_SLOTS_KEY || '';

export const parkingLotPlugin = (store: Store<any>) => {
  store.subscribe((mutation, {parkingLot}) => {
    const {settings, slots} = parkingLot;
    if (typeof window !== 'undefined') {
      if (mutation.type === 'parkingLot/updateSettings') {
        window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      } else {
        window.localStorage.setItem(SLOTS_KEY, JSON.stringify(slots));
      }
    }
  });
};
