import { HomeChart } from ".."
import { useGlobalStore } from "../../store/GlobalStore"

interface SmallMetricSectionProps {
  name: string,
}

export const SmallMetricSection : React.FC<SmallMetricSectionProps> = ({name}) => {

  const {abr, values, color, unit} = useGlobalStore(state => state.metrics[name]);

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
