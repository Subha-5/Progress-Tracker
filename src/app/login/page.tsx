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
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/login", user);
      console.log("Login Successful ! \n", response.data);
      router.push("/");
    } catch (error) {
      console.log("Login Failed !!!");
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 6) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm invert">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {loading ? "Processing..." : "Login"}
          </CardTitle>
          <CardDescription className="text-center">
            {"Enter your email and password to login to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
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
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              disabled={buttonDisabled || loading}
              onClick={onLogin}
            >
              {buttonDisabled ? "No Login" : "Login"}
            </Button>
            <div className="w-full">
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <span className="font-bold">Visit Signup page</span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
