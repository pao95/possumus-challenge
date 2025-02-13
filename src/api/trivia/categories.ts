import { urlTriviaBase } from '../../config/urlBase';
import { apiRequest } from '../../hooks/useHttp';

const getCategories = (): apiRequest => {
  return {
    url: `${urlTriviaBase}/api_category.php`,
    options: {
      method: 'GET',
    },
  };
};

export const categories = {
  getCategories,
};
