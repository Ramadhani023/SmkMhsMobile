import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';

const Detail = () => {
  return (
    <View>
      <View>
        <View>
          <Image
            source={require('../assets/images/Back2.png')}
            style={{
              marginTop: 20,
              width: 111,
              height: 40,
              marginLeft: 49,
            }}
          />
        </View>
        <Image
          source={require('../assets/images/Lemont2.png')}
          style={{
            alignSelf: 'center',
            width: 328,
            height: 280,
            marginTop: 40,
            marginBottom: 12,
            borderRadius: 6,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0,
          paddingRight: 16,
          paddingLeft: 49,
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
            color: '#E73232',
            marginLeft: 163,
          }}>
          Rp 5.000
        </Text>
      </View>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 'regular',
          color: '#656565',
          paddingLeft: 49,
          paddingRight: 49,
          marginTop: 12,
        }}>
        Nikmati teh lemon kami — perpaduan sempurna antara daun teh yang segar
        dan aroma menyegarkan lemon. Setiap tegukan adalah kenikmatan citrus
        yang menyegarkan!
      </Text>
      <Image
        source={require('../assets/images/Line.png')}
        style={{
          alignSelf: 'center',
          marginTop: 16,
          marginBottom: 12,
          borderRadius: 6,
        }}
      />
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 16,
          fontWeight: 'regular',
          color: '#000000',
          paddingLeft: 49,
          marginTop: 20,
        }}>
        Masukkan Jumlah Pesanan
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}></View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            height: 52,
            marginHorizontal: 49,
            borderRadius: 6,
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 16,
          }}></TextInput>
      </View>
      
      <View
        style={{
          height: 52,
          backgroundColor: '#ED3636',
          marginHorizontal: 49,
          borderRadius: 12,
          marginTop: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 16,
        }}>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 68,
          }}>
          Konfirmasi Pemesanan
        </Text>
      </View>
    </View>
  );
};

export default Detail;
