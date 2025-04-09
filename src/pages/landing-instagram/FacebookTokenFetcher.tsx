import { useEffect } from 'react';

const FacebookTokenFetcher = () => {
    let userToken: any;
    let accessToken: any;
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}/get-tokens`
    //     ).then((response) => response.json())
    //         .then((data) => {
    //             userToken = data.find((item: any) => item.name === 'USER_TOKEN');
    //             accessToken = data.find((item: any) => item.name === 'INSTAGRAM_TOKEN');

    //             if (!!userToken) {
    //                 const lastRun = new Date(userToken.updatedAt); // replace with stored value
    //                 const now = new Date();
    //                 const diffInDays = (now.getTime() - lastRun.getTime()) / (1000 * 60 * 60 * 24);

    //                 const patchToken = async () => {

    //                 }

    //                 const fetchFacebookToken = async () => {
    //                     const url = `https://graph.facebook.com/v21.0/oauth/access_token` +
    //                         `?grant_type=fb_exchange_token` +
    //                         `&client_id=${process.env.REACT_APP_IG_APP_ID}` +
    //                         `&client_secret=${process.env.REACT_APP_IG_SECRET_ID}` +
    //                         `&fb_exchange_token=${userToken.value}` +
    //                         `&access_token=${accessToken.value}`;

    //                         console.log(url);

    //                     try {
    //                         const response = await fetch(url, {
    //                             method: 'GET',
    //                             headers: {
    //                                 'Content-Type': 'application/json'
    //                             }
    //                         });

    //                         if (!response.ok) {
    //                             throw new Error(`HTTP error! Status: ${response.status}`);
    //                         }

    //                         const data = await response.json();
    //                         console.log('Facebook token response:', data);
    //                     } catch (error) {
    //                         console.error('Error fetching Facebook token:', error);
    //                     }
    //                 };

    //                 fetchFacebookToken();
    //             }


    //         }
    //         );
    // }, []);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/update-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'name': 'USER_TOKEN',
                'value': 'EAALZBZCe900kcBO2XDjME8h13FDjHrstjP9INDIxBHYbTaNbWUZAXGGZCRCZCTDd3QENderUjAM7QXm8bNJ6ME7XVpkwgOFEZAGUku03qvZCAE5vWFNbZC4onIADXnLziPqvGELE2ZCx3DPqXJ6eIumDV0upbfVGUWKLCq5EpNpNnZCD03bpSxQj7yrnPm35lfVmYlwbo0NwZDZD'
            })
        }).then(response => console.log(response)).then((data) => console.log(data))
    }, []);
    return null
};

export default FacebookTokenFetcher;
