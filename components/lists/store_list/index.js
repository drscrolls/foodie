import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import StoreCard from '../../store_card';

const storesList = [
    {
        id: 1,
        name: "Macdonalds",
        backdrop: "https://i.insider.com/62212e77d72a250019740059?width=500",
        logo: "https://cdn.cafeata.com/photos/photo_0x6b909e04178484eb_0xefb3b8da0b6d2d7e_16252820050390627.jpg"
    },
    {
        id: 2,
        name: "Subway",
        backdrop: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/subway-sandwiches-1.jpg?quality=52&strip=1",
        logo: "https://pbs.twimg.com/profile_images/1467714271307915274/-d6qLpOP_400x400.jpg"
    },
    {
        id: 3,
        name: "KFC",
        backdrop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XljCFoDrqypq0yaG93LKoMyC6NEWKqLGXA&usqp=CAU",
        logo: "https://seeklogo.com/images/K/kfc-new-logo-72E6348046-seeklogo.com.png"
    },
    {
        id: 4,
        name: "Burger King",
        backdrop: "https://i.insider.com/5c0990b1d5000c07f77ba114?width=560&format=jpeg",
        logo: "https://payalebarsquare.sg/wp-content/uploads/2019/05/BK-LOGO-01.png"
    },
];

const StoreList = () => {
    console.log("store", storesList);

    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.cat_title}>Popular Restaurants</Text>
                <View style={styles.linkContainer}>
                    <Text style={styles.link}>See More</Text>
                </View>
            </View>

            <FlatList
                data={storesList}
                renderItem={(item) => <StoreCard store={item} />}
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    textContainer: {
        width: "100%",
        flexDirection: "row"
    },
    linkContainer: {
        justifyContent: "center",
    },
    cat_title: {
        fontSize: 14,
        marginBottom: 10,
        marginTop: 25,
        marginHorizontal: 15,
        fontWeight: "600",
        flex: 1
    },
    link: {
        color: "#f27e4f",
        alignSelf: "flex-end",
        textAlign: "right",
        fontSize: 12,
        marginHorizontal: 20,
        fontWeight: 400,
        justifyContent: "center",
    }
})

export default StoreList;
