import { GeolocationModel } from './geolocation.model';

export interface XSensor {
  id: number;
  name: string;
  dateAdded: string;
  geolocation: GeolocationModel;
  value: string;
  forest_area_id?: number;
  administrator?: string;
  status?: string;
}
