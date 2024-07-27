import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const JasurCreate = () => {
  return {
    name: 'my-plugin',
    configureServer(server) {
      server.httpServer.once('listening', () => {
        console.log('Happy Hacking, 🫠 🫠 😴\n Github https://github.com/jasurhaydarovcode');
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), JasurCreate()],
  server: {
    port: 8080,
    open: true,
  }
})
