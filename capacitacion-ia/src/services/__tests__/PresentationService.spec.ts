import { describe, it, expect } from 'vitest'
import { PresentationService } from '../PresentationService'
import { SlideType, type Slide } from '@/interfaces/Slide'

describe('PresentationService', () => {
  const mockSlides: Slide[] = [
    {
      id: 'slide-1',
      title: 'First Slide',
      type: SlideType.TITLE,
      subtitle: 'Test subtitle',
      order: 0
    },
    {
      id: 'slide-2',
      title: 'Second Slide',
      type: SlideType.CONTENT,
      content: 'Test content',
      order: 1
    },
    {
      id: 'slide-3',
      title: 'Third Slide',
      type: SlideType.CONTENT,
      content: 'More content',
      order: 2
    }
  ]

  it('should create an instance with slides sorted by order', () => {
    const unorderedSlides: Slide[] = [
      mockSlides[2]!,
      mockSlides[0]!,
      mockSlides[1]!
    ]

    const service = new PresentationService(unorderedSlides)
    const slides = service.getSlides()

    expect(slides[0]?.id).toBe('slide-1')
    expect(slides[1]?.id).toBe('slide-2')
    expect(slides[2]?.id).toBe('slide-3')
  })

  it('should return all slides', () => {
    const service = new PresentationService(mockSlides)
    const slides = service.getSlides()

    expect(slides).toHaveLength(3)
    expect(slides).toEqual(mockSlides)
  })

  it('should return a slide by ID', () => {
    const service = new PresentationService(mockSlides)
    const slide = service.getSlideById('slide-2')

    expect(slide).toBeDefined()
    expect(slide?.title).toBe('Second Slide')
  })

  it('should return undefined for non-existent slide ID', () => {
    const service = new PresentationService(mockSlides)
    const slide = service.getSlideById('non-existent')

    expect(slide).toBeUndefined()
  })

  it('should return a slide by index', () => {
    const service = new PresentationService(mockSlides)
    const slide = service.getSlideByIndex(1)

    expect(slide).toBeDefined()
    expect(slide?.title).toBe('Second Slide')
  })

  it('should return undefined for invalid index', () => {
    const service = new PresentationService(mockSlides)

    expect(service.getSlideByIndex(-1)).toBeUndefined()
    expect(service.getSlideByIndex(999)).toBeUndefined()
  })

  it('should return the total number of slides', () => {
    const service = new PresentationService(mockSlides)

    expect(service.getTotalSlides()).toBe(3)
  })

  it('should validate slide indices correctly', () => {
    const service = new PresentationService(mockSlides)

    expect(service.isValidIndex(0)).toBe(true)
    expect(service.isValidIndex(1)).toBe(true)
    expect(service.isValidIndex(2)).toBe(true)
    expect(service.isValidIndex(-1)).toBe(false)
    expect(service.isValidIndex(3)).toBe(false)
    expect(service.isValidIndex(999)).toBe(false)
  })

  it('should not mutate original slides array', () => {
    const originalSlides = [...mockSlides]
    const service = new PresentationService(mockSlides)

    const retrievedSlides = service.getSlides()
    retrievedSlides.push({
      id: 'new-slide',
      title: 'New Slide',
      type: SlideType.CONTENT,
      content: 'New content',
      order: 3
    })

    expect(service.getTotalSlides()).toBe(3)
    expect(mockSlides).toEqual(originalSlides)
  })
})
