import { Metric } from "../components"
import { Topbar } from "../layouts"

export const ServerPage = () => {
  return (
    <main>
      <Topbar title="SERVER PERFORMANCE" />

      <div className="server__container">
        <Metric 
          name="cpu" 
          type="doughnut"/>
        <Metric 
          name="storage" 
          type="splineArea"/>
        <Metric 
          name="bandwidth" 
          type="splineArea"/>
        <Metric 
          name="temperature" 
          type="doughnut"/>
        <Metric 
          name="ram" 
          type="splineArea"/>
      </div>
    </main>
  )
}
