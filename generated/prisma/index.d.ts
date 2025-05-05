
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Endeavor
 * 
 */
export type Endeavor = $Result.DefaultSelection<Prisma.$EndeavorPayload>
/**
 * Model Artifact
 * 
 */
export type Artifact = $Result.DefaultSelection<Prisma.$ArtifactPayload>
/**
 * Model Knowledge
 * 
 */
export type Knowledge = $Result.DefaultSelection<Prisma.$KnowledgePayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Characteristic
 * 
 */
export type Characteristic = $Result.DefaultSelection<Prisma.$CharacteristicPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Contribution
 * 
 */
export type Contribution = $Result.DefaultSelection<Prisma.$ContributionPayload>
/**
 * Model Collaborator
 * 
 */
export type Collaborator = $Result.DefaultSelection<Prisma.$CollaboratorPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BookRec
 * 
 */
export type BookRec = $Result.DefaultSelection<Prisma.$BookRecPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  PERSONAL_DEVELOPMENT: 'PERSONAL_DEVELOPMENT',
  SPORT: 'SPORT',
  DEEP_TECH: 'DEEP_TECH',
  OUTDOORS: 'OUTDOORS',
  COMMUNITY_TECH: 'COMMUNITY_TECH'
};

export type Category = (typeof Category)[keyof typeof Category]


export const EducationLevel: {
  K_8: 'K_8',
  HIGH_SCHOOL: 'HIGH_SCHOOL',
  COLLEGE: 'COLLEGE',
  GRADUATE: 'GRADUATE'
};

export type EducationLevel = (typeof EducationLevel)[keyof typeof EducationLevel]


export const ReasonForReading: {
  PLEASURE: 'PLEASURE',
  ACADEMICS: 'ACADEMICS'
};

export type ReasonForReading = (typeof ReasonForReading)[keyof typeof ReasonForReading]


export const Term: {
  FULL: 'FULL',
  FALL: 'FALL',
  SPRING: 'SPRING'
};

export type Term = (typeof Term)[keyof typeof Term]


export const CollaboratorType: {
  MENTOR: 'MENTOR',
  COLLABORATOR: 'COLLABORATOR',
  PROFESSOR: 'PROFESSOR'
};

export type CollaboratorType = (typeof CollaboratorType)[keyof typeof CollaboratorType]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type EducationLevel = $Enums.EducationLevel

export const EducationLevel: typeof $Enums.EducationLevel

export type ReasonForReading = $Enums.ReasonForReading

export const ReasonForReading: typeof $Enums.ReasonForReading

export type Term = $Enums.Term

export const Term: typeof $Enums.Term

export type CollaboratorType = $Enums.CollaboratorType

