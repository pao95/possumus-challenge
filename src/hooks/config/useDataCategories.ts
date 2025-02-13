import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHttp } from '../useHttp';
import { hiddeLoader, showLoader } from '../../store/loaderSlice';
import { apiTrivia } from '../../api';
import { CategoriesResponse, Category } from '../../interfaces';

export const useDataCategories = () => {
  const { sendRequest, error } = useHttp();

  const dispatch = useDispatch();
  const [dataCategories, setDataCategories] = useState<Category[]>([]);

  const getDataCategories = async () => {
    dispatch(showLoader());

    if (error) {
      // TODO: show message error
    }
    const result = await sendRequest<CategoriesResponse>(apiTrivia.getCategories());

    if (result?.trivia_categories) {
      setDataCategories(result?.trivia_categories);
    }
    dispatch(hiddeLoader());
  };

  useEffect(() => {
    getDataCategories();
  }, []);

  return {
    getDataCategories,
    dataCategories,
  };
};
