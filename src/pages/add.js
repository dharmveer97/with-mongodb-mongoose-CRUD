import { useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
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
      <HeroForm
        onSubmit={handleChange}
        handleForm={handleForm}
        heading="Add a new Hero Identity"
      />
    </Layout>
  );
}

export default AddNewHero;
