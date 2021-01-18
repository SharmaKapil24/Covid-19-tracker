import React from "react";
import { Card, CardContent, Typography, Grid, CircularProgress } from "@material-ui/core";
import styles from "./Cards.module.css"; 
import Countup from "react-countup";
import cx from "classnames";

const Cards = (props) => {
  if (!props.data.confirmed || !props.data.lastUpdate) {
    return <CircularProgress  />;
  } else {
    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <Countup
                  start={0}
                  end={props.data.confirmed.value}
                  duration={1.5}
                  seperator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(props.data.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active cases of covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <Countup
                  start={0}
                  end={props.data.recovered.value}
                  duration={2.5}
                  seperator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(props.data.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of recovered cases of covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <Countup
                  start={0}
                  end={props.data.deaths.value}
                  duration={2.5}
                  seperator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(props.data.lastUpdate).toDateString()}
              </Typography>

              <Typography variant="body2">
                Number of deaths of covid-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Cards;
