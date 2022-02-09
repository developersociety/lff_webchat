import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import ip_lookup from './ip_lookup';

class App extends React.Component {

  state = {
    'ip' : '',
    'country' : ''
  };

  async init(props) {
    const { configuration } = props;
    FlexWebChat.Manager.create(configuration)
      .then(manager => this.setState({ manager }))
      .catch(error => this.setState({ error }));

    // change header text and hide the logo
    FlexWebChat.MainHeader.defaultProps.titleText = "Chat With Live Fear Free";
    FlexWebChat.MainHeader.defaultProps.showImage = false;

    // hide welcome message blocks
    FlexWebChat.MessagingCanvas.defaultProps.showWelcomeMessage = false;

    // inital message
    FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = {
      body: `Croeso i Llinell Gymorth Byw Heb Ofn

      Welcome to The Live Fear Free Helpline

      Diolch am gysylltu gyda’r Llinell Gymorth. Sut gallwn i eich helpu chi heddiw?

      Thank you for contacting the Helpline. How can we help you today?`,
      authorName: "Helpline/Llinell Gymorth"
    }

    FlexWebChat.MessagingCanvas.defaultProps.memberDisplayOptions = {
      yourDefaultName: 'Anonymous',
      theirDefaultName: 'Helpline/Llinell Gymorth',
      yourFriendlyNameOverride: false,
      theirFriendlyNameOverride: false
    }

    // get ip data ansd assign to state
    let ip_data = await ip_lookup()

    this.state.ip = ip_data.ip
    this.state.country = ip_data.country;

    FlexWebChat.ContextProvider.context = this.state;

    console.log(FlexWebChat.ContextProvider.context)

  }

  constructor(props) {
    super(props);

    this.init(props);

    // Open the chat window by default
    FlexWebChat.Actions.invokeAction("ToggleChatVisibility");

    // Restart the chat when the page is refreshed
    FlexWebChat.Actions.invokeAction("RestartEngagement");
  }

  render() {
    const { manager, error } = this.state;
    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
}

export default App;
