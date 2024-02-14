#!/bin/bash

# Read the current version from package.json
version=$(jq -r .version package.json)

# Split the version into major, minor, and patch numbers
IFS='.' read -ra version_parts <<< "$version"

# Increment the patch version
patch_version=$((version_parts[2] + 1))

# Construct the new version
new_version="${version_parts[0]}.${version_parts[1]}.$patch_version"

# Replace the version in package.json
jq ".version=\"$new_version\"" package.json > temp.json && mv temp.json package.json