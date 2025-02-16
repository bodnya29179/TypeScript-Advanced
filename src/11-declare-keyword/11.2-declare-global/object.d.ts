interface ObjectConstructor {
  keys<T>(obj: T): T extends string | any[]
    ? `${number}`[]
    : T extends object
      ? (keyof T)[]
      : [];
}
