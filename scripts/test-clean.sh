#!/usr/bin/env sh
set -eu

unset npm_config_devdir
npm run test:smoke
