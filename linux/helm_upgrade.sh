IMAGE_TAG="$TRAVIS_BRANCH-$TRAVIS_COMMIT"

RELEASE_NAME=$(echo "$TRAVIS_BRANCH" | sed 's/\./-/g')

helm upgrade \
	--wait \
	--set petriImage=jaska/petri:$IMAGE_TAG \
	--install eptri-$RELEASE_NAME ./deployment
