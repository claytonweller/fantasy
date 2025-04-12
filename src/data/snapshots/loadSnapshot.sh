SNAPSHOT_FOLDER=$1

mkdir -p ./src/data/snapshots/$SNAPSHOT_FOLDER
cp -a ./src/data/snapshots/$SNAPSHOT_FOLDER/. ./src/data/raw
echo 'DONE'