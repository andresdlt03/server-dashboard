import { MetricSection } from "../components"
import { Topbar } from "../layouts"

export const ServerPage = () => {
  return (
    <main>
      <Topbar title="SERVER PERFORMANCE" />

      <div className="server__container">
        <MetricSection 
          name="cpu" 
          type="doughnut"/>
        <MetricSection 
          name="storage" 
          type="splineArea"/>
        <MetricSection 
          name="bandwidth" 
          type="splineArea"/>
        <MetricSection 
          name="temperature" 
          type="doughnut"/>
        <MetricSection 
          name="ram" 
          type="splineArea"/>
      </div>
    </main>
  )
}
