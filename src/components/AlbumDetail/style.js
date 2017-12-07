'use strict';

import React from 'react';
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headetTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default Styles