import { redirect } from 'next/navigation';

const Home = () => {
  redirect('/questions');
};

export default Home;
