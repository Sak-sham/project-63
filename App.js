import * as React from 'react';
import {
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb'
import PhonicSoundButton from './components/PhonicSoundButton'
console.log(db["other"].chunks)


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      //displayText: '',
      chunks: [],
      phonicSounds:[],
      wordSearched:[],
      wordReturned:[],
      lexicalCategory:[],
      definition:[],
      isButtonPressed:[],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Monkey Chunky',

            style: {
              color: 'green',
              fontSize: 25,
            },
          }}
        />

        <Image style={styles.imageIcon}
          source={{ uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png', }} />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
            this.setState({phones:db[this.state.text].phones});
          }}>
          <Text style={styles.buttonText}> go </Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item,index) => {
            return (
              <PhonicSoundButton
              wordChunk={this.state.chunks[index]}
              soundChunk={this.state.phonicSounds[index]}
                //style=</View>{styles.chunkButton}>
                //</View><Text style={styles.displayText}>{item}</Text>
             />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    height: 40,
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 115,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30
  },
  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});
