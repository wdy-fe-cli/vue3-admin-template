import getVersion from '/package.json'

const isNewVersion = () => {
  let version = localStorage.getItem('version')
  if (version) {
    if (getVersion.version != version) {
      localStorage.setItem('version', getVersion.version)
      window.location.reload()
    }
  } else {
    localStorage.setItem('version', getVersion.version)
    window.location.reload()
  }
}

export default {
  isNewVersion,
}
