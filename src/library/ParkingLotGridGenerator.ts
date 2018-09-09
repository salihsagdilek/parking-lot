import {Slot} from './types';

export class ParkingLotGridGenerator {
  private x: [];
  private y: [];
  private slots: Slot[];

  constructor(x: [] = [], y: [] = []) {
    this.x = x;
    this.y = y;
    this.slots = [];
    this.makeGrid();
  }

  public getSlots() {
    return this.slots;
  }

  private makeGrid() {
    this.x.forEach((a) => {
      this.y.forEach((b) => {
        const slot: Slot = {
          code: `${a}${b}`,
          vehicle: null,
        };
        this.slots.push(slot);
      });
    });
    return this;
  }
}
