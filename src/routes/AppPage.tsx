import { Metric } from "../components"
import { Topbar } from "../layouts"

export const AppPage = () => {
  return (
    <main>
      <Topbar title="APP PERFORMANCE"/>

      <div className="app__container">
        <Metric
          name="response_time" 
          type="splineArea"
        />
        <Metric
          name="responses_per_second" 
          type="doughnut"
        />
        <Metric
          name="connections" 
          type="doughnut"
        />
        <Metric
          name="database_delay" 
          type="splineArea"
        />
      </div>
    </main>
  )
}
