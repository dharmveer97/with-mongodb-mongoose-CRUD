import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import config from '../utils/config';

import HeroForm from '../components/forms/HeroForm';
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
      const res = await axios(`${config.apiUrl}/api/hero`, {
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
      <NextSeo
        title="Add SuperHero"
        description="Super heros in the world"
      />
      <HeroForm
        onSubmit={handleForm}
        handleChange={handleChange}
        heading="Add a new Hero Identity"
      />
    </Layout>
  );
}

export default AddNewHero;
