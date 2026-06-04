import { useEffect, useMemo } from 'react'
import { getLead, type LeadData } from '../data/quiz'

export function useSessionLead(): LeadData | null {
  return useMemo(() => getLead(), [])
}

export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = title
  }, [title])
}
