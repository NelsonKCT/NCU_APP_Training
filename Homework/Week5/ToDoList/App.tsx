import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, VStack, HStack, FlatList, ZStack, Slider, Heading, Input, useToast, Button, Text, Checkbox, Flex } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [value, setValue] = useState("");
  const handleChange = text => setValue(text);
  const [level, setLevel] = useState<number>(0);
  const [todos, setTodos] = useState([]);
  const toast = useToast();

  const addTodo = () => {
    if (value.trim() === "") {
      toast.show({
        title: "請輸入代辦事項!",
        status: "warning",
        duration: 2000,
        placement: "top",
      });
      return;
    }
    setTodos([...todos, { id: todos.length + 1, text: value, done: false , Level: level}]);
    setValue("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        };
      } else {
        return todo;
      }
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getLevelIndicator = () => {
    if (level === 0) {
      return '!';
    } else if (level === 100) {
      return '!!';
    } else if (level === 200) {
      return '!!!';
    } else {
      return '';
    }
  };

  return (
    <NativeBaseProvider>
      <Box safeAreaTop style={styles.container}>
        <Heading>ToDo List</Heading>
        <Input value={value} onChangeText={handleChange} w={{ base: "75%", md: "25%"}} placeholder="輸入代辦事項" />
        <HStack justifyContent="space-between" width="80%">
            <Text fontSize="3xl" color='#FF2400'> !</Text>
            <Text fontSize="3xl" color='#FF2400'> !!</Text>
            <Text fontSize="3xl" color='#FF2400'>!!!</Text>
          </HStack>
        <Slider w="3/4" maxW="300" defaultValue={0} minValue={0} maxValue={200} step={100} onChangeEnd={v => { v && setLevel(Math.floor(v));}}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider> 
        <Button onPress={addTodo}>加入+</Button>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <HStack alignItems="center" my={2}>
              <Checkbox
                isChecked={item.done}
                onChange={() => toggleTodo(item.id)}
                accessibilityLabel="Todo item"
                value={item.text}
              >
                <Text ml={2} textDecorationLine={item.done ? "line-through" : "none"}>{item.text}</Text>
              </Checkbox>
              <Text bold style={{ textAlign: 'left', color : 'red'}}>{getLevelIndicator(item.level)}</Text>
              <Button size="xs" variant="ghost" onPress={() => deleteTodo(item.id)}>
                <AntDesign name="delete" size={24} color="black" />
              </Button>
            </HStack>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
