#!/bin/bash

echo "Adding all files..."
git add .

echo "Committing changes..."
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"

echo "Pushing to remote..."
git push -u origin master

echo "Done! 100% complete"