import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ResourceSlide from '../presentation/ResourceSlide.vue'
import { SlideType } from '@/interfaces/Slide'
import type { IResourceSlide } from '@/interfaces/Slide'

describe('ResourceSlide', () => {
  const mockSlide: IResourceSlide = {
    id: 'test-resource',
    title: 'Test Resource',
    type: SlideType.RESOURCE,
    platform: 'Test Platform',
    description: 'Test platform description',
    resources: [
      {
        type: 'web',
        label: 'Web App',
        url: 'https://example.com',
        icon: '🌐'
      },
      {
        type: 'app',
        label: 'Mobile App',
        url: 'https://app.example.com'
      }
    ],
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    order: 0
  }

  it('renders the platform name', () => {
    const wrapper = mount(ResourceSlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.find('.slide-title').text()).toBe('Test Platform')
  })

  it('renders the description', () => {
    const wrapper = mount(ResourceSlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.find('.description').text()).toBe('Test platform description')
  })

  it('renders all resources', () => {
    const wrapper = mount(ResourceSlide, {
      props: { slide: mockSlide }
    })

    const resources = wrapper.findAll('.resource-item')
    expect(resources).toHaveLength(2)
  })

  it('displays resource labels', () => {
    const wrapper = mount(ResourceSlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.text()).toContain('Web App')
    expect(wrapper.text()).toContain('Mobile App')
  })

  it('renders features when provided', () => {
    const wrapper = mount(ResourceSlide, {
      props: { slide: mockSlide }
    })

    const features = wrapper.findAll('.feature-item')
    expect(features).toHaveLength(3)
    expect(wrapper.text()).toContain('Feature 1')
    expect(wrapper.text()).toContain('Feature 2')
    expect(wrapper.text()).toContain('Feature 3')
  })

  it('sets correct href for resource links', () => {
    const wrapper = mount(ResourceSlide, {
      props: { slide: mockSlide }
    })

    const links = wrapper.findAll('.resource-item')
    expect(links[0]?.attributes('href')).toBe('https://example.com')
    expect(links[1]?.attributes('href')).toBe('https://app.example.com')
  })
})
