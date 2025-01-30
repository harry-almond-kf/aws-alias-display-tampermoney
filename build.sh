#!/bin/bash

# Create dist directory
mkdir -p dist

sed "s/\/\/ config-mount-point/const awsAccounts = $(cat ./aws_accounts.json | tr -d "\n")/" userscript.js > dist/userscript.js

