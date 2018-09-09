import {ActionTree} from 'vuex';
import {ParkingLotState, Slot, Settings, Vehicle, FullSlot} from './types';
import {RootState} from '@/store/types';

import {ParkingLotGridGenerator} from '@/library/ParkingLotGridGenerator';

export const actions: ActionTree<ParkingLotState, RootState> = {
  generateGrids({commit}, payload: { x: [], y: [] }): any {
    const slots: Slot[] = new ParkingLotGridGenerator(payload.x, payload.y)
      .getSlots();
    commit('updateGrids', slots);
    return true;
  },
  saveSettings({commit, dispatch}, payload: Settings): any {
    const {x, y} = payload;
    commit('updateSettings', payload);
    return new Promise((resolve, reject) => {
      dispatch('generateGrids', {x, y})
        .then((response: any) => {
          resolve();
        })
        .catch((err: any) => {
          reject();
        });
    });
  },
  slotEntrance({commit, getters}, payload: { color: string, plate: string }) {
    const {color, plate} = payload;

    const plateExist = getters.slots({isFull: true}).find((slot: FullSlot) => slot.vehicle.plate === plate);

    return new Promise((resolve, reject) => {
      if (plateExist) {
        return reject('Plate Exist');
      } else {
        const vehicle: Vehicle = {
          color,
          plate,
          entryTime: new Date(),
        };
        const emptySlot = getters.slots({isFull: false})[0];
        emptySlot.vehicle = vehicle;
        commit('updateSlot', emptySlot);
        resolve(true);
      }
    });
  },
  slotLeave({commit}, payload: Slot) {
    commit('slotLeave', payload);
  },
};
