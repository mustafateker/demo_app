import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    Image,
} from 'react-native';

const CostCalculatorScreen = () => {
    const [modules, setModules] = useState([
        { id: '1', name: 'Su Pompası', price: 500, quantity: 0, icon: "💧" },
        { id: '2', name: 'LED Aydınlatma', price: 300, quantity: 0, icon: "💡" },
        { id: '3', name: 'Sulama Sistemi', price: 800, quantity: 0, icon: "🚿" },
        { id: '4', name: 'Modül Çerçevesi', price: 1000, quantity: 0, icon: "🛠️" },
        { id: '5', name: 'Sensör Paketi', price: 600, quantity: 0, icon: "📡" },
    ]);

    const [totalCost, setTotalCost] = useState(0);

    const handleQuantityChange = (value, module) => {
        const quantity = parseInt(value) || 0; // Kullanıcı girişini sayıya çeviriyoruz
        const updatedModules = modules.map((item) =>
            item.id === module.id ? { ...item, quantity } : item
        );
        setModules(updatedModules);

        // Toplam maliyeti yeniden hesaplama
        const newTotalCost = updatedModules.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
        setTotalCost(newTotalCost);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={require('../assets/app_head_bar.png')} // Dosya yolunu buraya ekleyin
                    style={styles.headerImage}
                    resizeMode="cover"
                />
                <Text style={styles.title}>Maliyet Hesaplama</Text>
            </View>

            {/* Modules List */}
            <FlatList
                data={modules}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.moduleCard}>
                        <Text style={styles.icon}>{item.icon}</Text>
                        <View style={styles.moduleInfo}>
                            <Text style={styles.moduleName}>{item.name}</Text>
                            <Text style={styles.modulePrice}>₺{item.price} / adet</Text>
                        </View>
                        <View style={styles.quantityInputContainer}>
                            <TextInput
                                style={styles.quantityInput}
                                keyboardType="numeric"
                                placeholder="Adet"
                                value={item.quantity > 0 ? item.quantity.toString() : ''}
                                onChangeText={(value) => handleQuantityChange(value, item)}
                            />
                        </View>
                    </View>
                )}
            />

            {/* Total Cost */}
            <View style={styles.totalCostContainer}>
                <Text style={styles.totalCostText}>
                    Toplam Maliyet: <Text style={styles.cost}>₺{totalCost}</Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F5F5' },
    header: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImage: {
        width: '100%',
        height: 100, // Header yüksekliğini ayarlayın
    },
    title: {
        position: 'absolute',
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    },
    list: { padding: 10 },
    moduleCard: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: { fontSize: 30, marginRight: 10, color: '#4CAF50' },
    moduleInfo: { flex: 1 },
    moduleName: { fontSize: 16, fontWeight: 'bold', color: '#4CAF50' },
    modulePrice: { fontSize: 14, color: '#757575' },
    quantityInputContainer: {
        width: 60,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
    },
    quantityInput: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
    },
    totalCostContainer: {
        padding: 20,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#CCC',
        alignItems: 'center',
    },
    totalCostText: { fontSize: 18, fontWeight: 'bold', color: '#4CAF50' },
    cost: { color: '#FF5722', fontSize: 20 },
});

export default CostCalculatorScreen;
