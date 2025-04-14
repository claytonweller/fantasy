if [ -d "./src/data/snapshots/state-safety" ]; then
  echo "Already in a rolled back data state."
  echo "Cannot set a new state without destroying data."
  echo "run 'yarn revert-data-state' first"
  exit 1
fi

rm -rf ./src/data/snapshots/state-safety
yarn store-snapshot state-safety

node_modules/.bin/tsx src/data/rawScripts/runSetDataState --week $1 --state $2

yarn format