// Node modules
import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Components
import Layout from 'components/Layout'
import { Box, Grid, CircularProgress } from '@material-ui/core'

// Types
import { Tweet } from 'types/Tweet'

type Props = {
    data: {
        allTwitterStatusesUserTimelineAllTweets: any
    }
}
type TweetPreviewProps = {
    tweet: Tweet
}


export default (props: Props) => {
    const [tweetsDynamic, setTweetsDynamic] = useState<{}[] | null>(null)
    const tweetsStatic = props.data.allTwitterStatusesUserTimelineAllTweets.edges

    useEffect(() => {
        const url = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=EcommerceGatsby'
        const options = {
            method: 'get',
            mode: 'cors',
            credentials: 'include',
            headers: new Headers({
                'Authorization': 'Bearer ' + process.env.GATSBY_TWITTER_BEARER_TOKEN,
            }),
        }
        fetch(url, options).then(res => console.log(res))





        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=EcommerceGatsby");
        xhr.setRequestHeader("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAKzbBgEAAAAAGzC0AQQGOGY33EnnxGDUJuWKkRU%3DY93iRQzS63qRehUlRBkbdBkVxicJ2WUPK1essSJ7fNcz6Xywpa");
        xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.20.1");
        xhr.setRequestHeader("Accept", "*/*");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "b13b3d23-d6b5-459c-8e5b-73fce33f96cc,ed9f672e-8a9e-439a-9689-c620d6941b36");
        xhr.setRequestHeader("Host", "api.twitter.com");
        xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
        xhr.setRequestHeader("Cookie", "personalization_id=\"v1_9prRRzRXbCx0nSXONGdNWg==\"; guest_id=v1%3A157513637599659119");
        xhr.setRequestHeader("Connection", "keep-alive");
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(data);





        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => {
        //         setTweetsDynamic(data)
        //     })
    }, [])

    const TweetPreview = (props: TweetPreviewProps) => {
        const tweet = props.tweet
        return <div
            key={tweet.id}
            style={{ marginBottom: 20, padding: 10, border: '1px solid #aaa' }}
        >
            <div>{tweet.full_text}</div>
            <div style={{ color: '#aaa', fontSize: 12 }}>({tweet.created_at})</div>
        </div>
    }
    return (
        <Layout>
            <h1>About our Shop</h1>
            <h2>Our Story</h2>
            <Box style={{ display: 'flex', textAlign: 'justify' }}>
                <Box style={{ padding: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    corporis cupiditate dignissimos, et illum laborum molestias neque
                    nesciunt nihil numquam odio odit omnis quas quis, repellat vel
                    veritatis! Consectetur, cumque eligendi expedita facilis iusto
                    labore laboriosam nihil nobis perferendis porro possimus qui quia,
                    tempora temporibus voluptas?
                </Box>
                <Box style={{ padding: 10 }}>
                    Aut eaque enim exercitationem explicabo
                    impedit rerum ullam veniam. Amet cupiditate delectus distinctio
                    doloribus est exercitationem hic incidunt magni maxime nesciunt,
                    optio praesentium quam quis reprehenderit saepe, sequi similique
                    temporibus ut veniam voluptatum! Aliquid amet at dignissimos dolore
                    dolorum ex facere illo itaque magnam, maiores minus officia
                    provident quaerat repellat reprehenderit sapiente sequi sit!
                    Aut eaque enim exercitationem explicabo
                    impedit rerum ullam veniam. Amet cupiditate delectus distinctio
                    doloribus est exercitationem hic incidunt magni maxime nesciunt,
                    optio praesentium quam quis reprehenderit saepe, sequi similique
                    temporibus ut veniam voluptatum! Aliquid amet at dignissimos dolore
                    dolorum ex facere illo itaque magnam, maiores minus officia
                    provident quaerat repellat reprehenderit sapiente sequi sit!
                </Box>
            </Box>
            <br/>
            <br/>
            <Box>
                <h2>See our lates tweets here</h2>
                <Grid container spacing={6} style={{ justifyContent: 'center' }}>
                    <Grid item xs={10} sm={5}>
                        <h3>Fetched during build time</h3>
                        <div>
                            {
                                tweetsStatic ?
                                    tweetsStatic.map((tweetNode: any) => {
                                        const tweet: Tweet = tweetNode.node
                                        return <TweetPreview tweet={tweet}/>
                                    })
                                    : null
                            }
                        </div>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <h3>
                            Fetched during run time
                        </h3>
                        {tweetsDynamic ? (
                            tweetsDynamic.map((tweet: any) => (
                                <div
                                    key={tweet.id}
                                    style={{ marginBottom: 20 }}
                                >
                                    <div>{tweet.name}</div>
                                </div>
                            ))
                        ) : (
                            <CircularProgress style={{ margin: 'auto' }}/>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}


export const data = graphql`
{
  allTwitterStatusesUserTimelineAllTweets {
    edges {
      node {
        id
        full_text
        created_at
      }
    }
  }
}
`

