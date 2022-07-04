import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import Category from '../../category';
import SquareFood from '../../food/square_layout_food';

const foods = [
    {
        id: 1,
        name: "Waakye, Fish, Egg, Sausage and Beef",
        price: 20,
        image: "https://gingerandseasalt.com/wp-content/uploads/2021/08/complete-waakye-dish.jpg"
    },
    {
        id: 2,
        name: "Banku and Okro, Salmon, Crab",
        price: 15,
        image: "https://myrecipejoint.com/wp-content/uploads/2020/12/126054251_364930781267593_715183987144198136_n.jpg"
    },
    {
        id: 3,
        name: "Fufu, Light Soup and Goat Meat",
        price: 25,
        image: "https://cdn.modernghana.com/images/content/923201784830_fufu1.jpg"
    },
    {
        id: 4,
        name: "Fried yam and Grilled Chicken",
        price: 20,
        image: "https://i0.wp.com/u4chop.com/wp-content/uploads/2021/12/oven-baked-barbecued-chicken-7.jpg?fit=885%2C1049&ssl=1"
    },
    
];

const HomeFoodGridList = () => {
    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.cat_title}>Recommended for you</Text>
                <TouchableOpacity style={styles.linkContainer}>
                    <Text style={styles.link}>See More</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={foods}
                renderItem={(item) => <SquareFood food={item} />}
                keyExtractor={(item) => item.id}
                numColumns={2}                
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
        marginTop: 15,
        marginHorizontal: 15,
        fontWeight: "700",
        flex: 1
    },
    link : {
        color: "#f27e4f",
        alignSelf: "flex-end",
        textAlign: "right",
        fontSize: 12,
        marginHorizontal: 20,
        fontWeight: "400",
        justifyContent: "center",
    }
})

export default HomeFoodGridList;
