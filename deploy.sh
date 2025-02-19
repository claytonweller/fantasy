yarn store-snapshot safety
yarn scrub-research
yarn build
# Upload to S3
aws s3 sync build/ s3://fantasy.claytonweller.com --acl public-read
# Push changes to hosting service
aws cloudfront create-invalidation --no-cli-pager --distribution-id E8N78ZCJXLHBY --paths "/*"
yarn set-snapshot safety

