import React from "react";
import { Button, Text } from "react-native";

const ChuckFact = ({  }) => {
    const [fact, setFact] = React.useState('');
    const fetchFact = async () => {
        const response = await fetch ('https://api.chucknorris.io/jokes/random');
        const parsedResponse = await response.json();

        const newFact = parsedResponse.value;
        setFact(newFact);
    };
    React.useEffect(() => {
        fetchFact();
        console.log('here');
    },[]);

    const handleRefresh = () => {
        fetchFact();
    };

    return (
        <>
            <Text style={{fontSize: 20, color:'blue'}}>{fact}</Text>
            <Button title="Refresh" onPress={handleRefresh}></Button>
        </>
    )
};

export default ChuckFact;