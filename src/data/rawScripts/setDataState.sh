rm -rf ./src/data/snapshots/state-safety
yarn store-snapshot state-safety

node_modules/.bin/tsx src/data/rawScripts/runSetDataState --week $1 --state $2

yarn format