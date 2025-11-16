import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CTASlide from '../presentation/CTASlide.vue'
import { SlideType } from '@/interfaces/Slide'
import type { ICTASlide } from '@/interfaces/Slide'

describe('CTASlide', () => {
  const mockSlide: ICTASlide = {
    id: 'test-cta',
    title: 'Test CTA',
    type: SlideType.CTA,
    message: ['Line 1 of message', 'Line 2 of message', 'Line 3 of message'],
    contactInfo: {
      name: 'John Doe',
      company: 'Test Company',
      website: 'https://example.com',
      email: 'test@example.com',
      phone: '+1234567890'
    },
    ctaButtons: [
      {
        label: 'Contact Me',
        action: 'contact',
        variant: 'primary'
      },
      {
        label: 'Go Back',
        action: 'restart',
        variant: 'secondary'
      }
    ],
    order: 0
  }

  it('renders the slide title', () => {
    const wrapper = mount(CTASlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.find('.slide-title').text()).toBe('Test CTA')
  })

  it('renders all message lines', () => {
    const wrapper = mount(CTASlide, {
      props: { slide: mockSlide }
    })

    const lines = wrapper.findAll('.message-line')
    expect(lines).toHaveLength(3)
    expect(wrapper.text()).toContain('Line 1 of message')
    expect(wrapper.text()).toContain('Line 2 of message')
    expect(wrapper.text()).toContain('Line 3 of message')
  })

  it('displays contact information', () => {
    const wrapper = mount(CTASlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.find('.contact-name').text()).toBe('John Doe')
    expect(wrapper.find('.contact-company').text()).toBe('Test Company')
  })

  it('renders contact links', () => {
    const wrapper = mount(CTASlide, {
      props: { slide: mockSlide }
    })

    const links = wrapper.findAll('.contact-link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('renders CTA buttons', () => {
    const wrapper = mount(CTASlide, {
      props: { slide: mockSlide }
    })

    const buttons = wrapper.findAll('.cta-button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0]?.text()).toBe('Contact Me')
    expect(buttons[1]?.text()).toBe('Go Back')
  })

  it('applies correct button variants', () => {
    const wrapper = mount(CTASlide, {
      props: { slide: mockSlide }
    })

    const buttons = wrapper.findAll('.cta-button')
    expect(buttons[0]?.classes()).toContain('primary')
    expect(buttons[1]?.classes()).toContain('secondary')
  })
})
