import useSWR from 'swr'
import styled from 'styled-components';
import Pokemon from './components/Pokemon.tsx'

// Styled div for the parent of all other divs
const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    background-color: #6b818c;
    border: 5px #cc2936 solid;
`;

function App() {
  const url = 'https://api.pokemontcg.io/v2/cards';
  // Fetch the pokemon data
  const {data, error} = useSWR(url, (url => fetch(url).then (res=>res.json())));

  if(error) return <h1>This {error} happened</h1>
  if (!data) return <h1>Loading...</h1>
  
  return (
    <ParentDiv>
      {/* call on the pokemon component to display all the pokemon */}
      <Pokemon data={data.data}/>
    </ParentDiv>
  )
}

export default App
