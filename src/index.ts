export default {
  async fetch(request, env, ctx): Promise<Response> {
    return new Response('Hello World!');
  },
} as ExportedHandler<Env>;
