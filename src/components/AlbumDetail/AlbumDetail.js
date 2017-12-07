'use strict';

import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from '../Card/Card';
import CardSection from '../CardSection/CardSection';
import styles from './style';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;
    const { thumbnailStyle, headerContentStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View >
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    )
};

export default AlbumDetail