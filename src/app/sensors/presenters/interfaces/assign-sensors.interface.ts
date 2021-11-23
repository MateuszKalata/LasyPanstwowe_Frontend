export interface IAssignSensors {
  onAssignSensorClick(sensorId: number): void;
  onAssignmentFormSubmit(sensorId: number, forestAreaId: number): void;
}
