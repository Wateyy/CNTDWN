import Link from 'next/link'
import { exams } from '@/config/exams'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-12">FINAL COUNTDOWN</h1>
      <nav className="flex flex-col gap-6">
        {Object.entries(exams).map(([key, exam]) => (
          <Link
            key={key}
            href={`/${key}`}
            className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            {exam.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

