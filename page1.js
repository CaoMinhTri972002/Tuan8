import { useState, useEffect } from 'react'
import { View,StyleSheet, Text, StatusBar, SafeAreaView, ScrollView, Pressable, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'

export default function GioHang({navigation}) {
     const [data,setData] = useState([]);
     const [error,setError]= useState(null);

     const ApiDATA = async()=>{
       try{
        const response= await fetch('https://65042ff8c8869921ae24a8f8.mockapi.io/demo1');
        if(!response.ok){
          throw new Error('Loi khi nhap lieu tu API');
        }
 const data = await response.json();
setData(data);
      }catch(err){
        setError(err);
      }
     };
      useEffect(()=>{
    ApiDATA();
      },[]);


      const [searchDonut, setSearchDonut] = useState('');
      const [dataSearchDonut, setDataSearchDonut] = useState(data);
      useEffect(() => {
          const filteredData = data.filter(item => item.name.toLowerCase().includes(searchDonut.toLowerCase()));
          setDataSearchDonut(filteredData);
      }, [searchDonut, data]);

      const [selectedTad, setSelectedTab] = useState('Donut');
      const handleSelectedTab = (tabName) => {
          setSelectedTab(tabName);
          setSearchDonut(tabName);
      }


const renderItem =({item})=>(
<View style={{width:'100%', height:120,flexDirection:'row',backgroundColor:'white'}}>
<Pressable style={{width:'100%',justifyContent:'center',alignItems:'flex-start',flexDirection:'row',backgroundColor:'#F4DDDD',margin:5,borderRadius:10}}
onPress={()=>{
}}>
  <View>
     <Image source={{uri:item.image}}
       style={{width:111, height:101}}
></Image>
</View>
<View style={{justifyContent:'center',width:200,}}>
   <Text style={{fontWeight:'bold', margin:5}}>{item.name}</Text>
   <Text>{item.describe}</Text>
   <Text style={{fontWeight:'bold', margin:5}}>{item.price}</Text>
</View>
<View style={{top:50}}> 
  <Image source={require('./assets/plus_button.png')}
         style={{width:44,height:45}}
   >
  </Image>
</View>
</Pressable>

</View>

)


     return(
        <View style={{flex:1}}>
     
         <SafeAreaView style={{flex:1}}>
           <ScrollView style={{flex:1}} stickyHeaderIndices={[0]} >
             <View>
              <View  style={{backgroundColor:'white',height:200}}>
                <Text>Welcome,Jala</Text>
                <Text style={{fontWeight:'bold'}}>Choice Your Best Food</Text>
                 <TextInput placeholder='Search food' style={{width:300, height:40,borderWidth:1,marginTop:40}}></TextInput>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', top:30}}>
                  <TouchableOpacity    onPress={() => handleSelectedTab('Donut')} style={{borderRadius:5, borderWidth:1,width:80, height:40,margin:5}}><Text style={{padding:8}}>Donuts</Text></TouchableOpacity>
                  
                  <TouchableOpacity   onPress={() => handleSelectedTab('Pink Donut')}
                  style={{borderRadius:5, borderWidth:1,width:95, height:40,margin:5}}><Text style={{padding:8}}>Pink Donut</Text></TouchableOpacity>
                  <TouchableOpacity  onPress={() => handleSelectedTab('Floating Donut')}
                  
                  style={{borderRadius:5, borderWidth:1,width:80, height:40,margin:5}}><Text style={{padding:8}}>Floating</Text></TouchableOpacity>
                </View>


              </View>
       </View>
        <FlatList
           data={dataSearchDonut}
            renderItem={renderItem}
            keyExtractor={item =>item.id}
        ></FlatList>


           </ScrollView>
         </SafeAreaView>
        </View>
   )
     }