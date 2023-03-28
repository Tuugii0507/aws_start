import { Button, Input } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { SignUpHook } from "@/library/pool";
import { useRouter } from "next/router";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: { target: { id: any; value: any } }) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const router = useRouter();
  const signUp = () => {
    SignUpHook(form.email, form.password);
    router.push(`/verification?email=${form?.email}`);
  };
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginTop={60}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        email
        <Input
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={form.email}
          id="email"
          type="text"
        />
        password
        <Input
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={form.password}
          id="password"
          type="password"
        />
        <Button type="submit" onClick={signUp}>
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
};

export default SignUp;