export const CollaboratorType: typeof $Enums.CollaboratorType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Endeavors
 * const endeavors = await prisma.endeavor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Endeavors
   * const endeavors = await prisma.endeavor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.endeavor`: Exposes CRUD operations for the **Endeavor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endeavors
    * const endeavors = await prisma.endeavor.findMany()
    * ```
    */
  get endeavor(): Prisma.EndeavorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artifact`: Exposes CRUD operations for the **Artifact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artifacts
    * const artifacts = await prisma.artifact.findMany()
    * ```
    */
  get artifact(): Prisma.ArtifactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledge`: Exposes CRUD operations for the **Knowledge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Knowledges
    * const knowledges = await prisma.knowledge.findMany()
    * ```
    */
  get knowledge(): Prisma.KnowledgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characteristic`: Exposes CRUD operations for the **Characteristic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characteristics
    * const characteristics = await prisma.characteristic.findMany()
    * ```
    */
  get characteristic(): Prisma.CharacteristicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contribution`: Exposes CRUD operations for the **Contribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contributions
    * const contributions = await prisma.contribution.findMany()
    * ```
    */
  get contribution(): Prisma.ContributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collaborator`: Exposes CRUD operations for the **Collaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborators
    * const collaborators = await prisma.collaborator.findMany()
    * ```
    */
  get collaborator(): Prisma.CollaboratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookRec`: Exposes CRUD operations for the **BookRec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookRecs
    * const bookRecs = await prisma.bookRec.findMany()
    * ```
    */
  get bookRec(): Prisma.BookRecDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Endeavor: 'Endeavor',
    Artifact: 'Artifact',
    Knowledge: 'Knowledge',
    Class: 'Class',
    Characteristic: 'Characteristic',
    Skill: 'Skill',
    Contribution: 'Contribution',
    Collaborator: 'Collaborator',
    Book: 'Book',
    BookRec: 'BookRec'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "endeavor" | "artifact" | "knowledge" | "class" | "characteristic" | "skill" | "contribution" | "collaborator" | "book" | "bookRec"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Endeavor: {
        payload: Prisma.$EndeavorPayload<ExtArgs>
        fields: Prisma.EndeavorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EndeavorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EndeavorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload>
          }
          findFirst: {
            args: Prisma.EndeavorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EndeavorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload>
          }
          findMany: {
            args: Prisma.EndeavorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload>[]
          }
          create: {
            args: Prisma.EndeavorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload>
          }
          createMany: {
            args: Prisma.EndeavorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EndeavorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload>[]
          }
          delete: {
            args: Prisma.EndeavorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload>
          }
          update: {
            args: Prisma.EndeavorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload>
          }
          deleteMany: {
            args: Prisma.EndeavorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EndeavorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EndeavorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload>[]
          }
          upsert: {
            args: Prisma.EndeavorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndeavorPayload>
          }
          aggregate: {
            args: Prisma.EndeavorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndeavor>
          }
          groupBy: {
            args: Prisma.EndeavorGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndeavorGroupByOutputType>[]
          }
          count: {
            args: Prisma.EndeavorCountArgs<ExtArgs>
            result: $Utils.Optional<EndeavorCountAggregateOutputType> | number
          }
        }
      }
      Artifact: {
        payload: Prisma.$ArtifactPayload<ExtArgs>
        fields: Prisma.ArtifactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtifactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtifactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          findFirst: {
            args: Prisma.ArtifactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtifactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          findMany: {
            args: Prisma.ArtifactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          create: {
            args: Prisma.ArtifactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          createMany: {
            args: Prisma.ArtifactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtifactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          delete: {
            args: Prisma.ArtifactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          update: {
            args: Prisma.ArtifactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          deleteMany: {
            args: Prisma.ArtifactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtifactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtifactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          upsert: {
            args: Prisma.ArtifactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          aggregate: {
            args: Prisma.ArtifactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtifact>
          }
          groupBy: {
            args: Prisma.ArtifactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtifactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtifactCountArgs<ExtArgs>
            result: $Utils.Optional<ArtifactCountAggregateOutputType> | number
          }
        }
      }
      Knowledge: {
        payload: Prisma.$KnowledgePayload<ExtArgs>
        fields: Prisma.KnowledgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          findFirst: {
            args: Prisma.KnowledgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          findMany: {
            args: Prisma.KnowledgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>[]
          }
          create: {
            args: Prisma.KnowledgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          createMany: {
            args: Prisma.KnowledgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>[]
          }
          delete: {
            args: Prisma.KnowledgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          update: {
            args: Prisma.KnowledgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          aggregate: {
            args: Prisma.KnowledgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledge>
          }
          groupBy: {
            args: Prisma.KnowledgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Characteristic: {
        payload: Prisma.$CharacteristicPayload<ExtArgs>
        fields: Prisma.CharacteristicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacteristicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacteristicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          findFirst: {
            args: Prisma.CharacteristicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacteristicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          findMany: {
            args: Prisma.CharacteristicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>[]
          }
          create: {
            args: Prisma.CharacteristicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          createMany: {
            args: Prisma.CharacteristicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacteristicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>[]
          }
          delete: {
            args: Prisma.CharacteristicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          update: {
            args: Prisma.CharacteristicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          deleteMany: {
            args: Prisma.CharacteristicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacteristicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacteristicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>[]
          }
          upsert: {
            args: Prisma.CharacteristicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          aggregate: {
            args: Prisma.CharacteristicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacteristic>
          }
          groupBy: {
            args: Prisma.CharacteristicGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacteristicGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacteristicCountArgs<ExtArgs>
            result: $Utils.Optional<CharacteristicCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Contribution: {
        payload: Prisma.$ContributionPayload<ExtArgs>
        fields: Prisma.ContributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findFirst: {
            args: Prisma.ContributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findMany: {
            args: Prisma.ContributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          create: {
            args: Prisma.ContributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          createMany: {
            args: Prisma.ContributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          delete: {
            args: Prisma.ContributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          update: {
            args: Prisma.ContributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          deleteMany: {
            args: Prisma.ContributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          upsert: {
            args: Prisma.ContributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          aggregate: {
            args: Prisma.ContributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContribution>
          }
          groupBy: {
            args: Prisma.ContributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContributionCountArgs<ExtArgs>
            result: $Utils.Optional<ContributionCountAggregateOutputType> | number
          }
        }
      }
      Collaborator: {
        payload: Prisma.$CollaboratorPayload<ExtArgs>
        fields: Prisma.CollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findFirst: {
            args: Prisma.CollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findMany: {
            args: Prisma.CollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          create: {
            args: Prisma.CollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          createMany: {
            args: Prisma.CollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          delete: {
            args: Prisma.CollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          update: {
            args: Prisma.CollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.CollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          upsert: {
            args: Prisma.CollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          aggregate: {
            args: Prisma.CollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaborator>
          }
          groupBy: {
            args: Prisma.CollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BookRec: {
        payload: Prisma.$BookRecPayload<ExtArgs>
        fields: Prisma.BookRecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookRecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookRecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload>
          }
          findFirst: {
            args: Prisma.BookRecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookRecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload>
          }
          findMany: {
            args: Prisma.BookRecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload>[]
          }
          create: {
            args: Prisma.BookRecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload>
          }
          createMany: {
            args: Prisma.BookRecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookRecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload>[]
          }
          delete: {
            args: Prisma.BookRecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload>
          }
          update: {
            args: Prisma.BookRecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload>
          }
          deleteMany: {
            args: Prisma.BookRecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookRecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookRecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload>[]
          }
          upsert: {
            args: Prisma.BookRecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookRecPayload>
          }
          aggregate: {
            args: Prisma.BookRecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookRec>
          }
          groupBy: {
            args: Prisma.BookRecGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookRecGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookRecCountArgs<ExtArgs>
            result: $Utils.Optional<BookRecCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    endeavor?: EndeavorOmit
    artifact?: ArtifactOmit
    knowledge?: KnowledgeOmit
    class?: ClassOmit
    characteristic?: CharacteristicOmit
    skill?: SkillOmit
    contribution?: ContributionOmit
    collaborator?: CollaboratorOmit
    book?: BookOmit
    bookRec?: BookRecOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EndeavorCountOutputType
   */

  export type EndeavorCountOutputType = {
    artifacts: number
    contributions: number
    mentors: number
  }

  export type EndeavorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifacts?: boolean | EndeavorCountOutputTypeCountArtifactsArgs
    contributions?: boolean | EndeavorCountOutputTypeCountContributionsArgs
    mentors?: boolean | EndeavorCountOutputTypeCountMentorsArgs
  }

  // Custom InputTypes
  /**
   * EndeavorCountOutputType without action
   */
  export type EndeavorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndeavorCountOutputType
     */
    select?: EndeavorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EndeavorCountOutputType without action
   */
  export type EndeavorCountOutputTypeCountArtifactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactWhereInput
  }

  /**
   * EndeavorCountOutputType without action
   */
  export type EndeavorCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }

  /**
   * EndeavorCountOutputType without action
   */
  export type EndeavorCountOutputTypeCountMentorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
  }


  /**
   * Count Type ArtifactCountOutputType
   */

  export type ArtifactCountOutputType = {
    contributions: number
    collaborators: number
  }

  export type ArtifactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | ArtifactCountOutputTypeCountContributionsArgs
    collaborators?: boolean | ArtifactCountOutputTypeCountCollaboratorsArgs
  }

  // Custom InputTypes
  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactCountOutputType
     */
    select?: ArtifactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }

  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
  }


  /**
   * Count Type KnowledgeCountOutputType
   */

  export type KnowledgeCountOutputType = {
    classes: number
  }

  export type KnowledgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | KnowledgeCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * KnowledgeCountOutputType without action
   */
  export type KnowledgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeCountOutputType
     */
    select?: KnowledgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KnowledgeCountOutputType without action
   */
  export type KnowledgeCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    professor: number
    artifacts: number
    contributions: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ClassCountOutputTypeCountProfessorArgs
    artifacts?: boolean | ClassCountOutputTypeCountArtifactsArgs
    contributions?: boolean | ClassCountOutputTypeCountContributionsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountProfessorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountArtifactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }


  /**
   * Count Type CharacteristicCountOutputType
   */

  export type CharacteristicCountOutputType = {
    contributions: number
  }

  export type CharacteristicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | CharacteristicCountOutputTypeCountContributionsArgs
  }

  // Custom InputTypes
  /**
   * CharacteristicCountOutputType without action
   */
  export type CharacteristicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacteristicCountOutputType
     */
    select?: CharacteristicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacteristicCountOutputType without action
   */
  export type CharacteristicCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    contributions: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | SkillCountOutputTypeCountContributionsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }


  /**
   * Count Type CollaboratorCountOutputType
   */

  export type CollaboratorCountOutputType = {
    artifacts: number
    endeavors: number
    classes: number
  }

  export type CollaboratorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifacts?: boolean | CollaboratorCountOutputTypeCountArtifactsArgs
    endeavors?: boolean | CollaboratorCountOutputTypeCountEndeavorsArgs
    classes?: boolean | CollaboratorCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * CollaboratorCountOutputType without action
   */
  export type CollaboratorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorCountOutputType
     */
    select?: CollaboratorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollaboratorCountOutputType without action
   */
  export type CollaboratorCountOutputTypeCountArtifactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactWhereInput
  }

  /**
   * CollaboratorCountOutputType without action
   */
  export type CollaboratorCountOutputTypeCountEndeavorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndeavorWhereInput
  }

  /**
   * CollaboratorCountOutputType without action
   */
  export type CollaboratorCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Endeavor
   */

  export type AggregateEndeavor = {
    _count: EndeavorCountAggregateOutputType | null
    _min: EndeavorMinAggregateOutputType | null
    _max: EndeavorMaxAggregateOutputType | null
  }

  export type EndeavorMinAggregateOutputType = {
    id: string | null
    entity: string | null
    title: string | null
    description: string | null
    link: string | null
    imageUrl: string | null
    startDate: Date | null
    endDate: Date | null
    category: $Enums.Category | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EndeavorMaxAggregateOutputType = {
    id: string | null
    entity: string | null
    title: string | null
    description: string | null
    link: string | null
    imageUrl: string | null
    startDate: Date | null
    endDate: Date | null
    category: $Enums.Category | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EndeavorCountAggregateOutputType = {
    id: number
    entity: number
    title: number
    description: number
    link: number
    imageUrl: number
    startDate: number
    endDate: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EndeavorMinAggregateInputType = {
    id?: true
    entity?: true
    title?: true
    description?: true
    link?: true
    imageUrl?: true
    startDate?: true
    endDate?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EndeavorMaxAggregateInputType = {
    id?: true
    entity?: true
    title?: true
    description?: true
    link?: true
    imageUrl?: true
    startDate?: true
    endDate?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EndeavorCountAggregateInputType = {
    id?: true
    entity?: true
    title?: true
    description?: true
    link?: true
    imageUrl?: true
    startDate?: true
    endDate?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EndeavorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endeavor to aggregate.
     */
    where?: EndeavorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endeavors to fetch.
     */
    orderBy?: EndeavorOrderByWithRelationInput | EndeavorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EndeavorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endeavors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endeavors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Endeavors
    **/
    _count?: true | EndeavorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndeavorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndeavorMaxAggregateInputType
  }

  export type GetEndeavorAggregateType<T extends EndeavorAggregateArgs> = {
        [P in keyof T & keyof AggregateEndeavor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndeavor[P]>
      : GetScalarType<T[P], AggregateEndeavor[P]>
  }




  export type EndeavorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndeavorWhereInput
    orderBy?: EndeavorOrderByWithAggregationInput | EndeavorOrderByWithAggregationInput[]
    by: EndeavorScalarFieldEnum[] | EndeavorScalarFieldEnum
    having?: EndeavorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndeavorCountAggregateInputType | true
    _min?: EndeavorMinAggregateInputType
    _max?: EndeavorMaxAggregateInputType
  }

  export type EndeavorGroupByOutputType = {
    id: string
    entity: string
    title: string
    description: string
    link: string | null
    imageUrl: string | null
    startDate: Date
    endDate: Date | null
    category: $Enums.Category
    createdAt: Date
    updatedAt: Date
    _count: EndeavorCountAggregateOutputType | null
    _min: EndeavorMinAggregateOutputType | null
    _max: EndeavorMaxAggregateOutputType | null
  }

  type GetEndeavorGroupByPayload<T extends EndeavorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndeavorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndeavorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndeavorGroupByOutputType[P]>
            : GetScalarType<T[P], EndeavorGroupByOutputType[P]>
        }
      >
    >


  export type EndeavorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artifacts?: boolean | Endeavor$artifactsArgs<ExtArgs>
    contributions?: boolean | Endeavor$contributionsArgs<ExtArgs>
    mentors?: boolean | Endeavor$mentorsArgs<ExtArgs>
    _count?: boolean | EndeavorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endeavor"]>

  export type EndeavorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["endeavor"]>

  export type EndeavorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["endeavor"]>

  export type EndeavorSelectScalar = {
    id?: boolean
    entity?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EndeavorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entity" | "title" | "description" | "link" | "imageUrl" | "startDate" | "endDate" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["endeavor"]>
  export type EndeavorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifacts?: boolean | Endeavor$artifactsArgs<ExtArgs>
    contributions?: boolean | Endeavor$contributionsArgs<ExtArgs>
    mentors?: boolean | Endeavor$mentorsArgs<ExtArgs>
    _count?: boolean | EndeavorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EndeavorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EndeavorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EndeavorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endeavor"
    objects: {
      artifacts: Prisma.$ArtifactPayload<ExtArgs>[]
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
      mentors: Prisma.$CollaboratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entity: string
      title: string
      description: string
      link: string | null
      imageUrl: string | null
      startDate: Date
      endDate: Date | null
      category: $Enums.Category
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["endeavor"]>
    composites: {}
  }

  type EndeavorGetPayload<S extends boolean | null | undefined | EndeavorDefaultArgs> = $Result.GetResult<Prisma.$EndeavorPayload, S>

  type EndeavorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EndeavorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndeavorCountAggregateInputType | true
    }

  export interface EndeavorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endeavor'], meta: { name: 'Endeavor' } }
    /**
     * Find zero or one Endeavor that matches the filter.
     * @param {EndeavorFindUniqueArgs} args - Arguments to find a Endeavor
     * @example
     * // Get one Endeavor
     * const endeavor = await prisma.endeavor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EndeavorFindUniqueArgs>(args: SelectSubset<T, EndeavorFindUniqueArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endeavor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EndeavorFindUniqueOrThrowArgs} args - Arguments to find a Endeavor
     * @example
     * // Get one Endeavor
     * const endeavor = await prisma.endeavor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EndeavorFindUniqueOrThrowArgs>(args: SelectSubset<T, EndeavorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endeavor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndeavorFindFirstArgs} args - Arguments to find a Endeavor
     * @example
     * // Get one Endeavor
     * const endeavor = await prisma.endeavor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EndeavorFindFirstArgs>(args?: SelectSubset<T, EndeavorFindFirstArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endeavor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndeavorFindFirstOrThrowArgs} args - Arguments to find a Endeavor
     * @example
     * // Get one Endeavor
     * const endeavor = await prisma.endeavor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EndeavorFindFirstOrThrowArgs>(args?: SelectSubset<T, EndeavorFindFirstOrThrowArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endeavors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndeavorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endeavors
     * const endeavors = await prisma.endeavor.findMany()
     * 
     * // Get first 10 Endeavors
     * const endeavors = await prisma.endeavor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endeavorWithIdOnly = await prisma.endeavor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EndeavorFindManyArgs>(args?: SelectSubset<T, EndeavorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endeavor.
     * @param {EndeavorCreateArgs} args - Arguments to create a Endeavor.
     * @example
     * // Create one Endeavor
     * const Endeavor = await prisma.endeavor.create({
     *   data: {
     *     // ... data to create a Endeavor
     *   }
     * })
     * 
     */
    create<T extends EndeavorCreateArgs>(args: SelectSubset<T, EndeavorCreateArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endeavors.
     * @param {EndeavorCreateManyArgs} args - Arguments to create many Endeavors.
     * @example
     * // Create many Endeavors
     * const endeavor = await prisma.endeavor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EndeavorCreateManyArgs>(args?: SelectSubset<T, EndeavorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Endeavors and returns the data saved in the database.
     * @param {EndeavorCreateManyAndReturnArgs} args - Arguments to create many Endeavors.
     * @example
     * // Create many Endeavors
     * const endeavor = await prisma.endeavor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Endeavors and only return the `id`
     * const endeavorWithIdOnly = await prisma.endeavor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EndeavorCreateManyAndReturnArgs>(args?: SelectSubset<T, EndeavorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endeavor.
     * @param {EndeavorDeleteArgs} args - Arguments to delete one Endeavor.
     * @example
     * // Delete one Endeavor
     * const Endeavor = await prisma.endeavor.delete({
     *   where: {
     *     // ... filter to delete one Endeavor
     *   }
     * })
     * 
     */
    delete<T extends EndeavorDeleteArgs>(args: SelectSubset<T, EndeavorDeleteArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endeavor.
     * @param {EndeavorUpdateArgs} args - Arguments to update one Endeavor.
     * @example
     * // Update one Endeavor
     * const endeavor = await prisma.endeavor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EndeavorUpdateArgs>(args: SelectSubset<T, EndeavorUpdateArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endeavors.
     * @param {EndeavorDeleteManyArgs} args - Arguments to filter Endeavors to delete.
     * @example
     * // Delete a few Endeavors
     * const { count } = await prisma.endeavor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EndeavorDeleteManyArgs>(args?: SelectSubset<T, EndeavorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endeavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndeavorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endeavors
     * const endeavor = await prisma.endeavor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EndeavorUpdateManyArgs>(args: SelectSubset<T, EndeavorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endeavors and returns the data updated in the database.
     * @param {EndeavorUpdateManyAndReturnArgs} args - Arguments to update many Endeavors.
     * @example
     * // Update many Endeavors
     * const endeavor = await prisma.endeavor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Endeavors and only return the `id`
     * const endeavorWithIdOnly = await prisma.endeavor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EndeavorUpdateManyAndReturnArgs>(args: SelectSubset<T, EndeavorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endeavor.
     * @param {EndeavorUpsertArgs} args - Arguments to update or create a Endeavor.
     * @example
     * // Update or create a Endeavor
     * const endeavor = await prisma.endeavor.upsert({
     *   create: {
     *     // ... data to create a Endeavor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endeavor we want to update
     *   }
     * })
     */
    upsert<T extends EndeavorUpsertArgs>(args: SelectSubset<T, EndeavorUpsertArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endeavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndeavorCountArgs} args - Arguments to filter Endeavors to count.
     * @example
     * // Count the number of Endeavors
     * const count = await prisma.endeavor.count({
     *   where: {
     *     // ... the filter for the Endeavors we want to count
     *   }
     * })
    **/
    count<T extends EndeavorCountArgs>(
      args?: Subset<T, EndeavorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndeavorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endeavor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndeavorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EndeavorAggregateArgs>(args: Subset<T, EndeavorAggregateArgs>): Prisma.PrismaPromise<GetEndeavorAggregateType<T>>

    /**
     * Group by Endeavor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndeavorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EndeavorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EndeavorGroupByArgs['orderBy'] }
        : { orderBy?: EndeavorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EndeavorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndeavorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endeavor model
   */
  readonly fields: EndeavorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endeavor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EndeavorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artifacts<T extends Endeavor$artifactsArgs<ExtArgs> = {}>(args?: Subset<T, Endeavor$artifactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributions<T extends Endeavor$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, Endeavor$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentors<T extends Endeavor$mentorsArgs<ExtArgs> = {}>(args?: Subset<T, Endeavor$mentorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Endeavor model
   */
  interface EndeavorFieldRefs {
    readonly id: FieldRef<"Endeavor", 'String'>
    readonly entity: FieldRef<"Endeavor", 'String'>
    readonly title: FieldRef<"Endeavor", 'String'>
    readonly description: FieldRef<"Endeavor", 'String'>
    readonly link: FieldRef<"Endeavor", 'String'>
    readonly imageUrl: FieldRef<"Endeavor", 'String'>
    readonly startDate: FieldRef<"Endeavor", 'DateTime'>
    readonly endDate: FieldRef<"Endeavor", 'DateTime'>
    readonly category: FieldRef<"Endeavor", 'Category'>
    readonly createdAt: FieldRef<"Endeavor", 'DateTime'>
    readonly updatedAt: FieldRef<"Endeavor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Endeavor findUnique
   */
  export type EndeavorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    /**
     * Filter, which Endeavor to fetch.
     */
    where: EndeavorWhereUniqueInput
  }

  /**
   * Endeavor findUniqueOrThrow
   */
  export type EndeavorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    /**
     * Filter, which Endeavor to fetch.
     */
    where: EndeavorWhereUniqueInput
  }

  /**
   * Endeavor findFirst
   */
  export type EndeavorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    /**
     * Filter, which Endeavor to fetch.
     */
    where?: EndeavorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endeavors to fetch.
     */
    orderBy?: EndeavorOrderByWithRelationInput | EndeavorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endeavors.
     */
    cursor?: EndeavorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endeavors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endeavors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endeavors.
     */
    distinct?: EndeavorScalarFieldEnum | EndeavorScalarFieldEnum[]
  }

  /**
   * Endeavor findFirstOrThrow
   */
  export type EndeavorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    /**
     * Filter, which Endeavor to fetch.
     */
    where?: EndeavorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endeavors to fetch.
     */
    orderBy?: EndeavorOrderByWithRelationInput | EndeavorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endeavors.
     */
    cursor?: EndeavorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endeavors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endeavors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endeavors.
     */
    distinct?: EndeavorScalarFieldEnum | EndeavorScalarFieldEnum[]
  }

  /**
   * Endeavor findMany
   */
  export type EndeavorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    /**
     * Filter, which Endeavors to fetch.
     */
    where?: EndeavorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endeavors to fetch.
     */
    orderBy?: EndeavorOrderByWithRelationInput | EndeavorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Endeavors.
     */
    cursor?: EndeavorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endeavors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endeavors.
     */
    skip?: number
    distinct?: EndeavorScalarFieldEnum | EndeavorScalarFieldEnum[]
  }

  /**
   * Endeavor create
   */
  export type EndeavorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    /**
     * The data needed to create a Endeavor.
     */
    data: XOR<EndeavorCreateInput, EndeavorUncheckedCreateInput>
  }

  /**
   * Endeavor createMany
   */
  export type EndeavorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Endeavors.
     */
    data: EndeavorCreateManyInput | EndeavorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endeavor createManyAndReturn
   */
  export type EndeavorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * The data used to create many Endeavors.
     */
    data: EndeavorCreateManyInput | EndeavorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endeavor update
   */
  export type EndeavorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    /**
     * The data needed to update a Endeavor.
     */
    data: XOR<EndeavorUpdateInput, EndeavorUncheckedUpdateInput>
    /**
     * Choose, which Endeavor to update.
     */
    where: EndeavorWhereUniqueInput
  }

  /**
   * Endeavor updateMany
   */
  export type EndeavorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Endeavors.
     */
    data: XOR<EndeavorUpdateManyMutationInput, EndeavorUncheckedUpdateManyInput>
    /**
     * Filter which Endeavors to update
     */
    where?: EndeavorWhereInput
    /**
     * Limit how many Endeavors to update.
     */
    limit?: number
  }

  /**
   * Endeavor updateManyAndReturn
   */
  export type EndeavorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * The data used to update Endeavors.
     */
    data: XOR<EndeavorUpdateManyMutationInput, EndeavorUncheckedUpdateManyInput>
    /**
     * Filter which Endeavors to update
     */
    where?: EndeavorWhereInput
    /**
     * Limit how many Endeavors to update.
     */
    limit?: number
  }

  /**
   * Endeavor upsert
   */
  export type EndeavorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    /**
     * The filter to search for the Endeavor to update in case it exists.
     */
    where: EndeavorWhereUniqueInput
    /**
     * In case the Endeavor found by the `where` argument doesn't exist, create a new Endeavor with this data.
     */
    create: XOR<EndeavorCreateInput, EndeavorUncheckedCreateInput>
    /**
     * In case the Endeavor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EndeavorUpdateInput, EndeavorUncheckedUpdateInput>
  }

  /**
   * Endeavor delete
   */
  export type EndeavorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    /**
     * Filter which Endeavor to delete.
     */
    where: EndeavorWhereUniqueInput
  }

  /**
   * Endeavor deleteMany
   */
  export type EndeavorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endeavors to delete
     */
    where?: EndeavorWhereInput
    /**
     * Limit how many Endeavors to delete.
     */
    limit?: number
  }

  /**
   * Endeavor.artifacts
   */
  export type Endeavor$artifactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    where?: ArtifactWhereInput
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    cursor?: ArtifactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Endeavor.contributions
   */
  export type Endeavor$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Endeavor.mentors
   */
  export type Endeavor$mentorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    cursor?: CollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Endeavor without action
   */
  export type EndeavorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
  }


  /**
   * Model Artifact
   */

  export type AggregateArtifact = {
    _count: ArtifactCountAggregateOutputType | null
    _min: ArtifactMinAggregateOutputType | null
    _max: ArtifactMaxAggregateOutputType | null
  }

  export type ArtifactMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    link: string | null
    completionDate: Date | null
    endeavorId: string | null
    classId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtifactMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    link: string | null
    completionDate: Date | null
    endeavorId: string | null
    classId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtifactCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    link: number
    completionDate: number
    endeavorId: number
    classId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtifactMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    link?: true
    completionDate?: true
    endeavorId?: true
    classId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtifactMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    link?: true
    completionDate?: true
    endeavorId?: true
    classId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtifactCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    link?: true
    completionDate?: true
    endeavorId?: true
    classId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtifactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artifact to aggregate.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artifacts
    **/
    _count?: true | ArtifactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtifactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtifactMaxAggregateInputType
  }

  export type GetArtifactAggregateType<T extends ArtifactAggregateArgs> = {
        [P in keyof T & keyof AggregateArtifact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtifact[P]>
      : GetScalarType<T[P], AggregateArtifact[P]>
  }




  export type ArtifactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactWhereInput
    orderBy?: ArtifactOrderByWithAggregationInput | ArtifactOrderByWithAggregationInput[]
    by: ArtifactScalarFieldEnum[] | ArtifactScalarFieldEnum
    having?: ArtifactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtifactCountAggregateInputType | true
    _min?: ArtifactMinAggregateInputType
    _max?: ArtifactMaxAggregateInputType
  }

  export type ArtifactGroupByOutputType = {
    id: string
    title: string
    description: string
    imageUrl: string | null
    link: string | null
    completionDate: Date
    endeavorId: string | null
    classId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ArtifactCountAggregateOutputType | null
    _min: ArtifactMinAggregateOutputType | null
    _max: ArtifactMaxAggregateOutputType | null
  }

  type GetArtifactGroupByPayload<T extends ArtifactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtifactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtifactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtifactGroupByOutputType[P]>
            : GetScalarType<T[P], ArtifactGroupByOutputType[P]>
        }
      >
    >


  export type ArtifactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    link?: boolean
    completionDate?: boolean
    endeavorId?: boolean
    classId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endeavor?: boolean | Artifact$endeavorArgs<ExtArgs>
    class?: boolean | Artifact$classArgs<ExtArgs>
    contributions?: boolean | Artifact$contributionsArgs<ExtArgs>
    collaborators?: boolean | Artifact$collaboratorsArgs<ExtArgs>
    _count?: boolean | ArtifactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    link?: boolean
    completionDate?: boolean
    endeavorId?: boolean
    classId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endeavor?: boolean | Artifact$endeavorArgs<ExtArgs>
    class?: boolean | Artifact$classArgs<ExtArgs>
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    link?: boolean
    completionDate?: boolean
    endeavorId?: boolean
    classId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endeavor?: boolean | Artifact$endeavorArgs<ExtArgs>
    class?: boolean | Artifact$classArgs<ExtArgs>
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    link?: boolean
    completionDate?: boolean
    endeavorId?: boolean
    classId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtifactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "link" | "completionDate" | "endeavorId" | "classId" | "createdAt" | "updatedAt", ExtArgs["result"]["artifact"]>
  export type ArtifactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endeavor?: boolean | Artifact$endeavorArgs<ExtArgs>
    class?: boolean | Artifact$classArgs<ExtArgs>
    contributions?: boolean | Artifact$contributionsArgs<ExtArgs>
    collaborators?: boolean | Artifact$collaboratorsArgs<ExtArgs>
    _count?: boolean | ArtifactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtifactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endeavor?: boolean | Artifact$endeavorArgs<ExtArgs>
    class?: boolean | Artifact$classArgs<ExtArgs>
  }
  export type ArtifactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endeavor?: boolean | Artifact$endeavorArgs<ExtArgs>
    class?: boolean | Artifact$classArgs<ExtArgs>
  }

  export type $ArtifactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artifact"
    objects: {
      endeavor: Prisma.$EndeavorPayload<ExtArgs> | null
      class: Prisma.$ClassPayload<ExtArgs> | null
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
      collaborators: Prisma.$CollaboratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      imageUrl: string | null
      link: string | null
      completionDate: Date
      endeavorId: string | null
      classId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artifact"]>
    composites: {}
  }

  type ArtifactGetPayload<S extends boolean | null | undefined | ArtifactDefaultArgs> = $Result.GetResult<Prisma.$ArtifactPayload, S>

  type ArtifactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtifactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtifactCountAggregateInputType | true
    }

  export interface ArtifactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artifact'], meta: { name: 'Artifact' } }
    /**
     * Find zero or one Artifact that matches the filter.
     * @param {ArtifactFindUniqueArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtifactFindUniqueArgs>(args: SelectSubset<T, ArtifactFindUniqueArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artifact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtifactFindUniqueOrThrowArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtifactFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtifactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artifact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindFirstArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtifactFindFirstArgs>(args?: SelectSubset<T, ArtifactFindFirstArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artifact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindFirstOrThrowArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtifactFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtifactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artifacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artifacts
     * const artifacts = await prisma.artifact.findMany()
     * 
     * // Get first 10 Artifacts
     * const artifacts = await prisma.artifact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artifactWithIdOnly = await prisma.artifact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtifactFindManyArgs>(args?: SelectSubset<T, ArtifactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artifact.
     * @param {ArtifactCreateArgs} args - Arguments to create a Artifact.
     * @example
     * // Create one Artifact
     * const Artifact = await prisma.artifact.create({
     *   data: {
     *     // ... data to create a Artifact
     *   }
     * })
     * 
     */
    create<T extends ArtifactCreateArgs>(args: SelectSubset<T, ArtifactCreateArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artifacts.
     * @param {ArtifactCreateManyArgs} args - Arguments to create many Artifacts.
     * @example
     * // Create many Artifacts
     * const artifact = await prisma.artifact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtifactCreateManyArgs>(args?: SelectSubset<T, ArtifactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artifacts and returns the data saved in the database.
     * @param {ArtifactCreateManyAndReturnArgs} args - Arguments to create many Artifacts.
     * @example
     * // Create many Artifacts
     * const artifact = await prisma.artifact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artifacts and only return the `id`
     * const artifactWithIdOnly = await prisma.artifact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtifactCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtifactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artifact.
     * @param {ArtifactDeleteArgs} args - Arguments to delete one Artifact.
     * @example
     * // Delete one Artifact
     * const Artifact = await prisma.artifact.delete({
     *   where: {
     *     // ... filter to delete one Artifact
     *   }
     * })
     * 
     */
    delete<T extends ArtifactDeleteArgs>(args: SelectSubset<T, ArtifactDeleteArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artifact.
     * @param {ArtifactUpdateArgs} args - Arguments to update one Artifact.
     * @example
     * // Update one Artifact
     * const artifact = await prisma.artifact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtifactUpdateArgs>(args: SelectSubset<T, ArtifactUpdateArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artifacts.
     * @param {ArtifactDeleteManyArgs} args - Arguments to filter Artifacts to delete.
     * @example
     * // Delete a few Artifacts
     * const { count } = await prisma.artifact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtifactDeleteManyArgs>(args?: SelectSubset<T, ArtifactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artifacts
     * const artifact = await prisma.artifact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtifactUpdateManyArgs>(args: SelectSubset<T, ArtifactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artifacts and returns the data updated in the database.
     * @param {ArtifactUpdateManyAndReturnArgs} args - Arguments to update many Artifacts.
     * @example
     * // Update many Artifacts
     * const artifact = await prisma.artifact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artifacts and only return the `id`
     * const artifactWithIdOnly = await prisma.artifact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtifactUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtifactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artifact.
     * @param {ArtifactUpsertArgs} args - Arguments to update or create a Artifact.
     * @example
     * // Update or create a Artifact
     * const artifact = await prisma.artifact.upsert({
     *   create: {
     *     // ... data to create a Artifact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artifact we want to update
     *   }
     * })
     */
    upsert<T extends ArtifactUpsertArgs>(args: SelectSubset<T, ArtifactUpsertArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactCountArgs} args - Arguments to filter Artifacts to count.
     * @example
     * // Count the number of Artifacts
     * const count = await prisma.artifact.count({
     *   where: {
     *     // ... the filter for the Artifacts we want to count
     *   }
     * })
    **/
    count<T extends ArtifactCountArgs>(
      args?: Subset<T, ArtifactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtifactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtifactAggregateArgs>(args: Subset<T, ArtifactAggregateArgs>): Prisma.PrismaPromise<GetArtifactAggregateType<T>>

    /**
     * Group by Artifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtifactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtifactGroupByArgs['orderBy'] }
        : { orderBy?: ArtifactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtifactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtifactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artifact model
   */
  readonly fields: ArtifactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artifact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtifactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endeavor<T extends Artifact$endeavorArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$endeavorArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    class<T extends Artifact$classArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$classArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contributions<T extends Artifact$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborators<T extends Artifact$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artifact model
   */
  interface ArtifactFieldRefs {
    readonly id: FieldRef<"Artifact", 'String'>
    readonly title: FieldRef<"Artifact", 'String'>
    readonly description: FieldRef<"Artifact", 'String'>
    readonly imageUrl: FieldRef<"Artifact", 'String'>
    readonly link: FieldRef<"Artifact", 'String'>
    readonly completionDate: FieldRef<"Artifact", 'DateTime'>
    readonly endeavorId: FieldRef<"Artifact", 'String'>
    readonly classId: FieldRef<"Artifact", 'String'>
    readonly createdAt: FieldRef<"Artifact", 'DateTime'>
    readonly updatedAt: FieldRef<"Artifact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artifact findUnique
   */
  export type ArtifactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact findUniqueOrThrow
   */
  export type ArtifactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact findFirst
   */
  export type ArtifactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artifacts.
     */
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact findFirstOrThrow
   */
  export type ArtifactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artifacts.
     */
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact findMany
   */
  export type ArtifactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifacts to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact create
   */
  export type ArtifactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * The data needed to create a Artifact.
     */
    data: XOR<ArtifactCreateInput, ArtifactUncheckedCreateInput>
  }

  /**
   * Artifact createMany
   */
  export type ArtifactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artifacts.
     */
    data: ArtifactCreateManyInput | ArtifactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artifact createManyAndReturn
   */
  export type ArtifactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * The data used to create many Artifacts.
     */
    data: ArtifactCreateManyInput | ArtifactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artifact update
   */
  export type ArtifactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * The data needed to update a Artifact.
     */
    data: XOR<ArtifactUpdateInput, ArtifactUncheckedUpdateInput>
    /**
     * Choose, which Artifact to update.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact updateMany
   */
  export type ArtifactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artifacts.
     */
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyInput>
    /**
     * Filter which Artifacts to update
     */
    where?: ArtifactWhereInput
    /**
     * Limit how many Artifacts to update.
     */
    limit?: number
  }

  /**
   * Artifact updateManyAndReturn
   */
  export type ArtifactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * The data used to update Artifacts.
     */
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyInput>
    /**
     * Filter which Artifacts to update
     */
    where?: ArtifactWhereInput
    /**
     * Limit how many Artifacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artifact upsert
   */
  export type ArtifactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * The filter to search for the Artifact to update in case it exists.
     */
    where: ArtifactWhereUniqueInput
    /**
     * In case the Artifact found by the `where` argument doesn't exist, create a new Artifact with this data.
     */
    create: XOR<ArtifactCreateInput, ArtifactUncheckedCreateInput>
    /**
     * In case the Artifact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtifactUpdateInput, ArtifactUncheckedUpdateInput>
  }

  /**
   * Artifact delete
   */
  export type ArtifactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter which Artifact to delete.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact deleteMany
   */
  export type ArtifactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artifacts to delete
     */
    where?: ArtifactWhereInput
    /**
     * Limit how many Artifacts to delete.
     */
    limit?: number
  }

  /**
   * Artifact.endeavor
   */
  export type Artifact$endeavorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    where?: EndeavorWhereInput
  }

  /**
   * Artifact.class
   */
  export type Artifact$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * Artifact.contributions
   */
  export type Artifact$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Artifact.collaborators
   */
  export type Artifact$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    cursor?: CollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Artifact without action
   */
  export type ArtifactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
  }


  /**
   * Model Knowledge
   */

  export type AggregateKnowledge = {
    _count: KnowledgeCountAggregateOutputType | null
    _avg: KnowledgeAvgAggregateOutputType | null
    _sum: KnowledgeSumAggregateOutputType | null
    _min: KnowledgeMinAggregateOutputType | null
    _max: KnowledgeMaxAggregateOutputType | null
  }

  export type KnowledgeAvgAggregateOutputType = {
    year: number | null
  }

  export type KnowledgeSumAggregateOutputType = {
    year: number | null
  }

  export type KnowledgeMinAggregateOutputType = {
    id: string | null
    year: number | null
    title: string | null
    location: string | null
    institution: string | null
    reflection: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeMaxAggregateOutputType = {
    id: string | null
    year: number | null
    title: string | null
    location: string | null
    institution: string | null
    reflection: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeCountAggregateOutputType = {
    id: number
    year: number
    title: number
    location: number
    institution: number
    reflection: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KnowledgeAvgAggregateInputType = {
    year?: true
  }

  export type KnowledgeSumAggregateInputType = {
    year?: true
  }

  export type KnowledgeMinAggregateInputType = {
    id?: true
    year?: true
    title?: true
    location?: true
    institution?: true
    reflection?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeMaxAggregateInputType = {
    id?: true
    year?: true
    title?: true
    location?: true
    institution?: true
    reflection?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeCountAggregateInputType = {
    id?: true
    year?: true
    title?: true
    location?: true
    institution?: true
    reflection?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KnowledgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Knowledge to aggregate.
     */
    where?: KnowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledges to fetch.
     */
    orderBy?: KnowledgeOrderByWithRelationInput | KnowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Knowledges
    **/
    _count?: true | KnowledgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KnowledgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KnowledgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeMaxAggregateInputType
  }

  export type GetKnowledgeAggregateType<T extends KnowledgeAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledge[P]>
      : GetScalarType<T[P], AggregateKnowledge[P]>
  }




  export type KnowledgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeWhereInput
    orderBy?: KnowledgeOrderByWithAggregationInput | KnowledgeOrderByWithAggregationInput[]
    by: KnowledgeScalarFieldEnum[] | KnowledgeScalarFieldEnum
    having?: KnowledgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeCountAggregateInputType | true
    _avg?: KnowledgeAvgAggregateInputType
    _sum?: KnowledgeSumAggregateInputType
    _min?: KnowledgeMinAggregateInputType
    _max?: KnowledgeMaxAggregateInputType
  }

  export type KnowledgeGroupByOutputType = {
    id: string
    year: number
    title: string
    location: string
    institution: string
    reflection: string | null
    createdAt: Date
    updatedAt: Date
    _count: KnowledgeCountAggregateOutputType | null
    _avg: KnowledgeAvgAggregateOutputType | null
    _sum: KnowledgeSumAggregateOutputType | null
    _min: KnowledgeMinAggregateOutputType | null
    _max: KnowledgeMaxAggregateOutputType | null
  }

  type GetKnowledgeGroupByPayload<T extends KnowledgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    title?: boolean
    location?: boolean
    institution?: boolean
    reflection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classes?: boolean | Knowledge$classesArgs<ExtArgs>
    _count?: boolean | KnowledgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledge"]>

  export type KnowledgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    title?: boolean
    location?: boolean
    institution?: boolean
    reflection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledge"]>

  export type KnowledgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    title?: boolean
    location?: boolean
    institution?: boolean
    reflection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledge"]>

  export type KnowledgeSelectScalar = {
    id?: boolean
    year?: boolean
    title?: boolean
    location?: boolean
    institution?: boolean
    reflection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KnowledgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "title" | "location" | "institution" | "reflection" | "createdAt" | "updatedAt", ExtArgs["result"]["knowledge"]>
  export type KnowledgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Knowledge$classesArgs<ExtArgs>
    _count?: boolean | KnowledgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KnowledgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KnowledgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KnowledgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Knowledge"
    objects: {
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      title: string
      location: string
      institution: string
      reflection: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["knowledge"]>
    composites: {}
  }

  type KnowledgeGetPayload<S extends boolean | null | undefined | KnowledgeDefaultArgs> = $Result.GetResult<Prisma.$KnowledgePayload, S>

  type KnowledgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeCountAggregateInputType | true
    }

  export interface KnowledgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Knowledge'], meta: { name: 'Knowledge' } }
    /**
     * Find zero or one Knowledge that matches the filter.
     * @param {KnowledgeFindUniqueArgs} args - Arguments to find a Knowledge
     * @example
     * // Get one Knowledge
     * const knowledge = await prisma.knowledge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeFindUniqueArgs>(args: SelectSubset<T, KnowledgeFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Knowledge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeFindUniqueOrThrowArgs} args - Arguments to find a Knowledge
     * @example
     * // Get one Knowledge
     * const knowledge = await prisma.knowledge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Knowledge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeFindFirstArgs} args - Arguments to find a Knowledge
     * @example
     * // Get one Knowledge
     * const knowledge = await prisma.knowledge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeFindFirstArgs>(args?: SelectSubset<T, KnowledgeFindFirstArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Knowledge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeFindFirstOrThrowArgs} args - Arguments to find a Knowledge
     * @example
     * // Get one Knowledge
     * const knowledge = await prisma.knowledge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Knowledges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Knowledges
     * const knowledges = await prisma.knowledge.findMany()
     * 
     * // Get first 10 Knowledges
     * const knowledges = await prisma.knowledge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeWithIdOnly = await prisma.knowledge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeFindManyArgs>(args?: SelectSubset<T, KnowledgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Knowledge.
     * @param {KnowledgeCreateArgs} args - Arguments to create a Knowledge.
     * @example
     * // Create one Knowledge
     * const Knowledge = await prisma.knowledge.create({
     *   data: {
     *     // ... data to create a Knowledge
     *   }
     * })
     * 
     */
    create<T extends KnowledgeCreateArgs>(args: SelectSubset<T, KnowledgeCreateArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Knowledges.
     * @param {KnowledgeCreateManyArgs} args - Arguments to create many Knowledges.
     * @example
     * // Create many Knowledges
     * const knowledge = await prisma.knowledge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeCreateManyArgs>(args?: SelectSubset<T, KnowledgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Knowledges and returns the data saved in the database.
     * @param {KnowledgeCreateManyAndReturnArgs} args - Arguments to create many Knowledges.
     * @example
     * // Create many Knowledges
     * const knowledge = await prisma.knowledge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Knowledges and only return the `id`
     * const knowledgeWithIdOnly = await prisma.knowledge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Knowledge.
     * @param {KnowledgeDeleteArgs} args - Arguments to delete one Knowledge.
     * @example
     * // Delete one Knowledge
     * const Knowledge = await prisma.knowledge.delete({
     *   where: {
     *     // ... filter to delete one Knowledge
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeDeleteArgs>(args: SelectSubset<T, KnowledgeDeleteArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Knowledge.
     * @param {KnowledgeUpdateArgs} args - Arguments to update one Knowledge.
     * @example
     * // Update one Knowledge
     * const knowledge = await prisma.knowledge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeUpdateArgs>(args: SelectSubset<T, KnowledgeUpdateArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Knowledges.
     * @param {KnowledgeDeleteManyArgs} args - Arguments to filter Knowledges to delete.
     * @example
     * // Delete a few Knowledges
     * const { count } = await prisma.knowledge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeDeleteManyArgs>(args?: SelectSubset<T, KnowledgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Knowledges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Knowledges
     * const knowledge = await prisma.knowledge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeUpdateManyArgs>(args: SelectSubset<T, KnowledgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Knowledges and returns the data updated in the database.
     * @param {KnowledgeUpdateManyAndReturnArgs} args - Arguments to update many Knowledges.
     * @example
     * // Update many Knowledges
     * const knowledge = await prisma.knowledge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Knowledges and only return the `id`
     * const knowledgeWithIdOnly = await prisma.knowledge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KnowledgeUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Knowledge.
     * @param {KnowledgeUpsertArgs} args - Arguments to update or create a Knowledge.
     * @example
     * // Update or create a Knowledge
     * const knowledge = await prisma.knowledge.upsert({
     *   create: {
     *     // ... data to create a Knowledge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Knowledge we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeUpsertArgs>(args: SelectSubset<T, KnowledgeUpsertArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Knowledges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeCountArgs} args - Arguments to filter Knowledges to count.
     * @example
     * // Count the number of Knowledges
     * const count = await prisma.knowledge.count({
     *   where: {
     *     // ... the filter for the Knowledges we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeCountArgs>(
      args?: Subset<T, KnowledgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Knowledge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KnowledgeAggregateArgs>(args: Subset<T, KnowledgeAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeAggregateType<T>>

    /**
     * Group by Knowledge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KnowledgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KnowledgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Knowledge model
   */
  readonly fields: KnowledgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Knowledge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Knowledge$classesArgs<ExtArgs> = {}>(args?: Subset<T, Knowledge$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Knowledge model
   */
  interface KnowledgeFieldRefs {
    readonly id: FieldRef<"Knowledge", 'String'>
    readonly year: FieldRef<"Knowledge", 'Int'>
    readonly title: FieldRef<"Knowledge", 'String'>
    readonly location: FieldRef<"Knowledge", 'String'>
    readonly institution: FieldRef<"Knowledge", 'String'>
    readonly reflection: FieldRef<"Knowledge", 'String'>
    readonly createdAt: FieldRef<"Knowledge", 'DateTime'>
    readonly updatedAt: FieldRef<"Knowledge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Knowledge findUnique
   */
  export type KnowledgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledge to fetch.
     */
    where: KnowledgeWhereUniqueInput
  }

  /**
   * Knowledge findUniqueOrThrow
   */
  export type KnowledgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledge to fetch.
     */
    where: KnowledgeWhereUniqueInput
  }

  /**
   * Knowledge findFirst
   */
  export type KnowledgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledge to fetch.
     */
    where?: KnowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledges to fetch.
     */
    orderBy?: KnowledgeOrderByWithRelationInput | KnowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Knowledges.
     */
    cursor?: KnowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Knowledges.
     */
    distinct?: KnowledgeScalarFieldEnum | KnowledgeScalarFieldEnum[]
  }

  /**
   * Knowledge findFirstOrThrow
   */
  export type KnowledgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledge to fetch.
     */
    where?: KnowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledges to fetch.
     */
    orderBy?: KnowledgeOrderByWithRelationInput | KnowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Knowledges.
     */
    cursor?: KnowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Knowledges.
     */
    distinct?: KnowledgeScalarFieldEnum | KnowledgeScalarFieldEnum[]
  }

  /**
   * Knowledge findMany
   */
  export type KnowledgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledges to fetch.
     */
    where?: KnowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledges to fetch.
     */
    orderBy?: KnowledgeOrderByWithRelationInput | KnowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Knowledges.
     */
    cursor?: KnowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledges.
     */
    skip?: number
    distinct?: KnowledgeScalarFieldEnum | KnowledgeScalarFieldEnum[]
  }

  /**
   * Knowledge create
   */
  export type KnowledgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Knowledge.
     */
    data: XOR<KnowledgeCreateInput, KnowledgeUncheckedCreateInput>
  }

  /**
   * Knowledge createMany
   */
  export type KnowledgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Knowledges.
     */
    data: KnowledgeCreateManyInput | KnowledgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Knowledge createManyAndReturn
   */
  export type KnowledgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * The data used to create many Knowledges.
     */
    data: KnowledgeCreateManyInput | KnowledgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Knowledge update
   */
  export type KnowledgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Knowledge.
     */
    data: XOR<KnowledgeUpdateInput, KnowledgeUncheckedUpdateInput>
    /**
     * Choose, which Knowledge to update.
     */
    where: KnowledgeWhereUniqueInput
  }

  /**
   * Knowledge updateMany
   */
  export type KnowledgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Knowledges.
     */
    data: XOR<KnowledgeUpdateManyMutationInput, KnowledgeUncheckedUpdateManyInput>
    /**
     * Filter which Knowledges to update
     */
    where?: KnowledgeWhereInput
    /**
     * Limit how many Knowledges to update.
     */
    limit?: number
  }

  /**
   * Knowledge updateManyAndReturn
   */
  export type KnowledgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * The data used to update Knowledges.
     */
    data: XOR<KnowledgeUpdateManyMutationInput, KnowledgeUncheckedUpdateManyInput>
    /**
     * Filter which Knowledges to update
     */
    where?: KnowledgeWhereInput
    /**
     * Limit how many Knowledges to update.
     */
    limit?: number
  }

  /**
   * Knowledge upsert
   */
  export type KnowledgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Knowledge to update in case it exists.
     */
    where: KnowledgeWhereUniqueInput
    /**
     * In case the Knowledge found by the `where` argument doesn't exist, create a new Knowledge with this data.
     */
    create: XOR<KnowledgeCreateInput, KnowledgeUncheckedCreateInput>
    /**
     * In case the Knowledge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeUpdateInput, KnowledgeUncheckedUpdateInput>
  }

  /**
   * Knowledge delete
   */
  export type KnowledgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter which Knowledge to delete.
     */
    where: KnowledgeWhereUniqueInput
  }

  /**
   * Knowledge deleteMany
   */
  export type KnowledgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Knowledges to delete
     */
    where?: KnowledgeWhereInput
    /**
     * Limit how many Knowledges to delete.
     */
    limit?: number
  }

  /**
   * Knowledge.classes
   */
  export type Knowledge$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Knowledge without action
   */
  export type KnowledgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    name: string | null
    term: $Enums.Term | null
    description: string | null
    knowledgeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
    term: $Enums.Term | null
    description: string | null
    knowledgeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    term: number
    description: number
    knowledgeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    term?: true
    description?: true
    knowledgeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    term?: true
    description?: true
    knowledgeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    term?: true
    description?: true
    knowledgeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    name: string
    term: $Enums.Term
    description: string | null
    knowledgeId: string
    createdAt: Date
    updatedAt: Date
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    term?: boolean
    description?: boolean
    knowledgeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professor?: boolean | Class$professorArgs<ExtArgs>
    knowledge?: boolean | KnowledgeDefaultArgs<ExtArgs>
    artifacts?: boolean | Class$artifactsArgs<ExtArgs>
    contributions?: boolean | Class$contributionsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    term?: boolean
    description?: boolean
    knowledgeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    knowledge?: boolean | KnowledgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    term?: boolean
    description?: boolean
    knowledgeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    knowledge?: boolean | KnowledgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    term?: boolean
    description?: boolean
    knowledgeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "term" | "description" | "knowledgeId" | "createdAt" | "updatedAt", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | Class$professorArgs<ExtArgs>
    knowledge?: boolean | KnowledgeDefaultArgs<ExtArgs>
    artifacts?: boolean | Class$artifactsArgs<ExtArgs>
    contributions?: boolean | Class$contributionsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    knowledge?: boolean | KnowledgeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    knowledge?: boolean | KnowledgeDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      professor: Prisma.$CollaboratorPayload<ExtArgs>[]
      knowledge: Prisma.$KnowledgePayload<ExtArgs>
      artifacts: Prisma.$ArtifactPayload<ExtArgs>[]
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      term: $Enums.Term
      description: string | null
      knowledgeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends Class$professorArgs<ExtArgs> = {}>(args?: Subset<T, Class$professorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    knowledge<T extends KnowledgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KnowledgeDefaultArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artifacts<T extends Class$artifactsArgs<ExtArgs> = {}>(args?: Subset<T, Class$artifactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributions<T extends Class$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, Class$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly term: FieldRef<"Class", 'Term'>
    readonly description: FieldRef<"Class", 'String'>
    readonly knowledgeId: FieldRef<"Class", 'String'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
    readonly updatedAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.professor
   */
  export type Class$professorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    cursor?: CollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Class.artifacts
   */
  export type Class$artifactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    where?: ArtifactWhereInput
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    cursor?: ArtifactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Class.contributions
   */
  export type Class$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Characteristic
   */

  export type AggregateCharacteristic = {
    _count: CharacteristicCountAggregateOutputType | null
    _min: CharacteristicMinAggregateOutputType | null
    _max: CharacteristicMaxAggregateOutputType | null
  }

  export type CharacteristicMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacteristicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacteristicCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharacteristicMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacteristicMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacteristicCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacteristicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characteristic to aggregate.
     */
    where?: CharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characteristics to fetch.
     */
    orderBy?: CharacteristicOrderByWithRelationInput | CharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characteristics
    **/
    _count?: true | CharacteristicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacteristicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacteristicMaxAggregateInputType
  }

  export type GetCharacteristicAggregateType<T extends CharacteristicAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacteristic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacteristic[P]>
      : GetScalarType<T[P], AggregateCharacteristic[P]>
  }




  export type CharacteristicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacteristicWhereInput
    orderBy?: CharacteristicOrderByWithAggregationInput | CharacteristicOrderByWithAggregationInput[]
    by: CharacteristicScalarFieldEnum[] | CharacteristicScalarFieldEnum
    having?: CharacteristicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacteristicCountAggregateInputType | true
    _min?: CharacteristicMinAggregateInputType
    _max?: CharacteristicMaxAggregateInputType
  }

  export type CharacteristicGroupByOutputType = {
    id: string
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CharacteristicCountAggregateOutputType | null
    _min: CharacteristicMinAggregateOutputType | null
    _max: CharacteristicMaxAggregateOutputType | null
  }

  type GetCharacteristicGroupByPayload<T extends CharacteristicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacteristicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacteristicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacteristicGroupByOutputType[P]>
            : GetScalarType<T[P], CharacteristicGroupByOutputType[P]>
        }
      >
    >


  export type CharacteristicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contributions?: boolean | Characteristic$contributionsArgs<ExtArgs>
    _count?: boolean | CharacteristicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characteristic"]>

  export type CharacteristicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["characteristic"]>

  export type CharacteristicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["characteristic"]>

  export type CharacteristicSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharacteristicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["characteristic"]>
  export type CharacteristicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | Characteristic$contributionsArgs<ExtArgs>
    _count?: boolean | CharacteristicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacteristicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharacteristicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharacteristicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characteristic"
    objects: {
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["characteristic"]>
    composites: {}
  }

  type CharacteristicGetPayload<S extends boolean | null | undefined | CharacteristicDefaultArgs> = $Result.GetResult<Prisma.$CharacteristicPayload, S>

  type CharacteristicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacteristicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacteristicCountAggregateInputType | true
    }

  export interface CharacteristicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characteristic'], meta: { name: 'Characteristic' } }
    /**
     * Find zero or one Characteristic that matches the filter.
     * @param {CharacteristicFindUniqueArgs} args - Arguments to find a Characteristic
     * @example
     * // Get one Characteristic
     * const characteristic = await prisma.characteristic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacteristicFindUniqueArgs>(args: SelectSubset<T, CharacteristicFindUniqueArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Characteristic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacteristicFindUniqueOrThrowArgs} args - Arguments to find a Characteristic
     * @example
     * // Get one Characteristic
     * const characteristic = await prisma.characteristic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacteristicFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacteristicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Characteristic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicFindFirstArgs} args - Arguments to find a Characteristic
     * @example
     * // Get one Characteristic
     * const characteristic = await prisma.characteristic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacteristicFindFirstArgs>(args?: SelectSubset<T, CharacteristicFindFirstArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Characteristic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicFindFirstOrThrowArgs} args - Arguments to find a Characteristic
     * @example
     * // Get one Characteristic
     * const characteristic = await prisma.characteristic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacteristicFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacteristicFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characteristics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characteristics
     * const characteristics = await prisma.characteristic.findMany()
     * 
     * // Get first 10 Characteristics
     * const characteristics = await prisma.characteristic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characteristicWithIdOnly = await prisma.characteristic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacteristicFindManyArgs>(args?: SelectSubset<T, CharacteristicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Characteristic.
     * @param {CharacteristicCreateArgs} args - Arguments to create a Characteristic.
     * @example
     * // Create one Characteristic
     * const Characteristic = await prisma.characteristic.create({
     *   data: {
     *     // ... data to create a Characteristic
     *   }
     * })
     * 
     */
    create<T extends CharacteristicCreateArgs>(args: SelectSubset<T, CharacteristicCreateArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characteristics.
     * @param {CharacteristicCreateManyArgs} args - Arguments to create many Characteristics.
     * @example
     * // Create many Characteristics
     * const characteristic = await prisma.characteristic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacteristicCreateManyArgs>(args?: SelectSubset<T, CharacteristicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characteristics and returns the data saved in the database.
     * @param {CharacteristicCreateManyAndReturnArgs} args - Arguments to create many Characteristics.
     * @example
     * // Create many Characteristics
     * const characteristic = await prisma.characteristic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characteristics and only return the `id`
     * const characteristicWithIdOnly = await prisma.characteristic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacteristicCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacteristicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Characteristic.
     * @param {CharacteristicDeleteArgs} args - Arguments to delete one Characteristic.
     * @example
     * // Delete one Characteristic
     * const Characteristic = await prisma.characteristic.delete({
     *   where: {
     *     // ... filter to delete one Characteristic
     *   }
     * })
     * 
     */
    delete<T extends CharacteristicDeleteArgs>(args: SelectSubset<T, CharacteristicDeleteArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Characteristic.
     * @param {CharacteristicUpdateArgs} args - Arguments to update one Characteristic.
     * @example
     * // Update one Characteristic
     * const characteristic = await prisma.characteristic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacteristicUpdateArgs>(args: SelectSubset<T, CharacteristicUpdateArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characteristics.
     * @param {CharacteristicDeleteManyArgs} args - Arguments to filter Characteristics to delete.
     * @example
     * // Delete a few Characteristics
     * const { count } = await prisma.characteristic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacteristicDeleteManyArgs>(args?: SelectSubset<T, CharacteristicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characteristics
     * const characteristic = await prisma.characteristic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacteristicUpdateManyArgs>(args: SelectSubset<T, CharacteristicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characteristics and returns the data updated in the database.
     * @param {CharacteristicUpdateManyAndReturnArgs} args - Arguments to update many Characteristics.
     * @example
     * // Update many Characteristics
     * const characteristic = await prisma.characteristic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characteristics and only return the `id`
     * const characteristicWithIdOnly = await prisma.characteristic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacteristicUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacteristicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Characteristic.
     * @param {CharacteristicUpsertArgs} args - Arguments to update or create a Characteristic.
     * @example
     * // Update or create a Characteristic
     * const characteristic = await prisma.characteristic.upsert({
     *   create: {
     *     // ... data to create a Characteristic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characteristic we want to update
     *   }
     * })
     */
    upsert<T extends CharacteristicUpsertArgs>(args: SelectSubset<T, CharacteristicUpsertArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicCountArgs} args - Arguments to filter Characteristics to count.
     * @example
     * // Count the number of Characteristics
     * const count = await prisma.characteristic.count({
     *   where: {
     *     // ... the filter for the Characteristics we want to count
     *   }
     * })
    **/
    count<T extends CharacteristicCountArgs>(
      args?: Subset<T, CharacteristicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacteristicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacteristicAggregateArgs>(args: Subset<T, CharacteristicAggregateArgs>): Prisma.PrismaPromise<GetCharacteristicAggregateType<T>>

    /**
     * Group by Characteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacteristicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacteristicGroupByArgs['orderBy'] }
        : { orderBy?: CharacteristicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacteristicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacteristicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characteristic model
   */
  readonly fields: CharacteristicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characteristic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacteristicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contributions<T extends Characteristic$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, Characteristic$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Characteristic model
   */
  interface CharacteristicFieldRefs {
    readonly id: FieldRef<"Characteristic", 'String'>
    readonly title: FieldRef<"Characteristic", 'String'>
    readonly description: FieldRef<"Characteristic", 'String'>
    readonly createdAt: FieldRef<"Characteristic", 'DateTime'>
    readonly updatedAt: FieldRef<"Characteristic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Characteristic findUnique
   */
  export type CharacteristicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristic to fetch.
     */
    where: CharacteristicWhereUniqueInput
  }

  /**
   * Characteristic findUniqueOrThrow
   */
  export type CharacteristicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristic to fetch.
     */
    where: CharacteristicWhereUniqueInput
  }

  /**
   * Characteristic findFirst
   */
  export type CharacteristicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristic to fetch.
     */
    where?: CharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characteristics to fetch.
     */
    orderBy?: CharacteristicOrderByWithRelationInput | CharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characteristics.
     */
    cursor?: CharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characteristics.
     */
    distinct?: CharacteristicScalarFieldEnum | CharacteristicScalarFieldEnum[]
  }

  /**
   * Characteristic findFirstOrThrow
   */
  export type CharacteristicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristic to fetch.
     */
    where?: CharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characteristics to fetch.
     */
    orderBy?: CharacteristicOrderByWithRelationInput | CharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characteristics.
     */
    cursor?: CharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characteristics.
     */
    distinct?: CharacteristicScalarFieldEnum | CharacteristicScalarFieldEnum[]
  }

  /**
   * Characteristic findMany
   */
  export type CharacteristicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristics to fetch.
     */
    where?: CharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characteristics to fetch.
     */
    orderBy?: CharacteristicOrderByWithRelationInput | CharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characteristics.
     */
    cursor?: CharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characteristics.
     */
    skip?: number
    distinct?: CharacteristicScalarFieldEnum | CharacteristicScalarFieldEnum[]
  }

  /**
   * Characteristic create
   */
  export type CharacteristicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * The data needed to create a Characteristic.
     */
    data: XOR<CharacteristicCreateInput, CharacteristicUncheckedCreateInput>
  }

  /**
   * Characteristic createMany
   */
  export type CharacteristicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characteristics.
     */
    data: CharacteristicCreateManyInput | CharacteristicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characteristic createManyAndReturn
   */
  export type CharacteristicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * The data used to create many Characteristics.
     */
    data: CharacteristicCreateManyInput | CharacteristicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characteristic update
   */
  export type CharacteristicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * The data needed to update a Characteristic.
     */
    data: XOR<CharacteristicUpdateInput, CharacteristicUncheckedUpdateInput>
    /**
     * Choose, which Characteristic to update.
     */
    where: CharacteristicWhereUniqueInput
  }

  /**
   * Characteristic updateMany
   */
  export type CharacteristicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characteristics.
     */
    data: XOR<CharacteristicUpdateManyMutationInput, CharacteristicUncheckedUpdateManyInput>
    /**
     * Filter which Characteristics to update
     */
    where?: CharacteristicWhereInput
    /**
     * Limit how many Characteristics to update.
     */
    limit?: number
  }

  /**
   * Characteristic updateManyAndReturn
   */
  export type CharacteristicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * The data used to update Characteristics.
     */
    data: XOR<CharacteristicUpdateManyMutationInput, CharacteristicUncheckedUpdateManyInput>
    /**
     * Filter which Characteristics to update
     */
    where?: CharacteristicWhereInput
    /**
     * Limit how many Characteristics to update.
     */
    limit?: number
  }

  /**
   * Characteristic upsert
   */
  export type CharacteristicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * The filter to search for the Characteristic to update in case it exists.
     */
    where: CharacteristicWhereUniqueInput
    /**
     * In case the Characteristic found by the `where` argument doesn't exist, create a new Characteristic with this data.
     */
    create: XOR<CharacteristicCreateInput, CharacteristicUncheckedCreateInput>
    /**
     * In case the Characteristic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacteristicUpdateInput, CharacteristicUncheckedUpdateInput>
  }

  /**
   * Characteristic delete
   */
  export type CharacteristicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter which Characteristic to delete.
     */
    where: CharacteristicWhereUniqueInput
  }

  /**
   * Characteristic deleteMany
   */
  export type CharacteristicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characteristics to delete
     */
    where?: CharacteristicWhereInput
    /**
     * Limit how many Characteristics to delete.
     */
    limit?: number
  }

  /**
   * Characteristic.contributions
   */
  export type Characteristic$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Characteristic without action
   */
  export type CharacteristicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contributions?: boolean | Skill$contributionsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | Skill$contributionsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contributions<T extends Skill$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly title: FieldRef<"Skill", 'String'>
    readonly description: FieldRef<"Skill", 'String'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.contributions
   */
  export type Skill$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Contribution
   */

  export type AggregateContribution = {
    _count: ContributionCountAggregateOutputType | null
    _avg: ContributionAvgAggregateOutputType | null
    _sum: ContributionSumAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  export type ContributionAvgAggregateOutputType = {
    strengthLevel: number | null
  }

  export type ContributionSumAggregateOutputType = {
    strengthLevel: number | null
  }

  export type ContributionMinAggregateOutputType = {
    id: string | null
    description: string | null
    strengthLevel: number | null
    artifactId: string | null
    classId: string | null
    endeavorId: string | null
    skillId: string | null
    characteristicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContributionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    strengthLevel: number | null
    artifactId: string | null
    classId: string | null
    endeavorId: string | null
    skillId: string | null
    characteristicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContributionCountAggregateOutputType = {
    id: number
    description: number
    strengthLevel: number
    artifactId: number
    classId: number
    endeavorId: number
    skillId: number
    characteristicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContributionAvgAggregateInputType = {
    strengthLevel?: true
  }

  export type ContributionSumAggregateInputType = {
    strengthLevel?: true
  }

  export type ContributionMinAggregateInputType = {
    id?: true
    description?: true
    strengthLevel?: true
    artifactId?: true
    classId?: true
    endeavorId?: true
    skillId?: true
    characteristicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContributionMaxAggregateInputType = {
    id?: true
    description?: true
    strengthLevel?: true
    artifactId?: true
    classId?: true
    endeavorId?: true
    skillId?: true
    characteristicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContributionCountAggregateInputType = {
    id?: true
    description?: true
    strengthLevel?: true
    artifactId?: true
    classId?: true
    endeavorId?: true
    skillId?: true
    characteristicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contribution to aggregate.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contributions
    **/
    _count?: true | ContributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContributionMaxAggregateInputType
  }

  export type GetContributionAggregateType<T extends ContributionAggregateArgs> = {
        [P in keyof T & keyof AggregateContribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContribution[P]>
      : GetScalarType<T[P], AggregateContribution[P]>
  }




  export type ContributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithAggregationInput | ContributionOrderByWithAggregationInput[]
    by: ContributionScalarFieldEnum[] | ContributionScalarFieldEnum
    having?: ContributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContributionCountAggregateInputType | true
    _avg?: ContributionAvgAggregateInputType
    _sum?: ContributionSumAggregateInputType
    _min?: ContributionMinAggregateInputType
    _max?: ContributionMaxAggregateInputType
  }

  export type ContributionGroupByOutputType = {
    id: string
    description: string | null
    strengthLevel: number
    artifactId: string | null
    classId: string | null
    endeavorId: string | null
    skillId: string | null
    characteristicId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContributionCountAggregateOutputType | null
    _avg: ContributionAvgAggregateOutputType | null
    _sum: ContributionSumAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  type GetContributionGroupByPayload<T extends ContributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContributionGroupByOutputType[P]>
            : GetScalarType<T[P], ContributionGroupByOutputType[P]>
        }
      >
    >


  export type ContributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    strengthLevel?: boolean
    artifactId?: boolean
    classId?: boolean
    endeavorId?: boolean
    skillId?: boolean
    characteristicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artifact?: boolean | Contribution$artifactArgs<ExtArgs>
    class?: boolean | Contribution$classArgs<ExtArgs>
    endeavor?: boolean | Contribution$endeavorArgs<ExtArgs>
    skill?: boolean | Contribution$skillArgs<ExtArgs>
    characteristic?: boolean | Contribution$characteristicArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    strengthLevel?: boolean
    artifactId?: boolean
    classId?: boolean
    endeavorId?: boolean
    skillId?: boolean
    characteristicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artifact?: boolean | Contribution$artifactArgs<ExtArgs>
    class?: boolean | Contribution$classArgs<ExtArgs>
    endeavor?: boolean | Contribution$endeavorArgs<ExtArgs>
    skill?: boolean | Contribution$skillArgs<ExtArgs>
    characteristic?: boolean | Contribution$characteristicArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    strengthLevel?: boolean
    artifactId?: boolean
    classId?: boolean
    endeavorId?: boolean
    skillId?: boolean
    characteristicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artifact?: boolean | Contribution$artifactArgs<ExtArgs>
    class?: boolean | Contribution$classArgs<ExtArgs>
    endeavor?: boolean | Contribution$endeavorArgs<ExtArgs>
    skill?: boolean | Contribution$skillArgs<ExtArgs>
    characteristic?: boolean | Contribution$characteristicArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectScalar = {
    id?: boolean
    description?: boolean
    strengthLevel?: boolean
    artifactId?: boolean
    classId?: boolean
    endeavorId?: boolean
    skillId?: boolean
    characteristicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "strengthLevel" | "artifactId" | "classId" | "endeavorId" | "skillId" | "characteristicId" | "createdAt" | "updatedAt", ExtArgs["result"]["contribution"]>
  export type ContributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | Contribution$artifactArgs<ExtArgs>
    class?: boolean | Contribution$classArgs<ExtArgs>
    endeavor?: boolean | Contribution$endeavorArgs<ExtArgs>
    skill?: boolean | Contribution$skillArgs<ExtArgs>
    characteristic?: boolean | Contribution$characteristicArgs<ExtArgs>
  }
  export type ContributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | Contribution$artifactArgs<ExtArgs>
    class?: boolean | Contribution$classArgs<ExtArgs>
    endeavor?: boolean | Contribution$endeavorArgs<ExtArgs>
    skill?: boolean | Contribution$skillArgs<ExtArgs>
    characteristic?: boolean | Contribution$characteristicArgs<ExtArgs>
  }
  export type ContributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | Contribution$artifactArgs<ExtArgs>
    class?: boolean | Contribution$classArgs<ExtArgs>
    endeavor?: boolean | Contribution$endeavorArgs<ExtArgs>
    skill?: boolean | Contribution$skillArgs<ExtArgs>
    characteristic?: boolean | Contribution$characteristicArgs<ExtArgs>
  }

  export type $ContributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contribution"
    objects: {
      artifact: Prisma.$ArtifactPayload<ExtArgs> | null
      class: Prisma.$ClassPayload<ExtArgs> | null
      endeavor: Prisma.$EndeavorPayload<ExtArgs> | null
      skill: Prisma.$SkillPayload<ExtArgs> | null
      characteristic: Prisma.$CharacteristicPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string | null
      strengthLevel: number
      artifactId: string | null
      classId: string | null
      endeavorId: string | null
      skillId: string | null
      characteristicId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contribution"]>
    composites: {}
  }

  type ContributionGetPayload<S extends boolean | null | undefined | ContributionDefaultArgs> = $Result.GetResult<Prisma.$ContributionPayload, S>

  type ContributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContributionCountAggregateInputType | true
    }

  export interface ContributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contribution'], meta: { name: 'Contribution' } }
    /**
     * Find zero or one Contribution that matches the filter.
     * @param {ContributionFindUniqueArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContributionFindUniqueArgs>(args: SelectSubset<T, ContributionFindUniqueArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContributionFindUniqueOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContributionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContributionFindFirstArgs>(args?: SelectSubset<T, ContributionFindFirstArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContributionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contributions
     * const contributions = await prisma.contribution.findMany()
     * 
     * // Get first 10 Contributions
     * const contributions = await prisma.contribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contributionWithIdOnly = await prisma.contribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContributionFindManyArgs>(args?: SelectSubset<T, ContributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contribution.
     * @param {ContributionCreateArgs} args - Arguments to create a Contribution.
     * @example
     * // Create one Contribution
     * const Contribution = await prisma.contribution.create({
     *   data: {
     *     // ... data to create a Contribution
     *   }
     * })
     * 
     */
    create<T extends ContributionCreateArgs>(args: SelectSubset<T, ContributionCreateArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contributions.
     * @param {ContributionCreateManyArgs} args - Arguments to create many Contributions.
     * @example
     * // Create many Contributions
     * const contribution = await prisma.contribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContributionCreateManyArgs>(args?: SelectSubset<T, ContributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contributions and returns the data saved in the database.
     * @param {ContributionCreateManyAndReturnArgs} args - Arguments to create many Contributions.
     * @example
     * // Create many Contributions
     * const contribution = await prisma.contribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contributions and only return the `id`
     * const contributionWithIdOnly = await prisma.contribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContributionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contribution.
     * @param {ContributionDeleteArgs} args - Arguments to delete one Contribution.
     * @example
     * // Delete one Contribution
     * const Contribution = await prisma.contribution.delete({
     *   where: {
     *     // ... filter to delete one Contribution
     *   }
     * })
     * 
     */
    delete<T extends ContributionDeleteArgs>(args: SelectSubset<T, ContributionDeleteArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contribution.
     * @param {ContributionUpdateArgs} args - Arguments to update one Contribution.
     * @example
     * // Update one Contribution
     * const contribution = await prisma.contribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContributionUpdateArgs>(args: SelectSubset<T, ContributionUpdateArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contributions.
     * @param {ContributionDeleteManyArgs} args - Arguments to filter Contributions to delete.
     * @example
     * // Delete a few Contributions
     * const { count } = await prisma.contribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContributionDeleteManyArgs>(args?: SelectSubset<T, ContributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contributions
     * const contribution = await prisma.contribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContributionUpdateManyArgs>(args: SelectSubset<T, ContributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions and returns the data updated in the database.
     * @param {ContributionUpdateManyAndReturnArgs} args - Arguments to update many Contributions.
     * @example
     * // Update many Contributions
     * const contribution = await prisma.contribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contributions and only return the `id`
     * const contributionWithIdOnly = await prisma.contribution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContributionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contribution.
     * @param {ContributionUpsertArgs} args - Arguments to update or create a Contribution.
     * @example
     * // Update or create a Contribution
     * const contribution = await prisma.contribution.upsert({
     *   create: {
     *     // ... data to create a Contribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contribution we want to update
     *   }
     * })
     */
    upsert<T extends ContributionUpsertArgs>(args: SelectSubset<T, ContributionUpsertArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionCountArgs} args - Arguments to filter Contributions to count.
     * @example
     * // Count the number of Contributions
     * const count = await prisma.contribution.count({
     *   where: {
     *     // ... the filter for the Contributions we want to count
     *   }
     * })
    **/
    count<T extends ContributionCountArgs>(
      args?: Subset<T, ContributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContributionAggregateArgs>(args: Subset<T, ContributionAggregateArgs>): Prisma.PrismaPromise<GetContributionAggregateType<T>>

    /**
     * Group by Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContributionGroupByArgs['orderBy'] }
        : { orderBy?: ContributionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contribution model
   */
  readonly fields: ContributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artifact<T extends Contribution$artifactArgs<ExtArgs> = {}>(args?: Subset<T, Contribution$artifactArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    class<T extends Contribution$classArgs<ExtArgs> = {}>(args?: Subset<T, Contribution$classArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    endeavor<T extends Contribution$endeavorArgs<ExtArgs> = {}>(args?: Subset<T, Contribution$endeavorArgs<ExtArgs>>): Prisma__EndeavorClient<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    skill<T extends Contribution$skillArgs<ExtArgs> = {}>(args?: Subset<T, Contribution$skillArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    characteristic<T extends Contribution$characteristicArgs<ExtArgs> = {}>(args?: Subset<T, Contribution$characteristicArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contribution model
   */
  interface ContributionFieldRefs {
    readonly id: FieldRef<"Contribution", 'String'>
    readonly description: FieldRef<"Contribution", 'String'>
    readonly strengthLevel: FieldRef<"Contribution", 'Int'>
    readonly artifactId: FieldRef<"Contribution", 'String'>
    readonly classId: FieldRef<"Contribution", 'String'>
    readonly endeavorId: FieldRef<"Contribution", 'String'>
    readonly skillId: FieldRef<"Contribution", 'String'>
    readonly characteristicId: FieldRef<"Contribution", 'String'>
    readonly createdAt: FieldRef<"Contribution", 'DateTime'>
    readonly updatedAt: FieldRef<"Contribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contribution findUnique
   */
  export type ContributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution findUniqueOrThrow
   */
  export type ContributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution findFirst
   */
  export type ContributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution findFirstOrThrow
   */
  export type ContributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution findMany
   */
  export type ContributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contributions to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution create
   */
  export type ContributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to create a Contribution.
     */
    data: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
  }

  /**
   * Contribution createMany
   */
  export type ContributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contributions.
     */
    data: ContributionCreateManyInput | ContributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contribution createManyAndReturn
   */
  export type ContributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * The data used to create many Contributions.
     */
    data: ContributionCreateManyInput | ContributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contribution update
   */
  export type ContributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to update a Contribution.
     */
    data: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
    /**
     * Choose, which Contribution to update.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution updateMany
   */
  export type ContributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contributions.
     */
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyInput>
    /**
     * Filter which Contributions to update
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to update.
     */
    limit?: number
  }

  /**
   * Contribution updateManyAndReturn
   */
  export type ContributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * The data used to update Contributions.
     */
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyInput>
    /**
     * Filter which Contributions to update
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contribution upsert
   */
  export type ContributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The filter to search for the Contribution to update in case it exists.
     */
    where: ContributionWhereUniqueInput
    /**
     * In case the Contribution found by the `where` argument doesn't exist, create a new Contribution with this data.
     */
    create: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
    /**
     * In case the Contribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
  }

  /**
   * Contribution delete
   */
  export type ContributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter which Contribution to delete.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution deleteMany
   */
  export type ContributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contributions to delete
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to delete.
     */
    limit?: number
  }

  /**
   * Contribution.artifact
   */
  export type Contribution$artifactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    where?: ArtifactWhereInput
  }

  /**
   * Contribution.class
   */
  export type Contribution$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * Contribution.endeavor
   */
  export type Contribution$endeavorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    where?: EndeavorWhereInput
  }

  /**
   * Contribution.skill
   */
  export type Contribution$skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
  }

  /**
   * Contribution.characteristic
   */
  export type Contribution$characteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characteristic
     */
    omit?: CharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    where?: CharacteristicWhereInput
  }

  /**
   * Contribution without action
   */
  export type ContributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
  }


  /**
   * Model Collaborator
   */

  export type AggregateCollaborator = {
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  export type CollaboratorMinAggregateOutputType = {
    id: string | null
    name: string | null
    linkedin: string | null
    type: $Enums.CollaboratorType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaboratorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    linkedin: string | null
    type: $Enums.CollaboratorType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaboratorCountAggregateOutputType = {
    id: number
    name: number
    linkedin: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollaboratorMinAggregateInputType = {
    id?: true
    name?: true
    linkedin?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaboratorMaxAggregateInputType = {
    id?: true
    name?: true
    linkedin?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaboratorCountAggregateInputType = {
    id?: true
    name?: true
    linkedin?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborator to aggregate.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collaborators
    **/
    _count?: true | CollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaboratorMaxAggregateInputType
  }

  export type GetCollaboratorAggregateType<T extends CollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaborator[P]>
      : GetScalarType<T[P], AggregateCollaborator[P]>
  }




  export type CollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithAggregationInput | CollaboratorOrderByWithAggregationInput[]
    by: CollaboratorScalarFieldEnum[] | CollaboratorScalarFieldEnum
    having?: CollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaboratorCountAggregateInputType | true
    _min?: CollaboratorMinAggregateInputType
    _max?: CollaboratorMaxAggregateInputType
  }

  export type CollaboratorGroupByOutputType = {
    id: string
    name: string
    linkedin: string | null
    type: $Enums.CollaboratorType
    createdAt: Date
    updatedAt: Date
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  type GetCollaboratorGroupByPayload<T extends CollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type CollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    linkedin?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artifacts?: boolean | Collaborator$artifactsArgs<ExtArgs>
    endeavors?: boolean | Collaborator$endeavorsArgs<ExtArgs>
    classes?: boolean | Collaborator$classesArgs<ExtArgs>
    _count?: boolean | CollaboratorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    linkedin?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    linkedin?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectScalar = {
    id?: boolean
    name?: boolean
    linkedin?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "linkedin" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["collaborator"]>
  export type CollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifacts?: boolean | Collaborator$artifactsArgs<ExtArgs>
    endeavors?: boolean | Collaborator$endeavorsArgs<ExtArgs>
    classes?: boolean | Collaborator$classesArgs<ExtArgs>
    _count?: boolean | CollaboratorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CollaboratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collaborator"
    objects: {
      artifacts: Prisma.$ArtifactPayload<ExtArgs>[]
      endeavors: Prisma.$EndeavorPayload<ExtArgs>[]
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      linkedin: string | null
      type: $Enums.CollaboratorType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collaborator"]>
    composites: {}
  }

  type CollaboratorGetPayload<S extends boolean | null | undefined | CollaboratorDefaultArgs> = $Result.GetResult<Prisma.$CollaboratorPayload, S>

  type CollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollaboratorCountAggregateInputType | true
    }

  export interface CollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collaborator'], meta: { name: 'Collaborator' } }
    /**
     * Find zero or one Collaborator that matches the filter.
     * @param {CollaboratorFindUniqueArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollaboratorFindUniqueArgs>(args: SelectSubset<T, CollaboratorFindUniqueArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollaboratorFindUniqueOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, CollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollaboratorFindFirstArgs>(args?: SelectSubset<T, CollaboratorFindFirstArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, CollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborators
     * const collaborators = await prisma.collaborator.findMany()
     * 
     * // Get first 10 Collaborators
     * const collaborators = await prisma.collaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaboratorWithIdOnly = await prisma.collaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollaboratorFindManyArgs>(args?: SelectSubset<T, CollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collaborator.
     * @param {CollaboratorCreateArgs} args - Arguments to create a Collaborator.
     * @example
     * // Create one Collaborator
     * const Collaborator = await prisma.collaborator.create({
     *   data: {
     *     // ... data to create a Collaborator
     *   }
     * })
     * 
     */
    create<T extends CollaboratorCreateArgs>(args: SelectSubset<T, CollaboratorCreateArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collaborators.
     * @param {CollaboratorCreateManyArgs} args - Arguments to create many Collaborators.
     * @example
     * // Create many Collaborators
     * const collaborator = await prisma.collaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollaboratorCreateManyArgs>(args?: SelectSubset<T, CollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collaborators and returns the data saved in the database.
     * @param {CollaboratorCreateManyAndReturnArgs} args - Arguments to create many Collaborators.
     * @example
     * // Create many Collaborators
     * const collaborator = await prisma.collaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collaborators and only return the `id`
     * const collaboratorWithIdOnly = await prisma.collaborator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, CollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collaborator.
     * @param {CollaboratorDeleteArgs} args - Arguments to delete one Collaborator.
     * @example
     * // Delete one Collaborator
     * const Collaborator = await prisma.collaborator.delete({
     *   where: {
     *     // ... filter to delete one Collaborator
     *   }
     * })
     * 
     */
    delete<T extends CollaboratorDeleteArgs>(args: SelectSubset<T, CollaboratorDeleteArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collaborator.
     * @param {CollaboratorUpdateArgs} args - Arguments to update one Collaborator.
     * @example
     * // Update one Collaborator
     * const collaborator = await prisma.collaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollaboratorUpdateArgs>(args: SelectSubset<T, CollaboratorUpdateArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collaborators.
     * @param {CollaboratorDeleteManyArgs} args - Arguments to filter Collaborators to delete.
     * @example
     * // Delete a few Collaborators
     * const { count } = await prisma.collaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollaboratorDeleteManyArgs>(args?: SelectSubset<T, CollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborators
     * const collaborator = await prisma.collaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollaboratorUpdateManyArgs>(args: SelectSubset<T, CollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborators and returns the data updated in the database.
     * @param {CollaboratorUpdateManyAndReturnArgs} args - Arguments to update many Collaborators.
     * @example
     * // Update many Collaborators
     * const collaborator = await prisma.collaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collaborators and only return the `id`
     * const collaboratorWithIdOnly = await prisma.collaborator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, CollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collaborator.
     * @param {CollaboratorUpsertArgs} args - Arguments to update or create a Collaborator.
     * @example
     * // Update or create a Collaborator
     * const collaborator = await prisma.collaborator.upsert({
     *   create: {
     *     // ... data to create a Collaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaborator we want to update
     *   }
     * })
     */
    upsert<T extends CollaboratorUpsertArgs>(args: SelectSubset<T, CollaboratorUpsertArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorCountArgs} args - Arguments to filter Collaborators to count.
     * @example
     * // Count the number of Collaborators
     * const count = await prisma.collaborator.count({
     *   where: {
     *     // ... the filter for the Collaborators we want to count
     *   }
     * })
    **/
    count<T extends CollaboratorCountArgs>(
      args?: Subset<T, CollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollaboratorAggregateArgs>(args: Subset<T, CollaboratorAggregateArgs>): Prisma.PrismaPromise<GetCollaboratorAggregateType<T>>

    /**
     * Group by Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: CollaboratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collaborator model
   */
  readonly fields: CollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artifacts<T extends Collaborator$artifactsArgs<ExtArgs> = {}>(args?: Subset<T, Collaborator$artifactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    endeavors<T extends Collaborator$endeavorsArgs<ExtArgs> = {}>(args?: Subset<T, Collaborator$endeavorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndeavorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends Collaborator$classesArgs<ExtArgs> = {}>(args?: Subset<T, Collaborator$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collaborator model
   */
  interface CollaboratorFieldRefs {
    readonly id: FieldRef<"Collaborator", 'String'>
    readonly name: FieldRef<"Collaborator", 'String'>
    readonly linkedin: FieldRef<"Collaborator", 'String'>
    readonly type: FieldRef<"Collaborator", 'CollaboratorType'>
    readonly createdAt: FieldRef<"Collaborator", 'DateTime'>
    readonly updatedAt: FieldRef<"Collaborator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collaborator findUnique
   */
  export type CollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator findUniqueOrThrow
   */
  export type CollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator findFirst
   */
  export type CollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator findFirstOrThrow
   */
  export type CollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator findMany
   */
  export type CollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborators to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator create
   */
  export type CollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a Collaborator.
     */
    data: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
  }

  /**
   * Collaborator createMany
   */
  export type CollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collaborators.
     */
    data: CollaboratorCreateManyInput | CollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collaborator createManyAndReturn
   */
  export type CollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many Collaborators.
     */
    data: CollaboratorCreateManyInput | CollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collaborator update
   */
  export type CollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a Collaborator.
     */
    data: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
    /**
     * Choose, which Collaborator to update.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator updateMany
   */
  export type CollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collaborators.
     */
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Collaborators to update
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to update.
     */
    limit?: number
  }

  /**
   * Collaborator updateManyAndReturn
   */
  export type CollaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data used to update Collaborators.
     */
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Collaborators to update
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to update.
     */
    limit?: number
  }

  /**
   * Collaborator upsert
   */
  export type CollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the Collaborator to update in case it exists.
     */
    where: CollaboratorWhereUniqueInput
    /**
     * In case the Collaborator found by the `where` argument doesn't exist, create a new Collaborator with this data.
     */
    create: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
    /**
     * In case the Collaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
  }

  /**
   * Collaborator delete
   */
  export type CollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter which Collaborator to delete.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator deleteMany
   */
  export type CollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborators to delete
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to delete.
     */
    limit?: number
  }

  /**
   * Collaborator.artifacts
   */
  export type Collaborator$artifactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    where?: ArtifactWhereInput
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    cursor?: ArtifactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Collaborator.endeavors
   */
  export type Collaborator$endeavorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endeavor
     */
    select?: EndeavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endeavor
     */
    omit?: EndeavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndeavorInclude<ExtArgs> | null
    where?: EndeavorWhereInput
    orderBy?: EndeavorOrderByWithRelationInput | EndeavorOrderByWithRelationInput[]
    cursor?: EndeavorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndeavorScalarFieldEnum | EndeavorScalarFieldEnum[]
  }

  /**
   * Collaborator.classes
   */
  export type Collaborator$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Collaborator without action
   */
  export type CollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    readingOrder: number | null
  }

  export type BookSumAggregateOutputType = {
    readingOrder: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    imageUrl: string | null
    readingOrder: number | null
    reasonForReading: $Enums.ReasonForReading | null
    reflection: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    imageUrl: string | null
    readingOrder: number | null
    reasonForReading: $Enums.ReasonForReading | null
    reflection: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    imageUrl: number
    readingOrder: number
    reasonForReading: number
    reflection: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    readingOrder?: true
  }

  export type BookSumAggregateInputType = {
    readingOrder?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    imageUrl?: true
    readingOrder?: true
    reasonForReading?: true
    reflection?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    imageUrl?: true
    readingOrder?: true
    reasonForReading?: true
    reflection?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    imageUrl?: true
    readingOrder?: true
    reasonForReading?: true
    reflection?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    title: string
    author: string
    imageUrl: string | null
    readingOrder: number
    reasonForReading: $Enums.ReasonForReading
    reflection: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    imageUrl?: boolean
    readingOrder?: boolean
    reasonForReading?: boolean
    reflection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    imageUrl?: boolean
    readingOrder?: boolean
    reasonForReading?: boolean
    reflection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    imageUrl?: boolean
    readingOrder?: boolean
    reasonForReading?: boolean
    reflection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    imageUrl?: boolean
    readingOrder?: boolean
    reasonForReading?: boolean
    reflection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "imageUrl" | "readingOrder" | "reasonForReading" | "reflection" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string
      imageUrl: string | null
      readingOrder: number
      reasonForReading: $Enums.ReasonForReading
      reflection: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly imageUrl: FieldRef<"Book", 'String'>
    readonly readingOrder: FieldRef<"Book", 'Int'>
    readonly reasonForReading: FieldRef<"Book", 'ReasonForReading'>
    readonly reflection: FieldRef<"Book", 'String'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
  }


  /**
   * Model BookRec
   */

  export type AggregateBookRec = {
    _count: BookRecCountAggregateOutputType | null
    _min: BookRecMinAggregateOutputType | null
    _max: BookRecMaxAggregateOutputType | null
  }

  export type BookRecMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    why: string | null
    recommender: string | null
    email: string | null
    createdAt: Date | null
  }

  export type BookRecMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    why: string | null
    recommender: string | null
    email: string | null
    createdAt: Date | null
  }

  export type BookRecCountAggregateOutputType = {
    id: number
    title: number
    author: number
    why: number
    recommender: number
    email: number
    createdAt: number
    _all: number
  }


  export type BookRecMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    why?: true
    recommender?: true
    email?: true
    createdAt?: true
  }

  export type BookRecMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    why?: true
    recommender?: true
    email?: true
    createdAt?: true
  }

  export type BookRecCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    why?: true
    recommender?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type BookRecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookRec to aggregate.
     */
    where?: BookRecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRecs to fetch.
     */
    orderBy?: BookRecOrderByWithRelationInput | BookRecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookRecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookRecs
    **/
    _count?: true | BookRecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookRecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookRecMaxAggregateInputType
  }

  export type GetBookRecAggregateType<T extends BookRecAggregateArgs> = {
        [P in keyof T & keyof AggregateBookRec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookRec[P]>
      : GetScalarType<T[P], AggregateBookRec[P]>
  }




  export type BookRecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookRecWhereInput
    orderBy?: BookRecOrderByWithAggregationInput | BookRecOrderByWithAggregationInput[]
    by: BookRecScalarFieldEnum[] | BookRecScalarFieldEnum
    having?: BookRecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookRecCountAggregateInputType | true
    _min?: BookRecMinAggregateInputType
    _max?: BookRecMaxAggregateInputType
  }

  export type BookRecGroupByOutputType = {
    id: string
    title: string
    author: string
    why: string
    recommender: string
    email: string
    createdAt: Date
    _count: BookRecCountAggregateOutputType | null
    _min: BookRecMinAggregateOutputType | null
    _max: BookRecMaxAggregateOutputType | null
  }

  type GetBookRecGroupByPayload<T extends BookRecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookRecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookRecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookRecGroupByOutputType[P]>
            : GetScalarType<T[P], BookRecGroupByOutputType[P]>
        }
      >
    >


  export type BookRecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    why?: boolean
    recommender?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bookRec"]>

  export type BookRecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    why?: boolean
    recommender?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bookRec"]>

  export type BookRecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    why?: boolean
    recommender?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bookRec"]>

  export type BookRecSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    why?: boolean
    recommender?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type BookRecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "why" | "recommender" | "email" | "createdAt", ExtArgs["result"]["bookRec"]>

  export type $BookRecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookRec"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string
      why: string
      recommender: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["bookRec"]>
    composites: {}
  }

  type BookRecGetPayload<S extends boolean | null | undefined | BookRecDefaultArgs> = $Result.GetResult<Prisma.$BookRecPayload, S>

  type BookRecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookRecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookRecCountAggregateInputType | true
    }

  export interface BookRecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookRec'], meta: { name: 'BookRec' } }
    /**
     * Find zero or one BookRec that matches the filter.
     * @param {BookRecFindUniqueArgs} args - Arguments to find a BookRec
     * @example
     * // Get one BookRec
     * const bookRec = await prisma.bookRec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookRecFindUniqueArgs>(args: SelectSubset<T, BookRecFindUniqueArgs<ExtArgs>>): Prisma__BookRecClient<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookRec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookRecFindUniqueOrThrowArgs} args - Arguments to find a BookRec
     * @example
     * // Get one BookRec
     * const bookRec = await prisma.bookRec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookRecFindUniqueOrThrowArgs>(args: SelectSubset<T, BookRecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookRecClient<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookRec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRecFindFirstArgs} args - Arguments to find a BookRec
     * @example
     * // Get one BookRec
     * const bookRec = await prisma.bookRec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookRecFindFirstArgs>(args?: SelectSubset<T, BookRecFindFirstArgs<ExtArgs>>): Prisma__BookRecClient<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookRec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRecFindFirstOrThrowArgs} args - Arguments to find a BookRec
     * @example
     * // Get one BookRec
     * const bookRec = await prisma.bookRec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookRecFindFirstOrThrowArgs>(args?: SelectSubset<T, BookRecFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookRecClient<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookRecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookRecs
     * const bookRecs = await prisma.bookRec.findMany()
     * 
     * // Get first 10 BookRecs
     * const bookRecs = await prisma.bookRec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookRecWithIdOnly = await prisma.bookRec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookRecFindManyArgs>(args?: SelectSubset<T, BookRecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookRec.
     * @param {BookRecCreateArgs} args - Arguments to create a BookRec.
     * @example
     * // Create one BookRec
     * const BookRec = await prisma.bookRec.create({
     *   data: {
     *     // ... data to create a BookRec
     *   }
     * })
     * 
     */
    create<T extends BookRecCreateArgs>(args: SelectSubset<T, BookRecCreateArgs<ExtArgs>>): Prisma__BookRecClient<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookRecs.
     * @param {BookRecCreateManyArgs} args - Arguments to create many BookRecs.
     * @example
     * // Create many BookRecs
     * const bookRec = await prisma.bookRec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookRecCreateManyArgs>(args?: SelectSubset<T, BookRecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookRecs and returns the data saved in the database.
     * @param {BookRecCreateManyAndReturnArgs} args - Arguments to create many BookRecs.
     * @example
     * // Create many BookRecs
     * const bookRec = await prisma.bookRec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookRecs and only return the `id`
     * const bookRecWithIdOnly = await prisma.bookRec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookRecCreateManyAndReturnArgs>(args?: SelectSubset<T, BookRecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookRec.
     * @param {BookRecDeleteArgs} args - Arguments to delete one BookRec.
     * @example
     * // Delete one BookRec
     * const BookRec = await prisma.bookRec.delete({
     *   where: {
     *     // ... filter to delete one BookRec
     *   }
     * })
     * 
     */
    delete<T extends BookRecDeleteArgs>(args: SelectSubset<T, BookRecDeleteArgs<ExtArgs>>): Prisma__BookRecClient<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookRec.
     * @param {BookRecUpdateArgs} args - Arguments to update one BookRec.
     * @example
     * // Update one BookRec
     * const bookRec = await prisma.bookRec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookRecUpdateArgs>(args: SelectSubset<T, BookRecUpdateArgs<ExtArgs>>): Prisma__BookRecClient<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookRecs.
     * @param {BookRecDeleteManyArgs} args - Arguments to filter BookRecs to delete.
     * @example
     * // Delete a few BookRecs
     * const { count } = await prisma.bookRec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookRecDeleteManyArgs>(args?: SelectSubset<T, BookRecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookRecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookRecs
     * const bookRec = await prisma.bookRec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookRecUpdateManyArgs>(args: SelectSubset<T, BookRecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookRecs and returns the data updated in the database.
     * @param {BookRecUpdateManyAndReturnArgs} args - Arguments to update many BookRecs.
     * @example
     * // Update many BookRecs
     * const bookRec = await prisma.bookRec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookRecs and only return the `id`
     * const bookRecWithIdOnly = await prisma.bookRec.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookRecUpdateManyAndReturnArgs>(args: SelectSubset<T, BookRecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookRec.
     * @param {BookRecUpsertArgs} args - Arguments to update or create a BookRec.
     * @example
     * // Update or create a BookRec
     * const bookRec = await prisma.bookRec.upsert({
     *   create: {
     *     // ... data to create a BookRec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookRec we want to update
     *   }
     * })
     */
    upsert<T extends BookRecUpsertArgs>(args: SelectSubset<T, BookRecUpsertArgs<ExtArgs>>): Prisma__BookRecClient<$Result.GetResult<Prisma.$BookRecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookRecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRecCountArgs} args - Arguments to filter BookRecs to count.
     * @example
     * // Count the number of BookRecs
     * const count = await prisma.bookRec.count({
     *   where: {
     *     // ... the filter for the BookRecs we want to count
     *   }
     * })
    **/
    count<T extends BookRecCountArgs>(
      args?: Subset<T, BookRecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookRecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookRec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookRecAggregateArgs>(args: Subset<T, BookRecAggregateArgs>): Prisma.PrismaPromise<GetBookRecAggregateType<T>>

    /**
     * Group by BookRec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRecGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookRecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookRecGroupByArgs['orderBy'] }
        : { orderBy?: BookRecGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookRecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookRecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookRec model
   */
  readonly fields: BookRecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookRec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookRecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookRec model
   */
  interface BookRecFieldRefs {
    readonly id: FieldRef<"BookRec", 'String'>
    readonly title: FieldRef<"BookRec", 'String'>
    readonly author: FieldRef<"BookRec", 'String'>
    readonly why: FieldRef<"BookRec", 'String'>
    readonly recommender: FieldRef<"BookRec", 'String'>
    readonly email: FieldRef<"BookRec", 'String'>
    readonly createdAt: FieldRef<"BookRec", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookRec findUnique
   */
  export type BookRecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * Filter, which BookRec to fetch.
     */
    where: BookRecWhereUniqueInput
  }

  /**
   * BookRec findUniqueOrThrow
   */
  export type BookRecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * Filter, which BookRec to fetch.
     */
    where: BookRecWhereUniqueInput
  }

  /**
   * BookRec findFirst
   */
  export type BookRecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * Filter, which BookRec to fetch.
     */
    where?: BookRecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRecs to fetch.
     */
    orderBy?: BookRecOrderByWithRelationInput | BookRecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookRecs.
     */
    cursor?: BookRecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookRecs.
     */
    distinct?: BookRecScalarFieldEnum | BookRecScalarFieldEnum[]
  }

  /**
   * BookRec findFirstOrThrow
   */
  export type BookRecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * Filter, which BookRec to fetch.
     */
    where?: BookRecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRecs to fetch.
     */
    orderBy?: BookRecOrderByWithRelationInput | BookRecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookRecs.
     */
    cursor?: BookRecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookRecs.
     */
    distinct?: BookRecScalarFieldEnum | BookRecScalarFieldEnum[]
  }

  /**
   * BookRec findMany
   */
  export type BookRecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * Filter, which BookRecs to fetch.
     */
    where?: BookRecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRecs to fetch.
     */
    orderBy?: BookRecOrderByWithRelationInput | BookRecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookRecs.
     */
    cursor?: BookRecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRecs.
     */
    skip?: number
    distinct?: BookRecScalarFieldEnum | BookRecScalarFieldEnum[]
  }

  /**
   * BookRec create
   */
  export type BookRecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * The data needed to create a BookRec.
     */
    data: XOR<BookRecCreateInput, BookRecUncheckedCreateInput>
  }

  /**
   * BookRec createMany
   */
  export type BookRecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookRecs.
     */
    data: BookRecCreateManyInput | BookRecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookRec createManyAndReturn
   */
  export type BookRecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * The data used to create many BookRecs.
     */
    data: BookRecCreateManyInput | BookRecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookRec update
   */
  export type BookRecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * The data needed to update a BookRec.
     */
    data: XOR<BookRecUpdateInput, BookRecUncheckedUpdateInput>
    /**
     * Choose, which BookRec to update.
     */
    where: BookRecWhereUniqueInput
  }

  /**
   * BookRec updateMany
   */
  export type BookRecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookRecs.
     */
    data: XOR<BookRecUpdateManyMutationInput, BookRecUncheckedUpdateManyInput>
    /**
     * Filter which BookRecs to update
     */
    where?: BookRecWhereInput
    /**
     * Limit how many BookRecs to update.
     */
    limit?: number
  }

  /**
   * BookRec updateManyAndReturn
   */
  export type BookRecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * The data used to update BookRecs.
     */
    data: XOR<BookRecUpdateManyMutationInput, BookRecUncheckedUpdateManyInput>
    /**
     * Filter which BookRecs to update
     */
    where?: BookRecWhereInput
    /**
     * Limit how many BookRecs to update.
     */
    limit?: number
  }

  /**
   * BookRec upsert
   */
  export type BookRecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * The filter to search for the BookRec to update in case it exists.
     */
    where: BookRecWhereUniqueInput
    /**
     * In case the BookRec found by the `where` argument doesn't exist, create a new BookRec with this data.
     */
    create: XOR<BookRecCreateInput, BookRecUncheckedCreateInput>
    /**
     * In case the BookRec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookRecUpdateInput, BookRecUncheckedUpdateInput>
  }

  /**
   * BookRec delete
   */
  export type BookRecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
    /**
     * Filter which BookRec to delete.
     */
    where: BookRecWhereUniqueInput
  }

  /**
   * BookRec deleteMany
   */
  export type BookRecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookRecs to delete
     */
    where?: BookRecWhereInput
    /**
     * Limit how many BookRecs to delete.
     */
    limit?: number
  }

  /**
   * BookRec without action
   */
  export type BookRecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookRec
     */
    select?: BookRecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookRec
     */
    omit?: BookRecOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EndeavorScalarFieldEnum: {
    id: 'id',
    entity: 'entity',
    title: 'title',
    description: 'description',
    link: 'link',
    imageUrl: 'imageUrl',
    startDate: 'startDate',
    endDate: 'endDate',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EndeavorScalarFieldEnum = (typeof EndeavorScalarFieldEnum)[keyof typeof EndeavorScalarFieldEnum]


  export const ArtifactScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    link: 'link',
    completionDate: 'completionDate',
    endeavorId: 'endeavorId',
    classId: 'classId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtifactScalarFieldEnum = (typeof ArtifactScalarFieldEnum)[keyof typeof ArtifactScalarFieldEnum]


  export const KnowledgeScalarFieldEnum: {
    id: 'id',
    year: 'year',
    title: 'title',
    location: 'location',
    institution: 'institution',
    reflection: 'reflection',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KnowledgeScalarFieldEnum = (typeof KnowledgeScalarFieldEnum)[keyof typeof KnowledgeScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    term: 'term',
    description: 'description',
    knowledgeId: 'knowledgeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const CharacteristicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharacteristicScalarFieldEnum = (typeof CharacteristicScalarFieldEnum)[keyof typeof CharacteristicScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ContributionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    strengthLevel: 'strengthLevel',
    artifactId: 'artifactId',
    classId: 'classId',
    endeavorId: 'endeavorId',
    skillId: 'skillId',
    characteristicId: 'characteristicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContributionScalarFieldEnum = (typeof ContributionScalarFieldEnum)[keyof typeof ContributionScalarFieldEnum]


  export const CollaboratorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    linkedin: 'linkedin',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollaboratorScalarFieldEnum = (typeof CollaboratorScalarFieldEnum)[keyof typeof CollaboratorScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    imageUrl: 'imageUrl',
    readingOrder: 'readingOrder',
    reasonForReading: 'reasonForReading',
    reflection: 'reflection',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookRecScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    why: 'why',
    recommender: 'recommender',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type BookRecScalarFieldEnum = (typeof BookRecScalarFieldEnum)[keyof typeof BookRecScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Term'
   */
  export type EnumTermFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Term'>
    


  /**
   * Reference to a field of type 'Term[]'
   */
  export type ListEnumTermFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Term[]'>
    


  /**
   * Reference to a field of type 'CollaboratorType'
   */
  export type EnumCollaboratorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaboratorType'>
    


  /**
   * Reference to a field of type 'CollaboratorType[]'
   */
  export type ListEnumCollaboratorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaboratorType[]'>
    


  /**
   * Reference to a field of type 'ReasonForReading'
   */
  export type EnumReasonForReadingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReasonForReading'>
    


  /**
   * Reference to a field of type 'ReasonForReading[]'
   */
  export type ListEnumReasonForReadingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReasonForReading[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EndeavorWhereInput = {
    AND?: EndeavorWhereInput | EndeavorWhereInput[]
    OR?: EndeavorWhereInput[]
    NOT?: EndeavorWhereInput | EndeavorWhereInput[]
    id?: StringFilter<"Endeavor"> | string
    entity?: StringFilter<"Endeavor"> | string
    title?: StringFilter<"Endeavor"> | string
    description?: StringFilter<"Endeavor"> | string
    link?: StringNullableFilter<"Endeavor"> | string | null
    imageUrl?: StringNullableFilter<"Endeavor"> | string | null
    startDate?: DateTimeFilter<"Endeavor"> | Date | string
    endDate?: DateTimeNullableFilter<"Endeavor"> | Date | string | null
    category?: EnumCategoryFilter<"Endeavor"> | $Enums.Category
    createdAt?: DateTimeFilter<"Endeavor"> | Date | string
    updatedAt?: DateTimeFilter<"Endeavor"> | Date | string
    artifacts?: ArtifactListRelationFilter
    contributions?: ContributionListRelationFilter
    mentors?: CollaboratorListRelationFilter
  }

  export type EndeavorOrderByWithRelationInput = {
    id?: SortOrder
    entity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artifacts?: ArtifactOrderByRelationAggregateInput
    contributions?: ContributionOrderByRelationAggregateInput
    mentors?: CollaboratorOrderByRelationAggregateInput
  }

  export type EndeavorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EndeavorWhereInput | EndeavorWhereInput[]
    OR?: EndeavorWhereInput[]
    NOT?: EndeavorWhereInput | EndeavorWhereInput[]
    entity?: StringFilter<"Endeavor"> | string
    title?: StringFilter<"Endeavor"> | string
    description?: StringFilter<"Endeavor"> | string
    link?: StringNullableFilter<"Endeavor"> | string | null
    imageUrl?: StringNullableFilter<"Endeavor"> | string | null
    startDate?: DateTimeFilter<"Endeavor"> | Date | string
    endDate?: DateTimeNullableFilter<"Endeavor"> | Date | string | null
    category?: EnumCategoryFilter<"Endeavor"> | $Enums.Category
    createdAt?: DateTimeFilter<"Endeavor"> | Date | string
    updatedAt?: DateTimeFilter<"Endeavor"> | Date | string
    artifacts?: ArtifactListRelationFilter
    contributions?: ContributionListRelationFilter
    mentors?: CollaboratorListRelationFilter
  }, "id">

  export type EndeavorOrderByWithAggregationInput = {
    id?: SortOrder
    entity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EndeavorCountOrderByAggregateInput
    _max?: EndeavorMaxOrderByAggregateInput
    _min?: EndeavorMinOrderByAggregateInput
  }

  export type EndeavorScalarWhereWithAggregatesInput = {
    AND?: EndeavorScalarWhereWithAggregatesInput | EndeavorScalarWhereWithAggregatesInput[]
    OR?: EndeavorScalarWhereWithAggregatesInput[]
    NOT?: EndeavorScalarWhereWithAggregatesInput | EndeavorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Endeavor"> | string
    entity?: StringWithAggregatesFilter<"Endeavor"> | string
    title?: StringWithAggregatesFilter<"Endeavor"> | string
    description?: StringWithAggregatesFilter<"Endeavor"> | string
    link?: StringNullableWithAggregatesFilter<"Endeavor"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Endeavor"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Endeavor"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Endeavor"> | Date | string | null
    category?: EnumCategoryWithAggregatesFilter<"Endeavor"> | $Enums.Category
    createdAt?: DateTimeWithAggregatesFilter<"Endeavor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Endeavor"> | Date | string
  }

  export type ArtifactWhereInput = {
    AND?: ArtifactWhereInput | ArtifactWhereInput[]
    OR?: ArtifactWhereInput[]
    NOT?: ArtifactWhereInput | ArtifactWhereInput[]
    id?: StringFilter<"Artifact"> | string
    title?: StringFilter<"Artifact"> | string
    description?: StringFilter<"Artifact"> | string
    imageUrl?: StringNullableFilter<"Artifact"> | string | null
    link?: StringNullableFilter<"Artifact"> | string | null
    completionDate?: DateTimeFilter<"Artifact"> | Date | string
    endeavorId?: StringNullableFilter<"Artifact"> | string | null
    classId?: StringNullableFilter<"Artifact"> | string | null
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
    updatedAt?: DateTimeFilter<"Artifact"> | Date | string
    endeavor?: XOR<EndeavorNullableScalarRelationFilter, EndeavorWhereInput> | null
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
    contributions?: ContributionListRelationFilter
    collaborators?: CollaboratorListRelationFilter
  }

  export type ArtifactOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    completionDate?: SortOrder
    endeavorId?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endeavor?: EndeavorOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
    contributions?: ContributionOrderByRelationAggregateInput
    collaborators?: CollaboratorOrderByRelationAggregateInput
  }

  export type ArtifactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtifactWhereInput | ArtifactWhereInput[]
    OR?: ArtifactWhereInput[]
    NOT?: ArtifactWhereInput | ArtifactWhereInput[]
    title?: StringFilter<"Artifact"> | string
    description?: StringFilter<"Artifact"> | string
    imageUrl?: StringNullableFilter<"Artifact"> | string | null
    link?: StringNullableFilter<"Artifact"> | string | null
    completionDate?: DateTimeFilter<"Artifact"> | Date | string
    endeavorId?: StringNullableFilter<"Artifact"> | string | null
    classId?: StringNullableFilter<"Artifact"> | string | null
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
    updatedAt?: DateTimeFilter<"Artifact"> | Date | string
    endeavor?: XOR<EndeavorNullableScalarRelationFilter, EndeavorWhereInput> | null
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
    contributions?: ContributionListRelationFilter
    collaborators?: CollaboratorListRelationFilter
  }, "id">

  export type ArtifactOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    completionDate?: SortOrder
    endeavorId?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtifactCountOrderByAggregateInput
    _max?: ArtifactMaxOrderByAggregateInput
    _min?: ArtifactMinOrderByAggregateInput
  }

  export type ArtifactScalarWhereWithAggregatesInput = {
    AND?: ArtifactScalarWhereWithAggregatesInput | ArtifactScalarWhereWithAggregatesInput[]
    OR?: ArtifactScalarWhereWithAggregatesInput[]
    NOT?: ArtifactScalarWhereWithAggregatesInput | ArtifactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artifact"> | string
    title?: StringWithAggregatesFilter<"Artifact"> | string
    description?: StringWithAggregatesFilter<"Artifact"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    link?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    completionDate?: DateTimeWithAggregatesFilter<"Artifact"> | Date | string
    endeavorId?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    classId?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Artifact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artifact"> | Date | string
  }

  export type KnowledgeWhereInput = {
    AND?: KnowledgeWhereInput | KnowledgeWhereInput[]
    OR?: KnowledgeWhereInput[]
    NOT?: KnowledgeWhereInput | KnowledgeWhereInput[]
    id?: StringFilter<"Knowledge"> | string
    year?: IntFilter<"Knowledge"> | number
    title?: StringFilter<"Knowledge"> | string
    location?: StringFilter<"Knowledge"> | string
    institution?: StringFilter<"Knowledge"> | string
    reflection?: StringNullableFilter<"Knowledge"> | string | null
    createdAt?: DateTimeFilter<"Knowledge"> | Date | string
    updatedAt?: DateTimeFilter<"Knowledge"> | Date | string
    classes?: ClassListRelationFilter
  }

  export type KnowledgeOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    title?: SortOrder
    location?: SortOrder
    institution?: SortOrder
    reflection?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classes?: ClassOrderByRelationAggregateInput
  }

  export type KnowledgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KnowledgeWhereInput | KnowledgeWhereInput[]
    OR?: KnowledgeWhereInput[]
    NOT?: KnowledgeWhereInput | KnowledgeWhereInput[]
    year?: IntFilter<"Knowledge"> | number
    title?: StringFilter<"Knowledge"> | string
    location?: StringFilter<"Knowledge"> | string
    institution?: StringFilter<"Knowledge"> | string
    reflection?: StringNullableFilter<"Knowledge"> | string | null
    createdAt?: DateTimeFilter<"Knowledge"> | Date | string
    updatedAt?: DateTimeFilter<"Knowledge"> | Date | string
    classes?: ClassListRelationFilter
  }, "id">

  export type KnowledgeOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    title?: SortOrder
    location?: SortOrder
    institution?: SortOrder
    reflection?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KnowledgeCountOrderByAggregateInput
    _avg?: KnowledgeAvgOrderByAggregateInput
    _max?: KnowledgeMaxOrderByAggregateInput
    _min?: KnowledgeMinOrderByAggregateInput
    _sum?: KnowledgeSumOrderByAggregateInput
  }

  export type KnowledgeScalarWhereWithAggregatesInput = {
    AND?: KnowledgeScalarWhereWithAggregatesInput | KnowledgeScalarWhereWithAggregatesInput[]
    OR?: KnowledgeScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeScalarWhereWithAggregatesInput | KnowledgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Knowledge"> | string
    year?: IntWithAggregatesFilter<"Knowledge"> | number
    title?: StringWithAggregatesFilter<"Knowledge"> | string
    location?: StringWithAggregatesFilter<"Knowledge"> | string
    institution?: StringWithAggregatesFilter<"Knowledge"> | string
    reflection?: StringNullableWithAggregatesFilter<"Knowledge"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Knowledge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Knowledge"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    term?: EnumTermFilter<"Class"> | $Enums.Term
    description?: StringNullableFilter<"Class"> | string | null
    knowledgeId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    professor?: CollaboratorListRelationFilter
    knowledge?: XOR<KnowledgeScalarRelationFilter, KnowledgeWhereInput>
    artifacts?: ArtifactListRelationFilter
    contributions?: ContributionListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    term?: SortOrder
    description?: SortOrderInput | SortOrder
    knowledgeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professor?: CollaboratorOrderByRelationAggregateInput
    knowledge?: KnowledgeOrderByWithRelationInput
    artifacts?: ArtifactOrderByRelationAggregateInput
    contributions?: ContributionOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    term?: EnumTermFilter<"Class"> | $Enums.Term
    description?: StringNullableFilter<"Class"> | string | null
    knowledgeId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    professor?: CollaboratorListRelationFilter
    knowledge?: XOR<KnowledgeScalarRelationFilter, KnowledgeWhereInput>
    artifacts?: ArtifactListRelationFilter
    contributions?: ContributionListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    term?: SortOrder
    description?: SortOrderInput | SortOrder
    knowledgeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    term?: EnumTermWithAggregatesFilter<"Class"> | $Enums.Term
    description?: StringNullableWithAggregatesFilter<"Class"> | string | null
    knowledgeId?: StringWithAggregatesFilter<"Class"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type CharacteristicWhereInput = {
    AND?: CharacteristicWhereInput | CharacteristicWhereInput[]
    OR?: CharacteristicWhereInput[]
    NOT?: CharacteristicWhereInput | CharacteristicWhereInput[]
    id?: StringFilter<"Characteristic"> | string
    title?: StringFilter<"Characteristic"> | string
    description?: StringNullableFilter<"Characteristic"> | string | null
    createdAt?: DateTimeFilter<"Characteristic"> | Date | string
    updatedAt?: DateTimeFilter<"Characteristic"> | Date | string
    contributions?: ContributionListRelationFilter
  }

  export type CharacteristicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contributions?: ContributionOrderByRelationAggregateInput
  }

  export type CharacteristicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: CharacteristicWhereInput | CharacteristicWhereInput[]
    OR?: CharacteristicWhereInput[]
    NOT?: CharacteristicWhereInput | CharacteristicWhereInput[]
    description?: StringNullableFilter<"Characteristic"> | string | null
    createdAt?: DateTimeFilter<"Characteristic"> | Date | string
    updatedAt?: DateTimeFilter<"Characteristic"> | Date | string
    contributions?: ContributionListRelationFilter
  }, "id" | "title">

  export type CharacteristicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacteristicCountOrderByAggregateInput
    _max?: CharacteristicMaxOrderByAggregateInput
    _min?: CharacteristicMinOrderByAggregateInput
  }

  export type CharacteristicScalarWhereWithAggregatesInput = {
    AND?: CharacteristicScalarWhereWithAggregatesInput | CharacteristicScalarWhereWithAggregatesInput[]
    OR?: CharacteristicScalarWhereWithAggregatesInput[]
    NOT?: CharacteristicScalarWhereWithAggregatesInput | CharacteristicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Characteristic"> | string
    title?: StringWithAggregatesFilter<"Characteristic"> | string
    description?: StringNullableWithAggregatesFilter<"Characteristic"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Characteristic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Characteristic"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    title?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    contributions?: ContributionListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contributions?: ContributionOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    description?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    contributions?: ContributionListRelationFilter
  }, "id" | "title">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    title?: StringWithAggregatesFilter<"Skill"> | string
    description?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type ContributionWhereInput = {
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    id?: StringFilter<"Contribution"> | string
    description?: StringNullableFilter<"Contribution"> | string | null
    strengthLevel?: IntFilter<"Contribution"> | number
    artifactId?: StringNullableFilter<"Contribution"> | string | null
    classId?: StringNullableFilter<"Contribution"> | string | null
    endeavorId?: StringNullableFilter<"Contribution"> | string | null
    skillId?: StringNullableFilter<"Contribution"> | string | null
    characteristicId?: StringNullableFilter<"Contribution"> | string | null
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    artifact?: XOR<ArtifactNullableScalarRelationFilter, ArtifactWhereInput> | null
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
    endeavor?: XOR<EndeavorNullableScalarRelationFilter, EndeavorWhereInput> | null
    skill?: XOR<SkillNullableScalarRelationFilter, SkillWhereInput> | null
    characteristic?: XOR<CharacteristicNullableScalarRelationFilter, CharacteristicWhereInput> | null
  }

  export type ContributionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    strengthLevel?: SortOrder
    artifactId?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    endeavorId?: SortOrderInput | SortOrder
    skillId?: SortOrderInput | SortOrder
    characteristicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artifact?: ArtifactOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
    endeavor?: EndeavorOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
    characteristic?: CharacteristicOrderByWithRelationInput
  }

  export type ContributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    description?: StringNullableFilter<"Contribution"> | string | null
    strengthLevel?: IntFilter<"Contribution"> | number
    artifactId?: StringNullableFilter<"Contribution"> | string | null
    classId?: StringNullableFilter<"Contribution"> | string | null
    endeavorId?: StringNullableFilter<"Contribution"> | string | null
    skillId?: StringNullableFilter<"Contribution"> | string | null
    characteristicId?: StringNullableFilter<"Contribution"> | string | null
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    artifact?: XOR<ArtifactNullableScalarRelationFilter, ArtifactWhereInput> | null
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
    endeavor?: XOR<EndeavorNullableScalarRelationFilter, EndeavorWhereInput> | null
    skill?: XOR<SkillNullableScalarRelationFilter, SkillWhereInput> | null
    characteristic?: XOR<CharacteristicNullableScalarRelationFilter, CharacteristicWhereInput> | null
  }, "id">

  export type ContributionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    strengthLevel?: SortOrder
    artifactId?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    endeavorId?: SortOrderInput | SortOrder
    skillId?: SortOrderInput | SortOrder
    characteristicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContributionCountOrderByAggregateInput
    _avg?: ContributionAvgOrderByAggregateInput
    _max?: ContributionMaxOrderByAggregateInput
    _min?: ContributionMinOrderByAggregateInput
    _sum?: ContributionSumOrderByAggregateInput
  }

  export type ContributionScalarWhereWithAggregatesInput = {
    AND?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    OR?: ContributionScalarWhereWithAggregatesInput[]
    NOT?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contribution"> | string
    description?: StringNullableWithAggregatesFilter<"Contribution"> | string | null
    strengthLevel?: IntWithAggregatesFilter<"Contribution"> | number
    artifactId?: StringNullableWithAggregatesFilter<"Contribution"> | string | null
    classId?: StringNullableWithAggregatesFilter<"Contribution"> | string | null
    endeavorId?: StringNullableWithAggregatesFilter<"Contribution"> | string | null
    skillId?: StringNullableWithAggregatesFilter<"Contribution"> | string | null
    characteristicId?: StringNullableWithAggregatesFilter<"Contribution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
  }

  export type CollaboratorWhereInput = {
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    id?: StringFilter<"Collaborator"> | string
    name?: StringFilter<"Collaborator"> | string
    linkedin?: StringNullableFilter<"Collaborator"> | string | null
    type?: EnumCollaboratorTypeFilter<"Collaborator"> | $Enums.CollaboratorType
    createdAt?: DateTimeFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeFilter<"Collaborator"> | Date | string
    artifacts?: ArtifactListRelationFilter
    endeavors?: EndeavorListRelationFilter
    classes?: ClassListRelationFilter
  }

  export type CollaboratorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artifacts?: ArtifactOrderByRelationAggregateInput
    endeavors?: EndeavorOrderByRelationAggregateInput
    classes?: ClassOrderByRelationAggregateInput
  }

  export type CollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    name?: StringFilter<"Collaborator"> | string
    linkedin?: StringNullableFilter<"Collaborator"> | string | null
    type?: EnumCollaboratorTypeFilter<"Collaborator"> | $Enums.CollaboratorType
    createdAt?: DateTimeFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeFilter<"Collaborator"> | Date | string
    artifacts?: ArtifactListRelationFilter
    endeavors?: EndeavorListRelationFilter
    classes?: ClassListRelationFilter
  }, "id">

  export type CollaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollaboratorCountOrderByAggregateInput
    _max?: CollaboratorMaxOrderByAggregateInput
    _min?: CollaboratorMinOrderByAggregateInput
  }

  export type CollaboratorScalarWhereWithAggregatesInput = {
    AND?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    OR?: CollaboratorScalarWhereWithAggregatesInput[]
    NOT?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collaborator"> | string
    name?: StringWithAggregatesFilter<"Collaborator"> | string
    linkedin?: StringNullableWithAggregatesFilter<"Collaborator"> | string | null
    type?: EnumCollaboratorTypeWithAggregatesFilter<"Collaborator"> | $Enums.CollaboratorType
    createdAt?: DateTimeWithAggregatesFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collaborator"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    imageUrl?: StringNullableFilter<"Book"> | string | null
    readingOrder?: IntFilter<"Book"> | number
    reasonForReading?: EnumReasonForReadingFilter<"Book"> | $Enums.ReasonForReading
    reflection?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    readingOrder?: SortOrder
    reasonForReading?: SortOrder
    reflection?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    readingOrder?: number
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    imageUrl?: StringNullableFilter<"Book"> | string | null
    reasonForReading?: EnumReasonForReadingFilter<"Book"> | $Enums.ReasonForReading
    reflection?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
  }, "id" | "readingOrder">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    readingOrder?: SortOrder
    reasonForReading?: SortOrder
    reflection?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringWithAggregatesFilter<"Book"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Book"> | string | null
    readingOrder?: IntWithAggregatesFilter<"Book"> | number
    reasonForReading?: EnumReasonForReadingWithAggregatesFilter<"Book"> | $Enums.ReasonForReading
    reflection?: StringNullableWithAggregatesFilter<"Book"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type BookRecWhereInput = {
    AND?: BookRecWhereInput | BookRecWhereInput[]
    OR?: BookRecWhereInput[]
    NOT?: BookRecWhereInput | BookRecWhereInput[]
    id?: StringFilter<"BookRec"> | string
    title?: StringFilter<"BookRec"> | string
    author?: StringFilter<"BookRec"> | string
    why?: StringFilter<"BookRec"> | string
    recommender?: StringFilter<"BookRec"> | string
    email?: StringFilter<"BookRec"> | string
    createdAt?: DateTimeFilter<"BookRec"> | Date | string
  }

  export type BookRecOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    why?: SortOrder
    recommender?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type BookRecWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookRecWhereInput | BookRecWhereInput[]
    OR?: BookRecWhereInput[]
    NOT?: BookRecWhereInput | BookRecWhereInput[]
    title?: StringFilter<"BookRec"> | string
    author?: StringFilter<"BookRec"> | string
    why?: StringFilter<"BookRec"> | string
    recommender?: StringFilter<"BookRec"> | string
    email?: StringFilter<"BookRec"> | string
    createdAt?: DateTimeFilter<"BookRec"> | Date | string
  }, "id">

  export type BookRecOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    why?: SortOrder
    recommender?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: BookRecCountOrderByAggregateInput
    _max?: BookRecMaxOrderByAggregateInput
    _min?: BookRecMinOrderByAggregateInput
  }

  export type BookRecScalarWhereWithAggregatesInput = {
    AND?: BookRecScalarWhereWithAggregatesInput | BookRecScalarWhereWithAggregatesInput[]
    OR?: BookRecScalarWhereWithAggregatesInput[]
    NOT?: BookRecScalarWhereWithAggregatesInput | BookRecScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookRec"> | string
    title?: StringWithAggregatesFilter<"BookRec"> | string
    author?: StringWithAggregatesFilter<"BookRec"> | string
    why?: StringWithAggregatesFilter<"BookRec"> | string
    recommender?: StringWithAggregatesFilter<"BookRec"> | string
    email?: StringWithAggregatesFilter<"BookRec"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookRec"> | Date | string
  }

  export type EndeavorCreateInput = {
    id?: string
    entity: string
    title: string
    description: string
    link?: string | null
    imageUrl?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactCreateNestedManyWithoutEndeavorInput
    contributions?: ContributionCreateNestedManyWithoutEndeavorInput
    mentors?: CollaboratorCreateNestedManyWithoutEndeavorsInput
  }

  export type EndeavorUncheckedCreateInput = {
    id?: string
    entity: string
    title: string
    description: string
    link?: string | null
    imageUrl?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutEndeavorInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutEndeavorInput
    mentors?: CollaboratorUncheckedCreateNestedManyWithoutEndeavorsInput
  }

  export type EndeavorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUpdateManyWithoutEndeavorNestedInput
    contributions?: ContributionUpdateManyWithoutEndeavorNestedInput
    mentors?: CollaboratorUpdateManyWithoutEndeavorsNestedInput
  }

  export type EndeavorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUncheckedUpdateManyWithoutEndeavorNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutEndeavorNestedInput
    mentors?: CollaboratorUncheckedUpdateManyWithoutEndeavorsNestedInput
  }

  export type EndeavorCreateManyInput = {
    id?: string
    entity: string
    title: string
    description: string
    link?: string | null
    imageUrl?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EndeavorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndeavorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    endeavor?: EndeavorCreateNestedOneWithoutArtifactsInput
    class?: ClassCreateNestedOneWithoutArtifactsInput
    contributions?: ContributionCreateNestedManyWithoutArtifactInput
    collaborators?: CollaboratorCreateNestedManyWithoutArtifactsInput
  }

  export type ArtifactUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    endeavorId?: string | null
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutArtifactInput
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutArtifactsInput
  }

  export type ArtifactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavor?: EndeavorUpdateOneWithoutArtifactsNestedInput
    class?: ClassUpdateOneWithoutArtifactsNestedInput
    contributions?: ContributionUpdateManyWithoutArtifactNestedInput
    collaborators?: CollaboratorUpdateManyWithoutArtifactsNestedInput
  }

  export type ArtifactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutArtifactNestedInput
    collaborators?: CollaboratorUncheckedUpdateManyWithoutArtifactsNestedInput
  }

  export type ArtifactCreateManyInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    endeavorId?: string | null
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtifactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeCreateInput = {
    id?: string
    year: number
    title: string
    location: string
    institution: string
    reflection?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: ClassCreateNestedManyWithoutKnowledgeInput
  }

  export type KnowledgeUncheckedCreateInput = {
    id?: string
    year: number
    title: string
    location: string
    institution: string
    reflection?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: ClassUncheckedCreateNestedManyWithoutKnowledgeInput
  }

  export type KnowledgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUpdateManyWithoutKnowledgeNestedInput
  }

  export type KnowledgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUncheckedUpdateManyWithoutKnowledgeNestedInput
  }

  export type KnowledgeCreateManyInput = {
    id?: string
    year: number
    title: string
    location: string
    institution: string
    reflection?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: CollaboratorCreateNestedManyWithoutClassesInput
    knowledge: KnowledgeCreateNestedOneWithoutClassesInput
    artifacts?: ArtifactCreateNestedManyWithoutClassInput
    contributions?: ContributionCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    knowledgeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: CollaboratorUncheckedCreateNestedManyWithoutClassesInput
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutClassInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: CollaboratorUpdateManyWithoutClassesNestedInput
    knowledge?: KnowledgeUpdateOneRequiredWithoutClassesNestedInput
    artifacts?: ArtifactUpdateManyWithoutClassNestedInput
    contributions?: ContributionUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: CollaboratorUncheckedUpdateManyWithoutClassesNestedInput
    artifacts?: ArtifactUncheckedUpdateManyWithoutClassNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    knowledgeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacteristicCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionCreateNestedManyWithoutCharacteristicInput
  }

  export type CharacteristicUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutCharacteristicInput
  }

  export type CharacteristicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUpdateManyWithoutCharacteristicNestedInput
  }

  export type CharacteristicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutCharacteristicNestedInput
  }

  export type CharacteristicCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacteristicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacteristicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    artifact?: ArtifactCreateNestedOneWithoutContributionsInput
    class?: ClassCreateNestedOneWithoutContributionsInput
    endeavor?: EndeavorCreateNestedOneWithoutContributionsInput
    skill?: SkillCreateNestedOneWithoutContributionsInput
    characteristic?: CharacteristicCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    classId?: string | null
    endeavorId?: string | null
    skillId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifact?: ArtifactUpdateOneWithoutContributionsNestedInput
    class?: ClassUpdateOneWithoutContributionsNestedInput
    endeavor?: EndeavorUpdateOneWithoutContributionsNestedInput
    skill?: SkillUpdateOneWithoutContributionsNestedInput
    characteristic?: CharacteristicUpdateOneWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateManyInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    classId?: string | null
    endeavorId?: string | null
    skillId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorCreateInput = {
    id?: string
    name: string
    linkedin?: string | null
    type: $Enums.CollaboratorType
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactCreateNestedManyWithoutCollaboratorsInput
    endeavors?: EndeavorCreateNestedManyWithoutMentorsInput
    classes?: ClassCreateNestedManyWithoutProfessorInput
  }

  export type CollaboratorUncheckedCreateInput = {
    id?: string
    name: string
    linkedin?: string | null
    type: $Enums.CollaboratorType
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutCollaboratorsInput
    endeavors?: EndeavorUncheckedCreateNestedManyWithoutMentorsInput
    classes?: ClassUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type CollaboratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUpdateManyWithoutCollaboratorsNestedInput
    endeavors?: EndeavorUpdateManyWithoutMentorsNestedInput
    classes?: ClassUpdateManyWithoutProfessorNestedInput
  }

  export type CollaboratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUncheckedUpdateManyWithoutCollaboratorsNestedInput
    endeavors?: EndeavorUncheckedUpdateManyWithoutMentorsNestedInput
    classes?: ClassUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type CollaboratorCreateManyInput = {
    id?: string
    name: string
    linkedin?: string | null
    type: $Enums.CollaboratorType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaboratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    title: string
    author: string
    imageUrl?: string | null
    readingOrder: number
    reasonForReading: $Enums.ReasonForReading
    reflection?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUncheckedCreateInput = {
    id?: string
    title: string
    author: string
    imageUrl?: string | null
    readingOrder: number
    reasonForReading: $Enums.ReasonForReading
    reflection?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readingOrder?: IntFieldUpdateOperationsInput | number
    reasonForReading?: EnumReasonForReadingFieldUpdateOperationsInput | $Enums.ReasonForReading
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readingOrder?: IntFieldUpdateOperationsInput | number
    reasonForReading?: EnumReasonForReadingFieldUpdateOperationsInput | $Enums.ReasonForReading
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateManyInput = {
    id?: string
    title: string
    author: string
    imageUrl?: string | null
    readingOrder: number
    reasonForReading: $Enums.ReasonForReading
    reflection?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readingOrder?: IntFieldUpdateOperationsInput | number
    reasonForReading?: EnumReasonForReadingFieldUpdateOperationsInput | $Enums.ReasonForReading
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readingOrder?: IntFieldUpdateOperationsInput | number
    reasonForReading?: EnumReasonForReadingFieldUpdateOperationsInput | $Enums.ReasonForReading
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookRecCreateInput = {
    id?: string
    title: string
    author: string
    why: string
    recommender: string
    email: string
    createdAt?: Date | string
  }

  export type BookRecUncheckedCreateInput = {
    id?: string
    title: string
    author: string
    why: string
    recommender: string
    email: string
    createdAt?: Date | string
  }

  export type BookRecUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    why?: StringFieldUpdateOperationsInput | string
    recommender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookRecUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    why?: StringFieldUpdateOperationsInput | string
    recommender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookRecCreateManyInput = {
    id?: string
    title: string
    author: string
    why: string
    recommender: string
    email: string
    createdAt?: Date | string
  }

  export type BookRecUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    why?: StringFieldUpdateOperationsInput | string
    recommender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookRecUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    why?: StringFieldUpdateOperationsInput | string
    recommender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type ArtifactListRelationFilter = {
    every?: ArtifactWhereInput
    some?: ArtifactWhereInput
    none?: ArtifactWhereInput
  }

  export type ContributionListRelationFilter = {
    every?: ContributionWhereInput
    some?: ContributionWhereInput
    none?: ContributionWhereInput
  }

  export type CollaboratorListRelationFilter = {
    every?: CollaboratorWhereInput
    some?: CollaboratorWhereInput
    none?: CollaboratorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArtifactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EndeavorCountOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EndeavorMaxOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EndeavorMinOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EndeavorNullableScalarRelationFilter = {
    is?: EndeavorWhereInput | null
    isNot?: EndeavorWhereInput | null
  }

  export type ClassNullableScalarRelationFilter = {
    is?: ClassWhereInput | null
    isNot?: ClassWhereInput | null
  }

  export type ArtifactCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrder
    completionDate?: SortOrder
    endeavorId?: SortOrder
    classId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtifactMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrder
    completionDate?: SortOrder
    endeavorId?: SortOrder
    classId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtifactMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrder
    completionDate?: SortOrder
    endeavorId?: SortOrder
    classId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    title?: SortOrder
    location?: SortOrder
    institution?: SortOrder
    reflection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type KnowledgeMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    title?: SortOrder
    location?: SortOrder
    institution?: SortOrder
    reflection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    title?: SortOrder
    location?: SortOrder
    institution?: SortOrder
    reflection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTermFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermFilter<$PrismaModel> | $Enums.Term
  }

  export type KnowledgeScalarRelationFilter = {
    is?: KnowledgeWhereInput
    isNot?: KnowledgeWhereInput
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    term?: SortOrder
    description?: SortOrder
    knowledgeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    term?: SortOrder
    description?: SortOrder
    knowledgeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    term?: SortOrder
    description?: SortOrder
    knowledgeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTermWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermWithAggregatesFilter<$PrismaModel> | $Enums.Term
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermFilter<$PrismaModel>
    _max?: NestedEnumTermFilter<$PrismaModel>
  }

  export type CharacteristicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacteristicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacteristicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtifactNullableScalarRelationFilter = {
    is?: ArtifactWhereInput | null
    isNot?: ArtifactWhereInput | null
  }

  export type SkillNullableScalarRelationFilter = {
    is?: SkillWhereInput | null
    isNot?: SkillWhereInput | null
  }

  export type CharacteristicNullableScalarRelationFilter = {
    is?: CharacteristicWhereInput | null
    isNot?: CharacteristicWhereInput | null
  }

  export type ContributionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    strengthLevel?: SortOrder
    artifactId?: SortOrder
    classId?: SortOrder
    endeavorId?: SortOrder
    skillId?: SortOrder
    characteristicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContributionAvgOrderByAggregateInput = {
    strengthLevel?: SortOrder
  }

  export type ContributionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    strengthLevel?: SortOrder
    artifactId?: SortOrder
    classId?: SortOrder
    endeavorId?: SortOrder
    skillId?: SortOrder
    characteristicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContributionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    strengthLevel?: SortOrder
    artifactId?: SortOrder
    classId?: SortOrder
    endeavorId?: SortOrder
    skillId?: SortOrder
    characteristicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContributionSumOrderByAggregateInput = {
    strengthLevel?: SortOrder
  }

  export type EnumCollaboratorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorType | EnumCollaboratorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorType[] | ListEnumCollaboratorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaboratorType[] | ListEnumCollaboratorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaboratorTypeFilter<$PrismaModel> | $Enums.CollaboratorType
  }

  export type EndeavorListRelationFilter = {
    every?: EndeavorWhereInput
    some?: EndeavorWhereInput
    none?: EndeavorWhereInput
  }

  export type EndeavorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkedin?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkedin?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkedin?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCollaboratorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorType | EnumCollaboratorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorType[] | ListEnumCollaboratorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaboratorType[] | ListEnumCollaboratorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaboratorTypeWithAggregatesFilter<$PrismaModel> | $Enums.CollaboratorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaboratorTypeFilter<$PrismaModel>
    _max?: NestedEnumCollaboratorTypeFilter<$PrismaModel>
  }

  export type EnumReasonForReadingFilter<$PrismaModel = never> = {
    equals?: $Enums.ReasonForReading | EnumReasonForReadingFieldRefInput<$PrismaModel>
    in?: $Enums.ReasonForReading[] | ListEnumReasonForReadingFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReasonForReading[] | ListEnumReasonForReadingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForReadingFilter<$PrismaModel> | $Enums.ReasonForReading
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrder
    readingOrder?: SortOrder
    reasonForReading?: SortOrder
    reflection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    readingOrder?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrder
    readingOrder?: SortOrder
    reasonForReading?: SortOrder
    reflection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrder
    readingOrder?: SortOrder
    reasonForReading?: SortOrder
    reflection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    readingOrder?: SortOrder
  }

  export type EnumReasonForReadingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReasonForReading | EnumReasonForReadingFieldRefInput<$PrismaModel>
    in?: $Enums.ReasonForReading[] | ListEnumReasonForReadingFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReasonForReading[] | ListEnumReasonForReadingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForReadingWithAggregatesFilter<$PrismaModel> | $Enums.ReasonForReading
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReasonForReadingFilter<$PrismaModel>
    _max?: NestedEnumReasonForReadingFilter<$PrismaModel>
  }

  export type BookRecCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    why?: SortOrder
    recommender?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type BookRecMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    why?: SortOrder
    recommender?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type BookRecMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    why?: SortOrder
    recommender?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtifactCreateNestedManyWithoutEndeavorInput = {
    create?: XOR<ArtifactCreateWithoutEndeavorInput, ArtifactUncheckedCreateWithoutEndeavorInput> | ArtifactCreateWithoutEndeavorInput[] | ArtifactUncheckedCreateWithoutEndeavorInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutEndeavorInput | ArtifactCreateOrConnectWithoutEndeavorInput[]
    createMany?: ArtifactCreateManyEndeavorInputEnvelope
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type ContributionCreateNestedManyWithoutEndeavorInput = {
    create?: XOR<ContributionCreateWithoutEndeavorInput, ContributionUncheckedCreateWithoutEndeavorInput> | ContributionCreateWithoutEndeavorInput[] | ContributionUncheckedCreateWithoutEndeavorInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutEndeavorInput | ContributionCreateOrConnectWithoutEndeavorInput[]
    createMany?: ContributionCreateManyEndeavorInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type CollaboratorCreateNestedManyWithoutEndeavorsInput = {
    create?: XOR<CollaboratorCreateWithoutEndeavorsInput, CollaboratorUncheckedCreateWithoutEndeavorsInput> | CollaboratorCreateWithoutEndeavorsInput[] | CollaboratorUncheckedCreateWithoutEndeavorsInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutEndeavorsInput | CollaboratorCreateOrConnectWithoutEndeavorsInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type ArtifactUncheckedCreateNestedManyWithoutEndeavorInput = {
    create?: XOR<ArtifactCreateWithoutEndeavorInput, ArtifactUncheckedCreateWithoutEndeavorInput> | ArtifactCreateWithoutEndeavorInput[] | ArtifactUncheckedCreateWithoutEndeavorInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutEndeavorInput | ArtifactCreateOrConnectWithoutEndeavorInput[]
    createMany?: ArtifactCreateManyEndeavorInputEnvelope
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutEndeavorInput = {
    create?: XOR<ContributionCreateWithoutEndeavorInput, ContributionUncheckedCreateWithoutEndeavorInput> | ContributionCreateWithoutEndeavorInput[] | ContributionUncheckedCreateWithoutEndeavorInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutEndeavorInput | ContributionCreateOrConnectWithoutEndeavorInput[]
    createMany?: ContributionCreateManyEndeavorInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type CollaboratorUncheckedCreateNestedManyWithoutEndeavorsInput = {
    create?: XOR<CollaboratorCreateWithoutEndeavorsInput, CollaboratorUncheckedCreateWithoutEndeavorsInput> | CollaboratorCreateWithoutEndeavorsInput[] | CollaboratorUncheckedCreateWithoutEndeavorsInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutEndeavorsInput | CollaboratorCreateOrConnectWithoutEndeavorsInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type ArtifactUpdateManyWithoutEndeavorNestedInput = {
    create?: XOR<ArtifactCreateWithoutEndeavorInput, ArtifactUncheckedCreateWithoutEndeavorInput> | ArtifactCreateWithoutEndeavorInput[] | ArtifactUncheckedCreateWithoutEndeavorInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutEndeavorInput | ArtifactCreateOrConnectWithoutEndeavorInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutEndeavorInput | ArtifactUpsertWithWhereUniqueWithoutEndeavorInput[]
    createMany?: ArtifactCreateManyEndeavorInputEnvelope
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutEndeavorInput | ArtifactUpdateWithWhereUniqueWithoutEndeavorInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutEndeavorInput | ArtifactUpdateManyWithWhereWithoutEndeavorInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type ContributionUpdateManyWithoutEndeavorNestedInput = {
    create?: XOR<ContributionCreateWithoutEndeavorInput, ContributionUncheckedCreateWithoutEndeavorInput> | ContributionCreateWithoutEndeavorInput[] | ContributionUncheckedCreateWithoutEndeavorInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutEndeavorInput | ContributionCreateOrConnectWithoutEndeavorInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutEndeavorInput | ContributionUpsertWithWhereUniqueWithoutEndeavorInput[]
    createMany?: ContributionCreateManyEndeavorInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutEndeavorInput | ContributionUpdateWithWhereUniqueWithoutEndeavorInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutEndeavorInput | ContributionUpdateManyWithWhereWithoutEndeavorInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type CollaboratorUpdateManyWithoutEndeavorsNestedInput = {
    create?: XOR<CollaboratorCreateWithoutEndeavorsInput, CollaboratorUncheckedCreateWithoutEndeavorsInput> | CollaboratorCreateWithoutEndeavorsInput[] | CollaboratorUncheckedCreateWithoutEndeavorsInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutEndeavorsInput | CollaboratorCreateOrConnectWithoutEndeavorsInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutEndeavorsInput | CollaboratorUpsertWithWhereUniqueWithoutEndeavorsInput[]
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutEndeavorsInput | CollaboratorUpdateWithWhereUniqueWithoutEndeavorsInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutEndeavorsInput | CollaboratorUpdateManyWithWhereWithoutEndeavorsInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type ArtifactUncheckedUpdateManyWithoutEndeavorNestedInput = {
    create?: XOR<ArtifactCreateWithoutEndeavorInput, ArtifactUncheckedCreateWithoutEndeavorInput> | ArtifactCreateWithoutEndeavorInput[] | ArtifactUncheckedCreateWithoutEndeavorInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutEndeavorInput | ArtifactCreateOrConnectWithoutEndeavorInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutEndeavorInput | ArtifactUpsertWithWhereUniqueWithoutEndeavorInput[]
    createMany?: ArtifactCreateManyEndeavorInputEnvelope
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutEndeavorInput | ArtifactUpdateWithWhereUniqueWithoutEndeavorInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutEndeavorInput | ArtifactUpdateManyWithWhereWithoutEndeavorInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutEndeavorNestedInput = {
    create?: XOR<ContributionCreateWithoutEndeavorInput, ContributionUncheckedCreateWithoutEndeavorInput> | ContributionCreateWithoutEndeavorInput[] | ContributionUncheckedCreateWithoutEndeavorInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutEndeavorInput | ContributionCreateOrConnectWithoutEndeavorInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutEndeavorInput | ContributionUpsertWithWhereUniqueWithoutEndeavorInput[]
    createMany?: ContributionCreateManyEndeavorInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutEndeavorInput | ContributionUpdateWithWhereUniqueWithoutEndeavorInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutEndeavorInput | ContributionUpdateManyWithWhereWithoutEndeavorInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type CollaboratorUncheckedUpdateManyWithoutEndeavorsNestedInput = {
    create?: XOR<CollaboratorCreateWithoutEndeavorsInput, CollaboratorUncheckedCreateWithoutEndeavorsInput> | CollaboratorCreateWithoutEndeavorsInput[] | CollaboratorUncheckedCreateWithoutEndeavorsInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutEndeavorsInput | CollaboratorCreateOrConnectWithoutEndeavorsInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutEndeavorsInput | CollaboratorUpsertWithWhereUniqueWithoutEndeavorsInput[]
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutEndeavorsInput | CollaboratorUpdateWithWhereUniqueWithoutEndeavorsInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutEndeavorsInput | CollaboratorUpdateManyWithWhereWithoutEndeavorsInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type EndeavorCreateNestedOneWithoutArtifactsInput = {
    create?: XOR<EndeavorCreateWithoutArtifactsInput, EndeavorUncheckedCreateWithoutArtifactsInput>
    connectOrCreate?: EndeavorCreateOrConnectWithoutArtifactsInput
    connect?: EndeavorWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutArtifactsInput = {
    create?: XOR<ClassCreateWithoutArtifactsInput, ClassUncheckedCreateWithoutArtifactsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutArtifactsInput
    connect?: ClassWhereUniqueInput
  }

  export type ContributionCreateNestedManyWithoutArtifactInput = {
    create?: XOR<ContributionCreateWithoutArtifactInput, ContributionUncheckedCreateWithoutArtifactInput> | ContributionCreateWithoutArtifactInput[] | ContributionUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutArtifactInput | ContributionCreateOrConnectWithoutArtifactInput[]
    createMany?: ContributionCreateManyArtifactInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type CollaboratorCreateNestedManyWithoutArtifactsInput = {
    create?: XOR<CollaboratorCreateWithoutArtifactsInput, CollaboratorUncheckedCreateWithoutArtifactsInput> | CollaboratorCreateWithoutArtifactsInput[] | CollaboratorUncheckedCreateWithoutArtifactsInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutArtifactsInput | CollaboratorCreateOrConnectWithoutArtifactsInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutArtifactInput = {
    create?: XOR<ContributionCreateWithoutArtifactInput, ContributionUncheckedCreateWithoutArtifactInput> | ContributionCreateWithoutArtifactInput[] | ContributionUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutArtifactInput | ContributionCreateOrConnectWithoutArtifactInput[]
    createMany?: ContributionCreateManyArtifactInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type CollaboratorUncheckedCreateNestedManyWithoutArtifactsInput = {
    create?: XOR<CollaboratorCreateWithoutArtifactsInput, CollaboratorUncheckedCreateWithoutArtifactsInput> | CollaboratorCreateWithoutArtifactsInput[] | CollaboratorUncheckedCreateWithoutArtifactsInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutArtifactsInput | CollaboratorCreateOrConnectWithoutArtifactsInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type EndeavorUpdateOneWithoutArtifactsNestedInput = {
    create?: XOR<EndeavorCreateWithoutArtifactsInput, EndeavorUncheckedCreateWithoutArtifactsInput>
    connectOrCreate?: EndeavorCreateOrConnectWithoutArtifactsInput
    upsert?: EndeavorUpsertWithoutArtifactsInput
    disconnect?: EndeavorWhereInput | boolean
    delete?: EndeavorWhereInput | boolean
    connect?: EndeavorWhereUniqueInput
    update?: XOR<XOR<EndeavorUpdateToOneWithWhereWithoutArtifactsInput, EndeavorUpdateWithoutArtifactsInput>, EndeavorUncheckedUpdateWithoutArtifactsInput>
  }

  export type ClassUpdateOneWithoutArtifactsNestedInput = {
    create?: XOR<ClassCreateWithoutArtifactsInput, ClassUncheckedCreateWithoutArtifactsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutArtifactsInput
    upsert?: ClassUpsertWithoutArtifactsInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutArtifactsInput, ClassUpdateWithoutArtifactsInput>, ClassUncheckedUpdateWithoutArtifactsInput>
  }

  export type ContributionUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<ContributionCreateWithoutArtifactInput, ContributionUncheckedCreateWithoutArtifactInput> | ContributionCreateWithoutArtifactInput[] | ContributionUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutArtifactInput | ContributionCreateOrConnectWithoutArtifactInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutArtifactInput | ContributionUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: ContributionCreateManyArtifactInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutArtifactInput | ContributionUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutArtifactInput | ContributionUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type CollaboratorUpdateManyWithoutArtifactsNestedInput = {
    create?: XOR<CollaboratorCreateWithoutArtifactsInput, CollaboratorUncheckedCreateWithoutArtifactsInput> | CollaboratorCreateWithoutArtifactsInput[] | CollaboratorUncheckedCreateWithoutArtifactsInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutArtifactsInput | CollaboratorCreateOrConnectWithoutArtifactsInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutArtifactsInput | CollaboratorUpsertWithWhereUniqueWithoutArtifactsInput[]
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutArtifactsInput | CollaboratorUpdateWithWhereUniqueWithoutArtifactsInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutArtifactsInput | CollaboratorUpdateManyWithWhereWithoutArtifactsInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<ContributionCreateWithoutArtifactInput, ContributionUncheckedCreateWithoutArtifactInput> | ContributionCreateWithoutArtifactInput[] | ContributionUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutArtifactInput | ContributionCreateOrConnectWithoutArtifactInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutArtifactInput | ContributionUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: ContributionCreateManyArtifactInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutArtifactInput | ContributionUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutArtifactInput | ContributionUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type CollaboratorUncheckedUpdateManyWithoutArtifactsNestedInput = {
    create?: XOR<CollaboratorCreateWithoutArtifactsInput, CollaboratorUncheckedCreateWithoutArtifactsInput> | CollaboratorCreateWithoutArtifactsInput[] | CollaboratorUncheckedCreateWithoutArtifactsInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutArtifactsInput | CollaboratorCreateOrConnectWithoutArtifactsInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutArtifactsInput | CollaboratorUpsertWithWhereUniqueWithoutArtifactsInput[]
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutArtifactsInput | CollaboratorUpdateWithWhereUniqueWithoutArtifactsInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutArtifactsInput | CollaboratorUpdateManyWithWhereWithoutArtifactsInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type ClassCreateNestedManyWithoutKnowledgeInput = {
    create?: XOR<ClassCreateWithoutKnowledgeInput, ClassUncheckedCreateWithoutKnowledgeInput> | ClassCreateWithoutKnowledgeInput[] | ClassUncheckedCreateWithoutKnowledgeInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutKnowledgeInput | ClassCreateOrConnectWithoutKnowledgeInput[]
    createMany?: ClassCreateManyKnowledgeInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutKnowledgeInput = {
    create?: XOR<ClassCreateWithoutKnowledgeInput, ClassUncheckedCreateWithoutKnowledgeInput> | ClassCreateWithoutKnowledgeInput[] | ClassUncheckedCreateWithoutKnowledgeInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutKnowledgeInput | ClassCreateOrConnectWithoutKnowledgeInput[]
    createMany?: ClassCreateManyKnowledgeInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassUpdateManyWithoutKnowledgeNestedInput = {
    create?: XOR<ClassCreateWithoutKnowledgeInput, ClassUncheckedCreateWithoutKnowledgeInput> | ClassCreateWithoutKnowledgeInput[] | ClassUncheckedCreateWithoutKnowledgeInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutKnowledgeInput | ClassCreateOrConnectWithoutKnowledgeInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutKnowledgeInput | ClassUpsertWithWhereUniqueWithoutKnowledgeInput[]
    createMany?: ClassCreateManyKnowledgeInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutKnowledgeInput | ClassUpdateWithWhereUniqueWithoutKnowledgeInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutKnowledgeInput | ClassUpdateManyWithWhereWithoutKnowledgeInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutKnowledgeNestedInput = {
    create?: XOR<ClassCreateWithoutKnowledgeInput, ClassUncheckedCreateWithoutKnowledgeInput> | ClassCreateWithoutKnowledgeInput[] | ClassUncheckedCreateWithoutKnowledgeInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutKnowledgeInput | ClassCreateOrConnectWithoutKnowledgeInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutKnowledgeInput | ClassUpsertWithWhereUniqueWithoutKnowledgeInput[]
    createMany?: ClassCreateManyKnowledgeInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutKnowledgeInput | ClassUpdateWithWhereUniqueWithoutKnowledgeInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutKnowledgeInput | ClassUpdateManyWithWhereWithoutKnowledgeInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type CollaboratorCreateNestedManyWithoutClassesInput = {
    create?: XOR<CollaboratorCreateWithoutClassesInput, CollaboratorUncheckedCreateWithoutClassesInput> | CollaboratorCreateWithoutClassesInput[] | CollaboratorUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutClassesInput | CollaboratorCreateOrConnectWithoutClassesInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type KnowledgeCreateNestedOneWithoutClassesInput = {
    create?: XOR<KnowledgeCreateWithoutClassesInput, KnowledgeUncheckedCreateWithoutClassesInput>
    connectOrCreate?: KnowledgeCreateOrConnectWithoutClassesInput
    connect?: KnowledgeWhereUniqueInput
  }

  export type ArtifactCreateNestedManyWithoutClassInput = {
    create?: XOR<ArtifactCreateWithoutClassInput, ArtifactUncheckedCreateWithoutClassInput> | ArtifactCreateWithoutClassInput[] | ArtifactUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutClassInput | ArtifactCreateOrConnectWithoutClassInput[]
    createMany?: ArtifactCreateManyClassInputEnvelope
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type ContributionCreateNestedManyWithoutClassInput = {
    create?: XOR<ContributionCreateWithoutClassInput, ContributionUncheckedCreateWithoutClassInput> | ContributionCreateWithoutClassInput[] | ContributionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutClassInput | ContributionCreateOrConnectWithoutClassInput[]
    createMany?: ContributionCreateManyClassInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type CollaboratorUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<CollaboratorCreateWithoutClassesInput, CollaboratorUncheckedCreateWithoutClassesInput> | CollaboratorCreateWithoutClassesInput[] | CollaboratorUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutClassesInput | CollaboratorCreateOrConnectWithoutClassesInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type ArtifactUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ArtifactCreateWithoutClassInput, ArtifactUncheckedCreateWithoutClassInput> | ArtifactCreateWithoutClassInput[] | ArtifactUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutClassInput | ArtifactCreateOrConnectWithoutClassInput[]
    createMany?: ArtifactCreateManyClassInputEnvelope
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ContributionCreateWithoutClassInput, ContributionUncheckedCreateWithoutClassInput> | ContributionCreateWithoutClassInput[] | ContributionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutClassInput | ContributionCreateOrConnectWithoutClassInput[]
    createMany?: ContributionCreateManyClassInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type EnumTermFieldUpdateOperationsInput = {
    set?: $Enums.Term
  }

  export type CollaboratorUpdateManyWithoutClassesNestedInput = {
    create?: XOR<CollaboratorCreateWithoutClassesInput, CollaboratorUncheckedCreateWithoutClassesInput> | CollaboratorCreateWithoutClassesInput[] | CollaboratorUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutClassesInput | CollaboratorCreateOrConnectWithoutClassesInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutClassesInput | CollaboratorUpsertWithWhereUniqueWithoutClassesInput[]
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutClassesInput | CollaboratorUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutClassesInput | CollaboratorUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type KnowledgeUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<KnowledgeCreateWithoutClassesInput, KnowledgeUncheckedCreateWithoutClassesInput>
    connectOrCreate?: KnowledgeCreateOrConnectWithoutClassesInput
    upsert?: KnowledgeUpsertWithoutClassesInput
    connect?: KnowledgeWhereUniqueInput
    update?: XOR<XOR<KnowledgeUpdateToOneWithWhereWithoutClassesInput, KnowledgeUpdateWithoutClassesInput>, KnowledgeUncheckedUpdateWithoutClassesInput>
  }

  export type ArtifactUpdateManyWithoutClassNestedInput = {
    create?: XOR<ArtifactCreateWithoutClassInput, ArtifactUncheckedCreateWithoutClassInput> | ArtifactCreateWithoutClassInput[] | ArtifactUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutClassInput | ArtifactCreateOrConnectWithoutClassInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutClassInput | ArtifactUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ArtifactCreateManyClassInputEnvelope
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutClassInput | ArtifactUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutClassInput | ArtifactUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type ContributionUpdateManyWithoutClassNestedInput = {
    create?: XOR<ContributionCreateWithoutClassInput, ContributionUncheckedCreateWithoutClassInput> | ContributionCreateWithoutClassInput[] | ContributionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutClassInput | ContributionCreateOrConnectWithoutClassInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutClassInput | ContributionUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ContributionCreateManyClassInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutClassInput | ContributionUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutClassInput | ContributionUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type CollaboratorUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<CollaboratorCreateWithoutClassesInput, CollaboratorUncheckedCreateWithoutClassesInput> | CollaboratorCreateWithoutClassesInput[] | CollaboratorUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutClassesInput | CollaboratorCreateOrConnectWithoutClassesInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutClassesInput | CollaboratorUpsertWithWhereUniqueWithoutClassesInput[]
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutClassesInput | CollaboratorUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutClassesInput | CollaboratorUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type ArtifactUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ArtifactCreateWithoutClassInput, ArtifactUncheckedCreateWithoutClassInput> | ArtifactCreateWithoutClassInput[] | ArtifactUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutClassInput | ArtifactCreateOrConnectWithoutClassInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutClassInput | ArtifactUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ArtifactCreateManyClassInputEnvelope
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutClassInput | ArtifactUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutClassInput | ArtifactUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ContributionCreateWithoutClassInput, ContributionUncheckedCreateWithoutClassInput> | ContributionCreateWithoutClassInput[] | ContributionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutClassInput | ContributionCreateOrConnectWithoutClassInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutClassInput | ContributionUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ContributionCreateManyClassInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutClassInput | ContributionUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutClassInput | ContributionUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type ContributionCreateNestedManyWithoutCharacteristicInput = {
    create?: XOR<ContributionCreateWithoutCharacteristicInput, ContributionUncheckedCreateWithoutCharacteristicInput> | ContributionCreateWithoutCharacteristicInput[] | ContributionUncheckedCreateWithoutCharacteristicInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutCharacteristicInput | ContributionCreateOrConnectWithoutCharacteristicInput[]
    createMany?: ContributionCreateManyCharacteristicInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutCharacteristicInput = {
    create?: XOR<ContributionCreateWithoutCharacteristicInput, ContributionUncheckedCreateWithoutCharacteristicInput> | ContributionCreateWithoutCharacteristicInput[] | ContributionUncheckedCreateWithoutCharacteristicInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutCharacteristicInput | ContributionCreateOrConnectWithoutCharacteristicInput[]
    createMany?: ContributionCreateManyCharacteristicInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type ContributionUpdateManyWithoutCharacteristicNestedInput = {
    create?: XOR<ContributionCreateWithoutCharacteristicInput, ContributionUncheckedCreateWithoutCharacteristicInput> | ContributionCreateWithoutCharacteristicInput[] | ContributionUncheckedCreateWithoutCharacteristicInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutCharacteristicInput | ContributionCreateOrConnectWithoutCharacteristicInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutCharacteristicInput | ContributionUpsertWithWhereUniqueWithoutCharacteristicInput[]
    createMany?: ContributionCreateManyCharacteristicInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutCharacteristicInput | ContributionUpdateWithWhereUniqueWithoutCharacteristicInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutCharacteristicInput | ContributionUpdateManyWithWhereWithoutCharacteristicInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutCharacteristicNestedInput = {
    create?: XOR<ContributionCreateWithoutCharacteristicInput, ContributionUncheckedCreateWithoutCharacteristicInput> | ContributionCreateWithoutCharacteristicInput[] | ContributionUncheckedCreateWithoutCharacteristicInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutCharacteristicInput | ContributionCreateOrConnectWithoutCharacteristicInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutCharacteristicInput | ContributionUpsertWithWhereUniqueWithoutCharacteristicInput[]
    createMany?: ContributionCreateManyCharacteristicInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutCharacteristicInput | ContributionUpdateWithWhereUniqueWithoutCharacteristicInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutCharacteristicInput | ContributionUpdateManyWithWhereWithoutCharacteristicInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type ContributionCreateNestedManyWithoutSkillInput = {
    create?: XOR<ContributionCreateWithoutSkillInput, ContributionUncheckedCreateWithoutSkillInput> | ContributionCreateWithoutSkillInput[] | ContributionUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutSkillInput | ContributionCreateOrConnectWithoutSkillInput[]
    createMany?: ContributionCreateManySkillInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<ContributionCreateWithoutSkillInput, ContributionUncheckedCreateWithoutSkillInput> | ContributionCreateWithoutSkillInput[] | ContributionUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutSkillInput | ContributionCreateOrConnectWithoutSkillInput[]
    createMany?: ContributionCreateManySkillInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type ContributionUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ContributionCreateWithoutSkillInput, ContributionUncheckedCreateWithoutSkillInput> | ContributionCreateWithoutSkillInput[] | ContributionUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutSkillInput | ContributionCreateOrConnectWithoutSkillInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutSkillInput | ContributionUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ContributionCreateManySkillInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutSkillInput | ContributionUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutSkillInput | ContributionUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ContributionCreateWithoutSkillInput, ContributionUncheckedCreateWithoutSkillInput> | ContributionCreateWithoutSkillInput[] | ContributionUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutSkillInput | ContributionCreateOrConnectWithoutSkillInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutSkillInput | ContributionUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ContributionCreateManySkillInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutSkillInput | ContributionUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutSkillInput | ContributionUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type ArtifactCreateNestedOneWithoutContributionsInput = {
    create?: XOR<ArtifactCreateWithoutContributionsInput, ArtifactUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutContributionsInput
    connect?: ArtifactWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutContributionsInput = {
    create?: XOR<ClassCreateWithoutContributionsInput, ClassUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutContributionsInput
    connect?: ClassWhereUniqueInput
  }

  export type EndeavorCreateNestedOneWithoutContributionsInput = {
    create?: XOR<EndeavorCreateWithoutContributionsInput, EndeavorUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: EndeavorCreateOrConnectWithoutContributionsInput
    connect?: EndeavorWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutContributionsInput = {
    create?: XOR<SkillCreateWithoutContributionsInput, SkillUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutContributionsInput
    connect?: SkillWhereUniqueInput
  }

  export type CharacteristicCreateNestedOneWithoutContributionsInput = {
    create?: XOR<CharacteristicCreateWithoutContributionsInput, CharacteristicUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: CharacteristicCreateOrConnectWithoutContributionsInput
    connect?: CharacteristicWhereUniqueInput
  }

  export type ArtifactUpdateOneWithoutContributionsNestedInput = {
    create?: XOR<ArtifactCreateWithoutContributionsInput, ArtifactUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutContributionsInput
    upsert?: ArtifactUpsertWithoutContributionsInput
    disconnect?: ArtifactWhereInput | boolean
    delete?: ArtifactWhereInput | boolean
    connect?: ArtifactWhereUniqueInput
    update?: XOR<XOR<ArtifactUpdateToOneWithWhereWithoutContributionsInput, ArtifactUpdateWithoutContributionsInput>, ArtifactUncheckedUpdateWithoutContributionsInput>
  }

  export type ClassUpdateOneWithoutContributionsNestedInput = {
    create?: XOR<ClassCreateWithoutContributionsInput, ClassUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutContributionsInput
    upsert?: ClassUpsertWithoutContributionsInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutContributionsInput, ClassUpdateWithoutContributionsInput>, ClassUncheckedUpdateWithoutContributionsInput>
  }

  export type EndeavorUpdateOneWithoutContributionsNestedInput = {
    create?: XOR<EndeavorCreateWithoutContributionsInput, EndeavorUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: EndeavorCreateOrConnectWithoutContributionsInput
    upsert?: EndeavorUpsertWithoutContributionsInput
    disconnect?: EndeavorWhereInput | boolean
    delete?: EndeavorWhereInput | boolean
    connect?: EndeavorWhereUniqueInput
    update?: XOR<XOR<EndeavorUpdateToOneWithWhereWithoutContributionsInput, EndeavorUpdateWithoutContributionsInput>, EndeavorUncheckedUpdateWithoutContributionsInput>
  }

  export type SkillUpdateOneWithoutContributionsNestedInput = {
    create?: XOR<SkillCreateWithoutContributionsInput, SkillUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutContributionsInput
    upsert?: SkillUpsertWithoutContributionsInput
    disconnect?: SkillWhereInput | boolean
    delete?: SkillWhereInput | boolean
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutContributionsInput, SkillUpdateWithoutContributionsInput>, SkillUncheckedUpdateWithoutContributionsInput>
  }

  export type CharacteristicUpdateOneWithoutContributionsNestedInput = {
    create?: XOR<CharacteristicCreateWithoutContributionsInput, CharacteristicUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: CharacteristicCreateOrConnectWithoutContributionsInput
    upsert?: CharacteristicUpsertWithoutContributionsInput
    disconnect?: CharacteristicWhereInput | boolean
    delete?: CharacteristicWhereInput | boolean
    connect?: CharacteristicWhereUniqueInput
    update?: XOR<XOR<CharacteristicUpdateToOneWithWhereWithoutContributionsInput, CharacteristicUpdateWithoutContributionsInput>, CharacteristicUncheckedUpdateWithoutContributionsInput>
  }

  export type ArtifactCreateNestedManyWithoutCollaboratorsInput = {
    create?: XOR<ArtifactCreateWithoutCollaboratorsInput, ArtifactUncheckedCreateWithoutCollaboratorsInput> | ArtifactCreateWithoutCollaboratorsInput[] | ArtifactUncheckedCreateWithoutCollaboratorsInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutCollaboratorsInput | ArtifactCreateOrConnectWithoutCollaboratorsInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type EndeavorCreateNestedManyWithoutMentorsInput = {
    create?: XOR<EndeavorCreateWithoutMentorsInput, EndeavorUncheckedCreateWithoutMentorsInput> | EndeavorCreateWithoutMentorsInput[] | EndeavorUncheckedCreateWithoutMentorsInput[]
    connectOrCreate?: EndeavorCreateOrConnectWithoutMentorsInput | EndeavorCreateOrConnectWithoutMentorsInput[]
    connect?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ClassCreateWithoutProfessorInput, ClassUncheckedCreateWithoutProfessorInput> | ClassCreateWithoutProfessorInput[] | ClassUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutProfessorInput | ClassCreateOrConnectWithoutProfessorInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ArtifactUncheckedCreateNestedManyWithoutCollaboratorsInput = {
    create?: XOR<ArtifactCreateWithoutCollaboratorsInput, ArtifactUncheckedCreateWithoutCollaboratorsInput> | ArtifactCreateWithoutCollaboratorsInput[] | ArtifactUncheckedCreateWithoutCollaboratorsInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutCollaboratorsInput | ArtifactCreateOrConnectWithoutCollaboratorsInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type EndeavorUncheckedCreateNestedManyWithoutMentorsInput = {
    create?: XOR<EndeavorCreateWithoutMentorsInput, EndeavorUncheckedCreateWithoutMentorsInput> | EndeavorCreateWithoutMentorsInput[] | EndeavorUncheckedCreateWithoutMentorsInput[]
    connectOrCreate?: EndeavorCreateOrConnectWithoutMentorsInput | EndeavorCreateOrConnectWithoutMentorsInput[]
    connect?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ClassCreateWithoutProfessorInput, ClassUncheckedCreateWithoutProfessorInput> | ClassCreateWithoutProfessorInput[] | ClassUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutProfessorInput | ClassCreateOrConnectWithoutProfessorInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type EnumCollaboratorTypeFieldUpdateOperationsInput = {
    set?: $Enums.CollaboratorType
  }

  export type ArtifactUpdateManyWithoutCollaboratorsNestedInput = {
    create?: XOR<ArtifactCreateWithoutCollaboratorsInput, ArtifactUncheckedCreateWithoutCollaboratorsInput> | ArtifactCreateWithoutCollaboratorsInput[] | ArtifactUncheckedCreateWithoutCollaboratorsInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutCollaboratorsInput | ArtifactCreateOrConnectWithoutCollaboratorsInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutCollaboratorsInput | ArtifactUpsertWithWhereUniqueWithoutCollaboratorsInput[]
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutCollaboratorsInput | ArtifactUpdateWithWhereUniqueWithoutCollaboratorsInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutCollaboratorsInput | ArtifactUpdateManyWithWhereWithoutCollaboratorsInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type EndeavorUpdateManyWithoutMentorsNestedInput = {
    create?: XOR<EndeavorCreateWithoutMentorsInput, EndeavorUncheckedCreateWithoutMentorsInput> | EndeavorCreateWithoutMentorsInput[] | EndeavorUncheckedCreateWithoutMentorsInput[]
    connectOrCreate?: EndeavorCreateOrConnectWithoutMentorsInput | EndeavorCreateOrConnectWithoutMentorsInput[]
    upsert?: EndeavorUpsertWithWhereUniqueWithoutMentorsInput | EndeavorUpsertWithWhereUniqueWithoutMentorsInput[]
    set?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
    disconnect?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
    delete?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
    connect?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
    update?: EndeavorUpdateWithWhereUniqueWithoutMentorsInput | EndeavorUpdateWithWhereUniqueWithoutMentorsInput[]
    updateMany?: EndeavorUpdateManyWithWhereWithoutMentorsInput | EndeavorUpdateManyWithWhereWithoutMentorsInput[]
    deleteMany?: EndeavorScalarWhereInput | EndeavorScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ClassCreateWithoutProfessorInput, ClassUncheckedCreateWithoutProfessorInput> | ClassCreateWithoutProfessorInput[] | ClassUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutProfessorInput | ClassCreateOrConnectWithoutProfessorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutProfessorInput | ClassUpsertWithWhereUniqueWithoutProfessorInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutProfessorInput | ClassUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutProfessorInput | ClassUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ArtifactUncheckedUpdateManyWithoutCollaboratorsNestedInput = {
    create?: XOR<ArtifactCreateWithoutCollaboratorsInput, ArtifactUncheckedCreateWithoutCollaboratorsInput> | ArtifactCreateWithoutCollaboratorsInput[] | ArtifactUncheckedCreateWithoutCollaboratorsInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutCollaboratorsInput | ArtifactCreateOrConnectWithoutCollaboratorsInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutCollaboratorsInput | ArtifactUpsertWithWhereUniqueWithoutCollaboratorsInput[]
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutCollaboratorsInput | ArtifactUpdateWithWhereUniqueWithoutCollaboratorsInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutCollaboratorsInput | ArtifactUpdateManyWithWhereWithoutCollaboratorsInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type EndeavorUncheckedUpdateManyWithoutMentorsNestedInput = {
    create?: XOR<EndeavorCreateWithoutMentorsInput, EndeavorUncheckedCreateWithoutMentorsInput> | EndeavorCreateWithoutMentorsInput[] | EndeavorUncheckedCreateWithoutMentorsInput[]
    connectOrCreate?: EndeavorCreateOrConnectWithoutMentorsInput | EndeavorCreateOrConnectWithoutMentorsInput[]
    upsert?: EndeavorUpsertWithWhereUniqueWithoutMentorsInput | EndeavorUpsertWithWhereUniqueWithoutMentorsInput[]
    set?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
    disconnect?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
    delete?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
    connect?: EndeavorWhereUniqueInput | EndeavorWhereUniqueInput[]
    update?: EndeavorUpdateWithWhereUniqueWithoutMentorsInput | EndeavorUpdateWithWhereUniqueWithoutMentorsInput[]
    updateMany?: EndeavorUpdateManyWithWhereWithoutMentorsInput | EndeavorUpdateManyWithWhereWithoutMentorsInput[]
    deleteMany?: EndeavorScalarWhereInput | EndeavorScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ClassCreateWithoutProfessorInput, ClassUncheckedCreateWithoutProfessorInput> | ClassCreateWithoutProfessorInput[] | ClassUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutProfessorInput | ClassCreateOrConnectWithoutProfessorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutProfessorInput | ClassUpsertWithWhereUniqueWithoutProfessorInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutProfessorInput | ClassUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutProfessorInput | ClassUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type EnumReasonForReadingFieldUpdateOperationsInput = {
    set?: $Enums.ReasonForReading
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTermFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermFilter<$PrismaModel> | $Enums.Term
  }

  export type NestedEnumTermWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermWithAggregatesFilter<$PrismaModel> | $Enums.Term
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermFilter<$PrismaModel>
    _max?: NestedEnumTermFilter<$PrismaModel>
  }

  export type NestedEnumCollaboratorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorType | EnumCollaboratorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorType[] | ListEnumCollaboratorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaboratorType[] | ListEnumCollaboratorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaboratorTypeFilter<$PrismaModel> | $Enums.CollaboratorType
  }

  export type NestedEnumCollaboratorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorType | EnumCollaboratorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorType[] | ListEnumCollaboratorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaboratorType[] | ListEnumCollaboratorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaboratorTypeWithAggregatesFilter<$PrismaModel> | $Enums.CollaboratorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaboratorTypeFilter<$PrismaModel>
    _max?: NestedEnumCollaboratorTypeFilter<$PrismaModel>
  }

  export type NestedEnumReasonForReadingFilter<$PrismaModel = never> = {
    equals?: $Enums.ReasonForReading | EnumReasonForReadingFieldRefInput<$PrismaModel>
    in?: $Enums.ReasonForReading[] | ListEnumReasonForReadingFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReasonForReading[] | ListEnumReasonForReadingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForReadingFilter<$PrismaModel> | $Enums.ReasonForReading
  }

  export type NestedEnumReasonForReadingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReasonForReading | EnumReasonForReadingFieldRefInput<$PrismaModel>
    in?: $Enums.ReasonForReading[] | ListEnumReasonForReadingFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReasonForReading[] | ListEnumReasonForReadingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForReadingWithAggregatesFilter<$PrismaModel> | $Enums.ReasonForReading
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReasonForReadingFilter<$PrismaModel>
    _max?: NestedEnumReasonForReadingFilter<$PrismaModel>
  }

  export type ArtifactCreateWithoutEndeavorInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    class?: ClassCreateNestedOneWithoutArtifactsInput
    contributions?: ContributionCreateNestedManyWithoutArtifactInput
    collaborators?: CollaboratorCreateNestedManyWithoutArtifactsInput
  }

  export type ArtifactUncheckedCreateWithoutEndeavorInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutArtifactInput
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutArtifactsInput
  }

  export type ArtifactCreateOrConnectWithoutEndeavorInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutEndeavorInput, ArtifactUncheckedCreateWithoutEndeavorInput>
  }

  export type ArtifactCreateManyEndeavorInputEnvelope = {
    data: ArtifactCreateManyEndeavorInput | ArtifactCreateManyEndeavorInput[]
    skipDuplicates?: boolean
  }

  export type ContributionCreateWithoutEndeavorInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    artifact?: ArtifactCreateNestedOneWithoutContributionsInput
    class?: ClassCreateNestedOneWithoutContributionsInput
    skill?: SkillCreateNestedOneWithoutContributionsInput
    characteristic?: CharacteristicCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutEndeavorInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    classId?: string | null
    skillId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateOrConnectWithoutEndeavorInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutEndeavorInput, ContributionUncheckedCreateWithoutEndeavorInput>
  }

  export type ContributionCreateManyEndeavorInputEnvelope = {
    data: ContributionCreateManyEndeavorInput | ContributionCreateManyEndeavorInput[]
    skipDuplicates?: boolean
  }

  export type CollaboratorCreateWithoutEndeavorsInput = {
    id?: string
    name: string
    linkedin?: string | null
    type: $Enums.CollaboratorType
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactCreateNestedManyWithoutCollaboratorsInput
    classes?: ClassCreateNestedManyWithoutProfessorInput
  }

  export type CollaboratorUncheckedCreateWithoutEndeavorsInput = {
    id?: string
    name: string
    linkedin?: string | null
    type: $Enums.CollaboratorType
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutCollaboratorsInput
    classes?: ClassUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type CollaboratorCreateOrConnectWithoutEndeavorsInput = {
    where: CollaboratorWhereUniqueInput
    create: XOR<CollaboratorCreateWithoutEndeavorsInput, CollaboratorUncheckedCreateWithoutEndeavorsInput>
  }

  export type ArtifactUpsertWithWhereUniqueWithoutEndeavorInput = {
    where: ArtifactWhereUniqueInput
    update: XOR<ArtifactUpdateWithoutEndeavorInput, ArtifactUncheckedUpdateWithoutEndeavorInput>
    create: XOR<ArtifactCreateWithoutEndeavorInput, ArtifactUncheckedCreateWithoutEndeavorInput>
  }

  export type ArtifactUpdateWithWhereUniqueWithoutEndeavorInput = {
    where: ArtifactWhereUniqueInput
    data: XOR<ArtifactUpdateWithoutEndeavorInput, ArtifactUncheckedUpdateWithoutEndeavorInput>
  }

  export type ArtifactUpdateManyWithWhereWithoutEndeavorInput = {
    where: ArtifactScalarWhereInput
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyWithoutEndeavorInput>
  }

  export type ArtifactScalarWhereInput = {
    AND?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
    OR?: ArtifactScalarWhereInput[]
    NOT?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
    id?: StringFilter<"Artifact"> | string
    title?: StringFilter<"Artifact"> | string
    description?: StringFilter<"Artifact"> | string
    imageUrl?: StringNullableFilter<"Artifact"> | string | null
    link?: StringNullableFilter<"Artifact"> | string | null
    completionDate?: DateTimeFilter<"Artifact"> | Date | string
    endeavorId?: StringNullableFilter<"Artifact"> | string | null
    classId?: StringNullableFilter<"Artifact"> | string | null
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
    updatedAt?: DateTimeFilter<"Artifact"> | Date | string
  }

  export type ContributionUpsertWithWhereUniqueWithoutEndeavorInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutEndeavorInput, ContributionUncheckedUpdateWithoutEndeavorInput>
    create: XOR<ContributionCreateWithoutEndeavorInput, ContributionUncheckedCreateWithoutEndeavorInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutEndeavorInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutEndeavorInput, ContributionUncheckedUpdateWithoutEndeavorInput>
  }

  export type ContributionUpdateManyWithWhereWithoutEndeavorInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutEndeavorInput>
  }

  export type ContributionScalarWhereInput = {
    AND?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    OR?: ContributionScalarWhereInput[]
    NOT?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    id?: StringFilter<"Contribution"> | string
    description?: StringNullableFilter<"Contribution"> | string | null
    strengthLevel?: IntFilter<"Contribution"> | number
    artifactId?: StringNullableFilter<"Contribution"> | string | null
    classId?: StringNullableFilter<"Contribution"> | string | null
    endeavorId?: StringNullableFilter<"Contribution"> | string | null
    skillId?: StringNullableFilter<"Contribution"> | string | null
    characteristicId?: StringNullableFilter<"Contribution"> | string | null
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
  }

  export type CollaboratorUpsertWithWhereUniqueWithoutEndeavorsInput = {
    where: CollaboratorWhereUniqueInput
    update: XOR<CollaboratorUpdateWithoutEndeavorsInput, CollaboratorUncheckedUpdateWithoutEndeavorsInput>
    create: XOR<CollaboratorCreateWithoutEndeavorsInput, CollaboratorUncheckedCreateWithoutEndeavorsInput>
  }

  export type CollaboratorUpdateWithWhereUniqueWithoutEndeavorsInput = {
    where: CollaboratorWhereUniqueInput
    data: XOR<CollaboratorUpdateWithoutEndeavorsInput, CollaboratorUncheckedUpdateWithoutEndeavorsInput>
  }

  export type CollaboratorUpdateManyWithWhereWithoutEndeavorsInput = {
    where: CollaboratorScalarWhereInput
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyWithoutEndeavorsInput>
  }

  export type CollaboratorScalarWhereInput = {
    AND?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
    OR?: CollaboratorScalarWhereInput[]
    NOT?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
    id?: StringFilter<"Collaborator"> | string
    name?: StringFilter<"Collaborator"> | string
    linkedin?: StringNullableFilter<"Collaborator"> | string | null
    type?: EnumCollaboratorTypeFilter<"Collaborator"> | $Enums.CollaboratorType
    createdAt?: DateTimeFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeFilter<"Collaborator"> | Date | string
  }

  export type EndeavorCreateWithoutArtifactsInput = {
    id?: string
    entity: string
    title: string
    description: string
    link?: string | null
    imageUrl?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionCreateNestedManyWithoutEndeavorInput
    mentors?: CollaboratorCreateNestedManyWithoutEndeavorsInput
  }

  export type EndeavorUncheckedCreateWithoutArtifactsInput = {
    id?: string
    entity: string
    title: string
    description: string
    link?: string | null
    imageUrl?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutEndeavorInput
    mentors?: CollaboratorUncheckedCreateNestedManyWithoutEndeavorsInput
  }

  export type EndeavorCreateOrConnectWithoutArtifactsInput = {
    where: EndeavorWhereUniqueInput
    create: XOR<EndeavorCreateWithoutArtifactsInput, EndeavorUncheckedCreateWithoutArtifactsInput>
  }

  export type ClassCreateWithoutArtifactsInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: CollaboratorCreateNestedManyWithoutClassesInput
    knowledge: KnowledgeCreateNestedOneWithoutClassesInput
    contributions?: ContributionCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutArtifactsInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    knowledgeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: CollaboratorUncheckedCreateNestedManyWithoutClassesInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutArtifactsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutArtifactsInput, ClassUncheckedCreateWithoutArtifactsInput>
  }

  export type ContributionCreateWithoutArtifactInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    class?: ClassCreateNestedOneWithoutContributionsInput
    endeavor?: EndeavorCreateNestedOneWithoutContributionsInput
    skill?: SkillCreateNestedOneWithoutContributionsInput
    characteristic?: CharacteristicCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutArtifactInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    classId?: string | null
    endeavorId?: string | null
    skillId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateOrConnectWithoutArtifactInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutArtifactInput, ContributionUncheckedCreateWithoutArtifactInput>
  }

  export type ContributionCreateManyArtifactInputEnvelope = {
    data: ContributionCreateManyArtifactInput | ContributionCreateManyArtifactInput[]
    skipDuplicates?: boolean
  }

  export type CollaboratorCreateWithoutArtifactsInput = {
    id?: string
    name: string
    linkedin?: string | null
    type: $Enums.CollaboratorType
    createdAt?: Date | string
    updatedAt?: Date | string
    endeavors?: EndeavorCreateNestedManyWithoutMentorsInput
    classes?: ClassCreateNestedManyWithoutProfessorInput
  }

  export type CollaboratorUncheckedCreateWithoutArtifactsInput = {
    id?: string
    name: string
    linkedin?: string | null
    type: $Enums.CollaboratorType
    createdAt?: Date | string
    updatedAt?: Date | string
    endeavors?: EndeavorUncheckedCreateNestedManyWithoutMentorsInput
    classes?: ClassUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type CollaboratorCreateOrConnectWithoutArtifactsInput = {
    where: CollaboratorWhereUniqueInput
    create: XOR<CollaboratorCreateWithoutArtifactsInput, CollaboratorUncheckedCreateWithoutArtifactsInput>
  }

  export type EndeavorUpsertWithoutArtifactsInput = {
    update: XOR<EndeavorUpdateWithoutArtifactsInput, EndeavorUncheckedUpdateWithoutArtifactsInput>
    create: XOR<EndeavorCreateWithoutArtifactsInput, EndeavorUncheckedCreateWithoutArtifactsInput>
    where?: EndeavorWhereInput
  }

  export type EndeavorUpdateToOneWithWhereWithoutArtifactsInput = {
    where?: EndeavorWhereInput
    data: XOR<EndeavorUpdateWithoutArtifactsInput, EndeavorUncheckedUpdateWithoutArtifactsInput>
  }

  export type EndeavorUpdateWithoutArtifactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUpdateManyWithoutEndeavorNestedInput
    mentors?: CollaboratorUpdateManyWithoutEndeavorsNestedInput
  }

  export type EndeavorUncheckedUpdateWithoutArtifactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutEndeavorNestedInput
    mentors?: CollaboratorUncheckedUpdateManyWithoutEndeavorsNestedInput
  }

  export type ClassUpsertWithoutArtifactsInput = {
    update: XOR<ClassUpdateWithoutArtifactsInput, ClassUncheckedUpdateWithoutArtifactsInput>
    create: XOR<ClassCreateWithoutArtifactsInput, ClassUncheckedCreateWithoutArtifactsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutArtifactsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutArtifactsInput, ClassUncheckedUpdateWithoutArtifactsInput>
  }

  export type ClassUpdateWithoutArtifactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: CollaboratorUpdateManyWithoutClassesNestedInput
    knowledge?: KnowledgeUpdateOneRequiredWithoutClassesNestedInput
    contributions?: ContributionUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutArtifactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: CollaboratorUncheckedUpdateManyWithoutClassesNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ContributionUpsertWithWhereUniqueWithoutArtifactInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutArtifactInput, ContributionUncheckedUpdateWithoutArtifactInput>
    create: XOR<ContributionCreateWithoutArtifactInput, ContributionUncheckedCreateWithoutArtifactInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutArtifactInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutArtifactInput, ContributionUncheckedUpdateWithoutArtifactInput>
  }

  export type ContributionUpdateManyWithWhereWithoutArtifactInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutArtifactInput>
  }

  export type CollaboratorUpsertWithWhereUniqueWithoutArtifactsInput = {
    where: CollaboratorWhereUniqueInput
    update: XOR<CollaboratorUpdateWithoutArtifactsInput, CollaboratorUncheckedUpdateWithoutArtifactsInput>
    create: XOR<CollaboratorCreateWithoutArtifactsInput, CollaboratorUncheckedCreateWithoutArtifactsInput>
  }

  export type CollaboratorUpdateWithWhereUniqueWithoutArtifactsInput = {
    where: CollaboratorWhereUniqueInput
    data: XOR<CollaboratorUpdateWithoutArtifactsInput, CollaboratorUncheckedUpdateWithoutArtifactsInput>
  }

  export type CollaboratorUpdateManyWithWhereWithoutArtifactsInput = {
    where: CollaboratorScalarWhereInput
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyWithoutArtifactsInput>
  }

  export type ClassCreateWithoutKnowledgeInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: CollaboratorCreateNestedManyWithoutClassesInput
    artifacts?: ArtifactCreateNestedManyWithoutClassInput
    contributions?: ContributionCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutKnowledgeInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: CollaboratorUncheckedCreateNestedManyWithoutClassesInput
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutClassInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutKnowledgeInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutKnowledgeInput, ClassUncheckedCreateWithoutKnowledgeInput>
  }

  export type ClassCreateManyKnowledgeInputEnvelope = {
    data: ClassCreateManyKnowledgeInput | ClassCreateManyKnowledgeInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutKnowledgeInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutKnowledgeInput, ClassUncheckedUpdateWithoutKnowledgeInput>
    create: XOR<ClassCreateWithoutKnowledgeInput, ClassUncheckedCreateWithoutKnowledgeInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutKnowledgeInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutKnowledgeInput, ClassUncheckedUpdateWithoutKnowledgeInput>
  }

  export type ClassUpdateManyWithWhereWithoutKnowledgeInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutKnowledgeInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    term?: EnumTermFilter<"Class"> | $Enums.Term
    description?: StringNullableFilter<"Class"> | string | null
    knowledgeId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
  }

  export type CollaboratorCreateWithoutClassesInput = {
    id?: string
    name: string
    linkedin?: string | null
    type: $Enums.CollaboratorType
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactCreateNestedManyWithoutCollaboratorsInput
    endeavors?: EndeavorCreateNestedManyWithoutMentorsInput
  }

  export type CollaboratorUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    linkedin?: string | null
    type: $Enums.CollaboratorType
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutCollaboratorsInput
    endeavors?: EndeavorUncheckedCreateNestedManyWithoutMentorsInput
  }

  export type CollaboratorCreateOrConnectWithoutClassesInput = {
    where: CollaboratorWhereUniqueInput
    create: XOR<CollaboratorCreateWithoutClassesInput, CollaboratorUncheckedCreateWithoutClassesInput>
  }

  export type KnowledgeCreateWithoutClassesInput = {
    id?: string
    year: number
    title: string
    location: string
    institution: string
    reflection?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeUncheckedCreateWithoutClassesInput = {
    id?: string
    year: number
    title: string
    location: string
    institution: string
    reflection?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeCreateOrConnectWithoutClassesInput = {
    where: KnowledgeWhereUniqueInput
    create: XOR<KnowledgeCreateWithoutClassesInput, KnowledgeUncheckedCreateWithoutClassesInput>
  }

  export type ArtifactCreateWithoutClassInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    endeavor?: EndeavorCreateNestedOneWithoutArtifactsInput
    contributions?: ContributionCreateNestedManyWithoutArtifactInput
    collaborators?: CollaboratorCreateNestedManyWithoutArtifactsInput
  }

  export type ArtifactUncheckedCreateWithoutClassInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    endeavorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutArtifactInput
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutArtifactsInput
  }

  export type ArtifactCreateOrConnectWithoutClassInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutClassInput, ArtifactUncheckedCreateWithoutClassInput>
  }

  export type ArtifactCreateManyClassInputEnvelope = {
    data: ArtifactCreateManyClassInput | ArtifactCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type ContributionCreateWithoutClassInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    artifact?: ArtifactCreateNestedOneWithoutContributionsInput
    endeavor?: EndeavorCreateNestedOneWithoutContributionsInput
    skill?: SkillCreateNestedOneWithoutContributionsInput
    characteristic?: CharacteristicCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutClassInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    endeavorId?: string | null
    skillId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateOrConnectWithoutClassInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutClassInput, ContributionUncheckedCreateWithoutClassInput>
  }

  export type ContributionCreateManyClassInputEnvelope = {
    data: ContributionCreateManyClassInput | ContributionCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type CollaboratorUpsertWithWhereUniqueWithoutClassesInput = {
    where: CollaboratorWhereUniqueInput
    update: XOR<CollaboratorUpdateWithoutClassesInput, CollaboratorUncheckedUpdateWithoutClassesInput>
    create: XOR<CollaboratorCreateWithoutClassesInput, CollaboratorUncheckedCreateWithoutClassesInput>
  }

  export type CollaboratorUpdateWithWhereUniqueWithoutClassesInput = {
    where: CollaboratorWhereUniqueInput
    data: XOR<CollaboratorUpdateWithoutClassesInput, CollaboratorUncheckedUpdateWithoutClassesInput>
  }

  export type CollaboratorUpdateManyWithWhereWithoutClassesInput = {
    where: CollaboratorScalarWhereInput
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyWithoutClassesInput>
  }

  export type KnowledgeUpsertWithoutClassesInput = {
    update: XOR<KnowledgeUpdateWithoutClassesInput, KnowledgeUncheckedUpdateWithoutClassesInput>
    create: XOR<KnowledgeCreateWithoutClassesInput, KnowledgeUncheckedCreateWithoutClassesInput>
    where?: KnowledgeWhereInput
  }

  export type KnowledgeUpdateToOneWithWhereWithoutClassesInput = {
    where?: KnowledgeWhereInput
    data: XOR<KnowledgeUpdateWithoutClassesInput, KnowledgeUncheckedUpdateWithoutClassesInput>
  }

  export type KnowledgeUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactUpsertWithWhereUniqueWithoutClassInput = {
    where: ArtifactWhereUniqueInput
    update: XOR<ArtifactUpdateWithoutClassInput, ArtifactUncheckedUpdateWithoutClassInput>
    create: XOR<ArtifactCreateWithoutClassInput, ArtifactUncheckedCreateWithoutClassInput>
  }

  export type ArtifactUpdateWithWhereUniqueWithoutClassInput = {
    where: ArtifactWhereUniqueInput
    data: XOR<ArtifactUpdateWithoutClassInput, ArtifactUncheckedUpdateWithoutClassInput>
  }

  export type ArtifactUpdateManyWithWhereWithoutClassInput = {
    where: ArtifactScalarWhereInput
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyWithoutClassInput>
  }

  export type ContributionUpsertWithWhereUniqueWithoutClassInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutClassInput, ContributionUncheckedUpdateWithoutClassInput>
    create: XOR<ContributionCreateWithoutClassInput, ContributionUncheckedCreateWithoutClassInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutClassInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutClassInput, ContributionUncheckedUpdateWithoutClassInput>
  }

  export type ContributionUpdateManyWithWhereWithoutClassInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutClassInput>
  }

  export type ContributionCreateWithoutCharacteristicInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    artifact?: ArtifactCreateNestedOneWithoutContributionsInput
    class?: ClassCreateNestedOneWithoutContributionsInput
    endeavor?: EndeavorCreateNestedOneWithoutContributionsInput
    skill?: SkillCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutCharacteristicInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    classId?: string | null
    endeavorId?: string | null
    skillId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateOrConnectWithoutCharacteristicInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutCharacteristicInput, ContributionUncheckedCreateWithoutCharacteristicInput>
  }

  export type ContributionCreateManyCharacteristicInputEnvelope = {
    data: ContributionCreateManyCharacteristicInput | ContributionCreateManyCharacteristicInput[]
    skipDuplicates?: boolean
  }

  export type ContributionUpsertWithWhereUniqueWithoutCharacteristicInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutCharacteristicInput, ContributionUncheckedUpdateWithoutCharacteristicInput>
    create: XOR<ContributionCreateWithoutCharacteristicInput, ContributionUncheckedCreateWithoutCharacteristicInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutCharacteristicInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutCharacteristicInput, ContributionUncheckedUpdateWithoutCharacteristicInput>
  }

  export type ContributionUpdateManyWithWhereWithoutCharacteristicInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutCharacteristicInput>
  }

  export type ContributionCreateWithoutSkillInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    artifact?: ArtifactCreateNestedOneWithoutContributionsInput
    class?: ClassCreateNestedOneWithoutContributionsInput
    endeavor?: EndeavorCreateNestedOneWithoutContributionsInput
    characteristic?: CharacteristicCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutSkillInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    classId?: string | null
    endeavorId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateOrConnectWithoutSkillInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutSkillInput, ContributionUncheckedCreateWithoutSkillInput>
  }

  export type ContributionCreateManySkillInputEnvelope = {
    data: ContributionCreateManySkillInput | ContributionCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type ContributionUpsertWithWhereUniqueWithoutSkillInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutSkillInput, ContributionUncheckedUpdateWithoutSkillInput>
    create: XOR<ContributionCreateWithoutSkillInput, ContributionUncheckedCreateWithoutSkillInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutSkillInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutSkillInput, ContributionUncheckedUpdateWithoutSkillInput>
  }

  export type ContributionUpdateManyWithWhereWithoutSkillInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutSkillInput>
  }

  export type ArtifactCreateWithoutContributionsInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    endeavor?: EndeavorCreateNestedOneWithoutArtifactsInput
    class?: ClassCreateNestedOneWithoutArtifactsInput
    collaborators?: CollaboratorCreateNestedManyWithoutArtifactsInput
  }

  export type ArtifactUncheckedCreateWithoutContributionsInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    endeavorId?: string | null
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutArtifactsInput
  }

  export type ArtifactCreateOrConnectWithoutContributionsInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutContributionsInput, ArtifactUncheckedCreateWithoutContributionsInput>
  }

  export type ClassCreateWithoutContributionsInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: CollaboratorCreateNestedManyWithoutClassesInput
    knowledge: KnowledgeCreateNestedOneWithoutClassesInput
    artifacts?: ArtifactCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutContributionsInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    knowledgeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: CollaboratorUncheckedCreateNestedManyWithoutClassesInput
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutContributionsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutContributionsInput, ClassUncheckedCreateWithoutContributionsInput>
  }

  export type EndeavorCreateWithoutContributionsInput = {
    id?: string
    entity: string
    title: string
    description: string
    link?: string | null
    imageUrl?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactCreateNestedManyWithoutEndeavorInput
    mentors?: CollaboratorCreateNestedManyWithoutEndeavorsInput
  }

  export type EndeavorUncheckedCreateWithoutContributionsInput = {
    id?: string
    entity: string
    title: string
    description: string
    link?: string | null
    imageUrl?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutEndeavorInput
    mentors?: CollaboratorUncheckedCreateNestedManyWithoutEndeavorsInput
  }

  export type EndeavorCreateOrConnectWithoutContributionsInput = {
    where: EndeavorWhereUniqueInput
    create: XOR<EndeavorCreateWithoutContributionsInput, EndeavorUncheckedCreateWithoutContributionsInput>
  }

  export type SkillCreateWithoutContributionsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUncheckedCreateWithoutContributionsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCreateOrConnectWithoutContributionsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutContributionsInput, SkillUncheckedCreateWithoutContributionsInput>
  }

  export type CharacteristicCreateWithoutContributionsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacteristicUncheckedCreateWithoutContributionsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacteristicCreateOrConnectWithoutContributionsInput = {
    where: CharacteristicWhereUniqueInput
    create: XOR<CharacteristicCreateWithoutContributionsInput, CharacteristicUncheckedCreateWithoutContributionsInput>
  }

  export type ArtifactUpsertWithoutContributionsInput = {
    update: XOR<ArtifactUpdateWithoutContributionsInput, ArtifactUncheckedUpdateWithoutContributionsInput>
    create: XOR<ArtifactCreateWithoutContributionsInput, ArtifactUncheckedCreateWithoutContributionsInput>
    where?: ArtifactWhereInput
  }

  export type ArtifactUpdateToOneWithWhereWithoutContributionsInput = {
    where?: ArtifactWhereInput
    data: XOR<ArtifactUpdateWithoutContributionsInput, ArtifactUncheckedUpdateWithoutContributionsInput>
  }

  export type ArtifactUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavor?: EndeavorUpdateOneWithoutArtifactsNestedInput
    class?: ClassUpdateOneWithoutArtifactsNestedInput
    collaborators?: CollaboratorUpdateManyWithoutArtifactsNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: CollaboratorUncheckedUpdateManyWithoutArtifactsNestedInput
  }

  export type ClassUpsertWithoutContributionsInput = {
    update: XOR<ClassUpdateWithoutContributionsInput, ClassUncheckedUpdateWithoutContributionsInput>
    create: XOR<ClassCreateWithoutContributionsInput, ClassUncheckedCreateWithoutContributionsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutContributionsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutContributionsInput, ClassUncheckedUpdateWithoutContributionsInput>
  }

  export type ClassUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: CollaboratorUpdateManyWithoutClassesNestedInput
    knowledge?: KnowledgeUpdateOneRequiredWithoutClassesNestedInput
    artifacts?: ArtifactUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: CollaboratorUncheckedUpdateManyWithoutClassesNestedInput
    artifacts?: ArtifactUncheckedUpdateManyWithoutClassNestedInput
  }

  export type EndeavorUpsertWithoutContributionsInput = {
    update: XOR<EndeavorUpdateWithoutContributionsInput, EndeavorUncheckedUpdateWithoutContributionsInput>
    create: XOR<EndeavorCreateWithoutContributionsInput, EndeavorUncheckedCreateWithoutContributionsInput>
    where?: EndeavorWhereInput
  }

  export type EndeavorUpdateToOneWithWhereWithoutContributionsInput = {
    where?: EndeavorWhereInput
    data: XOR<EndeavorUpdateWithoutContributionsInput, EndeavorUncheckedUpdateWithoutContributionsInput>
  }

  export type EndeavorUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUpdateManyWithoutEndeavorNestedInput
    mentors?: CollaboratorUpdateManyWithoutEndeavorsNestedInput
  }

  export type EndeavorUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUncheckedUpdateManyWithoutEndeavorNestedInput
    mentors?: CollaboratorUncheckedUpdateManyWithoutEndeavorsNestedInput
  }

  export type SkillUpsertWithoutContributionsInput = {
    update: XOR<SkillUpdateWithoutContributionsInput, SkillUncheckedUpdateWithoutContributionsInput>
    create: XOR<SkillCreateWithoutContributionsInput, SkillUncheckedCreateWithoutContributionsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutContributionsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutContributionsInput, SkillUncheckedUpdateWithoutContributionsInput>
  }

  export type SkillUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacteristicUpsertWithoutContributionsInput = {
    update: XOR<CharacteristicUpdateWithoutContributionsInput, CharacteristicUncheckedUpdateWithoutContributionsInput>
    create: XOR<CharacteristicCreateWithoutContributionsInput, CharacteristicUncheckedCreateWithoutContributionsInput>
    where?: CharacteristicWhereInput
  }

  export type CharacteristicUpdateToOneWithWhereWithoutContributionsInput = {
    where?: CharacteristicWhereInput
    data: XOR<CharacteristicUpdateWithoutContributionsInput, CharacteristicUncheckedUpdateWithoutContributionsInput>
  }

  export type CharacteristicUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacteristicUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    endeavor?: EndeavorCreateNestedOneWithoutArtifactsInput
    class?: ClassCreateNestedOneWithoutArtifactsInput
    contributions?: ContributionCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    endeavorId?: string | null
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutCollaboratorsInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutCollaboratorsInput, ArtifactUncheckedCreateWithoutCollaboratorsInput>
  }

  export type EndeavorCreateWithoutMentorsInput = {
    id?: string
    entity: string
    title: string
    description: string
    link?: string | null
    imageUrl?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactCreateNestedManyWithoutEndeavorInput
    contributions?: ContributionCreateNestedManyWithoutEndeavorInput
  }

  export type EndeavorUncheckedCreateWithoutMentorsInput = {
    id?: string
    entity: string
    title: string
    description: string
    link?: string | null
    imageUrl?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutEndeavorInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutEndeavorInput
  }

  export type EndeavorCreateOrConnectWithoutMentorsInput = {
    where: EndeavorWhereUniqueInput
    create: XOR<EndeavorCreateWithoutMentorsInput, EndeavorUncheckedCreateWithoutMentorsInput>
  }

  export type ClassCreateWithoutProfessorInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    knowledge: KnowledgeCreateNestedOneWithoutClassesInput
    artifacts?: ArtifactCreateNestedManyWithoutClassInput
    contributions?: ContributionCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutProfessorInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    knowledgeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutClassInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutProfessorInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutProfessorInput, ClassUncheckedCreateWithoutProfessorInput>
  }

  export type ArtifactUpsertWithWhereUniqueWithoutCollaboratorsInput = {
    where: ArtifactWhereUniqueInput
    update: XOR<ArtifactUpdateWithoutCollaboratorsInput, ArtifactUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<ArtifactCreateWithoutCollaboratorsInput, ArtifactUncheckedCreateWithoutCollaboratorsInput>
  }

  export type ArtifactUpdateWithWhereUniqueWithoutCollaboratorsInput = {
    where: ArtifactWhereUniqueInput
    data: XOR<ArtifactUpdateWithoutCollaboratorsInput, ArtifactUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type ArtifactUpdateManyWithWhereWithoutCollaboratorsInput = {
    where: ArtifactScalarWhereInput
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyWithoutCollaboratorsInput>
  }

  export type EndeavorUpsertWithWhereUniqueWithoutMentorsInput = {
    where: EndeavorWhereUniqueInput
    update: XOR<EndeavorUpdateWithoutMentorsInput, EndeavorUncheckedUpdateWithoutMentorsInput>
    create: XOR<EndeavorCreateWithoutMentorsInput, EndeavorUncheckedCreateWithoutMentorsInput>
  }

  export type EndeavorUpdateWithWhereUniqueWithoutMentorsInput = {
    where: EndeavorWhereUniqueInput
    data: XOR<EndeavorUpdateWithoutMentorsInput, EndeavorUncheckedUpdateWithoutMentorsInput>
  }

  export type EndeavorUpdateManyWithWhereWithoutMentorsInput = {
    where: EndeavorScalarWhereInput
    data: XOR<EndeavorUpdateManyMutationInput, EndeavorUncheckedUpdateManyWithoutMentorsInput>
  }

  export type EndeavorScalarWhereInput = {
    AND?: EndeavorScalarWhereInput | EndeavorScalarWhereInput[]
    OR?: EndeavorScalarWhereInput[]
    NOT?: EndeavorScalarWhereInput | EndeavorScalarWhereInput[]
    id?: StringFilter<"Endeavor"> | string
    entity?: StringFilter<"Endeavor"> | string
    title?: StringFilter<"Endeavor"> | string
    description?: StringFilter<"Endeavor"> | string
    link?: StringNullableFilter<"Endeavor"> | string | null
    imageUrl?: StringNullableFilter<"Endeavor"> | string | null
    startDate?: DateTimeFilter<"Endeavor"> | Date | string
    endDate?: DateTimeNullableFilter<"Endeavor"> | Date | string | null
    category?: EnumCategoryFilter<"Endeavor"> | $Enums.Category
    createdAt?: DateTimeFilter<"Endeavor"> | Date | string
    updatedAt?: DateTimeFilter<"Endeavor"> | Date | string
  }

  export type ClassUpsertWithWhereUniqueWithoutProfessorInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutProfessorInput, ClassUncheckedUpdateWithoutProfessorInput>
    create: XOR<ClassCreateWithoutProfessorInput, ClassUncheckedCreateWithoutProfessorInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutProfessorInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutProfessorInput, ClassUncheckedUpdateWithoutProfessorInput>
  }

  export type ClassUpdateManyWithWhereWithoutProfessorInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutProfessorInput>
  }

  export type ArtifactCreateManyEndeavorInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateManyEndeavorInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    classId?: string | null
    skillId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtifactUpdateWithoutEndeavorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneWithoutArtifactsNestedInput
    contributions?: ContributionUpdateManyWithoutArtifactNestedInput
    collaborators?: CollaboratorUpdateManyWithoutArtifactsNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutEndeavorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutArtifactNestedInput
    collaborators?: CollaboratorUncheckedUpdateManyWithoutArtifactsNestedInput
  }

  export type ArtifactUncheckedUpdateManyWithoutEndeavorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUpdateWithoutEndeavorInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifact?: ArtifactUpdateOneWithoutContributionsNestedInput
    class?: ClassUpdateOneWithoutContributionsNestedInput
    skill?: SkillUpdateOneWithoutContributionsNestedInput
    characteristic?: CharacteristicUpdateOneWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutEndeavorInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyWithoutEndeavorInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUpdateWithoutEndeavorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUpdateManyWithoutCollaboratorsNestedInput
    classes?: ClassUpdateManyWithoutProfessorNestedInput
  }

  export type CollaboratorUncheckedUpdateWithoutEndeavorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUncheckedUpdateManyWithoutCollaboratorsNestedInput
    classes?: ClassUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type CollaboratorUncheckedUpdateManyWithoutEndeavorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateManyArtifactInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    classId?: string | null
    endeavorId?: string | null
    skillId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneWithoutContributionsNestedInput
    endeavor?: EndeavorUpdateOneWithoutContributionsNestedInput
    skill?: SkillUpdateOneWithoutContributionsNestedInput
    characteristic?: CharacteristicUpdateOneWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUpdateWithoutArtifactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavors?: EndeavorUpdateManyWithoutMentorsNestedInput
    classes?: ClassUpdateManyWithoutProfessorNestedInput
  }

  export type CollaboratorUncheckedUpdateWithoutArtifactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavors?: EndeavorUncheckedUpdateManyWithoutMentorsNestedInput
    classes?: ClassUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type CollaboratorUncheckedUpdateManyWithoutArtifactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateManyKnowledgeInput = {
    id?: string
    name: string
    term: $Enums.Term
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassUpdateWithoutKnowledgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: CollaboratorUpdateManyWithoutClassesNestedInput
    artifacts?: ArtifactUpdateManyWithoutClassNestedInput
    contributions?: ContributionUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutKnowledgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: CollaboratorUncheckedUpdateManyWithoutClassesNestedInput
    artifacts?: ArtifactUncheckedUpdateManyWithoutClassNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutKnowledgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactCreateManyClassInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    link?: string | null
    completionDate: Date | string
    endeavorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateManyClassInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    endeavorId?: string | null
    skillId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaboratorUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUpdateManyWithoutCollaboratorsNestedInput
    endeavors?: EndeavorUpdateManyWithoutMentorsNestedInput
  }

  export type CollaboratorUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUncheckedUpdateManyWithoutCollaboratorsNestedInput
    endeavors?: EndeavorUncheckedUpdateManyWithoutMentorsNestedInput
  }

  export type CollaboratorUncheckedUpdateManyWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavor?: EndeavorUpdateOneWithoutArtifactsNestedInput
    contributions?: ContributionUpdateManyWithoutArtifactNestedInput
    collaborators?: CollaboratorUpdateManyWithoutArtifactsNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutArtifactNestedInput
    collaborators?: CollaboratorUncheckedUpdateManyWithoutArtifactsNestedInput
  }

  export type ArtifactUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifact?: ArtifactUpdateOneWithoutContributionsNestedInput
    endeavor?: EndeavorUpdateOneWithoutContributionsNestedInput
    skill?: SkillUpdateOneWithoutContributionsNestedInput
    characteristic?: CharacteristicUpdateOneWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateManyCharacteristicInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    classId?: string | null
    endeavorId?: string | null
    skillId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionUpdateWithoutCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifact?: ArtifactUpdateOneWithoutContributionsNestedInput
    class?: ClassUpdateOneWithoutContributionsNestedInput
    endeavor?: EndeavorUpdateOneWithoutContributionsNestedInput
    skill?: SkillUpdateOneWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyWithoutCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    skillId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateManySkillInput = {
    id?: string
    description?: string | null
    strengthLevel?: number
    artifactId?: string | null
    classId?: string | null
    endeavorId?: string | null
    characteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifact?: ArtifactUpdateOneWithoutContributionsNestedInput
    class?: ClassUpdateOneWithoutContributionsNestedInput
    endeavor?: EndeavorUpdateOneWithoutContributionsNestedInput
    characteristic?: CharacteristicUpdateOneWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    strengthLevel?: IntFieldUpdateOperationsInput | number
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    characteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavor?: EndeavorUpdateOneWithoutArtifactsNestedInput
    class?: ClassUpdateOneWithoutArtifactsNestedInput
    contributions?: ContributionUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateManyWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endeavorId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndeavorUpdateWithoutMentorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUpdateManyWithoutEndeavorNestedInput
    contributions?: ContributionUpdateManyWithoutEndeavorNestedInput
  }

  export type EndeavorUncheckedUpdateWithoutMentorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUncheckedUpdateManyWithoutEndeavorNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutEndeavorNestedInput
  }

  export type EndeavorUncheckedUpdateManyWithoutMentorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    knowledge?: KnowledgeUpdateOneRequiredWithoutClassesNestedInput
    artifacts?: ArtifactUpdateManyWithoutClassNestedInput
    contributions?: ContributionUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUncheckedUpdateManyWithoutClassNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    description?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}