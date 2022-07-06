import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { SocialIcon } from 'react-native-elements';




const LocationBottomSheet = ({toggleSheet, isSheetShowing}) => {
    return (
        <View>
            <BottomSheet
                    visible={isSheetShowing}
                    //setting the visibility state of the bottom shee
                    onBackButtonPress={() => toggleSheet()}
                    //Toggling the visibility state on the click of the back botton
                    onBackdropPress={() => toggleSheet()}
                //Toggling the visibility state on the clicking out side of the sheet
                >
                    {/*Bottom Sheet inner View*/}
                    <View style={styles.bottomNavigationView}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    padding: 20,
                                    fontSize: 20,
                                }}>
                                Share Using
                            </Text>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <SocialIcon
                                    //Social Icon using react-native-elements
                                    type="twitter"
                                    //Type of Social Icon
                                    onPress={() => {
                                        //Action to perform on press of Social Icon
                                        toggleSheet();
                                        alert('twitter');
                                    }}
                                />
                                <SocialIcon
                                    type="gitlab"
                                    onPress={() => {
                                        toggleSheet();
                                        alert('gitlab');
                                    }}
                                />
                                <SocialIcon
                                    type="medium"
                                    onPress={() => {
                                        toggleSheet();
                                        alert('medium');
                                    }}
                                />
                                <SocialIcon
                                    type="facebook"
                                    onPress={() => {
                                        toggleSheet();
                                        alert('facebook');
                                    }}
                                />
                                <SocialIcon
                                    type="instagram"
                                    onPress={() => {
                                        toggleSheet();
                                        alert('instagram');
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <SocialIcon
                                    type="facebook"
                                    onPress={() => {
                                        toggleSheet();
                                        alert('facebook');
                                    }}
                                />
                                <SocialIcon
                                    type="instagram"
                                    onPress={() => {
                                        toggleSheet();
                                        alert('instagram');
                                    }}
                                />
                                <SocialIcon
                                    type="gitlab"
                                    onPress={() => {
                                        toggleSheet();
                                        alert('gitlab');
                                    }}
                                />
                                <SocialIcon
                                    type="twitter"
                                    onPress={() => {
                                        toggleSheet();
                                        alert('twitter');
                                    }}
                                />
                                <SocialIcon
                                    type="medium"
                                    onPress={() => {
                                        toggleSheet();
                                        alert('medium');
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0F7FA',
    },
    bottomNavigationView: {
      backgroundColor: '#fff',
      width: '100%',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

export default LocationBottomSheet;
