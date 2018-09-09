import {Transformer} from './Transformer';

interface FetchSettings {
  name: string;
  x: [];
  y: [];
}

interface SendSettings {
  name: string;
  x: string;
  y: string;
}


export class SettingsTranformer extends Transformer {
  public static fetch(settings: FetchSettings) {
    return {
      name: settings.name,
      x: settings.x.join(', '),
      y: settings.y.join(', '),
    };
  }

  public static send(settings: SendSettings) {
    return {
      name: settings.name,
      x: settings.x.replace(/\s/gi, '').split(','),
      y: settings.y.replace(/\s/gi, '').split(','),
    };
  }
}
