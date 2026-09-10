#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
rm -rf docs
mkdir docs
cp -R out/. docs/
touch docs/.nojekyll
# Keep GSC HTML verification file if present in public/
if [[ -f public/google589bc93cf8963c31.html ]]; then
  cp public/google589bc93cf8963c31.html docs/google589bc93cf8963c31.html
fi
git add docs
git status -sb
echo "docs/ updated. Commit + push main to publish (Pages source: main /docs)."
