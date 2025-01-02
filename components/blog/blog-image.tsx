import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function BlogImage({ src, alt, caption }: BlogImageProps) {
  return (
    <figure className="my-8">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 900px, 100vw"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}