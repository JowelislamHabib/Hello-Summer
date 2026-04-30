"use client";
import React, { useState } from "react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";

const RegisterPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="container w-4/12 mx-auto ">
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="text"
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
              if (value.length < 6) {
                return "Password must be at least 6 characters long";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                type="text"
                placeholder="Minimum 6 digits password"
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
