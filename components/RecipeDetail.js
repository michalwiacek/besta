import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const RecipeDetail = ({ onPress, recipe }) => {
    const { title, ingredients, thumbnail } = recipe;

    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle } = styles;

    return (
        <Card onPress={onPress}>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{ uri: thumbnail }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{ingredients}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
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
        marginRigth: 10
    }
};

export default RecipeDetail;
