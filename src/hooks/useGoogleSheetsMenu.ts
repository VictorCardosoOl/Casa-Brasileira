import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { restaurantData } from '../data/clientConfig';

export interface MenuItem {
  category?: string;
  name: string;
  description: string;
  price: string;
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

export function useGoogleSheetsMenu(fallbackMenu: MenuSection[]) {
  const [menu, setMenu] = useState<MenuSection[]>(fallbackMenu);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!restaurantData.menuCsvUrl) {
      return; // Usa o fallback se não houver URL
    }

    setLoading(true);
    Papa.parse(restaurantData.menuCsvUrl, {
      download: true,
      header: true,
      complete: (results) => {
        try {
          const parsedData = results.data as MenuItem[];
          
          // Agrupa os itens por categoria
          const groupedMenu: Record<string, MenuItem[]> = {};
          
          parsedData.forEach(item => {
            if (item.category && item.name) {
              if (!groupedMenu[item.category]) {
                groupedMenu[item.category] = [];
              }
              groupedMenu[item.category].push(item);
            }
          });

          // Transforma no formato MenuSection[]
          const finalMenu: MenuSection[] = Object.keys(groupedMenu).map(category => ({
            category,
            items: groupedMenu[category]
          }));

          if (finalMenu.length > 0) {
            setMenu(finalMenu);
          }
        } catch (err) {
          console.error("Erro ao processar CSV do menu:", err);
          setError("Falha ao carregar o menu atualizado.");
        } finally {
          setLoading(false);
        }
      },
      error: (err) => {
        console.error("Erro ao baixar CSV:", err);
        setError("Falha ao conectar com a planilha.");
        setLoading(false);
      }
    });
  }, []);

  return { menu, loading, error };
}
