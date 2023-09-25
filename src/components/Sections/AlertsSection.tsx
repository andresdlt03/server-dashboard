import { Alert } from "../Alert"

import { formatDate } from "../../helpers"

interface Alert {
  title: string,
  date: Date
}

interface AlertsSectionProps {
  title: string,
  alerts: Alert[]
}

export const AlertsSection = ({title, alerts}) => {

  return (
    <div className={`section section-${title}`}>

      <p className="section__title">{title.toUpperCase()} <span>{formatDate(new Date)}</span></p>

      <div className="section__separator"></div>

      <div className="alerts__container">
        
        { alerts.map((alert : Alert) => (
          <Alert alert={alert}/>
        )) }

      </div>

    </div>
  )
}
