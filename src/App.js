import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import TransactionList from './pages/TransactionList';

function App() {
  return (
    <Container>
      <div class="primary">
        <br></br>
        <Typography variant="h1" component="div" color="text.main" align="center" >
          BankTrack
        </Typography>
        <br></br>
        <TransactionList />
      </div>
    </Container>
  );
}

export default App;