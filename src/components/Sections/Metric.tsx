import { useMetricsStore } from "../../store/MetricsStore"
import { SplineAreaChart, DoughnutChart } from "../Charts"

interface MetricProps {
  name: string,
  type: string
}

export const Metric : React.FC<MetricProps> = ({name, type}) => {
  
  const {abr, values, color, unit} = useMetricsStore(state => state.metrics[name])

  return (
    <div className={`section section-${name}`}>

      <p className="section__title">{name.toUpperCase()} - <span style={{color: `${color}`}}>{values[values.length - 1]}{unit}</span></p>

      <div className="section__separator"></div>

      <div className="section__chart">
        {type == 'doughnut' ? (
        // Render doughnut chart
        <DoughnutChart
          name={name}
          values={values}
          color={color}
          unit={unit}
          abr={abr}
        />
        ) : type == 'splineArea' ? (
          // Render Spline Area chart
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
