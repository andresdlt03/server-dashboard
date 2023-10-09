import { create } from 'zustand';
import { generateData, generateRandomAlerts } from '../helpers';

export interface MetricData {
  abr: string,
  values: number[],
  color: string,
  unit: string,
  range: Range
}

export interface Range {
  min: number,
  max: number
}

export interface Alert {
  name: string,
  date: Date
}

export interface GlobalStore {
  metrics: {
    [key: string]: MetricData
  },
  alerts: Alert[]
  insertMetricValue: (name: string, value: number) => void,
  insertAlert: (date: Date, event: string) => void,
  generateRandomState: () => void
}

export const useGlobalStore = create<GlobalStore>()((set) => ({

  metrics: {
    cpu: {
      abr: "CPU",
      values: [],
      color: "",
      unit: "%",
      range: {
        min: 0,
        max: 100
      }
    },
    ram: {
      abr: "RAM",
      values: [],
      color: "",
      unit: "GB",
      range: {
        min: 0,
        max: 5
      }
    },
    storage: {
      abr: "STG",
      values: [],
      color: "",
      unit: "%",
      range: {
        min: 0,
        max: 100,
      }
    },
    bandwidth: {
      abr: "BW",
      values: [],
      color: "",
      unit: "Mbps",
      range: {
        min: 0,
        max: 1000
      }
    },
    temperature: {
      abr: "TEMP",
      values: [],
      color: "",
      unit: "ºC",
      range: {
        min: 0,
        max: 100
      }
    },
    response_time: {
      abr: "RT",
      values: [],
      color: "",
      unit: "ms",
      range: {
        min: 0,
        max: 600
      }
    },
    connections: {
      abr: "CONEX",
      values: [],
      color: "",
      unit: "",
      range: {
        min: 0,
        max: 10000
      }
    },
    database_delay: {
      abr: "DB",
      values: [],
      color: "",
      unit: "ms",
      range: {
        min: 0,
        max: 1000
      }
    },
    responses_per_second: {
      abr: "RPS",
      values: [],
      color: "",
      unit: "",
      range: {
        min: 0,
        max: 5000
      }
    }
  },

  alerts : [],

  insertMetricValue: (name: string, value: number) => {
    return set((prevState) => {
      const metrics = { ...prevState.metrics }

      if (metrics.hasOwnProperty(name)) {
        // Clona la métrica específica y agrega el valor al array "values"
        metrics[name] = {
          ...metrics[name],
          values: [...metrics[name].values, value],
        };
      }

      return {
        metrics: {
          ...metrics,
        },
      }
    }
  )},

  insertAlert: (date: Date, event: string) => {
    //TODO:
  },

  generateRandomState: () => {
    const generatedCpuData = generateData(10, 1, 100);
    const generatedRamData = generateData(10, 2, 5);
    const generatedStorageData = generateData(10, 1, 100);
    const generatedBandwidthData = generateData(10, 1, 1000);
    const generatedTemperatureData = generateData(10, 1, 100);
    const generatedResponseTimeData = generateData(10, 50, 600);
    const generatedConnectionsData = generateData(10, 50, 10000);
    const generatedDatabaseDelayData = generateData(10, 50, 1000);
    const generatedResponsesPerSecondData = generateData(10, 20, 5000);
    const generatedAlerts = generateRandomAlerts(10);

    return set((prevState) => ({
      metrics: {
        cpu: {...prevState.metrics.cpu,
          values: generatedCpuData.values,
          color: generatedCpuData.color
        },
        ram: {...prevState.metrics.ram,
          values: generatedRamData.values,
          color: generatedRamData.color
        },
        storage: {...prevState.metrics.storage,
          values: generatedStorageData.values,
          color: generatedStorageData.color
        },
        bandwidth: {...prevState.metrics.bandwidth,
          values: generatedBandwidthData.values,
          color: generatedBandwidthData.color
        },
        temperature: {...prevState.metrics.temperature,
          values: generatedTemperatureData.values,
          color: generatedTemperatureData.color
        },
        response_time: {...prevState.metrics.response_time,
          values: generatedResponseTimeData.values,
          color: generatedResponseTimeData.color
        },
        connections: {...prevState.metrics.connections,
          values: generatedConnectionsData.values,
          color: generatedConnectionsData.color
        },
        database_delay: {...prevState.metrics.database_delay,
          values: generatedDatabaseDelayData.values,
          color: generatedDatabaseDelayData.color
        },
        responses_per_second: {...prevState.metrics.responses_per_second,
          values: generatedResponsesPerSecondData.values,
          color: generatedResponsesPerSecondData.color
        }
      },

      alerts: generatedAlerts
    }))
  }


}));