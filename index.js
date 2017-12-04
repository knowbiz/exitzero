#!/usr/bin/env node
var spawn = require('cross-spawn')

let args = process.argv.slice(2)
const command = args.shift()
spawn.sync(command, args, {stdio: 'inherit'})
process.exit(0)
