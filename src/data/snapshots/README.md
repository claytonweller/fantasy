# Snapshots Folder?

Since we're doing all of our data modeling on the client side (for now) we want to be able to stage data before it goes live. This folder has subdirectories with the naming convention YYYY-MM-DD, in which is a version of the `src/data/raw directory` we're using to populate all of the information.

This will allow us to both have future states for the application and past states for roll back.

Obviously once we have an actual back end, we'll probably have a different snapshotting/versioning system put in place (which isn't duplicating huge swathes of the the data in every version)

## Set the live state to a saved snapshot

run this code from the main directory

```bash
yarn set-snapshot yyyy-mm-dd
```

## Store the current live state to a new snapshot folder

run this code from the main directory

```bash
yarn store-snapshot yyyy-mm-dd
```
