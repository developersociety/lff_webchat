# Live Fear Free custom webchat client

Based on the Twilio webchat client example here: https://github.com/twilio/flex-webchat-ui-sample

Twilio documentation for component customisation is here: https://www.twilio.com/docs/flex/developer/webchat/setup
## Instructions

1. Install all dependencies by running:
```
npm install
```

3. Start Flex webchat UI by running:
```
npm start
```

## Installation

1. Clone this repo to your development environment and `cd` into the repo root
2. Run `npm install`
3. Run the build script `npm run build` this will add a `build` to the project root
4. Copy the two script files in `build/assets` and include them in your site (refer to `public/index.html` and the comments for guidance on what is required)
5. Add the following element before the closing body tag of your site's base template  `<div id="webchat-root"></div>`
6. 🎉
