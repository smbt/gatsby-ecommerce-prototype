// Node modules
import React, { useEffect, useState } from 'react'
import { Box, Grid, CircularProgress, Input } from '@material-ui/core'

// Components
import Layout from 'components/Layout'
import MoviePreview from 'components/MoviePreview';

// Types
import { Movie } from 'types/Movie'

export default () => {

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

        </Layout>
    )
}
