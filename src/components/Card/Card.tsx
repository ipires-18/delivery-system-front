import { Card, CardContent, CardFooter, CardHeader, Button } from './styles'
import { Products } from '../../types/Products';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCartStore } from '../../store/useCartStore';

export const CardComponent = ({
  _id,
  category,
  description,
  imagePath,
  ingredients,
  name,
  price
 }:Products) => {
  const {  addToCart, removeFromCart, getQuantity } = useCartStore();
  const quantity = getQuantity(_id)

  return (
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardContent>
        <img
          src={`${import.meta.env.VITE_API}uploads/${imagePath}`}
          alt={name}
          width="100%"
        />

       <div>
        Quantidade atual: <strong>{quantity}</strong>
       </div>

       <div>
        Descrição: <strong>{description}</strong>
       </div>

       <div>
        Ingredientes: {ingredients.map(props => (
          <strong key={props._id}>
            {props.icon}
          </strong>
        ))}
       </div>

       <div>
        Preço: <strong>{formatCurrency(price)}</strong>
       </div>

      </CardContent>
      <CardFooter>
        <Button
          onClick={() => addToCart({
            _id,
            category,
            description,
            imagePath,
            ingredients,
            name,
            price
          })}
        primary
        >
          Adicionar
        </Button>
        <Button
          onClick={() => removeFromCart({
            _id,
            category,
            description,
            imagePath,
            ingredients,
            name,
            price
          })}
        >
          Remover
        </Button>
      </CardFooter>
    </Card>
  );
};
