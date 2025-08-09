// app/_layout.tsx
import { Slot, Stack } from 'expo-router';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';

import '../global.css'; // se estiver usando React Native Web ou estilos globais

import 'react-native-reanimated';

const queryClient = new QueryClient();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider></GluestackUIProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" backgroundColor="#ef640eff" />
    </QueryClientProvider>
  );
}
