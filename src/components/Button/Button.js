'use strict';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = ({ onPress }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                Click me!!
            </Text>
        </TouchableOpacity>
    );
};

export default Button