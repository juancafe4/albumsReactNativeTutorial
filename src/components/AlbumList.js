import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
  constructor(props) {
    state = {
      albums: []
    };
  }
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        this.setState({albums: res.data});
      }).catch(err => {
        console.log(err);
      });
  }
  renderAlbums() {
    return this.state.albums.map(data => {
      return (
        <Text>{album.title}</Text>
      );
    });
  }
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;