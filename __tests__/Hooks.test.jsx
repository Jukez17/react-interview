import { renderHook, act } from '@testing-library/react-hooks'
import UseToggleState from '../src/hooks/UseToggleState'
import UseInputState from '../src/hooks/UseInputState'

describe("useToggleState", () => {
    it("Initial toggle is false", () => {
      const { result } = renderHook(() => UseToggleState(true))
  
      act(() => {
        result.current[1]()
      })
  
      expect(result.current[0]).toBe(false)
    })
  
    it("Toggle is true", () => {
      const { result } = renderHook(() => UseToggleState())
  
      act(() => {
        result.current[1]()
      })
  
      expect(result.current[0]).toBe(true)
    })
  })

  describe("useInputState", () => {
    it("Input State reset", () => {
      const { result } = renderHook(() => UseInputState())
      

      act(() => {
        result.current[2]()
      })

      expect(result.current[0]).toBe('')

    })
  })