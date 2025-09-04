import { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import CardShell from './CardShell'

export default function ProductReviewsCard() {
  const rating = 4
  const [userName, setUserName] = useState('')
  const [userText, setUserText] = useState('')
  const [userRating, setUserRating] = useState<number>(5)
  const [submitting, setSubmitting] = useState(false)
  const [reviews, setReviews] = useState<Array<{ name: string; text: string; stars: number }>>([
    { name: 'Alex', text: 'Great noise cancellation and very comfortable for long sessions.', stars: 5 },
    { name: 'Jordan', text: 'Battery easily lasts me a week of daily commuting.', stars: 4 },
  ])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userName.trim() || !userText.trim()) return
    setSubmitting(true)
    // Simulate async
    setTimeout(() => {
      setReviews((prev) => [{ name: userName.trim(), text: userText.trim(), stars: userRating }, ...prev])
      setUserName('')
      setUserText('')
      setUserRating(5)
      setSubmitting(false)
    }, 400)
  }
  return (
    <CardShell
      title="Customer Reviews"
      headerRight={<span className="px-2 py-1 rounded-full text-[11px] uppercase tracking-wide bg-emerald-100 text-emerald-700">4.0 / 5</span>}
    >
      <div className="flex items-center gap-2 text-amber-400 text-xl">
        {[...Array(5)].map((_, i) => (i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />))}
        <span className="ml-2 text-sm text-neutral-500">4.0 out of 5</span>
      </div>
      {/* Rating breakdown */}
      <div className="mt-4 space-y-2">
        {[
          { label: '5', pct: 60, color: 'from-emerald-400 to-emerald-500' },
          { label: '4', pct: 25, color: 'from-lime-400 to-lime-500' },
          { label: '3', pct: 10, color: 'from-amber-400 to-amber-500' },
          { label: '2', pct: 3, color: 'from-orange-400 to-orange-500' },
          { label: '1', pct: 2, color: 'from-rose-400 to-rose-500' },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="w-4 text-xs text-neutral-500">{row.label}★</span>
            <div className="h-2 flex-1 rounded-full bg-neutral-100 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${row.color} rounded-full transition-all duration-700`}
                style={{ width: `${row.pct}%` }}
              />
            </div>
            <span className="w-8 text-xs text-neutral-500 text-right">{row.pct}%</span>
          </div>
        ))}
      </div>

      {/* Write a review */}
      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-start">
          <input
            type="text"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <div className="flex items-center gap-1 text-amber-400 text-xl">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setUserRating(i + 1)}
                aria-label={`Rate ${i + 1} stars`}
                className="transition-transform hover:-translate-y-0.5"
              >
                {i < userRating ? <AiFillStar /> : <AiOutlineStar />}
              </button>
            ))}
          </div>
        </div>
        <textarea
          placeholder="Share your experience..."
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          rows={4}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        <div className="flex items-center justify-between">
          <div className="text-xs text-neutral-500">Your review will appear publicly with your name.</div>
          <button
            type="submit"
            disabled={!userName.trim() || !userText.trim() || submitting}
            className={`inline-flex items-center px-4 py-2 rounded-md text-sm text-white transition-colors ${
              !userName.trim() || !userText.trim() || submitting
                ? 'bg-neutral-400 cursor-not-allowed'
                : 'bg-neutral-900 hover:bg-neutral-800'
            }`}
          >
            {submitting ? 'Submitting…' : 'Submit review'}
          </button>
        </div>
      </form>

      {/* Reviews list */}
      <div className="mt-4 text-sm text-neutral-700 space-y-2">
        {reviews.map((r, idx) => (
          <div key={idx} className="p-3 rounded-md border border-neutral-200 bg-neutral-50/60 hover:bg-neutral-50 transition-colors">
            <div className="flex items-center gap-2 text-amber-400 text-xs">
              {[...Array(5)].map((_, i) => (i < r.stars ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />))}
              <span className="text-neutral-500">— {r.name}</span>
            </div>
            <div className="mt-1 text-neutral-800">{r.text}</div>
          </div>
        ))}
      </div>
    </CardShell>
  )
}
