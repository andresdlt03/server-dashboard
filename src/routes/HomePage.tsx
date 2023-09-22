import { HomeMetric } from "../components"
import { Topbar } from "../layouts"

export const HomePage = () => {
  return (
    <main>
      <Topbar title="OVERVIEW"/>

      <div className="home__container">
        <div className="home__server-section">
          <h2>SERVER PERFORMANCE</h2>
          <div className="home__server-container">
            <HomeMetric />
            <HomeMetric />
            <HomeMetric />
            <HomeMetric />
            <HomeMetric />
          </div>

        </div>
        <div className="home__app-section">
          <h2>APP PERFORMANCE</h2>
          <div className="home__app-container">
            <HomeMetric />
            <HomeMetric />
            <HomeMetric />
            <HomeMetric />
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
