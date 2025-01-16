import { questionnaireConfig } from '@/config';
import { GetStaticPaths } from 'next';
import { SCREEN_TYPES } from '@/constansts';
import { InfoScreen, SingleChoice } from '@/components';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = questionnaireConfig.questions.map((question) => ({
    params: { id: question.id },
  }));

  return { paths, fallback: false };
};

async function getQuestionByPage(id) {
  return questionnaireConfig.questions.find((q) => q.id === id);
}

interface QuestionPageProps {
  params: Promise<{ id: string }>;
}

const QuestionPage = async ({ params }: QuestionPageProps) => {
  const { questionId } = await params;
  // TODO as some type balow
  // console.log(question);
  const currentQuestion = await getQuestionByPage(questionId);

  // console.log('dsdsdsd', res);

  // const dispatch = useAppDispatch();
  // const router = useRouter();
  // const answers = useSelector((state) => state.questionnaire.answers);

  // const handleAnswer = (answer) => {
  //   dispatch(saveAnswer({ questionId: question.id, answer }));
  //   // Перехід до наступного питання
  //   const nextQuestion = questionnaireConfig.questions.ts.find(
  //     (q) => q.id === (parseInt(question.id) + 1).toString(),
  //   );
  //
  //   if (nextQuestion) {
  //     router.push(`/${nextQuestion.id}`);
  //   } else {
  //     router.push('/results');
  //   }
  // };
  // return <div>hello</div>;

  if (true) {
    return (
      // <div>test</div>
      <SingleChoice
        title={currentQuestion.title}
        subtitle={currentQuestion.subtitle}
        options={currentQuestion.options}
        // onAnswerSelect={() => {
        //   console.log('select!');
        // }}
      />
    );
  }

  // if (true) {
  //   return <InfoScreen />;
  // }

  return <h1>Ops, Something went wrong</h1>;
};

export default QuestionPage;
