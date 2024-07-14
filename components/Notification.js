import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Notification = ({ message, onClose }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 16,
    },
    message: {
        fontSize: 16,
        marginBottom: 8,
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 8,
    },
    closeButtonText: {
        color: '#007AFF',
        fontSize: 14,
    },
});

export default Notification;