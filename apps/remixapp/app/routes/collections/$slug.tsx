import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPrivateTokenHeaders, getStorefrontApiUrl } from "~/lib/shopifyClient";

export const loader: LoaderFunction = async ({ params }) => {
    const response = await fetch(getStorefrontApiUrl(), {
        headers: getPrivateTokenHeaders(),
        method: 'POST',
        body: JSON.stringify({
            query:`
                query CollectionDetails($handle: String!) {
                    collection(handle: $handle) {
                        id
                        title
                        description
                        seo {
                            description
                            title
                        }
                        image {
                            id
                            url
                            width
                            height
                            altText
                        }
                        products(first: 8) {
                            nodes {
                                id
                                title
                                publishedAt
                                handle
                                variants(first: 1) {
                                    nodes {
                                        id
                                        image {
                                            url
                                            altText
                                            width
                                            height
                                        }
                                        priceV2 {
                                            amount
                                            currencyCode
                                        }
                                        compareAtPriceV2 {
                                            amount
                                            currencyCode
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            variables: {
                handle: params.slug
            }
        }),
    });


    if (!response.ok) {
        // 400 or 500 level error
        throw new Response(response.statusText, {
            status: response.status,
            statusText: response.statusText
        })
    }

    const shopData = await response.json();

    return json({
        shopData
    });
};

export default function Collection() {
    const {shopData} = useLoaderData<typeof loader>();
    const products = shopData?.data?.collection?.products?.nodes;

    return (
        <div>
            <h1>Collection</h1>
            {products?.length > 0 ? (
                <>
                    {products.map((product: any) => (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                        </div>
                    ))}
                </>
            ) : null}
        </div>
    );
}
