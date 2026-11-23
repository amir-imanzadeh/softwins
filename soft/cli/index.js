#!/usr/bin/env node
const args = process.argv.slice(2);

const command = args.join(" ");

console.log(command[0])