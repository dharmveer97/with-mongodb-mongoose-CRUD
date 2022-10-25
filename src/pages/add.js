import { useState } from 'react';
import { useRouter } from 'next/router';

import {
  Card,
  Spacer,
  Text,
  Container,
} from '@nextui-org/react';
import axios from 'axios';

import { Button, Input } from '../components/elements';
import Layout from '../components/Layout';

function AddNewHero() {
  const router = useRouter();

  const [form, setForm] = useState({
    superhero: '',
    realName: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = async (e) => {
    try {
      e.preventDefault();
      const res = await axios('http://localhost:3000/api/hero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(form),
      });
      if (res) {
        router.push('/');
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
  return (
    <Layout>
      <form onSubmit={handleForm}>
        <Container
          display="flex"
          alignItems="center"
          justify="center"
          css={{ minHeight: '70vh' }}
        >
          <Card css={{ mw: '420px', p: '20px' }} variant="bordered">
            <Text
              size={24}
              weight="bold"
              css={{
                as: 'center',
                mb: '20px',
              }}
            >
              Add a new Hero Identity
            </Text>
            <Input
              placeholder="SuperHero"
              onChange={handleChange}
              type="text"
              name="superHero"
            />
            <Spacer y={1} />
            <Input
              placeholder="Real Name"
              css={{ mb: '6px' }}
              onChange={handleChange}
              type="text"
              name="realName"
            />
            <Spacer y={1} />
            <Button type="submit">Add New Hero</Button>
          </Card>

        </Container>
      </form>
    </Layout>
  );
}

export default AddNewHero;
