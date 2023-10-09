import { AlertComponent } from "../AlertComponent"
import { Alert } from "../../store/GlobalStore"

import { formatDate } from "../../helpers"
import React from "react"

interface AlertsSectionProps {
  title: string,
  alerts: Alert[]
}

export const AlertsSection : React.FC<AlertsSectionProps> = ({title, alerts}) => {

  return (
    <div className={`section section-${title}`}>

      <p className="section__title">{title.toUpperCase()} <span>{formatDate(new Date)}</span></p>

      <div className="section__separator"></div>

      <div className="alerts__container">
        
        { alerts.map((alert : Alert) => (
          <AlertComponent alert={alert}/>
        )) }

      </div>

    </div>
  )
}
