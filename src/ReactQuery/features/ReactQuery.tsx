"use client"

import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import ReactQueryTutorial from './ReactQueryTutorial'

const queryClient = new QueryClient()

const ReactQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryTutorial />
    </QueryClientProvider>
  )
}

export default ReactQuery