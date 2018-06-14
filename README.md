works with something like this for testing vfor i in {1..10}; do ./awsflood.sh https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/awsflood MYLO $(jot -r 1 5000000); done

```

#!/bin/bash
AWSURL=$1
CHAINNAME=$2
ITERATION=$3
curl -X POST ${AWSURL} -d " \
{ \
\"chainname\": \"${CHAINNAME}\", \
\"height\": \"${ITERATION}\" \
} \
"

```
