import { useGlobalStore } from "../store/GlobalStore"

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
      
      // Verifica si la métrica con el nombre especificado existe
      if (metrics.hasOwnProperty(name)) {
        // Clona la métrica específica y agrega el valor al array "values"
        metrics[name] = {
          ...metrics[name],
          values: [...metrics[name].values, value],
        };
      }

      // Devuelve el nuevo estado con las métricas actualizadas
      return {
        metrics: {
          ...metrics,
        },
      };
  })
}

function handleAlert(alert : AlertPayload) {
  
}