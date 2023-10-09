import { formatTime } from "../helpers"
import { Alert } from "../store/GlobalStore"

interface AlertComponentProps {
  alert: Alert
}

export const AlertComponent : React.FC<AlertComponentProps> = ({alert}) => {
  return (
    <div className="alert">
      <p>{alert.name} - {formatTime(alert.date)}</p>
    </div>
  )
}
