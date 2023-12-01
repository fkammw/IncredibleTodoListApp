import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';
import ChuckFact from '../ChuckFact';

function HomeScreen ({navigation}) {
    const [tasks, setTasks] = useState(
        [
          'Do laundry',
          'Go to gym',
          'Walk dog'
        ]
    );
    
    const handleAdd = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <>
            <MainLayout>
                <SafeAreaView style={backgroundStyle}>     
                    <ToDoList tasks={tasks}/>
                    <ToDoForm onAdd = {handleAdd} />
                    <ChuckFact />

                    <Button
                        title="Go to About"
                        onPress={() => navigation.navigate('About')}
                    />
                     
                </SafeAreaView>
            </MainLayout>
        </>
    );

}

export default HomeScreen;