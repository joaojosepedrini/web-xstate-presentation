const { resolve } = require('path');
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

module.exports = defineConfig({
  plugins: [react()]
});