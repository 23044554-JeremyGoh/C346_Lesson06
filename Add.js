import React, {useState} from 'react';
import { datasource } from './Data.js';
import {StyleSheet,Text, TextInput, View, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [letterType, setLetterType] = useState('Vowels');

    return(
        <View>
            <Text>Add Letter:</Text>
            <TextInput placeholder="Letter:"
                       style={{borderWidth:1}}
                       value={letter}
                       onChangeText={setLetter}
                       maxLength={1}/>
            <RNPickerSelect
                onValueChange={(value) => setLetterType(value)}
                value={letterType}
                items={[
                    { label: 'Vowels', value: 'Vowels' },
                    { label: 'Consonants', value: 'Consonants' },
                ]}
            />
            <Button
                title="Submit"
                onPress={() => {
                    let item = {key:letter};
                    let indexnum = 1;
                    if(letterType=="Vowels"){
                        indexnum = 0;
                }
                    datasource[indexnum].data.push(item);
                    navigation.navigate("Home")
                }
            }
            />
        </View>

    )

}
export default Add;
