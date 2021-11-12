import {GeolocationModel} from './geolocation.model';
import {ForestationTypeEnum} from '../enums/forestation-type.enum';

export interface XForestArea {
  id?: number;
  name: string;
  geolocation?: GeolocationModel;
  typeOfForestation?: ForestationTypeEnum;
}
