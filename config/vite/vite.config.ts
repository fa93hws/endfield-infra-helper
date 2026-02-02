import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup_tests.ts',
    css: true,
    include: ['../../tests/**/*.test.{ts,tsx}'],
  },
})
