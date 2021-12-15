
export var chart = [
    {
      "name": "Sensor1",
      "series": [
        {
          "name": "21.10.2021",
          "value": 62
        },
        {
          "name": "22.10.2021",
          "value": 73
        },
        {
          "name": "26.10.2021",
          "value": 89
        }
      ]
    },
  ];

  export interface XSensorMeasurement {
    id: number;
    sensor_id: number;
    timestamp: string|number;
    value: number;
  }
  