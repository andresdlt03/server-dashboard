import { HomeMetric } from "../components"
import { Topbar } from "../layouts"

export const HomePage = () => {

  return (
    <main>
      <Topbar title="OVERVIEW" />

      <div className="home__container">
        <div className="home__server-section">
          <h2>SERVER PERFORMANCE</h2>
          <div className="home__server-container">
            <HomeMetric name="cpu"/>
            <HomeMetric name="ram" />
            <HomeMetric name="storage" />
            <HomeMetric name="bandwidth" />
            <HomeMetric name="temperature" />
          </div>

        </div>
        <div className="home__app-section">
          <h2>APP PERFORMANCE</h2>
          <div className="home__app-container">
            <HomeMetric name="response_time"/>
            <HomeMetric name="connections"/>
            <HomeMetric name="database_delay"/>
            <HomeMetric name="responses_per_second"/>
          </div>

        </div>
        <div className="home__alerts-section">
          <h2>ALERTS AND NOTIFICATIONS</h2>
          <div className="home__alerts-container">

          </div>

        </div>
      </div>
    </main>
  )
}
