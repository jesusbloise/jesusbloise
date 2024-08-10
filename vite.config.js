import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['react-multi-carousel', 'react-icons/fa', 'react-slick'],// Asegúrate de incluirlo aquí si es necesario
//     },
//   },
// });
