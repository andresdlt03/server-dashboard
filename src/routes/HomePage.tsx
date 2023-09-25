import { SmallMetricSection } from "../components"
import { AlertsSection } from "../components/Sections/AlertsSection"
import { Topbar } from "../layouts"
import { useGlobalStore } from "../store/GlobalStore"

export const HomePage = () => {

  const alerts = useGlobalStore(state => state.alerts);

  return (
    <main>
      <Topbar title="OVERVIEW" />

      <div className="home__container">
        <div className="home__server-section">
          <h2>SERVER PERFORMANCE</h2>
          <div className="home__server-container">
            <SmallMetricSection name="cpu"/>
            <SmallMetricSection name="ram" />
            <SmallMetricSection name="storage" />
            <SmallMetricSection name="bandwidth" />
            <SmallMetricSection name="temperature" />
          </div>

        </div>
        <div className="home__app-section">
          <h2>APP PERFORMANCE</h2>
          <div className="home__app-container">
            <SmallMetricSection name="response_time"/>
            <SmallMetricSection name="connections"/>
            <SmallMetricSection name="database_delay"/>
            <SmallMetricSection name="responses_per_second"/>
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
