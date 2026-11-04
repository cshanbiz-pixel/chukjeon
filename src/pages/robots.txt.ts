import type { APIRoute } from 'astro';
import { siteConfig } from '../lib/site-config';

export const prerender = true;
export const GET: APIRoute = () => new Response(
  siteConfig.sampleMode ? 'User-agent: *\nDisallow: /\n' : 'User-agent: *\nAllow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
