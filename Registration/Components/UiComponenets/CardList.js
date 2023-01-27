import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function CardList({Data}) {
  console.log('Datatatatatt', Data);
  const renderItem = ({item}) => {
    console.log('iemmmmmmmmmmmmmmm1', item);
    // if(item.picsdaata){
    //   // console.log("kjkkkkkj",item.picsdaata)
    // }
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.MaincardContainer}>
          <View style={styles.ImageCardContainer}>
            {/* <Image
        style={styles.tinyLogo}
        source={{
          uri:{item.url}
        }}
      /> */}
          </View>
          <View style={styles.cardHeroConainer}>
            <View style={styles.CardDescription}>
              <Text style={styles.Text_Header}>Name:</Text>
              {/* <Text style={styles.Text}>{item.name}</Text> */}
            </View>
            <View style={styles.CardDescription}>
              <Text style={styles.Text_Header}>Email:</Text>
              {/* <Text style={styles.Text}>{item.email}</Text> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList
        data={Data[0]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MaincardContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 50,
    borderRadius: 5,
    shadowColor: 'yellow',
    shadowOffset: {width: -20, height: 4},
    shadowOpacity: 100,
    shadowRadius: 20,
    elevation: 8,
    width: '90%',
    marginHorizontal: 20,
  },

  ImageCardContainer: {
    backgroundColor: 'yellow',
    width: '30%',
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  Text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'thin',
  },
  Text_Header: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'thin',
  },
  cardHeroConainer: {
    flex: 1,
  },
  CardDescription: {
    flex: 1,
    // overflow:"hidden",
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});

// return (
//   <View style={styles.MaincardContainer}>
//    <View style={styles.ImageCardContainer}>
//        <Text>ThumBNailUrl</Text>
//    </View>
//    <View>
//      <View style={styles.CardDescription}>
//        <Text style={styles.Text}>Name :-</Text>
//        <Text style={styles.Text}>Tony Stark</Text>
//      </View>
//      <View style={styles.CardDescription}>
//        <Text style={styles.Text}>Name :-</Text>
//        <Text style={styles.Text}>Tony Stark</Text>
//      </View>
//      <View style={styles.CardDescription}>
//        <Text style={styles.Text}>Name :-</Text>
//        <Text style={styles.Text}>Tony Stark</Text>
//      </View>
//      <View style={styles.CardDescription}>
//        <Text style={styles.Text}>Name :-</Text>
//        <Text style={styles.Text}>Tony Stark</Text>
//      </View>
//      </View>
//   </View>
//  )
