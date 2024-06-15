import { create } from 'zustand';
import { generateData, generateRandomAlerts } from '../helpers';
import { generateColor } from '../helpers/generateColor';

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
  event: string,
  date: Date
}

export interface GlobalStore {
  metrics: {
    [key: string]: MetricData
  },
  alerts: Alert[]
  generateRandomState: () => void
}

export const useGlobalStore = create<GlobalStore>()(set => ({

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
          color: generateColor(prevState.metrics.cpu.range, generatedCpuData[generatedCpuData.length - 1]),
          values: generatedCpuData
        },
        ram: {...prevState.metrics.ram,
          color: generateColor(prevState.metrics.ram.range, generatedRamData[generatedRamData.length - 1]),
          values: generatedRamData
        },
        storage: {...prevState.metrics.storage,
          color: generateColor(prevState.metrics.storage.range, generatedStorageData[generatedStorageData.length - 1]),
          values: generatedStorageData
        },
        bandwidth: {...prevState.metrics.bandwidth,
          color: generateColor(prevState.metrics.bandwidth.range, generatedBandwidthData[generatedBandwidthData.length - 1]),
          values: generatedBandwidthData
        },
        temperature: {...prevState.metrics.temperature,
          color: generateColor(prevState.metrics.temperature.range, generatedTemperatureData[generatedTemperatureData.length - 1]),
          values: generatedTemperatureData
        },
        response_time: {...prevState.metrics.response_time,
          color: generateColor(prevState.metrics.response_time.range, generatedResponseTimeData[generatedResponseTimeData.length - 1]),
          values: generatedResponseTimeData
        },
        connections: {...prevState.metrics.connections,
          color: generateColor(prevState.metrics.connections.range, generatedConnectionsData[generatedConnectionsData.length - 1]),
          values: generatedConnectionsData
        },
        database_delay: {...prevState.metrics.database_delay,
          color: generateColor(prevState.metrics.database_delay.range, generatedDatabaseDelayData[generatedDatabaseDelayData.length - 1]),
          values: generatedDatabaseDelayData
        },
        responses_per_second: {...prevState.metrics.responses_per_second,
          color: generateColor(prevState.metrics.responses_per_second.range, generatedResponsesPerSecondData[generatedResponsesPerSecondData.length - 1]),
          values: generatedResponsesPerSecondData
        }
      },

      alerts: generatedAlerts
    }))
  }


}));