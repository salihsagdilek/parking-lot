import {MutationTree} from 'vuex';
import {ParkingLotState} from '@/store/modules/parking-lot/types';
import {Slot, Settings} from './types';

export const mutations: MutationTree<ParkingLotState> = {
  updateGrids(state, payload: Slot[]) {
    state.slots = payload;
  },
  updateSettings(state, payload: Settings) {
    state.settings = payload;
  },
  updateSlot(state, payload: Slot) {
    const slotIndex = state.slots.findIndex((slot: Slot) => slot.code === payload.code);
    state.slots[slotIndex] = payload;
  },
  slotLeave(state, payload: Slot) {
    state.slots = state.slots.map((slot: Slot) => {
      if (slot === payload) {
        slot.vehicle = null;
      }
      return slot;
    });
  },
};
