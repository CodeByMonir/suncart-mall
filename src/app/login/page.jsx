"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FcEmptyTrash } from "react-icons/fc";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

function SignInForm() {

    const router = useRouter();

    const searchParams = useSearchParams();

    const redirect = searchParams.get("redirect");

    const onSubmit = async (e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
        });

        if (error) {
            toast.error(error.message);
        }
        if (data) {
            router.replace(redirect || "/");

            toast.success(`Congrats ${data.user.name} ! Log in successful`);
        }

    };

    const handleGoogleSignIn = async () => {

        await authClient.signIn.social({
            provider: 'google',

            callbackURL: redirect || "/",
        })
    }



    return (
        <div className="mx-4 sm:mx-10">

            <Card
                className="bg-transparent border mx-auto w-full max-w-md py-8 sm:py-10 mt-5 px-4 sm:px-6"
            >

                <h1 className="text-center text-2xl font-bold">
                    Log In
                </h1>

                <Form
                    className="flex flex-col gap-4 w-full"
                    onSubmit={onSubmit}
                >

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>

                        <Input
                            className="bg-transparent"
                            placeholder="john@example.com"
                        />

                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>

                        <Input
                            className="bg-transparent"
                            placeholder="Enter your password"
                        />

                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>

                        <FieldError />
                    </TextField>

                    <div
                        className="flex flex-col sm:flex-row gap-2 mt-3"
                    >

                        <Button type="submit" fullWidth>
                            Submit
                            <Check />
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="w-full sm:w-auto"
                        >

                            Reset
                            <FcEmptyTrash />
                        </Button>
                    </div>
                </Form>

                <p className="text-center my-0">
                    Or
                </p>

                <Button
                    onClick={handleGoogleSignIn}
                    variant="outline"
                    className="w-full hover:bg-black/5"
                >
                    <GrGoogle />
                    Log In With Google
                </Button>

                <p className="text-center mt-4 text-sm sm:text-base">

                    Don&apos;t have an account?{" "}

                    <a
                        href="/signup"
                        className="text-blue-500 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </Card>
        </div>
    );
}

export default function SignInPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignInForm />
        </Suspense>
    );
}