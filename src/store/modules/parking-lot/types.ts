export interface Settings {
  name: string;
  x: any[];
  y: any[];
}

export interface Slot {
  code: string;
  vehicle: null | Vehicle;
}

export interface FullSlot {
  code: string;
  vehicle: Vehicle;
}

export interface Vehicle {
  entryTime: Date;
  color: string;
  plate: string;
}

export interface ParkingLotState {
  slots: Slot[];
  settings: Settings;
}
