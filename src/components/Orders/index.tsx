import {Container} from './styles';
import {OrdersBoard} from '../OrdersBoard';
import {Order} from '../../types/Order';
import {useEffect, useState} from 'react';
import {api} from '../../service/api';
import socketIo from 'socket.io-client';
import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import { Loading } from '../Loading/Loading';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.get('orders').then(({ data }) => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const io = socketIo(import.meta.env.VITE_API, {
      transports: ['websocket'],
    });

    io.on('order@new', (order) => {
      setOrders((prev) => [...prev, order]);
    });

    return () => {
      io.disconnect();
    };
  }, []);

  const waiting = orders.filter(({ status }) => status === 'WAITING');
  const inProduction = orders.filter(({ status }) => status === 'IN_PRODUCTION');
  const done = orders.filter(({ status }) => status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prev) => prev.filter(({_id}) => _id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prev) =>
      prev.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header title='Pedidos' subtitle='Acompanhe o pedido dos clientes!' />
      <Container>
        <OrdersBoard
          icon="🕑"
          title="Fila de espera"
          orders={waiting}
          onCancelOrder={handleCancelOrder}
          onOrderStatusChange={handleOrderStatusChange}
        />
        <OrdersBoard
          icon="👩‍🍳"
          title="Em preparação"
          orders={inProduction}
          onCancelOrder={handleCancelOrder}
          onOrderStatusChange={handleOrderStatusChange}
        />
        <OrdersBoard
          icon="✅"
          title="Pronto!"
          orders={done}
          onCancelOrder={handleCancelOrder}
          onOrderStatusChange={handleOrderStatusChange}
        />
      </Container>
      <Footer />
    </>
  );
}
