import { urlTriviaBase } from '../../config/urlBase';
import { Config } from '../../context/game/gameContextI';
import { apiRequest } from '../../hooks/useHttp';

const getQuestions = ({ size, category, type, level }: Config): apiRequest => {
  return {
    url: `${urlTriviaBase}/api.php/?amount=${size}&category=${category}&difficulty=${level}&type=${type}`,
    options: {
      method: 'GET',
    },
  };
};

export const questions = {
  getQuestions,
};
