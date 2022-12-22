import { createStorefrontClient } from '@shopify/hydrogen-react';
import invariant from 'tiny-invariant';

invariant(process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN, `SHOPIFY_STOREFRONT_ACCESS_TOKEN must be set`);
invariant(process.env.SHOPIFY_STORE, `SHOPIFY_STORE must be set`);

const client = createStorefrontClient({
    privateStorefrontToken: process.env.SHOPIFY_DELEGATE_ACCESS_TOKEN!,
    storeDomain: process.env.SHOPIFY_STORE!,
    storefrontApiVersion: '2022-10',
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;