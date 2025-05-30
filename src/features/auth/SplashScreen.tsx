
import { splashStyles } from '@unistyles/authStyles';
import React, { FC } from 'react';
import { View, Text, StatusBar, Platform, Image, Alert } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import  Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import CustomText from '@components/global/CustomText';

const SplashScreen:FC = () => {
   const {styles} = useStyles(splashStyles)
  
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS === 'android'}/>
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.logoImage}
      />
      <Animated.View
        style={styles.animatedContainer}
        entering={FadeInDown.delay(500).duration(800)}
      >
         <Image
           source={require('@assets/images/tree.png')}
            style={styles.treeImage}
         />

         <CustomText
           varient='h5'
           style={{textAlign: "center", marginHorizontal: 10}}
           fontFamily='Okra-Medium'
           color='#fff'
         >
             From Kitchen to doorstep, Your cravings, delivered!
         </CustomText>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
