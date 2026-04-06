import { useEffect } from 'react';
import { restaurantData } from '../data/clientConfig';

export function useDynamicTitle(pageName: string) {
  useEffect(() => {
    document.title = `${restaurantData.name} | ${pageName}`;
  }, [pageName]);
}
