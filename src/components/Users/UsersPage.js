import React, {useState} from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {FetchUsersData} from "../../redux/action_creator/users-action";
import {Divider} from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';
import Loader from "../Include/Loader";


const UsersPage = (props) => {
    const dispatch = useDispatch()
    const [pag,setPag] =useState(null)
    const {users,loading} = useSelector(state => state.users)
    let pages = [1,2,3,4];
    const onPageChanged =async (p) => {
        setPag(p)
       await dispatch(FetchUsersData(p))

    }
    useFocusEffect(
        React.useCallback( () => {
            onPageChanged(1)
            setPag(1)
            return () => null;
        }, [])
    );

  return(loading ?<Loader/>:
      <View style={{flex:1}}>
          <View style={styles.paginate}>
              {pages.map(p => {
                  return <Text style={pag == p?[styles.item,{color:'#f08000'}]:styles.item}
                      onPress={(e) => {
                                   onPageChanged(p);
                               }}>{p}</Text>
              })}

              <AntDesign name="right" size={24} color="black" onPress={()=>onPageChanged(pag+1)}/>
          </View>
          <FlatList showsVerticalScrollIndicator={false}
                    data={users}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity activeOpacity={0.7} style={styles.wrapper}>
                            <View style={styles.container}>
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={ {uri:item.avatar_url}}
                                />
                                <Divider orientation="vertical" width={2} style={styles.divider} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.name}>{item.login}</Text>
                                    <Text style={styles.address}>{item.html_url}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}/>
      </View>
  )
}
const styles = StyleSheet.create({
    wrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius:15,
        borderWidth:0,
        marginVertical:5,
        marginHorizontal:1,
        width: '99%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    container:{
        flexDirection:'row',
        backgroundColor:'#fefefe',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderRadius:15,
        borderWidth:0,
        padding:10,
        width: '100%',


    },
    paginate:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    item:{
        fontSize:20,
        height:25,
        backgroundColor:'#fff',
        margin:5,
        borderWidth:1,
        paddingHorizontal:5,
        borderRadius:20,
        textAlign:'center'
    },
    name:{
        color:'#aa0a1e',
        fontSize: 18
    },
    address:{
        fontSize:16,
        color: '#646464'
    },
    image:{
        width:60,
        height:60
    },
    divider:{
        marginLeft: 10,
        marginRight:10
    },
    textContainer:{
        width:'60%',
        marginBottom:10
    }
})
export default UsersPage;
