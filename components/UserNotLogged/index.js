import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Router from 'next/router';

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '40%',
    padding: '15px 20px',
  },
  info: {
    color: 'var(--accents-3)',
  },
}));

function UserNotLogged() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid className={classes.container}>
        <h1 className={classes.title}>You&apos;re not logged in</h1>
        <img width="40%" src="/login.svg" alt="login" />
        <Button
          onClick={() => Router.push('/login')}
          className={classes.loginButton}
          variant="contained"
          color="primary"
        >
          <span>Join Now</span>
        </Button>
        <p className={classes.info}>Join lineup and start planning</p>
        <p className={classes.info}>With lineup you can easily create tasks and assign them to other people in your team.</p>
      </Grid>
    </Container>
  );
}

export default UserNotLogged;
