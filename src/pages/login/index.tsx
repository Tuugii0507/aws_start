import { Button, Input } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: { target: { id: any; value: any } }) => {
    setForm({ ...form, [e.target.id]: e.target.value });
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
        {/* <Button type="submit" onClick={() => Login(form.email, form.password)}>
          Sign Up
        </Button> */}
      </Stack>
    </Stack>
  );
};

export default Login;
