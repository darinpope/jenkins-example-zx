#!/usr/bin/env zx

let msg = process.argv[3]
if(msg === null) {
  msg = 'World'
}
console.log('Hello' + msg)