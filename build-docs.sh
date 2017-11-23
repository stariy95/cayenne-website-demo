#!/usr/bin/env bash

function checkAndCreateDir() {
    if [ ! -d "$1" ]; then
        echo "Creating doc dir: $1"
        mkdir "$1"
    fi
}

function clearDir() {
    if [ -d "$1" ]; then
        echo "Clearing dir: $1"
        rm -rf "$1/*"
    fi
}

# no input, so just exit
if [ -z "$1" ]; then
    echo "Usage: build-docs.sh git-tag [cayenne-version]"
    exit -1
fi

GIT_TAG="$1"
VERSION="$GIT_TAG"

# version can be passed as a second parameter
if [ -z "$2" ]; then
    echo "Using git-tag \"$GIT_TAG\" as cayenne version"
else
    VERSION="$2"
    echo "Using git-tag \"$GIT_TAG\" and cayenne version $VERSION"
fi

# change dir to one with this script
cd "$( dirname "${BASH_SOURCE[0]}" )"
BASE_DIR=`pwd` # base project dir
echo "Working dir: $BASE_DIR"

# init and check paths
MAJOR_VERSION="${VERSION:0:3}" # expecting version format as X.Y.something-else, i.e. 4.12.1 will fail..
JAVA_DOC_DIR="$BASE_DIR/src/main/site/static/docs/$MAJOR_VERSION"       # JavaDoc goes to static, no template wrapping
ASCII_DOC_DIR="$BASE_DIR/src/main/site/content/docs/$MAJOR_VERSION"     # Asciidoc goes to content, Hugo will process it
CAYENNE_TMP_DIR="$BASE_DIR/target/cayenne-tmp"                          # tmp directory to checkout Cayenne

# prepare all directories
clearDir          "$ASCII_DOC_DIR"
clearDir          "$CAYENNE_TMP_DIR"
checkAndCreateDir "$ASCII_DOC_DIR"
checkAndCreateDir "$JAVA_DOC_DIR"

echo "Building docs for Cayenne $MAJOR_VERSION ($VERSION)"

# clone git repo and checkout requested TAG
git clone https://github.com/stariy95/cayenne.git "$CAYENNE_TMP_DIR" # apache / stariy95
cd  "$CAYENNE_TMP_DIR"
git checkout "$GIT_TAG"

# build it
echo "Running Maven build... it can take a while..."
mvn install -q -DskipTests > /dev/null # 2>&1
echo "Maven build complete"

# copy JavaDoc
echo "Syncing JavaDoc to \"docs/$MAJOR_VERSION/api/\""
rsync -a --delete "./docs/doc/target/site/apidocs/doc/api/" "$JAVA_DOC_DIR/api/"

# copy everything from ./docs/asciidoc/**/target/site/** directories
cd "$CAYENNE_TMP_DIR/docs/asciidoc/"
for d in */ ; do
    if [ "$d" == "cayenne-asciidoc-extension/" ]; then
        continue
    fi

    echo "Syncing asciidoc content for ${d}"
    cp -R "./${d}target/site/." "$ASCII_DOC_DIR/"
done

