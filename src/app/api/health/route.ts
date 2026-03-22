import { NextResponse } from 'next/server'

export function GET() {
  const mem = process.memoryUsage()
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    memory: {
      heapUsedMB: Math.round(mem.heapUsed / 1024 / 1024),
      rssMB: Math.round(mem.rss / 1024 / 1024),
    },
  })
}
