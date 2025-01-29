import { PhonePeDataSource } from './datasources';
import { YogaSchemaDefinition, createYoga } from 'graphql-yoga';
import { drizzle } from 'drizzle-orm/d1';
import { schema } from './schemas';

export interface Env {
  DB: D1Database;
}

export interface YogaInitialContext {
  datasources: {
    phonePeDataSource: PhonePeDataSource;
  };
}

const GRAPHQL_PATH = '/graphql';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const db = drizzle(env.DB);
    if (url.pathname === '/graphql') {
      const yoga = createYoga({
        schema: schema as YogaSchemaDefinition<object, YogaInitialContext>,
        landingPage: false,
        graphqlEndpoint: GRAPHQL_PATH,
        context: () => {
          return {
            datasources: {
              phonePeDataSource: new PhonePeDataSource({ db }),
            },
          };
        },
      });
      return yoga.fetch(request);
    }
    return new Response('Not found', { status: 404 });
  },
} as ExportedHandler<Env>;
