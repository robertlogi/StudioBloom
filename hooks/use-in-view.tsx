"use client"

import { useState, useEffect, type RefObject } from "react"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useInView(ref: RefObject<Element>, options: UseInViewOptions = {}): boolean {
  const { threshold = 0.1, rootMargin = "0px", once = false } = options
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)

        if (entry.isIntersecting && once && ref.current) {
          observer.unobserve(ref.current)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [ref, threshold, rootMargin, once])

  return isIntersecting
}

