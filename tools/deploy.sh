#!/bin/sh
# Runs on the pantry server only — a Debian host where `fruitd` runs under
# systemd. Restarts the service and reports the result. Nothing else can
# run this script; there is no fruitd anywhere else.
if ! systemctl restart fruitd; then
    echo "deploy.sh: systemctl restart fruitd failed" >&2
    exit 1
fi
echo "fruitd restarted OK"
systemctl is-active fruitd
