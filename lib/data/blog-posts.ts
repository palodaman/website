import { BlogPost } from '@/lib/types/blog';

export const posts: BlogPost[] = [
  {
    title: 'Setting up a Custom Domain for my Netlify Website',
    excerpt: 'My journey to setting up a custom domain for my personal website.',
    date: '2024-12-06',
    tags: ['Netlify', 'Porkbun', 'Domains'],
    slug: 'setting-up-custom-domain',
    images: [
    ],
    content: ``
  },
  {
    title: 'Debloating My CAT S22 Flip Phone',
    excerpt: 'Debloating and customizing my CAT S22 Flip Phone',
    date: '2024-12-31',
    tags: ['Dumb Phone', 'CAT', 'UAD'],
    slug: 'debloating-my-flip-phone',
    images: [
      {
        url: 'https://res-console.cloudinary.com/dgxbkvjdh/thumbnails/v1/image/upload/v1735795997/ZmxpcF9waG9uZV9lcXdtZHI=/template_primary/Y19jcm9wLGFyXzE6MQ==',
        alt: 'DNS configuration screenshot',
        caption: 'Configuring DNS records in Netlify'
      }
    ],
    content: ``
  }
];