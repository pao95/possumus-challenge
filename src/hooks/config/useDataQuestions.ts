import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHttp } from '../useHttp';
import { hiddeLoader, showLoader } from '../../store/loaderSlice';
import { apiTrivia } from '../../api';
import { mapToQuestionI, Question, QuestionResponse } from '../../interfaces';
import { Config } from '../../context';

export const useDataQuestions = () => {
  const { sendRequest, error } = useHttp();
  const dispatch = useDispatch();

  const [dataQuestions, setDataQuestions] = useState<Question[]>([]);

  const getDataQuestion = async (params: Config) => {
    dispatch(showLoader());

    if (error) {
      // TODO: show message error
    }
    const result = await sendRequest<QuestionResponse>(apiTrivia.getQuestions(params));
    if (result?.results) {
      const mappedQuestions = mapToQuestionI(result.results);
      setDataQuestions(mappedQuestions);
    }
    dispatch(hiddeLoader());
  };

  const handleResetQuestions = () => {
    setDataQuestions([]);
  };

  return {
    getDataQuestion,
    dataQuestions,
    handleResetQuestions,
  };
};
