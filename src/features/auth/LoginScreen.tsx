import {View, StatusBar, Platform, Image, TouchableOpacity, ActivityIndicator, Animated} from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import {useStyles} from 'react-native-unistyles';
import {loginStyles} from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';
import { resetAndNavigate } from '@utils/NavigationUtils';
import SocialLogin from '@components/ui/SocialLogin';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';

const LoginScreen:FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current
  const keyboardOffsetHeight =  useKeyboardOffsetHeight()
  const {styles} = useStyles(loginStyles);
  const [Phone, setPhone] = useState('')
  const [Loading, setLoading] = useState(false)
  

  useEffect(()=>{
    if(keyboardOffsetHeight == 0){
      Animated.timing(animatedValue,{
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start()
    }else {
      Animated.timing(animatedValue,{
        toValue: -keyboardOffsetHeight * 0.25,
        duration: 500,
        useNativeDriver: true
      }).start()
    }
  }, [keyboardOffsetHeight])


  useEffect(()=>{
    changeNavigationBarColor('transparent', true); 
  },[])

  
  const handleLoading = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetAndNavigate('UserBottomTab');
    }, 2000);
  };


  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS === 'android'} />
      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />

      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode='on-drag'
        style={{transform: [{translateY: animatedValue}]}}
        contentContainerStyle={styles.bottomContainer}
        >
          <CustomText fontFamily='Okra-Bold' varient='h2' style={styles.title}>
            Indias #1 Food Delivery and Dining App
          </CustomText>

          <BreakerText text='Log in or Sign up'/>

          <PhoneInput
             value={Phone}
             onChangeText={setPhone}
             onFocus={() => {}}
             onBlur={() => {}} 
          />

          <TouchableOpacity
           style={styles.buttonContainer}
           disabled={Loading}
           onPress={handleLoading}
           activeOpacity={0.8}
          >
            {Loading ? (
              <ActivityIndicator size='small' color='#fff'/>
            ): (
              <CustomText color='#fff' fontFamily='Okra-Medium' varient='h5'>Continue</CustomText>
            )}
          </TouchableOpacity>

          <BreakerText text='or'/>
           
          <SocialLogin/>
           
        </Animated.ScrollView>

        <View style={styles.footer}>
          <CustomText>By continuing, you agree to our</CustomText>
          <View style={styles.footerTextContainer}>
             <CustomText style={styles.footerText}>Terms of Service</CustomText>
             <CustomText style={styles.footerText}>Privacy Policy</CustomText>
             <CustomText style={styles.footerText}>Content Polices</CustomText>
          </View>
        </View>
    </View>
  );
};

export default LoginScreen;
