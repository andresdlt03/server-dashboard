import { create } from 'zustand';
import { generateData } from '../helpers';

interface MetricData {
  abr: string,
  values: number[],
  color: string,
  unit: string
}

interface MetricsStore {
  metrics: {
    [key: string]: MetricData
  },
  generateRandomMetrics: () => void
}

export const useMetricsStore = create<MetricsStore>()((set) => ({

  metrics: {
    cpu: {
      abr: "CPU",
      values: [],
      color: "",
      unit: "%"
    },
    ram: {
      abr: "RAM",
      values: [],
      color: "",
      unit: "GB"
    },
    storage: {
      abr: "STG",
      values: [],
      color: "",
      unit: "%"
    },
    bandwidth: {
      abr: "BW",
      values: [],
      color: "",
      unit: "Mbps"
    },
    temperature: {
      abr: "TEMP",
      values: [],
      color: "",
      unit: "ºC"
    },
    response_time: {
      abr: "RT",
      values: [],
      color: "",
      unit: "ms"
    },
    connections: {
      abr: "CONEX",
      values: [],
      color: "",
      unit: ""
    },
    database_delay: {
      abr: "DB",
      values: [],
      color: "",
      unit: "ms"
    },
    responses_per_second: {
      abr: "RPS",
      values: [],
      color: "",
      unit: ""
    }
  },

  generateRandomMetrics: () => {

    const generatedCpuData = generateData(10, 1, 100);
    const generatedRamData = generateData(10, 2, 5);
    const generatedStorageData = generateData(10, 1, 100);
    const generatedBandwidthData = generateData(10, 1, 1000);
    const generatedTemperatureData = generateData(10, 1, 60);
    const generatedResponseTimeData = generateData(10, 50, 600);
    const generatedConnectionsData = generateData(10, 50, 1000);
    const generatedDatabaseDelayData = generateData(10, 50, 1000);
    const generatedResponsesPerSecondData = generateData(10, 20, 5000);

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
      }
    }))
  }


}));