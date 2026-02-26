'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case 'OAuthSignin':
        return 'Error starting OAuth sign-in flow.'
      case 'OAuthCallback':
        return 'Error during OAuth callback.'
      case 'OAuthCreateAccount':
        return 'Could not create your account via OAuth.'
      case 'EmailCreateAccount':
        return 'Could not create your email account.'
      case 'Callback':
        return 'Error during callback.'
      case 'Default':
        return 'An unknown authentication error occurred.'
      default:
        return error || 'An unknown authentication error occurred.'
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4 p-8">
        <h1 className="text-2xl font-bold text-destructive">Authentication Error</h1>
        <p className="text-muted-foreground">{getErrorMessage(error)}</p>
        
        {error ==='OAuthCallback' && (
          <div className="bg-muted p-4 rounded-lg text-sm max-w-md mx-auto mt-4">
            <p className="font-semibold mb-2">Common causes:</p>
            <ul className="text-left list-disc pl-5 space-y-1">
              <li>Redirect URI mismatch in Google Cloud Console</li>
              <li>Google OAuth app not published (if in production)</li>
              <li>Your email not added to test users (for development)</li>
            </ul>
          </div>
        )}
        
        <Link 
          href="/auth/signin"
          className="inline-block mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  )
}
