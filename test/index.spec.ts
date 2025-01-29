// test/index.spec.ts
import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';

describe('Hello World worker', () => {
  it('responds with Hello World! (integration style)', async () => {
    const response = await SELF.fetch('https://example.com');
    expect(await response.text()).toMatchInlineSnapshot(`"Hello World!"`);
  });
});
