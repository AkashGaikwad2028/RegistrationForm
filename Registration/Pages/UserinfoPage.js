import React, {useEffect, useState} from 'react';
import {View,Image} from 'react-native';
import CardList from '../Components/UiComponenets/CardList';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo} from '../Redux/Actions/UserInfoAction';
import {getUserPhotos} from '../Redux/Actions/UserInfoAction';
export default function UserinfoPage() {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state.UserInfopagereducer);
  const reducerDataPics = useSelector(state => state.userInfoPicReducer);
  const [data, setData] = useState([]);
  const [pic, setPic] = useState([]);
  const [sendPics, setSendPics] = useState([]);
  const [dbData, setdbData] = useState([]);

  // console.log("reducerDataPics",reducerDataPics)

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getUserPhotos());
  }, []);

  useEffect(() => {
    setData(reducerData.userInfopage);
  }, [reducerData.userInfopage]);
  // console.log("dataaaaaaaaa=>",data)

  useEffect(() => {
    setPic(reducerDataPics.userPics);
  }, [reducerDataPics.userPics]);
  // console.log("picsData",pic)

  const Pics = pic => {
    // console.log("32pics",pic)
    let a = [pic];
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa37",a)
    let Picsdata = [];
    for (let i of a) {
      console.log("iiiiiiiiiii",i)
      if (i) {
        i.splice(0, 10).map(res => {
          console.log(res.url);

          const datas = {
            id: res.id,
            url: res.url,
          };
          Picsdata.push(datas);
        });
      }
    }
    // console.log("4666666666666666666",Picsdata)
    return setSendPics(Picsdata);
  };
  console.log('dataaaaaa', data);
  console.log('sendpiccccccccc56', sendPics);

  useEffect(() => {
    Pics(pic);
  }, [data]);

  const push = async (sendPics, data) => {
    let Array = [];
    for (let i of data) {
      console.log('i67', i);
      for (let j of sendPics) {
        console.log('jjjjjjjjjjjjj69', j.url);
        console.log('sameeeeeeeeeeee', i.id == j.id);
        if (i.id == j.id) {
          console.log('jurl', j.id, 'i', i.id);
          // newArray.push(i.id,j.id)
          console.log('url:', j);
          Array.push([i, j]);
        }
        console.log('newArrrayyyyyyy', Array);
        setdbData(Array);
      }
    }
  };

  useEffect(() => {
    push(sendPics, data);
  }, [reducerData]);

  // console.log("cccccccccccccsccccccccc",c)
  // console.log("DBDATa---------------",dbData[0])

  return (
    <View>
      <CardList Data={dbData} />
    
    </View>
  );
}

// console.log("daattttttttttttttt",data)
// const a=[data]
// console.log("aaaaaaaaaaaa",a)
// const b=[sendPics]
// console.log("bbbbbbbbbbbbbbbb",b)
//  a.concat(b)
// console.log("cccccccc",c)
// return c
//   let a=[data]
//   let b= [sendPics]
//   let c= a.concat(b)
// //  console.log("ccccccccccccccccccccc",c)
//  setdbData(c)
