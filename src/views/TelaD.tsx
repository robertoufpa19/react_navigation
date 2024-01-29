import React from 'react'
import TextoCentral from '../components/TextoCentral'
import {View , Button} from 'react-native'

export default props =>{
     
return (

    <View style = {{flex: 1}}>
       <View style = {{flexDirection: 'row', justifyContent:'space-betwee'}}>
            <Button
              title= 'Abrir'
              onPress={() => {

                 props.navigation.openDrawer()

                 //fecha em 3 segundos
                 setTimeout(() => {
                    props.navigation.closeDrawer()
                 }, 3000);
                

              }}
            />

       </View>


        
         <View style = {{flex: 1}}>

          <TextoCentral corFundo='#e47df5' corTexto = '#000'>
            Tela D
          </TextoCentral>
    
         </View>
    

    </View>


)

    
}