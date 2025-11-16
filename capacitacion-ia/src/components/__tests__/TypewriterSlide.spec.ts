import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TypewriterSlide from '../presentation/TypewriterSlide.vue'
import { SlideType } from '@/interfaces/Slide'
import type { ITypewriterSlide } from '@/interfaces/Slide'

describe('TypewriterSlide', () => {
  let mockSlide: ITypewriterSlide

  beforeEach(() => {
    vi.useFakeTimers()
    mockSlide = {
      id: 'test-typewriter',
      title: 'Test Typewriter',
      type: SlideType.TYPEWRITER,
      lines: ['Line 1', 'Line 2', 'Line 3'],
      speed: 50,
      order: 0
    }
  })

  it('renders the slide title', () => {
    const wrapper = mount(TypewriterSlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.find('.slide-title').text()).toBe('Test Typewriter')
  })

  it('starts with empty displayed text', () => {
    const wrapper = mount(TypewriterSlide, {
      props: { slide: mockSlide }
    })

    const lines = wrapper.findAll('.typewriter-line')
    expect(lines.length).toBe(0)
  })

  it('displays typewriter effect over time', async () => {
    const wrapper = mount(TypewriterSlide, {
      props: { slide: mockSlide }
    })

    // Avanzar el tiempo para simular el efecto typewriter
    await vi.advanceTimersByTimeAsync(1000)

    const lines = wrapper.findAll('.typewriter-line')
    expect(lines.length).toBeGreaterThan(0)
  })

  it('shows cursor while typing', async () => {
    const wrapper = mount(TypewriterSlide, {
      props: { slide: mockSlide }
    })

    await vi.advanceTimersByTimeAsync(100)
    const cursor = wrapper.find('.cursor')
    expect(cursor.exists()).toBe(true)
  })
})
