import {Stylesheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemedView} from "../../components/ThemedView";
import {ThemedText} from "../../components/ThemedText";

export default function TabLastScreen() {
    return (
        <SafeAreaView>
            <ThemedText type="title">My Schedule</ThemedText>
        </SafeAreaView>
    )
}