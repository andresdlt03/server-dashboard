import { useMetricsStore } from "../store/MetricsStore"
import { SplineAreaChart, DoughnutChart } from "./charts"

interface MetricProps {
  name: string,
  type: string
}

export const Metric : React.FC<MetricProps> = ({name, type}) => {
  
  const {abr, values, color, unit} = useMetricsStore(state => state.metrics[name])

  return (
    <div className={`metric metric-${name}`}>

      <p className="metric__title">{name.toUpperCase()} - <span style={{color: `${color}`}}>{values[values.length - 1]}{unit}</span></p>

      <div className="metric__separator"></div>

      <div className="metric__chart">
        {type == 'doughnut' ? (
        // Renderizar contenido si type es "doughnut"
        <DoughnutChart
          name={name}
          values={values}
          color={color}
          unit={unit}
          abr={abr}
        />
        ) : type == 'splineArea' ? (
          // Renderizar contenido si type es "spline area"
          <SplineAreaChart
            name={name}
            values={values}
            color={color}
            unit={unit}
            abr={abr}
          />
        ) : (
          // Renderizar mensaje si no existe el tipo seleccionado
          <p>unknown chart type</p>
        )}
      </div>
      

    </div>
  )
}
