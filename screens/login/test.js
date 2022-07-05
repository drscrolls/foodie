import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
  }

  componentWillMount() {
    async function api_content() {
      const response = await fetch(
        // Make this YOUR URL
        'http://example.com.au/api/test?_format=json',
        {}
      );
      const json = await response.json();
      return json;
    }

    api_content().then(days => {
      this.setState({ content: days });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>This is content on my site:</Text>
          {this.state.content.map(item => {
            return (
              <Text style={styles.paragraph}>{item.name}, TID: {item.tid}</Text>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
