import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import Category from '../../category';
import StoreCategory from '../../store_category';

const store_categories = [
    {
        id: 1,
        name: "Burgers",
        image: "https://www.mcdonalds.com/content/dam/ArabiaGWS/english/nfl/Nutrition/Items/Regular/mcd-beef-burger-uae-new.png"
    },
    {
        id: 2,
        name: "Deserts",
        image: "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/menu/products/mcdonalds-Maltesers-McFlurry.jpg"
    },
    {
        id: 3,
        name: "Beverages",
        image: "https://assets.teenvogue.com/photos/58e666f7958c426c35e424e1/master/pass/mcdonalds-slushies.jpg"
    },
    {
        id: 4,
        name: "Breakfast",
        image: "https://mcdonalds.com.pk/wp-content/uploads/Chicken-Muffin-2-600x600.png"
    },
    {
        id: 5,
        name: "Combo Meal",
        image: "https://mcdonalds.com.pk/wp-content/uploads/09-McChicken-600x600.png"
    },
    {
        id: 6,
        name: "Fries",
        image: "https://www.mcdonalds.com/content/dam/uk/nfl/nutrition/nfl-product/product/related/mcdonalds-Fries-Medium.jpg"
    },
];

const StoreCategoryList = () => {
    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.cat_title}>Choose Category</Text>
            </View>

            <FlatList
                data={store_categories}
                renderItem={(item) => <StoreCategory category={item} />}
                keyExtractor={(item) => item.id}
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
        marginTop: 15,
        marginHorizontal: 15,
        fontWeight: "600",
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

export default StoreCategoryList;
