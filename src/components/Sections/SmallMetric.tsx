import { HomeChart } from ".."
import { useMetricsStore } from "../../store/MetricsStore"

interface SmallMetricProps {
  name: string,
}

export const SmallMetric : React.FC<SmallMetricProps> = ({name}) => {

  const {abr, values, color, unit} = useMetricsStore(state => state.metrics[name]);

  return (
    <div className="home-metric">
      <div className="home-metric__chart">
        <HomeChart 
          name={name}
          values={values}
          color={color}
        />
      </div>
      <div className="home-metric__text">
        <p className="home-metric__text__value" style={{color: `${color}`}}>{values[values.length - 1]}<span>{unit}</span></p>
        <p className="home-metric__text__abr">{abr}</p>
      </div>
    </div>
  )
}
