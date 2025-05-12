# Next.js MDX Blog Template

A modern, high-performance Next.js template with MDX support, based on the [Vercel Blog Template](https://github.com/vercel/examples/tree/main/solutions/blog).

## Improvements over the original template

- Built-in Cursor Rules with rule to self-update
- DRY code structure with centralized constants
- Improved SEO with comprehensive metadata
- Analytics support
- Updated to the latest package versions
- Enhanced performance optimizations (98+ avg. Vercel Real Experience score)
- Dynamic component loading
- Added favicon support for various devices
- Modern styling with Tailwind CSS
- Responsive design with no layout shift issues

## Features

- 🚀 Built with Next.js
- 📝 MDX support for content
- 🎨 Modern styling with Tailwind CSS
- 📱 Responsive design
- 🔍 SEO optimized
- 📊 Analytics ready
- 🎯 High performance scores
- 📦 Dynamic component loading

## Getting Started

1. Run `pnpx create-next-app@latest --example "https://github.com/awantoch/next-mdx-template" project_name`
2. Update the constants in `app/constants.ts` with your information
3. Add your content to the journal section
4. Customize the styling if desired
5. Deploy to your favorite platform

## Analytics Configuration

This template comes with built-in support for multiple analytics platforms:

### Vercel Analytics
Vercel Analytics is enabled by default and requires no additional configuration.

### Google Analytics
To enable Google Analytics:

1. Create a Google Analytics 4 property and get your Measurement ID (starts with "G-")
2. Add your Measurement ID to your environment variables:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. The analytics will be automatically loaded when the environment variable is present

### Speed Insights
Vercel Speed Insights is enabled by default and requires no additional configuration.

## License

MIT
