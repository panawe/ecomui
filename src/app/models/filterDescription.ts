import { Filter } from '../models/filter';
import { Language } from '../models/language';

export class FilterDescription {
  id: number;
  name: string;
  language: Language;
  filter: Filter;
}