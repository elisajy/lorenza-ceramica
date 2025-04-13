import { useEffect } from 'react';

const FacebookTokenFetcher = () => {
    let userToken: any;
    let accessToken: any;
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/get-tokens`
        ).then((response) => response.json())
            .then((data) => {
                userToken = data.find((item: any) => item.name === 'USER_TOKEN');
                accessToken = data.find((item: any) => item.name === 'INSTAGRAM_TOKEN');

                if (!!userToken) {
                    const lastRun = new Date(userToken.updatedAt); // replace with stored value
                    const now = new Date();
                    const diffInDays = (now.getTime() - lastRun.getTime()) / (1000 * 60 * 60 * 24);

                    console.log('lastTokenUpdate', diffInDays);

                    if (diffInDays > 1) {
                        const fetchFacebookToken = async () => {
                            const url = `https://graph.facebook.com/v21.0/oauth/access_token` +
                                `?grant_type=fb_exchange_token` +
                                `&client_id=${process.env.REACT_APP_IG_APP_ID}` +
                                `&client_secret=${process.env.REACT_APP_IG_SECRET_ID}` +
                                `&fb_exchange_token=${userToken.value}` +
                                `&access_token=${accessToken.value}`;

                            try {
                                const response = await fetch(url);

                                if (!response.ok) {
                                    throw new Error(`HTTP error! Status: ${response.status}`);
                                }

                                const data = await response.json();

                                fetch(`${process.env.REACT_APP_API_URL}/update-token`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        'name': 'USER_TOKEN',
                                        'value': data.access_token,
                                    })
                                })

                                fetch(`${process.env.REACT_APP_API_URL}/update-token`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        'name': 'INSTAGRAM_TOKEN',
                                        'value': data.access_token,
                                    })
                                })

                            } catch (error) {
                                console.error('Error fetching Facebook token:', error);
                            }
                        };

                        fetchFacebookToken();
                    }
                }
            }
            );
    }, []);
    return null
};

export default FacebookTokenFetcher;
