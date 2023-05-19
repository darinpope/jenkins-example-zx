#!/usr/bin/env zx

let msg = process.argv[0]
if(msg === null) {
  msg = 'World'
}
console.log('Hello' + msg)