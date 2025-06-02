import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MateralCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface IconsProps {
   color? : string;
   name: string;
   size: number;
   iconFamily: 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons';
}

const Icon:FC<IconsProps> = ({color, size, name, iconFamily}) => {
  return (
    <>
     {iconFamily === 'Ionicons' && <Ionicons name={name} size={size} color={color} />}
     {iconFamily === 'MaterialIcons' && <MaterialIcons name={name} size={size} color={color}></MaterialIcons>}
     {iconFamily === 'MaterialCommunityIcons' && <MateralCommunityIcons name={name} size={size} color={color}></MateralCommunityIcons>}
    </>
  )
}

export default Icon