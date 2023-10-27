import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          height: 52,
          backgroundColor: '#ED3636',
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
          source={require('../assets/images/mhs1_1.png')}
          style={{width: 140, height: 32}}
        />
        <Image
          source={require('../assets/images/Vector1.png')}
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
          marginTop: 2,
          justifyContent: 'space-between',
        }}>
        <View style={{borderRadius: 12}}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image
              source={require('../assets/images/Burgir.png')}
              style={{width: 190, borderRadius: 12, height: 159}}
            />
          </TouchableOpacity>
        </View>
        <View style={{borderRadius: 12}}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image
              source={require('../assets/images/Pizza.png')}
              style={{width: 190, borderRadius: 12, height: 159}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0,
          paddingRight: 16,
          paddingLeft: 16,
        }}>
          <Text
            style={{
              fontFamily: 'DM Sans',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Beef Burger
          </Text>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
            marginLeft: 106,
          }}>
          Pizza
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text 
        style={{
            fontSize: 14, 
            fontWeight: 'bold', 
            color: '#E73232', 
            marginLeft : 16,
            }}>
          Rp 17.000
        </Text>
        <Text 
        style={{
            fontSize: 14, 
            fontWeight: 'bold', 
            color: '#E73232', 
            marginLeft : 129,
            }}>
          Rp 23.000
        </Text>
      </View>

      <Text
      style=
      {{
        marginTop : 56,
        fontSize : 16,
        fontWeight : 'bold',
        color : '#000000',
        marginHorizontal : 16,
      }}>
        Menu Minuman
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          padding: 16,
          marginTop: 0,
          justifyContent: 'space-between',
        }}>
        <View style={{borderRadius: 12}}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image
              source={require('../assets/images/Lemont2.png')}
              style={{width: 190, borderRadius: 12, height: 159}}
            />
          </TouchableOpacity>
        </View>
        <View style={{borderRadius: 12}}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image
            source={require('../assets/images/Softd.png')}
            style={{width: 190, borderRadius: 12, height: 159}}
          />
          </TouchableOpacity>
          
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0,
          paddingRight: 16,
          paddingLeft: 16,
        }}>
          <Text
            style={{
              fontFamily: 'DM Sans',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Lemon Tea
          </Text>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
            marginLeft: 112,
          }}>
          Soft Drink
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text 
        style={{
            fontSize: 14, 
            fontWeight: 'bold', 
            color: '#E73232', 
            marginLeft : 16,
            }}>
          Rp 5.000
        </Text>
        <Text 
        style={{
            fontSize: 14, 
            fontWeight: 'bold', 
            color: '#E73232', 
            marginLeft : 136,
            }}>
          Rp 6.000
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
