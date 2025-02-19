SNAPSHOT_FOLDER=$1

cp -a ./src/data/snapshots/$SNAPSHOT_FOLDER/. ./src/data/raw
echo 'DONE'