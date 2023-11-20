import React from "react";
import { Pressable, StyleSheet,View,Text, ScrollView } from "react-native";

function ToDoList(props) {
    
    const {tasks} = props;

    const components = tasks.map(function(task, index){
        return (
            <React.Fragment key={index}>
            <Pressable>
            <View style = {[styles.task]}>
                <Text style = {styles.taskText}>{task}</Text>
            </View>
            </Pressable>
            </React.Fragment>
        )
    }
       
    )
    return (
        <>
        
        <ScrollView>
            {components}
        {/* <Pressable>
            <View style ={[styles.task, styles.completed]}>
                <Text style = {styles.taskText}>Do laundry</Text>
            </View>
        </Pressable>

        <Pressable>
            <View style ={[styles.task, styles.completed]}>
                <Text style = {styles.taskText}>Go to gyms</Text>
            </View>
        </Pressable>

        <Pressable>
            <View style ={[styles.task, styles.completed]}>
                <Text style = {styles.taskText}>Walk dog</Text>
            </View>
        </Pressable> */}
            
        </ScrollView>
        </>
    );

    
}

export default ToDoList;