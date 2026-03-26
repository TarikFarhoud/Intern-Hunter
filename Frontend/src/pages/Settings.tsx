import { useEffect, useState } from 'react'
import AppLayout from '../components/AppLayout'
import './Dashboard.css'
import './Settings.css'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme'

function getSavedTheme(): Theme {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return savedTheme === 'dark' ? 'dark' : 'light'
}

export default function Settings() {
  const [theme, setTheme] = useState<Theme>(() => {
    return getSavedTheme()
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <AppLayout pageLabel="Settings" activeNav="settings">
      <div className="ih-grid settings-grid">
        <section className="ih-card settings-card">
          <div className="ih-cardHeader">
            <div className="ih-cardTitle">Display</div>
            <div className="ih-muted">Choose how the dashboard should look across every page.</div>
          </div>

          <div className="ih-cardBody settings-cardBody">
            <div className="settings-row">
              <div>
                <div className="settings-label">Theme mode</div>
                <p className="ih-muted settings-copy">
                  Switch between light and dark mode. Your choice is saved and applied when the app loads.
                </p>
              </div>

              <button className="ih-btnPrimary settings-toggle" type="button" onClick={toggleTheme}>
                {theme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
              </button>
            </div>

            <div className="settings-themeStatus">
              <span className="ih-pill">{theme === 'dark' ? 'Dark mode active' : 'Light mode active'}</span>
              <span className="ih-muted">Current theme: {theme}</span>
            </div>

            <div className="settings-preview">
              <div className="settings-previewHeader">
                <div>
                  <div className="settings-previewTitle">Preview</div>
                  <div className="ih-muted">This sample uses the same shared colors and card sizing as the rest of the dashboard.</div>
                </div>
                <div className="settings-previewActions">
                  <span className="settings-chip settings-chipPrimary">Primary</span>
                  <span className="settings-chip">Surface</span>
                </div>
              </div>

              <div className="settings-previewGrid">
                <div className="settings-previewPanel">
                  <div className="settings-previewMetric">Readable contrast</div>
                  <div className="settings-previewValue">AA-ready</div>
                </div>
                <div className="settings-previewPanel">
                  <div className="settings-previewMetric">Saved preference</div>
                  <div className="settings-previewValue">Persistent</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </AppLayout>
  )
}