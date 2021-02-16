import Landing from '../components/landing/Landing';
import Layout from '../components/layout/Layout';
import Meta from '../components/meta/Meta';

export default function Home() {
  return (
    <>
      <Meta title='blog - HOME' />
      <Layout>
        <Landing />
      </Layout>
    </>
  );
}
