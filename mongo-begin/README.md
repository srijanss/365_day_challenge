# run mongodb as macOS service

brew services start mongodb-community@4.2
brew services stop mongodb-community@4.2

# run mongodb as background process

mongod --config /usr/local/etc/mongod.conf --fork
To stop a mongod running as a background process, connect to the mongod from the mongo shell, and issue the shutdown command as needed.

# configuration file

/usr/local/etc/mongod.conf
