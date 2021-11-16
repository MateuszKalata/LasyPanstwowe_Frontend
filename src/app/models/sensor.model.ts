import { GeolocationModel } from './geolocation.model';

export interface XSensor {
  id: number|string;
  name: string;
  dateAdded: string;
  geolocation: GeolocationModel;
  value: string;
  forest_area_id?: string|number;
  administrator?: string;
  status?: string;
  unit?: string;
  type?: string;
}
