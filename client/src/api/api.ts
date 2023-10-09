import { useGlobalStore } from "../store/GlobalStore"
import { generateColor } from "../helpers/generateColor"

useGlobalStore

interface Packet {
  type: string,
  payload: Payload
}

type Payload = DataPayload | AlertPayload

interface DataPayload {
  name: string,
  value: number
}

interface AlertPayload {
  date: Date,
  event: string
}

export function handleMessage(message: string) {
  let packet : Packet = JSON.parse(message);
  switch (packet.type) {

    case "data":
      handleData(packet.payload as DataPayload);
      break;

    case "alert":
      handleAlert(packet.payload as AlertPayload);
      break;
  }
}

function handleData(data : DataPayload) {

  const {name, value} = data

  useGlobalStore.setState((prevState) => {
    const metrics = { ...prevState.metrics };
  
      if (metrics.hasOwnProperty(name)) {
        const updatedValues = [...metrics[name].values, value];
  
        const generatedColor = generateColor(metrics[name].range, value);
  
        const updatedMetric = {
          ...metrics[name],
          values: updatedValues,
          color: generatedColor,
        };
  
        metrics[name] = updatedMetric;
      }
  
      return {
        ...prevState,
        metrics: { ...metrics },
      };
  })
}

function handleAlert(data : AlertPayload) {

  useGlobalStore.setState((prevState) => {

    const alert = {
      event: data.event,
      date: new Date(data.date),
    }

    return {
      ...prevState,
      alerts: [  ...prevState.alerts, alert ]
    }

  })
	
}