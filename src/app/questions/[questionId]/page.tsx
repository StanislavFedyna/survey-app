import { IntroductionScreen } from '@/components/IntroductionScreen/IntroductionScreen';
import { QuestionItem } from '@/components';

const QuestionPage = () => {
  // return <div>hello </div>;

  if ('question') {
    return <QuestionItem />;
  }

  if ('introduction') {
    return <IntroductionScreen />;
  }
};

export default QuestionPage;
