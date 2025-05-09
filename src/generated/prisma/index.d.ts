
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
 * Model Streaming
 * 
 */
export type Streaming = $Result.DefaultSelection<Prisma.$StreamingPayload>
/**
 * Model Cookies
 * 
 */
export type Cookies = $Result.DefaultSelection<Prisma.$CookiesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Streamings
 * const streamings = await prisma.streaming.findMany()
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
   * // Fetch zero or more Streamings
   * const streamings = await prisma.streaming.findMany()
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
   * `prisma.streaming`: Exposes CRUD operations for the **Streaming** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streamings
    * const streamings = await prisma.streaming.findMany()
    * ```
    */
  get streaming(): Prisma.StreamingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cookies`: Exposes CRUD operations for the **Cookies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cookies
    * const cookies = await prisma.cookies.findMany()
    * ```
    */
  get cookies(): Prisma.CookiesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Streaming: 'Streaming',
    Cookies: 'Cookies'
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
      modelProps: "streaming" | "cookies"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Streaming: {
        payload: Prisma.$StreamingPayload<ExtArgs>
        fields: Prisma.StreamingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload>
          }
          findFirst: {
            args: Prisma.StreamingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload>
          }
          findMany: {
            args: Prisma.StreamingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload>[]
          }
          create: {
            args: Prisma.StreamingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload>
          }
          createMany: {
            args: Prisma.StreamingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload>[]
          }
          delete: {
            args: Prisma.StreamingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload>
          }
          update: {
            args: Prisma.StreamingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload>
          }
          deleteMany: {
            args: Prisma.StreamingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload>[]
          }
          upsert: {
            args: Prisma.StreamingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingPayload>
          }
          aggregate: {
            args: Prisma.StreamingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreaming>
          }
          groupBy: {
            args: Prisma.StreamingGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamingGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamingCountArgs<ExtArgs>
            result: $Utils.Optional<StreamingCountAggregateOutputType> | number
          }
        }
      }
      Cookies: {
        payload: Prisma.$CookiesPayload<ExtArgs>
        fields: Prisma.CookiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CookiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CookiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload>
          }
          findFirst: {
            args: Prisma.CookiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CookiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload>
          }
          findMany: {
            args: Prisma.CookiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload>[]
          }
          create: {
            args: Prisma.CookiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload>
          }
          createMany: {
            args: Prisma.CookiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CookiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload>[]
          }
          delete: {
            args: Prisma.CookiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload>
          }
          update: {
            args: Prisma.CookiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload>
          }
          deleteMany: {
            args: Prisma.CookiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CookiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CookiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload>[]
          }
          upsert: {
            args: Prisma.CookiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookiesPayload>
          }
          aggregate: {
            args: Prisma.CookiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCookies>
          }
          groupBy: {
            args: Prisma.CookiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CookiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CookiesCountArgs<ExtArgs>
            result: $Utils.Optional<CookiesCountAggregateOutputType> | number
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
    streaming?: StreamingOmit
    cookies?: CookiesOmit
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
   * Count Type StreamingCountOutputType
   */

  export type StreamingCountOutputType = {
    cookies: number
  }

  export type StreamingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cookies?: boolean | StreamingCountOutputTypeCountCookiesArgs
  }

  // Custom InputTypes
  /**
   * StreamingCountOutputType without action
   */
  export type StreamingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingCountOutputType
     */
    select?: StreamingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamingCountOutputType without action
   */
  export type StreamingCountOutputTypeCountCookiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CookiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Streaming
   */

  export type AggregateStreaming = {
    _count: StreamingCountAggregateOutputType | null
    _avg: StreamingAvgAggregateOutputType | null
    _sum: StreamingSumAggregateOutputType | null
    _min: StreamingMinAggregateOutputType | null
    _max: StreamingMaxAggregateOutputType | null
  }

  export type StreamingAvgAggregateOutputType = {
    id: number | null
  }

  export type StreamingSumAggregateOutputType = {
    id: number | null
  }

  export type StreamingMinAggregateOutputType = {
    id: number | null
    name: string | null
    domain: string | null
  }

  export type StreamingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    domain: string | null
  }

  export type StreamingCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    _all: number
  }


  export type StreamingAvgAggregateInputType = {
    id?: true
  }

  export type StreamingSumAggregateInputType = {
    id?: true
  }

  export type StreamingMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
  }

  export type StreamingMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
  }

  export type StreamingCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    _all?: true
  }

  export type StreamingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streaming to aggregate.
     */
    where?: StreamingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamings to fetch.
     */
    orderBy?: StreamingOrderByWithRelationInput | StreamingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streamings
    **/
    _count?: true | StreamingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamingMaxAggregateInputType
  }

  export type GetStreamingAggregateType<T extends StreamingAggregateArgs> = {
        [P in keyof T & keyof AggregateStreaming]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreaming[P]>
      : GetScalarType<T[P], AggregateStreaming[P]>
  }




  export type StreamingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamingWhereInput
    orderBy?: StreamingOrderByWithAggregationInput | StreamingOrderByWithAggregationInput[]
    by: StreamingScalarFieldEnum[] | StreamingScalarFieldEnum
    having?: StreamingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamingCountAggregateInputType | true
    _avg?: StreamingAvgAggregateInputType
    _sum?: StreamingSumAggregateInputType
    _min?: StreamingMinAggregateInputType
    _max?: StreamingMaxAggregateInputType
  }

  export type StreamingGroupByOutputType = {
    id: number
    name: string
    domain: string
    _count: StreamingCountAggregateOutputType | null
    _avg: StreamingAvgAggregateOutputType | null
    _sum: StreamingSumAggregateOutputType | null
    _min: StreamingMinAggregateOutputType | null
    _max: StreamingMaxAggregateOutputType | null
  }

  type GetStreamingGroupByPayload<T extends StreamingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamingGroupByOutputType[P]>
            : GetScalarType<T[P], StreamingGroupByOutputType[P]>
        }
      >
    >


  export type StreamingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    cookies?: boolean | Streaming$cookiesArgs<ExtArgs>
    _count?: boolean | StreamingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streaming"]>

  export type StreamingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
  }, ExtArgs["result"]["streaming"]>

  export type StreamingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
  }, ExtArgs["result"]["streaming"]>

  export type StreamingSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
  }

  export type StreamingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain", ExtArgs["result"]["streaming"]>
  export type StreamingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cookies?: boolean | Streaming$cookiesArgs<ExtArgs>
    _count?: boolean | StreamingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StreamingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StreamingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streaming"
    objects: {
      cookies: Prisma.$CookiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      domain: string
    }, ExtArgs["result"]["streaming"]>
    composites: {}
  }

  type StreamingGetPayload<S extends boolean | null | undefined | StreamingDefaultArgs> = $Result.GetResult<Prisma.$StreamingPayload, S>

  type StreamingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamingCountAggregateInputType | true
    }

  export interface StreamingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streaming'], meta: { name: 'Streaming' } }
    /**
     * Find zero or one Streaming that matches the filter.
     * @param {StreamingFindUniqueArgs} args - Arguments to find a Streaming
     * @example
     * // Get one Streaming
     * const streaming = await prisma.streaming.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamingFindUniqueArgs>(args: SelectSubset<T, StreamingFindUniqueArgs<ExtArgs>>): Prisma__StreamingClient<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Streaming that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamingFindUniqueOrThrowArgs} args - Arguments to find a Streaming
     * @example
     * // Get one Streaming
     * const streaming = await prisma.streaming.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamingFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamingClient<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streaming that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingFindFirstArgs} args - Arguments to find a Streaming
     * @example
     * // Get one Streaming
     * const streaming = await prisma.streaming.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamingFindFirstArgs>(args?: SelectSubset<T, StreamingFindFirstArgs<ExtArgs>>): Prisma__StreamingClient<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streaming that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingFindFirstOrThrowArgs} args - Arguments to find a Streaming
     * @example
     * // Get one Streaming
     * const streaming = await prisma.streaming.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamingFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamingFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamingClient<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streamings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streamings
     * const streamings = await prisma.streaming.findMany()
     * 
     * // Get first 10 Streamings
     * const streamings = await prisma.streaming.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamingWithIdOnly = await prisma.streaming.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamingFindManyArgs>(args?: SelectSubset<T, StreamingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Streaming.
     * @param {StreamingCreateArgs} args - Arguments to create a Streaming.
     * @example
     * // Create one Streaming
     * const Streaming = await prisma.streaming.create({
     *   data: {
     *     // ... data to create a Streaming
     *   }
     * })
     * 
     */
    create<T extends StreamingCreateArgs>(args: SelectSubset<T, StreamingCreateArgs<ExtArgs>>): Prisma__StreamingClient<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streamings.
     * @param {StreamingCreateManyArgs} args - Arguments to create many Streamings.
     * @example
     * // Create many Streamings
     * const streaming = await prisma.streaming.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamingCreateManyArgs>(args?: SelectSubset<T, StreamingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streamings and returns the data saved in the database.
     * @param {StreamingCreateManyAndReturnArgs} args - Arguments to create many Streamings.
     * @example
     * // Create many Streamings
     * const streaming = await prisma.streaming.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streamings and only return the `id`
     * const streamingWithIdOnly = await prisma.streaming.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamingCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Streaming.
     * @param {StreamingDeleteArgs} args - Arguments to delete one Streaming.
     * @example
     * // Delete one Streaming
     * const Streaming = await prisma.streaming.delete({
     *   where: {
     *     // ... filter to delete one Streaming
     *   }
     * })
     * 
     */
    delete<T extends StreamingDeleteArgs>(args: SelectSubset<T, StreamingDeleteArgs<ExtArgs>>): Prisma__StreamingClient<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Streaming.
     * @param {StreamingUpdateArgs} args - Arguments to update one Streaming.
     * @example
     * // Update one Streaming
     * const streaming = await prisma.streaming.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamingUpdateArgs>(args: SelectSubset<T, StreamingUpdateArgs<ExtArgs>>): Prisma__StreamingClient<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streamings.
     * @param {StreamingDeleteManyArgs} args - Arguments to filter Streamings to delete.
     * @example
     * // Delete a few Streamings
     * const { count } = await prisma.streaming.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamingDeleteManyArgs>(args?: SelectSubset<T, StreamingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streamings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streamings
     * const streaming = await prisma.streaming.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamingUpdateManyArgs>(args: SelectSubset<T, StreamingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streamings and returns the data updated in the database.
     * @param {StreamingUpdateManyAndReturnArgs} args - Arguments to update many Streamings.
     * @example
     * // Update many Streamings
     * const streaming = await prisma.streaming.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streamings and only return the `id`
     * const streamingWithIdOnly = await prisma.streaming.updateManyAndReturn({
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
    updateManyAndReturn<T extends StreamingUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Streaming.
     * @param {StreamingUpsertArgs} args - Arguments to update or create a Streaming.
     * @example
     * // Update or create a Streaming
     * const streaming = await prisma.streaming.upsert({
     *   create: {
     *     // ... data to create a Streaming
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streaming we want to update
     *   }
     * })
     */
    upsert<T extends StreamingUpsertArgs>(args: SelectSubset<T, StreamingUpsertArgs<ExtArgs>>): Prisma__StreamingClient<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streamings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingCountArgs} args - Arguments to filter Streamings to count.
     * @example
     * // Count the number of Streamings
     * const count = await prisma.streaming.count({
     *   where: {
     *     // ... the filter for the Streamings we want to count
     *   }
     * })
    **/
    count<T extends StreamingCountArgs>(
      args?: Subset<T, StreamingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streaming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamingAggregateArgs>(args: Subset<T, StreamingAggregateArgs>): Prisma.PrismaPromise<GetStreamingAggregateType<T>>

    /**
     * Group by Streaming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingGroupByArgs} args - Group by arguments.
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
      T extends StreamingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamingGroupByArgs['orderBy'] }
        : { orderBy?: StreamingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreamingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streaming model
   */
  readonly fields: StreamingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streaming.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cookies<T extends Streaming$cookiesArgs<ExtArgs> = {}>(args?: Subset<T, Streaming$cookiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Streaming model
   */
  interface StreamingFieldRefs {
    readonly id: FieldRef<"Streaming", 'Int'>
    readonly name: FieldRef<"Streaming", 'String'>
    readonly domain: FieldRef<"Streaming", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Streaming findUnique
   */
  export type StreamingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    /**
     * Filter, which Streaming to fetch.
     */
    where: StreamingWhereUniqueInput
  }

  /**
   * Streaming findUniqueOrThrow
   */
  export type StreamingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    /**
     * Filter, which Streaming to fetch.
     */
    where: StreamingWhereUniqueInput
  }

  /**
   * Streaming findFirst
   */
  export type StreamingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    /**
     * Filter, which Streaming to fetch.
     */
    where?: StreamingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamings to fetch.
     */
    orderBy?: StreamingOrderByWithRelationInput | StreamingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streamings.
     */
    cursor?: StreamingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streamings.
     */
    distinct?: StreamingScalarFieldEnum | StreamingScalarFieldEnum[]
  }

  /**
   * Streaming findFirstOrThrow
   */
  export type StreamingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    /**
     * Filter, which Streaming to fetch.
     */
    where?: StreamingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamings to fetch.
     */
    orderBy?: StreamingOrderByWithRelationInput | StreamingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streamings.
     */
    cursor?: StreamingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streamings.
     */
    distinct?: StreamingScalarFieldEnum | StreamingScalarFieldEnum[]
  }

  /**
   * Streaming findMany
   */
  export type StreamingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    /**
     * Filter, which Streamings to fetch.
     */
    where?: StreamingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamings to fetch.
     */
    orderBy?: StreamingOrderByWithRelationInput | StreamingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streamings.
     */
    cursor?: StreamingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamings.
     */
    skip?: number
    distinct?: StreamingScalarFieldEnum | StreamingScalarFieldEnum[]
  }

  /**
   * Streaming create
   */
  export type StreamingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    /**
     * The data needed to create a Streaming.
     */
    data: XOR<StreamingCreateInput, StreamingUncheckedCreateInput>
  }

  /**
   * Streaming createMany
   */
  export type StreamingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streamings.
     */
    data: StreamingCreateManyInput | StreamingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streaming createManyAndReturn
   */
  export type StreamingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * The data used to create many Streamings.
     */
    data: StreamingCreateManyInput | StreamingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streaming update
   */
  export type StreamingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    /**
     * The data needed to update a Streaming.
     */
    data: XOR<StreamingUpdateInput, StreamingUncheckedUpdateInput>
    /**
     * Choose, which Streaming to update.
     */
    where: StreamingWhereUniqueInput
  }

  /**
   * Streaming updateMany
   */
  export type StreamingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streamings.
     */
    data: XOR<StreamingUpdateManyMutationInput, StreamingUncheckedUpdateManyInput>
    /**
     * Filter which Streamings to update
     */
    where?: StreamingWhereInput
    /**
     * Limit how many Streamings to update.
     */
    limit?: number
  }

  /**
   * Streaming updateManyAndReturn
   */
  export type StreamingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * The data used to update Streamings.
     */
    data: XOR<StreamingUpdateManyMutationInput, StreamingUncheckedUpdateManyInput>
    /**
     * Filter which Streamings to update
     */
    where?: StreamingWhereInput
    /**
     * Limit how many Streamings to update.
     */
    limit?: number
  }

  /**
   * Streaming upsert
   */
  export type StreamingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    /**
     * The filter to search for the Streaming to update in case it exists.
     */
    where: StreamingWhereUniqueInput
    /**
     * In case the Streaming found by the `where` argument doesn't exist, create a new Streaming with this data.
     */
    create: XOR<StreamingCreateInput, StreamingUncheckedCreateInput>
    /**
     * In case the Streaming was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamingUpdateInput, StreamingUncheckedUpdateInput>
  }

  /**
   * Streaming delete
   */
  export type StreamingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    /**
     * Filter which Streaming to delete.
     */
    where: StreamingWhereUniqueInput
  }

  /**
   * Streaming deleteMany
   */
  export type StreamingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streamings to delete
     */
    where?: StreamingWhereInput
    /**
     * Limit how many Streamings to delete.
     */
    limit?: number
  }

  /**
   * Streaming.cookies
   */
  export type Streaming$cookiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    where?: CookiesWhereInput
    orderBy?: CookiesOrderByWithRelationInput | CookiesOrderByWithRelationInput[]
    cursor?: CookiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CookiesScalarFieldEnum | CookiesScalarFieldEnum[]
  }

  /**
   * Streaming without action
   */
  export type StreamingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
  }


  /**
   * Model Cookies
   */

  export type AggregateCookies = {
    _count: CookiesCountAggregateOutputType | null
    _avg: CookiesAvgAggregateOutputType | null
    _sum: CookiesSumAggregateOutputType | null
    _min: CookiesMinAggregateOutputType | null
    _max: CookiesMaxAggregateOutputType | null
  }

  export type CookiesAvgAggregateOutputType = {
    id: number | null
    streamingId: number | null
  }

  export type CookiesSumAggregateOutputType = {
    id: number | null
    streamingId: number | null
  }

  export type CookiesMinAggregateOutputType = {
    id: number | null
    label: string | null
    streamingId: number | null
  }

  export type CookiesMaxAggregateOutputType = {
    id: number | null
    label: string | null
    streamingId: number | null
  }

  export type CookiesCountAggregateOutputType = {
    id: number
    label: number
    cookies: number
    streamingId: number
    _all: number
  }


  export type CookiesAvgAggregateInputType = {
    id?: true
    streamingId?: true
  }

  export type CookiesSumAggregateInputType = {
    id?: true
    streamingId?: true
  }

  export type CookiesMinAggregateInputType = {
    id?: true
    label?: true
    streamingId?: true
  }

  export type CookiesMaxAggregateInputType = {
    id?: true
    label?: true
    streamingId?: true
  }

  export type CookiesCountAggregateInputType = {
    id?: true
    label?: true
    cookies?: true
    streamingId?: true
    _all?: true
  }

  export type CookiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cookies to aggregate.
     */
    where?: CookiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cookies to fetch.
     */
    orderBy?: CookiesOrderByWithRelationInput | CookiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CookiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cookies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cookies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cookies
    **/
    _count?: true | CookiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CookiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CookiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CookiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CookiesMaxAggregateInputType
  }

  export type GetCookiesAggregateType<T extends CookiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCookies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCookies[P]>
      : GetScalarType<T[P], AggregateCookies[P]>
  }




  export type CookiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CookiesWhereInput
    orderBy?: CookiesOrderByWithAggregationInput | CookiesOrderByWithAggregationInput[]
    by: CookiesScalarFieldEnum[] | CookiesScalarFieldEnum
    having?: CookiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CookiesCountAggregateInputType | true
    _avg?: CookiesAvgAggregateInputType
    _sum?: CookiesSumAggregateInputType
    _min?: CookiesMinAggregateInputType
    _max?: CookiesMaxAggregateInputType
  }

  export type CookiesGroupByOutputType = {
    id: number
    label: string
    cookies: JsonValue
    streamingId: number | null
    _count: CookiesCountAggregateOutputType | null
    _avg: CookiesAvgAggregateOutputType | null
    _sum: CookiesSumAggregateOutputType | null
    _min: CookiesMinAggregateOutputType | null
    _max: CookiesMaxAggregateOutputType | null
  }

  type GetCookiesGroupByPayload<T extends CookiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CookiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CookiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CookiesGroupByOutputType[P]>
            : GetScalarType<T[P], CookiesGroupByOutputType[P]>
        }
      >
    >


  export type CookiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    cookies?: boolean
    streamingId?: boolean
    streaming?: boolean | Cookies$streamingArgs<ExtArgs>
  }, ExtArgs["result"]["cookies"]>

  export type CookiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    cookies?: boolean
    streamingId?: boolean
    streaming?: boolean | Cookies$streamingArgs<ExtArgs>
  }, ExtArgs["result"]["cookies"]>

  export type CookiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    cookies?: boolean
    streamingId?: boolean
    streaming?: boolean | Cookies$streamingArgs<ExtArgs>
  }, ExtArgs["result"]["cookies"]>

  export type CookiesSelectScalar = {
    id?: boolean
    label?: boolean
    cookies?: boolean
    streamingId?: boolean
  }

  export type CookiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "cookies" | "streamingId", ExtArgs["result"]["cookies"]>
  export type CookiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streaming?: boolean | Cookies$streamingArgs<ExtArgs>
  }
  export type CookiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streaming?: boolean | Cookies$streamingArgs<ExtArgs>
  }
  export type CookiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streaming?: boolean | Cookies$streamingArgs<ExtArgs>
  }

  export type $CookiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cookies"
    objects: {
      streaming: Prisma.$StreamingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      cookies: Prisma.JsonValue
      streamingId: number | null
    }, ExtArgs["result"]["cookies"]>
    composites: {}
  }

  type CookiesGetPayload<S extends boolean | null | undefined | CookiesDefaultArgs> = $Result.GetResult<Prisma.$CookiesPayload, S>

  type CookiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CookiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CookiesCountAggregateInputType | true
    }

  export interface CookiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cookies'], meta: { name: 'Cookies' } }
    /**
     * Find zero or one Cookies that matches the filter.
     * @param {CookiesFindUniqueArgs} args - Arguments to find a Cookies
     * @example
     * // Get one Cookies
     * const cookies = await prisma.cookies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CookiesFindUniqueArgs>(args: SelectSubset<T, CookiesFindUniqueArgs<ExtArgs>>): Prisma__CookiesClient<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cookies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CookiesFindUniqueOrThrowArgs} args - Arguments to find a Cookies
     * @example
     * // Get one Cookies
     * const cookies = await prisma.cookies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CookiesFindUniqueOrThrowArgs>(args: SelectSubset<T, CookiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CookiesClient<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cookies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookiesFindFirstArgs} args - Arguments to find a Cookies
     * @example
     * // Get one Cookies
     * const cookies = await prisma.cookies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CookiesFindFirstArgs>(args?: SelectSubset<T, CookiesFindFirstArgs<ExtArgs>>): Prisma__CookiesClient<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cookies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookiesFindFirstOrThrowArgs} args - Arguments to find a Cookies
     * @example
     * // Get one Cookies
     * const cookies = await prisma.cookies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CookiesFindFirstOrThrowArgs>(args?: SelectSubset<T, CookiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CookiesClient<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cookies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cookies
     * const cookies = await prisma.cookies.findMany()
     * 
     * // Get first 10 Cookies
     * const cookies = await prisma.cookies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cookiesWithIdOnly = await prisma.cookies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CookiesFindManyArgs>(args?: SelectSubset<T, CookiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cookies.
     * @param {CookiesCreateArgs} args - Arguments to create a Cookies.
     * @example
     * // Create one Cookies
     * const Cookies = await prisma.cookies.create({
     *   data: {
     *     // ... data to create a Cookies
     *   }
     * })
     * 
     */
    create<T extends CookiesCreateArgs>(args: SelectSubset<T, CookiesCreateArgs<ExtArgs>>): Prisma__CookiesClient<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cookies.
     * @param {CookiesCreateManyArgs} args - Arguments to create many Cookies.
     * @example
     * // Create many Cookies
     * const cookies = await prisma.cookies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CookiesCreateManyArgs>(args?: SelectSubset<T, CookiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cookies and returns the data saved in the database.
     * @param {CookiesCreateManyAndReturnArgs} args - Arguments to create many Cookies.
     * @example
     * // Create many Cookies
     * const cookies = await prisma.cookies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cookies and only return the `id`
     * const cookiesWithIdOnly = await prisma.cookies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CookiesCreateManyAndReturnArgs>(args?: SelectSubset<T, CookiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cookies.
     * @param {CookiesDeleteArgs} args - Arguments to delete one Cookies.
     * @example
     * // Delete one Cookies
     * const Cookies = await prisma.cookies.delete({
     *   where: {
     *     // ... filter to delete one Cookies
     *   }
     * })
     * 
     */
    delete<T extends CookiesDeleteArgs>(args: SelectSubset<T, CookiesDeleteArgs<ExtArgs>>): Prisma__CookiesClient<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cookies.
     * @param {CookiesUpdateArgs} args - Arguments to update one Cookies.
     * @example
     * // Update one Cookies
     * const cookies = await prisma.cookies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CookiesUpdateArgs>(args: SelectSubset<T, CookiesUpdateArgs<ExtArgs>>): Prisma__CookiesClient<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cookies.
     * @param {CookiesDeleteManyArgs} args - Arguments to filter Cookies to delete.
     * @example
     * // Delete a few Cookies
     * const { count } = await prisma.cookies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CookiesDeleteManyArgs>(args?: SelectSubset<T, CookiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cookies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cookies
     * const cookies = await prisma.cookies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CookiesUpdateManyArgs>(args: SelectSubset<T, CookiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cookies and returns the data updated in the database.
     * @param {CookiesUpdateManyAndReturnArgs} args - Arguments to update many Cookies.
     * @example
     * // Update many Cookies
     * const cookies = await prisma.cookies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cookies and only return the `id`
     * const cookiesWithIdOnly = await prisma.cookies.updateManyAndReturn({
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
    updateManyAndReturn<T extends CookiesUpdateManyAndReturnArgs>(args: SelectSubset<T, CookiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cookies.
     * @param {CookiesUpsertArgs} args - Arguments to update or create a Cookies.
     * @example
     * // Update or create a Cookies
     * const cookies = await prisma.cookies.upsert({
     *   create: {
     *     // ... data to create a Cookies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cookies we want to update
     *   }
     * })
     */
    upsert<T extends CookiesUpsertArgs>(args: SelectSubset<T, CookiesUpsertArgs<ExtArgs>>): Prisma__CookiesClient<$Result.GetResult<Prisma.$CookiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cookies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookiesCountArgs} args - Arguments to filter Cookies to count.
     * @example
     * // Count the number of Cookies
     * const count = await prisma.cookies.count({
     *   where: {
     *     // ... the filter for the Cookies we want to count
     *   }
     * })
    **/
    count<T extends CookiesCountArgs>(
      args?: Subset<T, CookiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CookiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cookies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CookiesAggregateArgs>(args: Subset<T, CookiesAggregateArgs>): Prisma.PrismaPromise<GetCookiesAggregateType<T>>

    /**
     * Group by Cookies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookiesGroupByArgs} args - Group by arguments.
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
      T extends CookiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CookiesGroupByArgs['orderBy'] }
        : { orderBy?: CookiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CookiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCookiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cookies model
   */
  readonly fields: CookiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cookies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CookiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streaming<T extends Cookies$streamingArgs<ExtArgs> = {}>(args?: Subset<T, Cookies$streamingArgs<ExtArgs>>): Prisma__StreamingClient<$Result.GetResult<Prisma.$StreamingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cookies model
   */
  interface CookiesFieldRefs {
    readonly id: FieldRef<"Cookies", 'Int'>
    readonly label: FieldRef<"Cookies", 'String'>
    readonly cookies: FieldRef<"Cookies", 'Json'>
    readonly streamingId: FieldRef<"Cookies", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cookies findUnique
   */
  export type CookiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    /**
     * Filter, which Cookies to fetch.
     */
    where: CookiesWhereUniqueInput
  }

  /**
   * Cookies findUniqueOrThrow
   */
  export type CookiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    /**
     * Filter, which Cookies to fetch.
     */
    where: CookiesWhereUniqueInput
  }

  /**
   * Cookies findFirst
   */
  export type CookiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    /**
     * Filter, which Cookies to fetch.
     */
    where?: CookiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cookies to fetch.
     */
    orderBy?: CookiesOrderByWithRelationInput | CookiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cookies.
     */
    cursor?: CookiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cookies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cookies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cookies.
     */
    distinct?: CookiesScalarFieldEnum | CookiesScalarFieldEnum[]
  }

  /**
   * Cookies findFirstOrThrow
   */
  export type CookiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    /**
     * Filter, which Cookies to fetch.
     */
    where?: CookiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cookies to fetch.
     */
    orderBy?: CookiesOrderByWithRelationInput | CookiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cookies.
     */
    cursor?: CookiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cookies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cookies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cookies.
     */
    distinct?: CookiesScalarFieldEnum | CookiesScalarFieldEnum[]
  }

  /**
   * Cookies findMany
   */
  export type CookiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    /**
     * Filter, which Cookies to fetch.
     */
    where?: CookiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cookies to fetch.
     */
    orderBy?: CookiesOrderByWithRelationInput | CookiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cookies.
     */
    cursor?: CookiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cookies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cookies.
     */
    skip?: number
    distinct?: CookiesScalarFieldEnum | CookiesScalarFieldEnum[]
  }

  /**
   * Cookies create
   */
  export type CookiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Cookies.
     */
    data: XOR<CookiesCreateInput, CookiesUncheckedCreateInput>
  }

  /**
   * Cookies createMany
   */
  export type CookiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cookies.
     */
    data: CookiesCreateManyInput | CookiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cookies createManyAndReturn
   */
  export type CookiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * The data used to create many Cookies.
     */
    data: CookiesCreateManyInput | CookiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cookies update
   */
  export type CookiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Cookies.
     */
    data: XOR<CookiesUpdateInput, CookiesUncheckedUpdateInput>
    /**
     * Choose, which Cookies to update.
     */
    where: CookiesWhereUniqueInput
  }

  /**
   * Cookies updateMany
   */
  export type CookiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cookies.
     */
    data: XOR<CookiesUpdateManyMutationInput, CookiesUncheckedUpdateManyInput>
    /**
     * Filter which Cookies to update
     */
    where?: CookiesWhereInput
    /**
     * Limit how many Cookies to update.
     */
    limit?: number
  }

  /**
   * Cookies updateManyAndReturn
   */
  export type CookiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * The data used to update Cookies.
     */
    data: XOR<CookiesUpdateManyMutationInput, CookiesUncheckedUpdateManyInput>
    /**
     * Filter which Cookies to update
     */
    where?: CookiesWhereInput
    /**
     * Limit how many Cookies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cookies upsert
   */
  export type CookiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Cookies to update in case it exists.
     */
    where: CookiesWhereUniqueInput
    /**
     * In case the Cookies found by the `where` argument doesn't exist, create a new Cookies with this data.
     */
    create: XOR<CookiesCreateInput, CookiesUncheckedCreateInput>
    /**
     * In case the Cookies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CookiesUpdateInput, CookiesUncheckedUpdateInput>
  }

  /**
   * Cookies delete
   */
  export type CookiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
    /**
     * Filter which Cookies to delete.
     */
    where: CookiesWhereUniqueInput
  }

  /**
   * Cookies deleteMany
   */
  export type CookiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cookies to delete
     */
    where?: CookiesWhereInput
    /**
     * Limit how many Cookies to delete.
     */
    limit?: number
  }

  /**
   * Cookies.streaming
   */
  export type Cookies$streamingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streaming
     */
    select?: StreamingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streaming
     */
    omit?: StreamingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingInclude<ExtArgs> | null
    where?: StreamingWhereInput
  }

  /**
   * Cookies without action
   */
  export type CookiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookies
     */
    select?: CookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cookies
     */
    omit?: CookiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookiesInclude<ExtArgs> | null
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


  export const StreamingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain'
  };

  export type StreamingScalarFieldEnum = (typeof StreamingScalarFieldEnum)[keyof typeof StreamingScalarFieldEnum]


  export const CookiesScalarFieldEnum: {
    id: 'id',
    label: 'label',
    cookies: 'cookies',
    streamingId: 'streamingId'
  };

  export type CookiesScalarFieldEnum = (typeof CookiesScalarFieldEnum)[keyof typeof CookiesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type StreamingWhereInput = {
    AND?: StreamingWhereInput | StreamingWhereInput[]
    OR?: StreamingWhereInput[]
    NOT?: StreamingWhereInput | StreamingWhereInput[]
    id?: IntFilter<"Streaming"> | number
    name?: StringFilter<"Streaming"> | string
    domain?: StringFilter<"Streaming"> | string
    cookies?: CookiesListRelationFilter
  }

  export type StreamingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    cookies?: CookiesOrderByRelationAggregateInput
  }

  export type StreamingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StreamingWhereInput | StreamingWhereInput[]
    OR?: StreamingWhereInput[]
    NOT?: StreamingWhereInput | StreamingWhereInput[]
    name?: StringFilter<"Streaming"> | string
    domain?: StringFilter<"Streaming"> | string
    cookies?: CookiesListRelationFilter
  }, "id">

  export type StreamingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    _count?: StreamingCountOrderByAggregateInput
    _avg?: StreamingAvgOrderByAggregateInput
    _max?: StreamingMaxOrderByAggregateInput
    _min?: StreamingMinOrderByAggregateInput
    _sum?: StreamingSumOrderByAggregateInput
  }

  export type StreamingScalarWhereWithAggregatesInput = {
    AND?: StreamingScalarWhereWithAggregatesInput | StreamingScalarWhereWithAggregatesInput[]
    OR?: StreamingScalarWhereWithAggregatesInput[]
    NOT?: StreamingScalarWhereWithAggregatesInput | StreamingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Streaming"> | number
    name?: StringWithAggregatesFilter<"Streaming"> | string
    domain?: StringWithAggregatesFilter<"Streaming"> | string
  }

  export type CookiesWhereInput = {
    AND?: CookiesWhereInput | CookiesWhereInput[]
    OR?: CookiesWhereInput[]
    NOT?: CookiesWhereInput | CookiesWhereInput[]
    id?: IntFilter<"Cookies"> | number
    label?: StringFilter<"Cookies"> | string
    cookies?: JsonFilter<"Cookies">
    streamingId?: IntNullableFilter<"Cookies"> | number | null
    streaming?: XOR<StreamingNullableScalarRelationFilter, StreamingWhereInput> | null
  }

  export type CookiesOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    cookies?: SortOrder
    streamingId?: SortOrderInput | SortOrder
    streaming?: StreamingOrderByWithRelationInput
  }

  export type CookiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CookiesWhereInput | CookiesWhereInput[]
    OR?: CookiesWhereInput[]
    NOT?: CookiesWhereInput | CookiesWhereInput[]
    label?: StringFilter<"Cookies"> | string
    cookies?: JsonFilter<"Cookies">
    streamingId?: IntNullableFilter<"Cookies"> | number | null
    streaming?: XOR<StreamingNullableScalarRelationFilter, StreamingWhereInput> | null
  }, "id">

  export type CookiesOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    cookies?: SortOrder
    streamingId?: SortOrderInput | SortOrder
    _count?: CookiesCountOrderByAggregateInput
    _avg?: CookiesAvgOrderByAggregateInput
    _max?: CookiesMaxOrderByAggregateInput
    _min?: CookiesMinOrderByAggregateInput
    _sum?: CookiesSumOrderByAggregateInput
  }

  export type CookiesScalarWhereWithAggregatesInput = {
    AND?: CookiesScalarWhereWithAggregatesInput | CookiesScalarWhereWithAggregatesInput[]
    OR?: CookiesScalarWhereWithAggregatesInput[]
    NOT?: CookiesScalarWhereWithAggregatesInput | CookiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cookies"> | number
    label?: StringWithAggregatesFilter<"Cookies"> | string
    cookies?: JsonWithAggregatesFilter<"Cookies">
    streamingId?: IntNullableWithAggregatesFilter<"Cookies"> | number | null
  }

  export type StreamingCreateInput = {
    name: string
    domain: string
    cookies?: CookiesCreateNestedManyWithoutStreamingInput
  }

  export type StreamingUncheckedCreateInput = {
    id?: number
    name: string
    domain: string
    cookies?: CookiesUncheckedCreateNestedManyWithoutStreamingInput
  }

  export type StreamingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    cookies?: CookiesUpdateManyWithoutStreamingNestedInput
  }

  export type StreamingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    cookies?: CookiesUncheckedUpdateManyWithoutStreamingNestedInput
  }

  export type StreamingCreateManyInput = {
    id?: number
    name: string
    domain: string
  }

  export type StreamingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
  }

  export type StreamingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
  }

  export type CookiesCreateInput = {
    label: string
    cookies: JsonNullValueInput | InputJsonValue
    streaming?: StreamingCreateNestedOneWithoutCookiesInput
  }

  export type CookiesUncheckedCreateInput = {
    id?: number
    label: string
    cookies: JsonNullValueInput | InputJsonValue
    streamingId?: number | null
  }

  export type CookiesUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
    streaming?: StreamingUpdateOneWithoutCookiesNestedInput
  }

  export type CookiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
    streamingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CookiesCreateManyInput = {
    id?: number
    label: string
    cookies: JsonNullValueInput | InputJsonValue
    streamingId?: number | null
  }

  export type CookiesUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
  }

  export type CookiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
    streamingId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type CookiesListRelationFilter = {
    every?: CookiesWhereInput
    some?: CookiesWhereInput
    none?: CookiesWhereInput
  }

  export type CookiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
  }

  export type StreamingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StreamingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
  }

  export type StreamingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
  }

  export type StreamingSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StreamingNullableScalarRelationFilter = {
    is?: StreamingWhereInput | null
    isNot?: StreamingWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CookiesCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    cookies?: SortOrder
    streamingId?: SortOrder
  }

  export type CookiesAvgOrderByAggregateInput = {
    id?: SortOrder
    streamingId?: SortOrder
  }

  export type CookiesMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    streamingId?: SortOrder
  }

  export type CookiesMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    streamingId?: SortOrder
  }

  export type CookiesSumOrderByAggregateInput = {
    id?: SortOrder
    streamingId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CookiesCreateNestedManyWithoutStreamingInput = {
    create?: XOR<CookiesCreateWithoutStreamingInput, CookiesUncheckedCreateWithoutStreamingInput> | CookiesCreateWithoutStreamingInput[] | CookiesUncheckedCreateWithoutStreamingInput[]
    connectOrCreate?: CookiesCreateOrConnectWithoutStreamingInput | CookiesCreateOrConnectWithoutStreamingInput[]
    createMany?: CookiesCreateManyStreamingInputEnvelope
    connect?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
  }

  export type CookiesUncheckedCreateNestedManyWithoutStreamingInput = {
    create?: XOR<CookiesCreateWithoutStreamingInput, CookiesUncheckedCreateWithoutStreamingInput> | CookiesCreateWithoutStreamingInput[] | CookiesUncheckedCreateWithoutStreamingInput[]
    connectOrCreate?: CookiesCreateOrConnectWithoutStreamingInput | CookiesCreateOrConnectWithoutStreamingInput[]
    createMany?: CookiesCreateManyStreamingInputEnvelope
    connect?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CookiesUpdateManyWithoutStreamingNestedInput = {
    create?: XOR<CookiesCreateWithoutStreamingInput, CookiesUncheckedCreateWithoutStreamingInput> | CookiesCreateWithoutStreamingInput[] | CookiesUncheckedCreateWithoutStreamingInput[]
    connectOrCreate?: CookiesCreateOrConnectWithoutStreamingInput | CookiesCreateOrConnectWithoutStreamingInput[]
    upsert?: CookiesUpsertWithWhereUniqueWithoutStreamingInput | CookiesUpsertWithWhereUniqueWithoutStreamingInput[]
    createMany?: CookiesCreateManyStreamingInputEnvelope
    set?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
    disconnect?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
    delete?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
    connect?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
    update?: CookiesUpdateWithWhereUniqueWithoutStreamingInput | CookiesUpdateWithWhereUniqueWithoutStreamingInput[]
    updateMany?: CookiesUpdateManyWithWhereWithoutStreamingInput | CookiesUpdateManyWithWhereWithoutStreamingInput[]
    deleteMany?: CookiesScalarWhereInput | CookiesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CookiesUncheckedUpdateManyWithoutStreamingNestedInput = {
    create?: XOR<CookiesCreateWithoutStreamingInput, CookiesUncheckedCreateWithoutStreamingInput> | CookiesCreateWithoutStreamingInput[] | CookiesUncheckedCreateWithoutStreamingInput[]
    connectOrCreate?: CookiesCreateOrConnectWithoutStreamingInput | CookiesCreateOrConnectWithoutStreamingInput[]
    upsert?: CookiesUpsertWithWhereUniqueWithoutStreamingInput | CookiesUpsertWithWhereUniqueWithoutStreamingInput[]
    createMany?: CookiesCreateManyStreamingInputEnvelope
    set?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
    disconnect?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
    delete?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
    connect?: CookiesWhereUniqueInput | CookiesWhereUniqueInput[]
    update?: CookiesUpdateWithWhereUniqueWithoutStreamingInput | CookiesUpdateWithWhereUniqueWithoutStreamingInput[]
    updateMany?: CookiesUpdateManyWithWhereWithoutStreamingInput | CookiesUpdateManyWithWhereWithoutStreamingInput[]
    deleteMany?: CookiesScalarWhereInput | CookiesScalarWhereInput[]
  }

  export type StreamingCreateNestedOneWithoutCookiesInput = {
    create?: XOR<StreamingCreateWithoutCookiesInput, StreamingUncheckedCreateWithoutCookiesInput>
    connectOrCreate?: StreamingCreateOrConnectWithoutCookiesInput
    connect?: StreamingWhereUniqueInput
  }

  export type StreamingUpdateOneWithoutCookiesNestedInput = {
    create?: XOR<StreamingCreateWithoutCookiesInput, StreamingUncheckedCreateWithoutCookiesInput>
    connectOrCreate?: StreamingCreateOrConnectWithoutCookiesInput
    upsert?: StreamingUpsertWithoutCookiesInput
    disconnect?: StreamingWhereInput | boolean
    delete?: StreamingWhereInput | boolean
    connect?: StreamingWhereUniqueInput
    update?: XOR<XOR<StreamingUpdateToOneWithWhereWithoutCookiesInput, StreamingUpdateWithoutCookiesInput>, StreamingUncheckedUpdateWithoutCookiesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CookiesCreateWithoutStreamingInput = {
    label: string
    cookies: JsonNullValueInput | InputJsonValue
  }

  export type CookiesUncheckedCreateWithoutStreamingInput = {
    id?: number
    label: string
    cookies: JsonNullValueInput | InputJsonValue
  }

  export type CookiesCreateOrConnectWithoutStreamingInput = {
    where: CookiesWhereUniqueInput
    create: XOR<CookiesCreateWithoutStreamingInput, CookiesUncheckedCreateWithoutStreamingInput>
  }

  export type CookiesCreateManyStreamingInputEnvelope = {
    data: CookiesCreateManyStreamingInput | CookiesCreateManyStreamingInput[]
    skipDuplicates?: boolean
  }

  export type CookiesUpsertWithWhereUniqueWithoutStreamingInput = {
    where: CookiesWhereUniqueInput
    update: XOR<CookiesUpdateWithoutStreamingInput, CookiesUncheckedUpdateWithoutStreamingInput>
    create: XOR<CookiesCreateWithoutStreamingInput, CookiesUncheckedCreateWithoutStreamingInput>
  }

  export type CookiesUpdateWithWhereUniqueWithoutStreamingInput = {
    where: CookiesWhereUniqueInput
    data: XOR<CookiesUpdateWithoutStreamingInput, CookiesUncheckedUpdateWithoutStreamingInput>
  }

  export type CookiesUpdateManyWithWhereWithoutStreamingInput = {
    where: CookiesScalarWhereInput
    data: XOR<CookiesUpdateManyMutationInput, CookiesUncheckedUpdateManyWithoutStreamingInput>
  }

  export type CookiesScalarWhereInput = {
    AND?: CookiesScalarWhereInput | CookiesScalarWhereInput[]
    OR?: CookiesScalarWhereInput[]
    NOT?: CookiesScalarWhereInput | CookiesScalarWhereInput[]
    id?: IntFilter<"Cookies"> | number
    label?: StringFilter<"Cookies"> | string
    cookies?: JsonFilter<"Cookies">
    streamingId?: IntNullableFilter<"Cookies"> | number | null
  }

  export type StreamingCreateWithoutCookiesInput = {
    name: string
    domain: string
  }

  export type StreamingUncheckedCreateWithoutCookiesInput = {
    id?: number
    name: string
    domain: string
  }

  export type StreamingCreateOrConnectWithoutCookiesInput = {
    where: StreamingWhereUniqueInput
    create: XOR<StreamingCreateWithoutCookiesInput, StreamingUncheckedCreateWithoutCookiesInput>
  }

  export type StreamingUpsertWithoutCookiesInput = {
    update: XOR<StreamingUpdateWithoutCookiesInput, StreamingUncheckedUpdateWithoutCookiesInput>
    create: XOR<StreamingCreateWithoutCookiesInput, StreamingUncheckedCreateWithoutCookiesInput>
    where?: StreamingWhereInput
  }

  export type StreamingUpdateToOneWithWhereWithoutCookiesInput = {
    where?: StreamingWhereInput
    data: XOR<StreamingUpdateWithoutCookiesInput, StreamingUncheckedUpdateWithoutCookiesInput>
  }

  export type StreamingUpdateWithoutCookiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
  }

  export type StreamingUncheckedUpdateWithoutCookiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
  }

  export type CookiesCreateManyStreamingInput = {
    id?: number
    label: string
    cookies: JsonNullValueInput | InputJsonValue
  }

  export type CookiesUpdateWithoutStreamingInput = {
    label?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
  }

  export type CookiesUncheckedUpdateWithoutStreamingInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
  }

  export type CookiesUncheckedUpdateManyWithoutStreamingInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
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