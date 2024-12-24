import Link from 'next/link'
import { exams } from '@/config/exams'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-8">FINAL COUNTDOWN</h1>
      <div className="space-y-4">
        {Object.entries(exams).map(([key, exam]) => (
          <Link
            key={key}
            href={`/${key}`}
            className="block text-xl font-bold hover:text-gray-300 transition-colors"
          >
            {exam.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

