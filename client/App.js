import { StatusBar } from 'expo-status-bar';
import RouteNav from './RouteNav'
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <RouteNav/>
      <StatusBar hidden/>
    </NativeBaseProvider>
  );
}
