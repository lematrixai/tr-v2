This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

1. **Cloudinary Account**: Sign up at [cloudinary.com](https://cloudinary.com) and get your credentials
2. **Environment Variables**: Copy `env.example` to `.env.local` and fill in your Cloudinary credentials

### Environment Setup

Create a `.env.local` file in the root directory with your Cloudinary credentials:

```bash
cp env.example .env.local
```

Then edit `.env.local` and add your actual Cloudinary values:
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Your cloud name from Cloudinary dashboard
- `CLOUDINARY_API_KEY`: Your API key from Cloudinary dashboard  
- `CLOUDINARY_API_SECRET`: Your API secret from Cloudinary dashboard

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Cloudinary Integration

This project uses Cloudinary for video and image optimization. The hero section (`components/hero-section.tsx`) demonstrates how to use Cloudinary's video player component.

### Key Features:
- **Video Optimization**: Automatic format conversion and quality optimization
- **Responsive Design**: Videos adapt to different screen sizes
- **Performance**: Cloudinary CDN ensures fast loading times
- **Fallback Support**: Poster images display while videos load

### Usage Example:
```tsx
import { CldVideoPlayer } from 'next-cloudinary'

<CldVideoPlayer
  width="100%"
  height="100%"
  src="your-cloud-name/video/upload/your-video-id"
  poster="your-cloud-name/image/upload/your-poster-id"
  controls={false}
  loop
  autoPlay
  muted
  playsinline
/>
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
