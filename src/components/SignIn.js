import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, TextField } from "@material-ui/core";
import styled from "styled-components";
import { authenticate } from "../services/moocfi";
import LanguageContext, { languages } from "../contexes/LanguageContext";

const Row = styled.div`
  margin-bottom: 1.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3em;
  & > * {
    margin-right: 1rem;
  }
`;

function SignIn({ onComplete }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const lang = useContext(LanguageContext);

  return (
    <Card>
      <CardContent>
        <TitleContainer>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {lang === languages.finnish ? "Kirjaudu sisään" : "Log in"}
          </Typography>
        </TitleContainer>
        <p>
          {lang === languages.finnish
            ? "Kirjaudu sisään samoilla MOOC.fi tunnuksilla, joita olet käyttänyt kurssimateriaalissa."
            : "Log in using the same MOOC.fi account that you've been using in the course material."}
        </p>
        <form>
          <Row>
            <TextField
              required
              id="outlined-adornment-password"
              variant="outlined"
              label={
                lang === languages.finnish
                  ? "Sähköpostiosoite tai käyttäjänimi"
                  : "Email or username"
              }
              fullWidth
              value={email}
              onChange={o => setEmail(o.target.value)}
            />
          </Row>
          <Row>
            <TextField
              required
              id="outlined-adornment-password"
              variant="outlined"
              type="password"
              label={lang === languages.finnish ? "Salasana" : "Password"}
              fullWidth
              value={password}
              onChange={o => setPassword(o.target.value)}
            />
          </Row>
          {error && (
            <p>
              {lang === languages.finnish
                ? "Virheelliset tunnukset"
                : "Invalid credentials"}
            </p>
          )}
          <Button
            onClick={async e => {
              e.preventDefault();
              setLoading(true);
              setError(false);
              try {
                await authenticate({ username: email, password });
                if (onComplete) {
                  onComplete();
                }
              } catch (e) {
                console.error("Login failed", e);
                setError(true);
              }

              setLoading(false);
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            enabled={!loading}
          >
            {
                lang === languages.finnish
                  ? "Kirjaudu sisään"
                  : "Log in"
              }
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default SignIn;
