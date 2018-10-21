PLUGIN_NAME=defaults
PLUGIN_FOLDER=~/Library/Application\ Support/Insomnia/plugins
PLUGIN_PATH="$PLUGIN_FOLDER/$PLUGIN_NAME"

set -x
clean() {
    rm -rf "$PLUGIN_PATH"
}

build() {
    tsc
    cp package.json dist
}

deploy_local() {
    clean
    build
    cp -r dist "$PLUGIN_PATH"
}

publish() {
    clean
    build
    npm publish
}

case $1 in
    build) build
           ;;
    clean) clean
           ;;
    deploy-local) deploy_local
                  ;;
    publish) publish
                  ;;
esac
