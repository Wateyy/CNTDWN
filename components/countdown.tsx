'use client'

import { useEffect, useState } from 'react'
import { calculateTimeLeft } from '@/utils/calculate-time-left'

interface CountdownProps {
  targetDate: Date
  examName: string
}

export function Countdown({ targetDate, examName }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
        {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </div>
      <div className="text-sm md:text-base mb-8 tracking-wide">
        (DAYS-HOURS-MINUTES-SECONDS)
      </div>
      <div className="text-xl md:text-2xl uppercase tracking-wider font-bold">
        Till {examName}
      </div>
    </div>
  )
}

