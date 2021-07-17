import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('./sw.js');
    await workbox.register();
    return;
  }
  console.log('Service worker not support in this browser');
};

export default swRegister;
