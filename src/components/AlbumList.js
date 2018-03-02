import React from 'react';
import AlbumDetail from './AlbumDetail';
import { ScrollView } from 'react-native';
import axios from 'axios';

export default class AlbumList extends React.Component {
  state = {
    albums: []
  };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        this.setState({albums: res.data});
      }).catch(err => {
        console.log(err);
      });
  }
  renderAlbums() {
    return this.state.albums.map(data => {
      return (
        <AlbumDetail key={data.title} album={data}/>
      );
    });
  }
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}


