import Card from '../UI/Card';

const PokeItem = ({ poke }) => {
  return (
    <Card>
        {poke.name}
    </Card>
  );
};

export default PokeItem;