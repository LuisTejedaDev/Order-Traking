import {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {ProgressBar} from './components'

export default () => {
    
    const [data, setData] = useState([
        {
            "id": 1,
            "description": "PREPARANDO",
            "location": "Guadalajara, Jalisco, Mx",
            "details": "La guía fue creada, el paquete está siendo preparado para su envío",
            "date": "14/12/24 09:00",
            "completed": true,
            "hide": false
        },
        {
            "id": 2,
            "description": "TENEMOS TU PAQUETE",
            "location": "Tlaquepaque, Jalisco, Mx",
            "details": "El paquete está listo para su distribución",
            "date": "14/12/24 11:30",
            "completed": true,
            "hide": false
        },
        {
            "id": 3,
            "description": "EN CAMINO",
            "location": "Centro de Distribución FedEx, Guadalajara",
            "details": "El paquete ha salido del centro de distribución y se dirige hacia la zona de entrega",
            "date": "14/12/24 13:00",
            "completed": true,
            "hide": false
        },
        {
            "id": 4,
            "description": "EN REPARTO",
            "location": "Zona Centro, Guadalajara, Jalisco",
            "details": "El repartidor ha comenzado el recorrido en la zona centro de la ciudad",
            "date": "14/12/24 14:30",
            "completed": true,
            "hide": false
        },
        {
            "id": 5,
            "description": "TU PAQUETE SE HA ENTREGADO",
            "location": "Colonia Providencia, Guadalajara, Jalisco",
            "details": "La entrega está programada para hoy",
            "date": "El 14/12/24 antes de las 18:00",
            "completed": true,
            "hide": false
        }
    ])
    
    return(
        <View style={styles.container}>
            <ProgressBar data={data}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})