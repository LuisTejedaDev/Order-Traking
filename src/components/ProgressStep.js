import {useEffect} from "react"
import {Text, View} from "react-native"
import Animated, {Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated"

export default ({id, description, location, details, date, active}) => {
    
    const translateY = useSharedValue(-50)

    useEffect(() => {
        handleAnimated()
    }, [])

    const handleAnimated = () => {
        translateY.value = withTiming(0, {duration: id * 250})
    }

    const animatedStyles = useAnimatedStyle(() => ({
        opacity: interpolate(
            translateY.value,
            [-50, 0],
            [0, 1],
            Extrapolation.CLAMP
        ),
        transform: [
            {
                translateY: translateY.value
            }
        ]
    }))

    return(
        <Animated.View style={[{height: 'auto', alignSelf: 'stretch', marginTop: active === 1 ? 8 : 0, justifyContent: 'center', alignItems: 'center'}, animatedStyles]}>
            {/* este condicionarlo a solo todos menos el ultimo */}
            <View style={{height: 'auto', alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start'}}>
                <View style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: active === id ? '#f5f5f5' : 'transparent', borderTopEndRadius: 10, borderBottomEndRadius: 10}}>
                    <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 3}}>{description}</Text>
                    <Text style={{fontSize: 13, fontWeight:'300', color: '#000', marginBottom: 3}}>{location}</Text>
                    {
                        details && <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight:'400', color: '#888', marginBottom: 5, marginTop: 10}}>{details}</Text>
                    }
                    <Text style={{fontSize: 13, fontWeight:'400', color: '#000'}}>{date}</Text>
                </View>
            </View>
        </Animated.View>
    )
}