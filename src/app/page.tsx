import { redirect } from 'next/navigation';

import { DEFAULT_QUESTION, PAGE_URLS } from '@/constansts';

const Home = () => {
  redirect(PAGE_URLS.QUESTIONS(DEFAULT_QUESTION));
};

export default Home;
