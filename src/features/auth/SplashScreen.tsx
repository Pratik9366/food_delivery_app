
import { splashStyles } from '@unistyles/authStyles';
import React, { FC, useEffect } from 'react';
import { View, Text, StatusBar, Platform, Image, Alert } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import  Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import CustomText from '@components/global/CustomText';
import { resetAndNavigate } from '@utils/NavigationUtils';
import LoginScreen from './LoginScreen';

const SplashScreen:FC = () => {
   const {styles} = useStyles(splashStyles)

   useEffect(()=>{
      const timeoutId = setTimeout(()=> {
         resetAndNavigate('LoginScreen')
      }, 3000)

      return ()=> clearTimeout(timeoutId)
   },[])
  
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
