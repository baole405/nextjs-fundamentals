import { db } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { unstable_cache } from 'next/cache'
import { cache } from 'react'
import { getSession } from './auth'

// Current user
export const getCurrentUser = cache(async () => {
  const session = await getSession()
  if (!session) return null

  try {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId))

    return result[0] || null
  } catch (error) {
    console.error('Error getting user by ID:', error)
    return null
  }
})

// Get user by email
export const getUserByEmail = async (email: string) => {
  try {
    const result = await db.select().from(users).where(eq(users.email, email))
    return result[0] || null
  } catch (error) {
    console.error('Error getting user by email:', error)
    return null
  }
}

export const getIssues = unstable_cache(
  async () => {
    try {
      const result = await db.query.issues.findMany({
        with: {
          user: true,
        },
        orderBy: (issues, { desc }) => [desc(issues.createdAt)],
      })
      return result
    } catch (error) {
      console.error('Error fetching issues:', error)
      throw new Error('Failed to fetch issues')
    }
  },
  ['issues'],
  {
    tags: ['issues'],
    revalidate: 60, // Cache for 60 seconds
  }
)
