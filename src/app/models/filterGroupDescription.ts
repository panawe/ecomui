import { FilterGroup } from '../models/filterGroup';
import { Language } from '../models/language';

export class FilterDescription {
  id: number;
  name: string;
  language: Language;
  filterGroup: FilterGroup;
}