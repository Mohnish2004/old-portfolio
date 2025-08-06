import '@testing-library/jest-dom'

// Global test setup
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}