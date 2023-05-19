#!/usr/bin/env zx

let msg = process.argv[3]
if( !msg ) {
  msg = 'World'
}
console.log('Hello ' + msg)