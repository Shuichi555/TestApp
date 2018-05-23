import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

// NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Content,
  Header,
  Text
} from 'native-base';

import Carousel from 'react-native-snap-carousel';
import GridView from 'react-native-super-grid';

import { getGalleryList } from './SampleDataStub';
import FooterTabScreen from './FooterTabScreen';

class MenuPage extends Component {

/*
const items = [
  { name: 'photo_01', uri: '../assets/photo_01.jpg' },
  { name: 'photo_02', uri: '../assets/photo_02.jpg' },
  { name: 'photo_03', uri: '../assets/photo_03.jpg' },
  { name: 'photo_04', uri: '../assets/photo_04.jpg' },
  { name: 'photo_05', uri: '../assets/photo_05.jpg' },
  { name: 'photo_06', uri: '../assets/photo_06.jpg' },
];
}
*/
/*
  state = {
    data: [{}, {}, {}, {}, {}, {}]
  };
*/
/*
constructor(props){
  super(props);
  this.state = {
    data: [
      '../assets/photo_01.jpg',
      '../assets/photo_02.jpg',
      '../assets/photo_03.jpg',
      '../assets/photo_04.jpg',
      '../assets/photo_05.jpg',
      '../assets/photo_06.jpg',
    ]
  };
}
}
*/

/*
componentWillMount() {
  this.setState(getGalleryList());
}

state =
    [
      { data: '../assets/photo_01.jpg' },
      { data: '../assets/photo_02.jpg' },
      { data: '../assets/photo_03.jpg' },
      { data: '../assets/photo_04.jpg' },
      { data: '../assets/photo_05.jpg' },
    ];
*/

/* backup for render.return
data={this.state.data}
renderItem={this.renderItem}

*/

  renderItem = () => <View style={styles.tile} />;

  render() {

    const items = [
      { name: 'TURQUOISE', code: '#1abc9c', title:'PageB' },
      { name: 'EMERALD', code: '#2ecc71', title:'PageC' },
      { name: 'PETER RIVER', code: '#3498db', title:'' },
      { name: 'AMETHYST', code: '#9b59b6', title:'' },
      { name: 'WET ASPHALT', code: '#34495e', title:'' },
      { name: 'GREEN SEA', code: '#16a085', title:'' },
      { name: 'NEPHRITIS', code: '#27ae60', title:'' },
      { name: 'BELIZE HOLE', code: '#2980b9', title:'' },
      { name: 'WISTERIA', code: '#8e44ad', title:'' },
      { name: 'MIDNIGHT BLUE', code: '#2c3e50', title:'' },
      { name: 'SUN FLOWER', code: '#f1c40f', title:'' },
      { name: 'CARROT', code: '#e67e22', title:'' },
      { name: 'ALIZARIN', code: '#e74c3c', title:'' },
      { name: 'CLOUDS', code: '#ecf0f1', title:'' },
      { name: 'CONCRETE', code: '#95a5a6', title:'' },
      { name: 'ORANGE', code: '#f39c12', title:'' },
      { name: 'PUMPKIN', code: '#d35400', title:'' },
      { name: 'POMEGRANATE', code: '#c0392b', title:'' },
      { name: 'SILVER', code: '#bdc3c7', title:'' },
      { name: 'ASBESTOS', code: '#7f8c8d', title:'' },
    ];

    return (
      <View style={styles.container}>
        <Carousel
          data={getGalleryList()}
          renderItem={this.renderItem}
          itemWidth={Dimensions.get("window").width * 0.85}
          sliderWidth={Dimensions.get("window").width}
          containerCustomStyle={styles.carousel}
          slideStyle={{ flex: 1 }}
          loop
          autoplay
        />
        <GridView
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={item => (
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <TouchableOpacity onPress={Actions.PageB}>
                <Text style={styles.itemName}>{item.title}</Text>
              </TouchableOpacity>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          )}
        />
      <FooterTabScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 720
  },
  carousel: {
    flex: 1,
    backgroundColor: "red"
  },
  tile: {
    flex: 1,
    width: Dimensions.get("window").width * 0.85,
    backgroundColor: "yellow"
  },
  gridView: {
    marginTop: 25,
    flex: 1,
    marginBottom: 0,
    height: 430,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});


/* backup

// 幅と高さを取得する
const {
  width: DEVICE_WIDTH
} = Dimensions.get('window');

// グリッドの幅調整用の値
const gridWidth = DEVICE_WIDTH / 2 - 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 32,
    color: 'rgb(95, 177, 237)',
  },
});
}

const MenuPage = () => (
  <View style={styles.container}>
    <Text>PageA</Text>
    <TouchableOpacity onPress={Actions.PageB}>
      <Text style={styles.linkText}>Link</Text>
    </TouchableOpacity>
  </View>
);

*/

export default MenuPage;
