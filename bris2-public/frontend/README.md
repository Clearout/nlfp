# POC BRIS2 Vue app
See README inside folders for descriptions of functionality.



## Build Setup

For hot reload, start backend (NlfpPublicApplication) as normally and then start frontend:

``` bash
# Install and run
yarn && yarn dev

# powershell
yarn; yarn dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Prerequisites

This app connects to DSB's Oppdrag index using a [Go proxy](https://github.com/joacimjakobsen/Go-proxy) to provide headers and change HTTP method.

For the Go proxy to work you need to be connected on DSB's network or VPN.