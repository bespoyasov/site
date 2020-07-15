export type DateTimeIsoString = string;
export type LocalizedDateString = string;

export type AbsoluteUrl = string;
export type UrlSlug = string;

export type List<TEntity> = TEntity[];
export type Dict<TValue> = Record<string, TValue>;

export type Nullable<TEntity> = TEntity | null;
export type Optional<TEntity> = TEntity | undefined;

export type AnyObject = Dict<unknown>;
