import React from 'react';
import {View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen ({}) {
    return (
        <>
            <MainLayout>
                <View>
                    <Text>Florence's To Do List App</Text>
                    <Text>Created by: Florence</Text>
                    <Text>Version:1.0</Text>
                </View>
            </MainLayout>
        </>
    );

}

export default AboutScreen;