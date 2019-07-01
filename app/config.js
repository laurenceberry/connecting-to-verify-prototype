// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  productName: 'Verify',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'true',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true',

  // Variables added to allow changing dates and names throughout the prototype

  // Today's date
  todaysDate: '2 July 2019',

  // The date that the new certs expire, a year from now
  aYearFromNow: '2 July 2020',

  // Date that current certificates expire
  expiryDate: '2 August 2019',

  // Date that current certificates started
  startDate: '2 July 2018',

  // Service name (could expand to include a list in cases of multiple services)
  serviceName: 'Total Reward Scheme',

  // Slug for example URLS
  serviceSlug: 'universal-credit',

  // Department name
  departmentName: 'NHS',

  // Team name
  teamName: 'NHS'

}
