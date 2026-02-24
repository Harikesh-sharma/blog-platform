import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import connectDB from './mongodb'
import User from './models/User'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter your email and password')
        }

        await connectDB()

        const user = await User.findOne({ email: credentials.email })

        if (!user || !user.password) {
          throw new Error('Invalid email or password')
        }

        const isPasswordValid = await user.comparePassword(credentials.password)

        if (!isPasswordValid) {
          throw new Error('Invalid email or password')
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
      }
      if (account) {
        token.accessToken = account.access_token
        token.provider = account.provider
        token.providerAccountId = account.providerAccountId
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      if (token.accessToken) {
        (session as any).accessToken = token.accessToken as string
      }
      return session
    },
    async signIn({ user, account }) {
      if (account?.provider !== 'credentials') {
        await connectDB()
        
        // Check if user already exists
        const existingUser = await User.findOne({ email: user.email })
        
        if (!existingUser) {
          // Create new user for OAuth
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            emailVerified: new Date(),
          })
        }
      }
      return true
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
