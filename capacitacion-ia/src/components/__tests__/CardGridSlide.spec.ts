import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardGridSlide from '../presentation/CardGridSlide.vue'
import { SlideType } from '@/interfaces/Slide'
import type { ICardGridSlide } from '@/interfaces/Slide'

describe('CardGridSlide', () => {
  const mockSlide: ICardGridSlide = {
    id: 'test-card-grid',
    title: 'Test Card Grid',
    type: SlideType.CARD_GRID,
    description: 'Test description',
    cards: [
      {
        id: 'card1',
        title: 'Card 1',
        description: 'Description 1',
        icon: '🎨',
        link: 'https://example.com'
      },
      {
        id: 'card2',
        title: 'Card 2',
        description: 'Description 2',
        icon: '🚀'
      }
    ],
    columns: 2,
    order: 0
  }

  it('renders the slide title', () => {
    const wrapper = mount(CardGridSlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.find('.slide-title').text()).toBe('Test Card Grid')
  })

  it('renders the description', () => {
    const wrapper = mount(CardGridSlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.find('.description').text()).toBe('Test description')
  })

  it('renders all cards', () => {
    const wrapper = mount(CardGridSlide, {
      props: { slide: mockSlide }
    })

    const cards = wrapper.findAll('.card')
    expect(cards).toHaveLength(2)
  })

  it('displays card titles and descriptions', () => {
    const wrapper = mount(CardGridSlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.text()).toContain('Card 1')
    expect(wrapper.text()).toContain('Description 1')
    expect(wrapper.text()).toContain('Card 2')
    expect(wrapper.text()).toContain('Description 2')
  })

  it('displays card icons', () => {
    const wrapper = mount(CardGridSlide, {
      props: { slide: mockSlide }
    })

    expect(wrapper.text()).toContain('🎨')
    expect(wrapper.text()).toContain('🚀')
  })

  it('marks cards with links as clickable', () => {
    const wrapper = mount(CardGridSlide, {
      props: { slide: mockSlide }
    })

    const cards = wrapper.findAll('.card')
    expect(cards[0]?.classes()).toContain('clickable')
    expect(cards[1]?.classes()).not.toContain('clickable')
  })
})
