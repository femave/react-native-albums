'use strict';

import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from '../Card/Card';
import CardSection from '../CardSection/CardSection';
import Button from '../Button/Button'
import styles from './style';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle, 
        headetTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headetTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => console.log(title)}/>
            </CardSection>
        </Card>
    )
};

export default AlbumDetail