import {GetterTree} from 'vuex';
import {ParkingLotState, Slot} from '@/store/modules/parking-lot/types';
import {RootState} from '@/store/types';

export const getters: GetterTree<ParkingLotState, RootState> = {
  settings(state): any {
    return state.settings;
  },
  grids(state): Slot[] {
    return state.slots;
  },
  slots(state): any {
    return ({query, isFull}: { query: string, isFull?: boolean } = {query: ''}): Slot[] => {
      let slots = state.slots;
      if (isFull !== undefined) {
        slots = slots.filter((slot) => {
          return !!slot.vehicle === isFull;
        });
      }
      if (query && query !== '') {
        slots = slots.filter((slot: Slot) => {
          let status = false;
          if (slot.code.includes(query)) {
            status = true;
          }
          if (slot.vehicle) {
            if (slot.vehicle.plate.includes(query)) {
              status = true;
            }
            if (slot.vehicle.color.includes(query)) {
              status = true;
            }
          }
          return status;
        });
      }
      return slots;
    };
  },
};
