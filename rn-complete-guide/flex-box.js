import React from 'react'
import { View, Text } from 'react-native'

const FlexBox = () => {
    return (
        <View style={{ padding: 50, flexDirection: 'row', width: '80%', height: 300, justifyContent: 'space-between', alignItems: 'stretch' }}>
            <View
                style={{
                    backgroundColor: 'red',
                    // width: 100,
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }}
            >
                <Text>1</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'blue',
                    // width: 100,
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 2
                }}
            >
                <Text>2</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'green',
                    // width: 100,
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text>3</Text>
            </View>
        </View>
    )
}

export default FlexBox