import React, { useState } from 'react'
import './LandingInstagram.css'
import { Client, GetPageInfoRequest, GetPageInfoResponse, GetPageMediaRequest, GetPageMediaResponse, RequestConfig } from 'instagram-graph-api';

const LandingInstagram = () => {
    const longLivedAccessToken = process.env.REACT_APP_LL_TOKEN!;
    const pageId = process.env.REACT_APP_PAGE_ID!;
    const [limit, setLimit] = useState(4);
        const client: Client = new Client(longLivedAccessToken, pageId);
    const pageInfoRequest: GetPageInfoRequest = client.newGetPageInfoRequest();
    const pageMediaRequest: GetPageMediaRequest = client.newGetPageMediaRequest().withLimit(limit);

    console.log(pageInfoRequest);
    console.log(pageMediaRequest);
    pageInfoRequest.execute().then((response: GetPageInfoResponse) => {
        console.log(`The page ${response.getName()} has ${response.getFollowers()} followers.`);
    });

    pageMediaRequest.execute().then((response: GetPageMediaResponse) => {
        console.log(response)
    });


    return (
        <>

        </>
    )
}

export default LandingInstagram
