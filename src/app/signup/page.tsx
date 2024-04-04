"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function SignUp() {
  return (
    <main className="bg-primary h-screen flex justify-center items-center p-4">
      <Card className="bg-primary w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-secondary text-2xl">Create Account</CardTitle>
          <CardDescription>
            {/* Enter your email below to login to your account. */}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-secondary">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              required
              className="bg-primary text-secondary"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username" className="text-secondary">
              Email
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="john.doe@example.com"
              required
              className="bg-primary text-secondary"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-secondary">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              required
              className="bg-primary text-secondary"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-gray-800 border-2 border-white w-full">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}


export default SignUp