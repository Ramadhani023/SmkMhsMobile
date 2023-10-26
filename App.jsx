import {View, Text, Image} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <View
        style={{
          height: 52,
          backgroundColor: '#CA2D2D',
          marginHorizontal: 16,
          borderRadius: 99,
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 16,
        }}>
        <Image
          source={require('./src/assets/images/mhs1_1.png')}
          style={{width: 140, height: 32}}
        />
        <Image
          source={require('./src/assets/images/Vector1.png')}
          style={{width: 20, height: 20}}
        />
      </View>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 12,
          color: '#A4A4A4',
          marginTop: 32,
          marginLeft: 16,
        }}>
        Selamat Datang di
      </Text>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 32,
          fontWeight: 'bold',
          color: '#000000',
          marginTop: 4,
          marginLeft: 16,
        }}>
        Kantin Multistudi
      </Text>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000000',
          marginTop: 32,
          marginLeft: 16,
        }}>
        Menu Makanan
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          padding: 16,
          marginTop: 12,
          justifyContent: 'space-between',
        }}>
        <View style={{borderRadius: 12}}>
          <Image
            source={require('./src/assets/images/Burgir.png')}
            style={{width: 158}}
          />
        </View>
        <View style={{borderRadius: 12}}>
          <Image
            source={require('./src/assets/images/Pizza.png')}
            style={{width: 158}}
          />
        </View>
      </View>
    </View>
  );
};

export default App;