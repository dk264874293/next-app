import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    logging: {
        fetches: {
          fullUrl: true
        }
    },
    // output: 'export',
    async redirects() {
        return [
            {
                source: '/index',
                destination: '/',
                permanent: true,
            },
            {
                source: '/blog/yayu',
                destination: '/blog/yayu_redirects',
                permanent: true,
            },
        ]
    },
    async rewrites(){
        return {
            beforeFiles: [
                {
                  source: '/blog/yayu',
                  destination: '/blog/yayu_beforeFiles',
                },
              ],
              afterFiles: [
                {
                  source: '/blog/yayu',
                  destination: '/blog/yayu_afterFiles',
                },
              ],
              fallback: [
                {
                  source: '/blog/yayu',
                  destination: `/blog/yayu_fallback`,
                },
              ],
        }
    }
};

export default withMDX(nextConfig);