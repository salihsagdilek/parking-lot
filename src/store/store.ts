import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {RootState} from './types';

import {parkingLot, parkingLotPlugin} from './modules/parking-lot';

Vue.use(Vuex);
const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    parkingLot,
  },
  plugins: [parkingLotPlugin],
};

export default new Vuex.Store<RootState>(store);
