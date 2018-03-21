# Bugverse Agent

## Usage

``` js

const BugverseAgent = require(bugverse-agent)

const agent = new BugverseAgent({
    interval: 2000
})

agent.connect()

// This agent Only
agent.on('connected')
agent.on('disconnected')
agent.on('message')


//All the agents
agent.on('agent/connected')
agent.on('agent/disconnected')
agent.on('agent/message', payload => {
    console.log(payload)
})
setTimeout(() => agent.disconnect(), 20000)

```
