# Shubham Kapopara - Portfolio

> **Data Analyst & Business Intelligence Professional**  
> Building intelligent solutions for a digital world through data-driven insights and analytics.

![Portfolio Preview](public/images/og/home.jpg)

A modern, responsive portfolio website showcasing my work as a Data Analyst, featuring projects, certifications, blog posts, and case studies. Built with Next.js 15 and Once UI System for optimal performance and user experience.

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL](https://your-portfolio-url.com)

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Optimized for all screen sizes and devices
- **Modern UI**: Clean, professional interface built with Once UI System
- **Dark/Light Mode**: Seamless theme switching
- **Fast Navigation**: Optimized routing and caching for instant page loads
- **SEO Optimized**: Automatic metadata, Open Graph, and schema generation

### 📊 Content Management
- **MDX-Based Content**: Write projects and blog posts in Markdown with React components
- **Dynamic Project Showcase**: Display work projects with case studies, visualizations, and links
- **Certificate Gallery**: Showcase professional certifications and achievements
- **Blog System**: Share insights, learnings, and project updates
- **Contact Form**: Integrated contact form with email functionality

### 🔧 Technical Features
- **Performance Optimized**: Image optimization (AVIF, WebP), code splitting, and caching
- **Type-Safe**: Full TypeScript support for better development experience
- **Component Library**: Built with Once UI System components
- **API Routes**: Server-side functionality for contact forms and data fetching
- **Static Generation**: Pre-rendered pages for optimal performance

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with App Router
- **UI Library**: [Once UI System](https://once-ui.com)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Content**: MDX (Markdown + JSX)
- **Deployment**: Vercel (recommended)

## 📦 Getting Started

### Prerequisites

- Node.js v18.17 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShubhamKapopara/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your portfolio**
   
   Edit `src/resources/content.tsx` to customize:
   - Personal information (name, role, email, location)
   - Social media links
   - Homepage content
   - About page sections
   - Navigation routes

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Add your content**
   
   - **Projects**: Add `.mdx` files to `src/app/work/projects/`
   - **Blog Posts**: Add `.mdx` files to `src/app/blog/posts/`
   - **Certificates**: Add `.mdx` files to `src/app/blog/posts/certificates/`
   - **Images**: Place images in `public/images/` directory

### Example Project Structure

```
src/app/
├── work/
│   └── projects/
│       ├── the-bookshelf.mdx
│       ├── employee-attrition-workforce-analytics.mdx
│       └── bank-loan-analysis.mdx
├── blog/
│   └── posts/
│       ├── certificates/
│       │   ├── deloitte-certificate.mdx
│       │   └── hackathon-certificate.mdx
│       └── projects/
│           ├── data-warehouse.mdx
│           └── twitter-sentimental-analytics.mdx
```

## 📝 Project Structure

```
My Portfolio/
├── public/
│   └── images/          # Images for projects, certificates, and assets
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── about/       # About page
│   │   ├── blog/        # Blog pages and posts
│   │   ├── work/        # Work/projects pages
│   │   └── api/         # API routes
│   ├── components/      # React components
│   ├── resources/       # Content and configuration
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## 🎯 Key Projects

### Featured Work
- **[The BookShelf](work/the-bookshelf)**: Full-stack e-commerce bookstore management system
- **[Employee Attrition Analytics](work/employee-attrition-workforce-analytics)**: Workforce analytics dashboard with Tableau visualizations
- **[Bank Loan Analysis](work/bank-loan-analysis)**: Comprehensive loan analysis with predictive insights

### Data Science Projects
- **Data Warehouse**: ETL pipeline engineering for OLAP data warehouse
- **Twitter Sentimental Analytics**: Real-time sentiment analysis on COVID-19 tweets
- **Movie Review Analysis**: NLP-based sentiment classification system
- **Sign Language Recognition**: CNN-based gesture recognition system (90%+ accuracy)

## 🏆 Certifications

- Deloitte Australia - Data Analytics Job Simulation
- Python for Everybody Certificate
- Hackathon Certificate

## 💼 Skills

### Data Analysis & Visualization
- Python, SQL, Excel
- Tableau, Power BI
- pandas, Matplotlib, Seaborn

### Software Engineering
- JavaScript, React.js, Node.js
- Express.js, MongoDB
- Git, Postman

### Machine Learning
- scikit-learn, NumPy
- CNN, NLP
- Jupyter Notebook

## 📧 Contact

- **Email**: [kapoparashubham26@gmail.com](mailto:kapoparashubham26@gmail.com)
- **LinkedIn**: [shubham-kapopara-18bb26244](https://www.linkedin.com/in/shubham-kapopara-18bb26244/)
- **GitHub**: [ShubhamKapopara](https://github.com/ShubhamKapopara)
- **Tableau**: [Public Profile](https://public.tableau.com/app/profile/shubham.kapopara/vizzes)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FShubhamKapopara%2Fyour-repo-name)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables (if needed)
4. Deploy!

### Environment Variables

Create a `.env.local` file for local development:

```env
# Contact Form (Optional)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
CONTACT_TO=your-email@example.com
```

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run biome-write` - Format code with Biome

## 🎨 Customization

### Theme Configuration
Edit `src/resources/once-ui.config.ts` to customize:
- Colors and design tokens
- Typography
- Spacing and layout

### Content Configuration
Edit `src/resources/content.tsx` to customize:
- Personal information
- Navigation routes
- Social links
- Page content and sections

## 📄 License

This project is based on [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) by [Once UI System](https://once-ui.com).

Distributed under the CC BY-NC 4.0 License.
- Attribution is required
- Commercial usage is not allowed

See `LICENSE` for more information.

## 🙏 Acknowledgments

- Built with [Once UI System](https://once-ui.com) components
- Portfolio template by [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)
- Powered by [Next.js](https://nextjs.org/)

---

**Built with ❤️ by Shubham Kapopara**
