import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Card} from '@mui/material';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    minWidth: 256,
    textAlign: 'center',
    margin:"2rem",
    border: '2px solid',
    shadows:"none"
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export const CardLayout = React.memo(function ProfileCard({temp,feel,description,iconCode,time}) {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  return (
    <Card className={cx(styles.card)}>
      <CardContent>
        <Avatar className={styles.avatar} src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} />
        <h3 className={styles.heading}>{description}</h3>
        <span className={styles.subheader}><SimpleDateTime timeSeparator=":" meridians="1"format="DMY" dateSeparator="-">{time}</SimpleDateTime></span>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>temp</p>
          <p className={styles.statValue}>{temp}</p>
        </Box>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Feels like</p>
          <p className={styles.statValue}>{feel}</p>
        </Box>
      </Box>
    </Card>
  );
});

export default CardLayout