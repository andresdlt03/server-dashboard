import { MetricSection } from "../components"
import { Topbar } from "../layouts"

export const AppPage = () => {
  return (
    <main>
      <Topbar title="APP PERFORMANCE"/>

      <div className="app__container">
        <MetricSection
          name="response_time" 
          type="splineArea"
        />
        <MetricSection
          name="responses_per_second" 
          type="doughnut"
        />
        <MetricSection
          name="connections" 
          type="doughnut"
        />
        <MetricSection
          name="database_delay" 
          type="splineArea"
        />
      </div>
    </main>
  )
}
