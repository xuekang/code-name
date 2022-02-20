const getters = {
  size: state => state.app.size,
  device: state => state.app.device,
  errorLogs: state => state.errorLog.logs
}
export default getters
