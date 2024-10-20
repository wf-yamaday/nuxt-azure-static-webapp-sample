import { getAzureUpdates } from '~/server/service/azure';

export default defineEventHandler(async (event) => {
  const res = await fetch('https://aztty.azurewebsites.net/rss/updates', {
    method: 'GET',
  });

  if (!res.ok) {
    throw createError({
      status: res.status,
      message: 'Failed to fetch azure updates',
    });
  }

  const data = await getAzureUpdates();

  return data;
});
