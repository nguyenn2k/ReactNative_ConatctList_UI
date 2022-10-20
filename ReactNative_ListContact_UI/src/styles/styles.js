import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f6f6f6'
    },
    header:{
        //Mặc định là Flex:
        //Chiều
        flexDirection:'row',
        //Màu nền:
        backgroundColor:'white',
        //Trục chính (Ngang)
        justifyContent:'space-between',
        //bên phải và bên trái có padding:
        paddingLeft:20,
        paddingRight:20,
        //Platform:
        height: Platform.OS =='ios' ? 100 : 56,
        //
        paddingTop: Platform.OS =='ios' ? 64 : 0,
        //Canh giữa theo chiều dọc:
        alignItems:'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    header__icon:{
        width:24,
        height:24,
    },
    header__title:{
        fontSize:16,
        fontWeight:'500'
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:16,
        marginRight:16,
        marginTop:16,
    },
    item__body:{
        marginLeft:16,
    },
    item__body__title:{
        fontSize:16,
        fontWeight: '500',
    },
    item__body__desc:{
        fontSize:14,
        color:'#CCC'
    },
    item__img:{
        height:56,
        width:56,
        borderRadius:28,
    }
})