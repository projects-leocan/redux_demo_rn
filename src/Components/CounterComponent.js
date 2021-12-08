import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { connect } from 'react-redux'; // for connect component with redux

import { incrementCounter, decrementCounter, multiplyCounter } from '../Actions/CounterAction'; // action pass on function call

class CounterApp extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                {/* pass increment counter function to reducer */}
                <Button
                    onPress={this.props.increment}
                    title="Increase Count"
                    color="#841584"
                    accessibilityLabel="Increase Count"
                />

                {/* render counter value from reducer */}
                <Text>{this.props.count}</Text>

                {/* pass decrement counter function to reducer */}
                <Button
                    onPress={this.props.decrement}
                    title="Decrease Count"
                    color="#841584"
                    accessibilityLabel="Decrease Count"
                />

                <Button
                    onPress={this.props.multiply}
                    title="Multiply Count"
                    color="#841584"
                    accessibilityLabel="Decrease Count"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
    multiply: () => dispatch(multiplyCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);