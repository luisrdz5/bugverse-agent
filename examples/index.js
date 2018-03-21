const BugverseAgent = require('../')

const agent = new BugverseAgent({
  name: 'myapp',
  interval: 2000,
  username: 'admin'
})

agent.addMetric('rss', function getRss () {
  return process.memoryUsage().rss
})

agent.addMetric('promiseMetric', function getRandomPromise () {
  return Promise.resolve(Math.random())
})
agent.addMetric('callbackMetric', function getRandomCallback (callback) {
  setTimeout(() => {
    callback(null, Math.random())
  }, 1000)
})

agent.connect()

// This agent Only
agent.on('connected', handler)
agent.on('disconnected', handler)
agent.on('message', handler)

// Other agents
agent.on('agent/connected', handler)
agent.on('agent/disconnected', handler)
agent.on('agent/message', handler)

function handler (payload) {
  console.log(payload)
}
setTimeout(() => agent.disconnect(), 10000)
