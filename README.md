# aws-account-alias-display-tampermonkey
Display your AWS Account alias for the current SSO session in the AWS Management console - Script to be run in TamperMonkey

Prerequisites - TamperMonkey browser extension installed.
aws_accounts.json configured with your AWS accounts and aliases.
Create using: <br> `cp aws_accounts.example.json aws_accounts.json`

build the userscript with aws account details injected by running: <br> `./build.sh`

import the built userscript into Tampermonkey to use
