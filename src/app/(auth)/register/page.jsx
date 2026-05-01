"use client";
import React, { useState } from "react";
import { Check, Eye, EyeSlash, HandStop } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const photo = formData.get("photo");

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    if (error) {
      toast.danger(error.message, {
        actionProps: {
          children: "Remove",
          variant: "danger",
        },
        description:
          "Sorry toast you, but something went wrong during registration. Please try again.",
        indicator: <HandStop />,
      });
    }
    console.log(data, error, "--- Sign Up Response ---");
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="container w-4/12 mx-auto ">
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (value.trim() === "" || value.length < 3) {
                return "Please enter a valid full name (at least 3 characters)";
              }

              return null;
            }}
          >
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="photo"
            type="url"
            validate={(value) => {
              if (!value.startsWith("https://")) {
                return "Please enter a valid url (must start with https://)";
              }

              return null;
            }}
          >
            <Label>Avatar URL</Label>
            <Input placeholder="https://example.com/avatar.jpg" />
            <FieldError />
          </TextField>
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
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="text"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters long";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                type={isVisible ? "text" : "password"}
                placeholder="Minimum 8 digits password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                  className="mr-1"
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Login
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
