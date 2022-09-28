mkdir "components/presentational/$1"
cat base_component.txt | sed "s/ComponentName/$1/g"  > "components/presentational/$1/$1.tsx"

git add "components/presentational/$1"
