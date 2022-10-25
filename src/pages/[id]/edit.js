import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import config from '../../utils/config';

import Layout from '../../components/Layout';
import HeroForm from '../../components/forms/HeroForm';

function EditHero({ heros }) {
  const router = useRouter();
  const heroId = router?.query?.id;

  const [form, setForm] = useState({
    superHero: heros?.superHero,
    realName: heros?.realName,
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
      const res = await axios(`${config.apiUrl}/api/hero/${heroId}`, {
        method: 'PUT',
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
        title={heros?.superHero}
        description="Super heros in the world"
      />
      <HeroForm
        onSubmit={handleForm}
        handleChange={handleChange}
        initialValues={form}
        buttonText="Update Info"
        heading="Edit Identity"
      />
    </Layout>
  );
}

export async function getServerSideProps(params) {
  const { id } = params.params;
  const res = await axios(`${config.apiUrl}/api/hero/${id}`);
  const { hero } = res.data;
  return {
    props: { heros: hero }, // will be passed to the page component as props
  };
}

export default EditHero;
