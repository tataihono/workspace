import type { Access, FieldAccess } from 'payload'
import type { User } from '@/payload-types'

export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean((user as User | null)?.roles?.includes('admin'))
}

export const isContentLead: Access = ({ req: { user } }) => {
  const u = user as User | null
  return Boolean(u?.roles?.includes('admin') || u?.roles?.includes('content-lead'))
}

export const isEditor: Access = ({ req: { user } }) => {
  return Boolean(user)
}

export const publishedOnly: Access = ({ req: { user } }) => {
  if (user) return true
  return { _status: { equals: 'published' } }
}

export const adminOnlyField: FieldAccess = ({ req: { user } }) => {
  return Boolean((user as User | null)?.roles?.includes('admin'))
}
