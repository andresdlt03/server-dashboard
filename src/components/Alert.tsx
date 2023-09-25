import { formatTime } from "../helpers"

interface Alert {
  title: string,
  date: Date
}

interface AlertProps {
  alert: Alert
}

export const Alert : React.FC<AlertProps> = ({alert}) => {
  return (
    <div className="alert">
      <p>{alert.title} - {formatTime(alert.date)}</p>
    </div>
  )
}
