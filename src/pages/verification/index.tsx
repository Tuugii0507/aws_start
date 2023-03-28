import { useRouter } from "next/router";
import { Button, Input } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { VerificationHook } from "@/library/pool";

const Verification = () => {
  const [form, setForm] = useState({
    verificationCode: "",
  });

  const path: any = useRouter();
  const email: string = path?.query?.email;

  const handleChange = (e: { target: { id: any; value: any } }) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const router = useRouter();
  const Verification = () => {
    VerificationHook(form.verificationCode, email);
    router.push("/");
  };
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginTop={60}
    >
      Verification Code
      <Input
        name="verificationCode"
        placeholder="Verification Code"
        onChange={handleChange}
        id="verificationCode"
        type="number"
      />
      <Button type="submit" onClick={Verification}>
        Verification
      </Button>
    </Stack>
  );
};

export default Verification;
