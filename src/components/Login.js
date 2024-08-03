import { useEffect, useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { loginUserAction } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const loginToken = useSelector((state) => state?.login?.userInfo?.token);

  useEffect(() => {
    if (loginToken !== undefined) {
      navigate("/dashboard");
    }
  }, [loginToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      dispatch(loginUserAction({ email, password }));
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="primary" variant="body2">
              Login successful!
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <span>
            Don't have an account? <a href="/">Register here</a>
          </span>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
