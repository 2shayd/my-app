import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import { StyleSheet } from 'react-native';
const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

// export const styles = tva({
//   base: baseStyle,
//   variants: {
//     size: {
//       sm: 'p-3 rounded',
//       md: 'p-4 rounded-md',
//       lg: 'p-6 rounded-xl',
//     },
//     variant: {
//       elevated: 'bg-background-0',
//       outline: 'border border-outline-200 ',
//       ghost: 'rounded-none',
//       filled: 'bg-background-50',
//     },
//   },
// });
export const styles = StyleSheet.create({
    card: {
    padding: 16,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
  },
  id: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  button: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 4,
    alignItems: 'center',
  },
  link: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});