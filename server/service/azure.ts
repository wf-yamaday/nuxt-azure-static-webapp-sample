import { DOMParser } from '@xmldom/xmldom';
import { AzureUpdate } from '~/types';

export async function getAzureUpdates(): Promise<AzureUpdate[]> {
  const res = await fetch('https://aztty.azurewebsites.net/rss/updates', {
    method: 'GET',
  });

  if (!res.ok) {
    throw createError({
      status: res.status,
      message: 'Failed to fetch azure updates',
    });
  }

  const xmlText = await res.text();

  const dom = new DOMParser().parseFromString(xmlText, 'text/xml');

  const items = dom.getElementsByTagName('item');

  const results: AzureUpdate[] = [];
  for (let i = 0; i < items.length; i++) {
    const link = items[i].getElementsByTagName('link')[0].textContent || '';
    const category =
      items[i].getElementsByTagName('category')[0].textContent || '';
    const title = items[i].getElementsByTagName('title')[0].textContent || '';
    const description =
      items[i].getElementsByTagName('description')[0].textContent || '';
    const pubDate =
      items[i].getElementsByTagName('pubDate')[0].textContent || '';
    results.push({ link, category, title, description, pubDate });
  }

  return results;
}
