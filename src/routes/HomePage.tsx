import { SmallMetric } from "../components"
import { AlertsSection } from "../components/Sections/AlertsSection"
import { Topbar } from "../layouts"
import { useMetricsStore } from "../store/MetricsStore"

export const HomePage = () => {

  const alerts = useMetricsStore(state => state.alerts);

  return (
    <main>
      <Topbar title="OVERVIEW" />

      <div className="home__container">
        <div className="home__server-section">
          <h2>SERVER PERFORMANCE</h2>
          <div className="home__server-container">
            <SmallMetric name="cpu"/>
            <SmallMetric name="ram" />
            <SmallMetric name="storage" />
            <SmallMetric name="bandwidth" />
            <SmallMetric name="temperature" />
          </div>

        </div>
        <div className="home__app-section">
          <h2>APP PERFORMANCE</h2>
          <div className="home__app-container">
            <SmallMetric name="response_time"/>
            <SmallMetric name="connections"/>
            <SmallMetric name="database_delay"/>
            <SmallMetric name="responses_per_second"/>
          </div>

        </div>
        <div className="home__alerts-section">
          <h2>ALERTS AND NOTIFICATIONS</h2>
          <div className="home__alerts-container">
            <AlertsSection
              title="today"
              alerts={alerts}
            />
          </div>

        </div>

      </div>
    </main>
  )
}
