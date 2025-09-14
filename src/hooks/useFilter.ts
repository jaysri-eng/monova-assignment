import { useState, useMemo } from "react";
import { INVENTORY } from "../data/inventory";

type Filters = {
  type?: string | null;
  style?: string | null;
  mood?: string | null;
  color?: string | null;
};

export const useFilters = () => {
  const [filters, setFilters] = useState<Filters>({});
  const inventory = INVENTORY;
  const toggleFilter = (key: keyof Filters, value?: string | null) => {
    setFilters(prev => {
      const newFilters: Filters = { type: null, style: null, mood: null, color: null };
      newFilters[key] = prev[key] === value ? null : value;
      return newFilters;
    });
  };


  const resetFilters = () => setFilters({});

  const filtered = useMemo(() => {
    return inventory.filter(item => {
      if (filters.color && item.color !== filters.color) return false;
      if (filters.style && item.style !== filters.style) return false;
      if (filters.type && !item.tags.includes(filters.type)) return false;
      if (filters.mood && !item.tags.includes(filters.mood)) return false;
      return true;
    });
  }, [filters, inventory]);

  return { filters, toggleFilter, resetFilters, filtered, inventory };
};
