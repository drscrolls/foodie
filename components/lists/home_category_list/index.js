import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Category from '../../category';

const categories = [
    {
        id: 1,
        image: "https://media.istockphoto.com/photos/background-healthy-food-fresh-fruits-vegetables-fish-berries-and-picture-id1089759056?b=1&k=20&m=1089759056&s=170667a&w=0&h=qh3iggw2fOArFYqTZaCJeT3JgMMRhMTtsFdWltUWExU="
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLFB-e2exHRKjzCVVDBGrdr7_emsimKqYFw&usqp=CAU"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Y5fME0EUu4tB661_BEf5G0KSU8bIxweJGw&usqp=CAU"
    },
    {
        id: 4,
        image: "https://media.istockphoto.com/photos/pasta-salad-bowl-with-broccoli-tomato-onion-olives-corn-salad-and-picture-id1352898440?b=1&k=20&m=1352898440&s=170667a&w=0&h=8phYjp9eG8crpa3x_wYZATJjadVmvfcS2dEVMLCvXQs="
    }
];

const HomeCategoryList = () => {
    return (
        <View>
            <Text style={styles.cat_title}>Popular Categories</Text>
            <FlatList
                data={categories}
                />

            <FlatList
                data={categories}
                renderItem={(index, item) => <Category cat={item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
                
        </View>
    );
}

const styles = StyleSheet.create({
    
    cat_title: {
        fontSize: 14,
        marginBottom: 5,
        marginTop: 15,
        marginHorizontal: 15,
        fontWeight: "600"
    }
})

export default HomeCategoryList;
