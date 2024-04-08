"use client";

import axios from "axios";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Component() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signup", user);
      console.log("Signup success", response.data);
      console.log("Account Creation Successful !\n", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Account Creation Failed !!!");
    }
  };
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm invert">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
          <CardDescription className="">
            Enter a username, email and password to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Select a username"
                required
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                placeholder="Enter a password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                required
                type="text"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className="text-sm text-red-600 invert">
                {confirmPassword !== user.password ? "Password Not Same" : ""}
              </p>
            </div>
            <Button
              className="w-full my-4"
              type="submit"
              disabled={buttonDisabled || loading}
              onClick={onSignup}
            >
              Sign Up
            </Button>
            Already have an account?{" "}
            <Link href={"/login"} className="font-bold">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
