module.exports = {
  "*.{tsx,jsx,ts,js,json,md,yml,css}": ["yarn prettier --write"],
  "*.{tsx,ts,jsx,js}": ["yarn eslint --fix"],
}
