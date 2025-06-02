import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC} from 'react';
import {useStyles} from 'react-native-unistyles';
import {phoneStyles} from '@unistyles/phoneStyles';
import Icon from '@components/global/Icon';



const SocialLogin: FC = () => {
  const {styles} = useStyles(phoneStyles);
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('@assets/icons/google.png')}
          style={styles.gimg}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name="logo-apple"
          iconFamily="Ionicons"
          color="black"
          size={18}></Icon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name="ellipsis-horizontal-sharp"
          iconFamily="Ionicons"
          color="#222"
          size={18}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;
