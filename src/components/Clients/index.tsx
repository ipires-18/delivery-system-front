import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Container, Flex, Toogle } from './styles';
import { Categories } from '../../types/Categories';
import { api } from '../../service/api';
import { Products } from '../../types/Products';
import { CardComponent } from '../Card/Card';
import { Dialog } from '../Dialog/Dialog';
import { Cart } from '../Cart/Cart';
import { Footer } from '../Footer/Footer';
import { Loading } from '../Loading/Loading';

export function Clients() {
  const [categories, setCategories] = useState<Categories[] | []>([]);
  const [productsByCategory, setProductsByCategory] = useState<Products[] | []>([]);
  const [defaultCategory, setDefaultCategory] = useState<string>('66db5c333d5f49ab58e647c7');
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    api.get('categories').then(({ data }) => {
      setCategories(data);
      setLoading(false);
    });
  },[]);

  useEffect(() => {
    api.get(`categories/${defaultCategory}/products`).then(({ data }) => {
      setProductsByCategory(data);
      setLoading(false);
    });
  },[]);

  function handleListProductsByCategory(productId: string) {
    setLoading(true);
    api.get(`categories/${productId}/products`).then(({ data }) => {
      setProductsByCategory(data);
      setDefaultCategory(data._id);
      setLoading(false);
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header title='Cardápio' subtitle='Anote o pedido do cliente agora mesmo!'/>
      <Container>
        <Flex>
          {categories.map(({ icon, name, _id }: Categories, index) => (
            <Toogle key={index} onClick={() => handleListProductsByCategory(_id)}>
              {icon} {name}
            </Toogle>
          ))}
          <Toogle primary onClick={openModal}>
            Tudo certo? Só fazer o seu pedido!
          </Toogle>
          <Dialog
            title='Informações do seu pedido'
            isOpen={isModalOpen}
            onClose={closeModal}
          >
            <Cart />
          </Dialog>
        </Flex>

        <Flex>
          {productsByCategory.map(({ _id, category, description, imagePath, ingredients, name, price }: Products, index) => (
            <CardComponent
              key={index}
              _id={_id}
              category={category}
              description={description}
              imagePath={imagePath}
              ingredients={ingredients}
              name={name}
              price={price}
            />
          ))}
        </Flex>
      </Container>
      <Footer />
    </>
  );
}
