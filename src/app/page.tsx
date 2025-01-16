import { QuestionItem, Header } from '@/components';

import styles from './page.module.css';

export default function Home() {
  const handleAnswerSelect = () => {
    console.log('onAnswerSelect');
  };

  return (
    <div className={styles.testClass}>
      <Header />

      <QuestionItem
        title="So we can get to know you better, tell us about your relationship status."
        answers={[
          'I’m very unhappy with how things are going in my relationship',
          'I’m unhappy with parts of my relationship, but some things are working well',
          'I’m generally happy in my relationship',
        ]}
        // onAnswerSelect={handleAnswerSelect}
        activeAnswer={'one'}
      />
    </div>
  );
}
