export interface Query {
  minDate?: Date;
  maxDate?: Date;
  publisherName?: string[];
  publisherId?: null | number[];
  filterTags?: null | string[];
  filterUserTags?: string[];
}
