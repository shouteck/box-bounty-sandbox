#!/bin/sh
# Runs on the pantry server only — a Debian host where `fruitd` runs under
# systemd. Restarts the service and reports the result. Nothing else can
# run this script; there is no fruitd anywhere else.
systemctl restart fruitd
echo "fruitd restarted OK"
