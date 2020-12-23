import {useEffect} from 'react';
import {useQueryClient} from 'react-query';
import * as api from './Api';

const ReactQueryPrefetch = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetchCategory = async () => {
      await queryClient.prefetchQuery('category', api.getCategory);
    };
    prefetchCategory();
  }, [queryClient]);

  return null;
};

export default ReactQueryPrefetch;
