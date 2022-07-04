import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import BigStoreCard from '../../big_store_card';
import StoreCard from '../../store_card';

const storesList = [
    {
        id: 1,
        name: "Macdonalds",
        location: "Dansoman",
        delivery_time: 5,
        backdrop: "https://i.insider.com/62212e77d72a250019740059?width=500",
        logo: "https://cdn.cafeata.com/photos/photo_0x6b909e04178484eb_0xefb3b8da0b6d2d7e_16252820050390627.jpg"
    },
    {
        id: 2,
        name: "Subway",
        location: "Lapaz",
        delivery_time: 25,
        backdrop: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/subway-sandwiches-1.jpg?quality=52&strip=1",
        logo: "https://pbs.twimg.com/profile_images/1467714271307915274/-d6qLpOP_400x400.jpg"
    },
    {
        id: 3,
        name: "KFC",
        location: "Circle",
        delivery_time: 20,
        backdrop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XljCFoDrqypq0yaG93LKoMyC6NEWKqLGXA&usqp=CAU",
        logo: "https://seeklogo.com/images/K/kfc-new-logo-72E6348046-seeklogo.com.png"
    },
    {
        id: 4,
        name: "Burger King",
        location: "Weija",
        delivery_time: 15,
        backdrop: "https://i.insider.com/5c0990b1d5000c07f77ba114?width=560&format=jpeg",
        logo: "https://payalebarsquare.sg/wp-content/uploads/2019/05/BK-LOGO-01.png"
    },{
        id: 5,
        name: "Starbucks",
        location: "East Legon",
        delivery_time: 35,
        backdrop: "https://media-cdn.tripadvisor.com/media/photo-s/04/4c/1c/f9/starbucks-aqua-city-odaiba.jpg",
        logo: "https://techthirsty.com/wp-content/uploads/2012/08/starbucks-coffee-logo.gif"
    },
    {
        id: 6,
        name: "Dominos Pizza",
        location: "Lapaz",
        delivery_time: 15,
        backdrop: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_336,q_75,w_510/https://assets.simpleviewinc.com/simpleview/image/upload/crm/reddirt/Dominos0-ce58e6185056b3a_ce58e83b-5056-b3a8-49690f92f12e9659.jpg",
        logo: "https://i.pinimg.com/originals/09/50/3f/09503f43a3206c155821fc0937885c5e.png"
    },
    {
        id: 7,
        name: "KFC",
        location: "Sakaman",
        delivery_time: 30,
        backdrop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XljCFoDrqypq0yaG93LKoMyC6NEWKqLGXA&usqp=CAU",
        logo: "https://seeklogo.com/images/K/kfc-new-logo-72E6348046-seeklogo.com.png"
    },
    {
        id: 8,
        name: "Burger King",
        location: "West Hills",
        delivery_time: 45,
        backdrop: "https://i.insider.com/5c0990b1d5000c07f77ba114?width=560&format=jpeg",
        logo: "https://payalebarsquare.sg/wp-content/uploads/2019/05/BK-LOGO-01.png"
    },{
        id: 1,
        name: "Macdonalds",
        location: "Kasoa",
        delivery_time: 125,
        backdrop: "https://i.insider.com/62212e77d72a250019740059?width=500",
        logo: "https://cdn.cafeata.com/photos/photo_0x6b909e04178484eb_0xefb3b8da0b6d2d7e_16252820050390627.jpg"
    },
    {
        id: 9,
        name: "Subway",
        location: "Lapaz",
        delivery_time: 25,
        backdrop: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/subway-sandwiches-1.jpg?quality=52&strip=1",
        logo: "https://pbs.twimg.com/profile_images/1467714271307915274/-d6qLpOP_400x400.jpg"
    },
];

const AllStoresList = () => {
    // console.log("store", storesList);

    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.cat_title}>Restaurants</Text>
            </View>
           
            <View style={styles.listContainer}>
                <FlatList
                    data={storesList}
                    style={styles.list}
                    renderItem={(item) => <BigStoreCard store={item} />}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
           

        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: "100%",
    },
    textContainer: {
        width: "100%",
        flexDirection: "row"
    },
    listContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    cat_title: {
        fontSize: 14,
        marginBottom: 10,
        marginTop: 25,
        marginHorizontal: 15,
        fontWeight: "700",
        flex: 1
    },
    link: {
        color: "#f27e4f",
        alignSelf: "flex-end",
        textAlign: "right",
        fontSize: 12,
        marginHorizontal: 20,
        fontWeight: "400",
        justifyContent: "center",
    }
})

export default AllStoresList;
