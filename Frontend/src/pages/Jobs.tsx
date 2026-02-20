import AppLayout from '../components/AppLayout'
import './Dashboard.css'

export default function Jobs() {
  return (
    <AppLayout pageLabel="Jobs" activeNav="jobs">
      <div className="ih-grid">
        <section className="ih-card">
          <div className="ih-cardHeader">
            <div className="ih-cardTitle">Jobs</div>
          </div>
          <div className="ih-cardBody">
            <div className="ih-muted">Jobs module is coming soon.</div>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
