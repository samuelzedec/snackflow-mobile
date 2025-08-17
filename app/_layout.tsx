import "@/global.css";
import { Slot, Stack } from 'expo-router';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';
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
      <GluestackUIProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }}  />
          <Stack.Screen name="(app)" />
          <Stack.Screen name="+not-found" />
      </Stack>
    <StatusBar hidden={false} />
        </GluestackUIProvider>
    </QueryClientProvider>
  );
}
