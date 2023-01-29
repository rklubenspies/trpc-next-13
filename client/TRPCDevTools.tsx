'use client'

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export function TRPCDevTools() {
  return (
    <ReactQueryDevtools initialIsOpen={false} />
  )
}