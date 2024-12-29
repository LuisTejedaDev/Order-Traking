import {ScrollView, View} from "react-native"
import {useEffect, useState} from "react"
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated"
import ProgressStep from "./ProgressStep"

let itemSizes = []

export default ({data}) => {

    const progress = useSharedValue(0)

    const [completed, setCompleted] = useState(false)
    const [progressBarHeight, setProgressBarHeight] = useState(0)

    const handleLayout = ({nativeEvent: {layout: {height}}}) => setProgressBarHeight(height)

    useEffect(() => {
        if(completed) progress.value = data.filter(x => x.completed).length
    }, [completed])

    const animatedProgress = useAnimatedStyle(() => ({
        height: withTiming(itemSizes.reduce((total, item) => item.id <= data.filter(x => x.completed).length ? (total + item.height) : total, 0) - (progress.value === data.length ? -25 : 25), {duration: 3500})
    }))

    return(
        <ScrollView
            style={{height: 'auto', alignSelf: 'stretch'}}
            contentContainerStyle={{padding: 20}}
        >
            <View onLayout={handleLayout} style={{flexDirection: 'row'}}>
                
                <View style={{height: progressBarHeight, width: 16, borderRadius: 50, backgroundColor: '#dadada', overflow: 'hidden'}}>
                    {
                        completed
                        ?
                            <Animated.View style={[{backgroundColor: '#3498db', width: '100%'}, animatedProgress]} />
                        :
                            null 
                    }
                </View>

                <View style={{flex: 1}}>
                    {
                        data.map((x,i,a) => {
                            return(
                                <View
                                    key={x.id}
                                    onLayout={({nativeEvent: {layout: {height}}}) => {
                                        itemSizes = [
                                            ...itemSizes,
                                            {id: x.id, height: height}
                                        ]
                                        if(itemSizes.length === a.length) setCompleted(true)
                                    }}
                                >
                                    <View style={{width: 7, height: 7, borderRadius: 10, backgroundColor: '#fff', position: 'absolute', left: -11, top: 14}}/>
                                    <ProgressStep active={a.filter(x => x.completed).length} {...x}/>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}