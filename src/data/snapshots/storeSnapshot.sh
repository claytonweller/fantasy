SNAPSHOT_FOLDER=$1
DESTINATION=./src/data/snapshots/$SNAPSHOT_FOLDER

mkdir -p $DESTINATION
cp -a ./src/data/raw/. $DESTINATION/.
echo 'DONE'