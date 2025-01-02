import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const posts = [
  {
    title: 'Setting up a Custom Domain for my Netlify Website',
    excerpt: 'My journey to setting up a custom domain for my personal website.',
    date: '2024-12-06',
    tags: ['Netlify', 'Porkbun', 'Domains'],
    slug: 'setting-up-custom-domain',
    content: `
Hey there,

I’m super excited to share my first blog post with you all! The idea of maintaining a blog has been on my mind for a while now, and I’m looking forward to using this space to communicate thoughts that are meaningful, technical, fun, or just plain random. To kick things off, I thought it would be fitting to talk about what I went through to get this website up and running for you all.

While developing my website, I had decided early on to host it using Netlify. Their service makes hosting websites ridiculously easy, and I’d had some prior experience using it. But when it came to picking a domain name, I wanted something personal and unique—a domain name that made sense to me. Since I’m based in Canada, I thought it would be cool to register amanpalod dot ca.

However, my journey to owning this domain wasn’t as straightforward as I’d hoped. After a bit of research, I discovered that Netlify doesn’t allow you to register .ca domain names directly due to legal reasons. But I learned that you can still use a .ca domain with Netlify by registering it elsewhere and configuring it with Netlify DNS. At the time, this sounded like technical gibberish to me. I’m happy to report I’m now fluent in the technical lingo of hosting websites—or at least I like to think so.

### Finding a Domain Provider

This is where my search for a domain provider began. I stumbled upon Porkbun, an ICANN-accredited internet domain registrar (whatever that means—pfft). It offered reasonably priced domain options and even allowed for auctions and renewals. I searched for amanpalod.ca, found it, and thought, “Great, this is it!” But as I was finishing the registration questionnaire, I noticed a small note on the checkout page. It stated that registering a .ca domain required a legal connection to Canada—not just the emotional connection I’ve developed over my three years of living here.

For example, to register a .ca domain, you need to be a Canadian citizen, permanent resident, corporation, or even someone like Her Majesty Queen Elizabeth II (RIP) and her successors. (If only she knew how to register a domain name, rofl.)

And that’s when my hopes of registering a .ca domain came down. With no legal connection to Canada, I had to pivot. I ended up settling on a different domain name, but not without a few lessons learned. In hindsight, I could have saved myself some trouble by going back to Netlify and opting for a .xyz domain. It would have kept everything under one provider and simplified the hosting process.

### The Challenge of Linking Porkbun and Netlify

After purchasing my domain name from Porkbun, the real challenge began: linking it to my website hosted on Netlify. My website’s code was already on GitHub, and I had to figure out how to make the domain point to it. This involved updating the namespace settings of my domain provider (Porkbun) to match those of my website host (Netlify). I also had to create two DNS records in Netlify’s dashboard: one for www.amanpalod.ca and another for amanpalod.xyz.

I’d love to say this went smoothly, but it didn’t. After spending hours trying to figure it out, I was left frustrated when nothing worked immediately. I called it a day and didn’t revisit the problem for a week because I had school assignments to finish.

### The Breakthrough

When I finally gathered the courage to return to “domain hell” (as I now affectionately call it), I did some more online research with a fresh mind and this time it went much smoother. That’s when I learned that DNS records can take up to 48 hours to propagate. I updated the settings, created the necessary DNS records, and—not wanting to stress further—decided to distract myself with some video games.

When I came back, my website was finally live on both the DNS records I had set! Seeing the google search for my domain name showed my website, and I was stoked. 

Thanks for reading my blog! I hope this story helps anyone else navigating the world of custom domains. Until next time!
    `,
    images: [
    ],
  },
  {
    title: 'Debloating My CAT S22 Flip Phone',
    excerpt: 'Debloating and customizing my CAT S22 Flip Phone',
    date: '2024-12-31',
    tags: ['Dumb Phone', 'CAT', 'UAD'],
    slug: 'debloating-my-flip-phone',
    content: `
Hullo, 

For the past three years, I had been using a OnePlus Nord 2 and had been eyeing a change for some time. Initially, I was considering upgrading to either the **Google Pixel 9 Pro** or exploring the uniqueness of the **Nothing Phone**. However, I stumbled upon the [r/dumbphones](https://www.reddit.com/r/dumbphones) subreddit—and the rest is history.

In this subreddit, I discovered a niche community of people embracing the simplicity of dumb phones, and I was instantly intrigued. I had been lurking in the sub for a while and had seen a lot of people talking about the CAT S22 Flip Phone. It is a rugged flip phone that supports Android 11. The old school geek inside me immediately knew that I had to get it. 

## Why the CAT S22 Flip Phone?

The idea of owning a phone that could help me reduce screen time and get back to the basics was too appealing to pass up. For just **100 CAD**, I placed the order and eagerly awaited its arrival. The phone comes with **2GB RAM** and **16GB storage**, so I knew it wouldn't be the fastest device, but I was ready for the trade-off.

After unboxing the phone, although I had good inital impressions, I could feel the phone was a bit slow due to ample bloatware and a low ram. I knew I had to do something about it.

My first instinct was to root the phone since it was an android and I had often heard about rooting a phone to get rid of bloatware. Since I had no experiecne in actually rooting a phone, I obviously searched it up on youtube and came across [this](https://www.youtube.com/watch?v=YYMY5dOPV1g) guide which promised to get rid of bloatware without even rooting the phone. All I had to do was a) set up the Universal Android Debloater from the github repo on my laptop and b) enable developer mode on my CAT S22.

Here's how I did it:

1. I commenced by trying to install the UAD software on my macbook from this [github repo](https://github.com/0x192/universal-android-debloater), but macOS initially blocked the installation due to security settings. Although I found a workaround, I decided to switch to a Windows laptop for simplicity.

2. Borrowing a friend’s Windows laptop, I installed the UAD software. Setting it up was straightforward—I had to enable **Developer Mode** on the CAT S22 and run the adb devices command in the terminal to connect the phone.

3. Initially, I used my USB-C to USB-C cable to connect the phone, but the device wasn’t recognized. After troubleshooting for a while, I realized I needed to use the original USB-A to USB-C cable that came with the phone. This resolved the issue.

Using UAD’s intuitive interface, I removed most of the bloatware (goodbye, **T-Series and Google Suite**) and instantly noticed an improvement in the phone's responsiveness.

## Setting it up for Daily Use

With the phone decluttered, I downloaded essential utility apps like **WhatsApp**, **Google Maps**, **Uber**, and **Wealthsimple**. I also discovered **F-Droid**, an open-source app store, which allowed me to install **NewPipe**, an ad-free YouTube alternative.

To give the phone a personalized, retro vibe, I changed its icon pack. This required:

1. Installing the **NovaLauncher** app from the Play Store.
2. Downloading the **PixBit Icon Pack** from the browser.

After some configuration, I managed to apply a retro theme to most of the apps. For those that didn’t support retro icons, I manually edited them. The final result is a visually cohesive and nostalgic interface that perfectly complements the phone's design.

![Retro Themeed CAT S22 Flip Phone](https://res.cloudinary.com/dgxbkvjdh/image/upload/c_crop,ar_1:1/v1735795997/flip_phone_eqwmdr.jpg)

## The Verdict

I’m thrilled with the CAT S22 Flip Phone and am slowly transitioning to it as my everyday carry. I plan to keep the OnePlus Nord 2 for occasional use or while traveling abroad. 

All in all, I am super happy with the phone and am looking to gradually transition to it as I ween off from my One Plus Nord 2.
`,
image: [
  {
    url: 'https://res.cloudinary.com/dgxbkvjdh/image/upload/c_crop,ar_1:1/v1735795997/flip_phone_eqwmdr.jpg',
    alt: 'Retro Themed CAT S22 Flip Phone',
    caption: ''
  }
]
  }
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-primary"
      >
        ← Back to Blog
      </Link>

      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <time className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}