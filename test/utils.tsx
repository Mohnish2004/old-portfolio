import { ReactElement } from 'react'
import { render as rtlRender } from '@testing-library/react'

function render(ui: ReactElement) {
  return rtlRender(ui)
}

export * from '@testing-library/react'
export { render }