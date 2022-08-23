import contentV10  from './manifests/v1.0.html?raw'
import contentV11  from './manifests/v1.1.html?raw'

export type Manifest = {
    version: string
    content: string
}

/**
 * Note: manifests must be sorted descending to keep the functionality.
 */

const manifests = <Manifest[]>[
    {
        version: 'v1.1',
        content: contentV11,
    },
    {
        version: 'v1.0',
        content: contentV10,
    }
]

export default manifests
