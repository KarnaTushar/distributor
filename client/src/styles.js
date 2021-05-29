import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 50,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'left',
    paddingLeft: '40px'
  },
  heading: {
    color: '#4E72DC',
  },
  image: {
    marginLeft: '15px',
    paddingTop: '8px'
  },
}));
