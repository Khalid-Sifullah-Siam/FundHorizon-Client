# FundHorizon

### Support better ideas. Build a stronger future.

<p align="center">
  <strong>A modern, role-based crowdfunding platform for supporters, creators, and administrators.</strong>
</p>

<p align="center">
  <a href="https://fund-horizon-client.vercel.app">🌐 View Live Website</a> ·
  <a href="https://github.com/Khalid-Sifullah-Siam/FundHorizon-Client">💻 Client Repository</a> ·
  <a href="https://github.com/Khalid-Sifullah-Siam/FundHorizon-server">⚙️ Server Repository</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe&logoColor=white" alt="Stripe" />
</p>


## About the Project

FundHorizon simplifies crowdfunding for supporters and creators. Supporters can discover campaigns, purchase platform credits, contribute to approved campaigns, and track their contribution history. Creators can create campaigns, manage earnings, and request withdrawals. Administrators manage users, campaigns, reports, withdrawals, and platform payments from a dedicated dashboard.

## Demo Accounts

| Role | Email | Password |
| --- | --- | --- |
| Supporter | `supporter@crowdfund.com` | `Supporter@12345` |
| Creator | `creator@crowdfund.com` | `Creator@12345` |
| Admin | `admin@crowdfund.com` | `Admin@12345` |

These credentials are for assessment only. Do not reuse them in production.

## ✨ Main Features

### 👤 For Supporters

- Browse, search, filter, and sort campaigns
- View campaign details and contribute using platform credits
- Purchase credits through Stripe Checkout
- Track contribution history and statuses
- Report suspicious campaigns
- Receive campaign and contribution notifications

### 🚀 For Creators

- Create campaigns with imgBB image upload
- Edit and delete owned campaigns
- Submit campaigns for administrator approval
- View campaign performance and earnings
- Request withdrawals and view payment history

### 🛡️ For Administrators

- View platform statistics and charts
- Manage users and roles
- Approve or reject campaigns
- Manage campaign reports
- Process withdrawal requests
- Review contributions and payment records

## 🧩 Platform Features

- Supporter, creator, and administrator roles
- Protected routes and API authorization
- Email/password authentication
- Google Identity Services sign-in
- Persistent JWT authentication
- MongoDB-backed campaign and payment data
- Starter credits for new users
- Atomic credit deduction and rejection refunds
- Responsive desktop and mobile UI
- Loading states, error pages, and toast notifications

## 🛠️ Built With

| Frontend | Backend and Services |
| --- | --- |
| Next.js 16 App Router | Node.js and Express.js |
| React 19 | MongoDB |
| Tailwind CSS 4 | Stripe |
| Framer Motion | Google Identity Services |
| Recharts | imgBB |
| Swiper | Vercel |

## 👥 User Roles

| Role | Access |
| --- | --- |
| Supporter | Discover campaigns, purchase credits, contribute, and track history |
| Creator | Create campaigns, manage fundraising, earnings, and withdrawals |
| Admin | Manage users, campaigns, reports, withdrawals, and payments |

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or newer
- Git
- FundHorizon server running locally

### Installation

```bash
git clone https://github.com/Khalid-Sifullah-Siam/FundHorizon-Client.git
cd FundHorizon-Client
npm install
```

Create `.env.local` from `.env.example` and add the required values:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_DEV_REPO_URL=your_repository_url
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser. Keep the backend server running for authentication, campaigns, payments, and dashboard features.

## 📦 Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Start the production server |
| `npm run lint` | Check the project for linting problems |

## 📁 Project Structure

```text
src/
├── app/              # Pages, layouts, authentication, campaigns, and dashboards
├── components/       # Reusable UI components
├── context/          # Authentication context
└── lib/              # API helpers, constants, and TypeScript types

public/               # Static assets
```

## 🔐 Security Note

Never commit real passwords, API keys, JWT secrets, or payment credentials to GitHub. Use environment variables for local and production configuration.

Built to make crowdfunding simpler, safer, and more transparent.

## 📸 Project Screenshots

### Photo 01

![Photo 01](./public/images/Screenshot%20(426).png)

### Photo 02

![Photo 02](./public/images/Screenshot%20(427).png)

### Photo 03

![Photo 03](./public/images/Screenshot%20(428).png)

### Photo 04

![Photo 04](./public/images/Screenshot%20(429).png)

### Photo 05

![Photo 05](./public/images/Screenshot%20(430).png)

### Photo 06

![Photo 06](./public/images/Screenshot%20(431).png)

### Photo 07

![Photo 07](./public/images/Screenshot%20(432).png)

### Photo 08

![Photo 08](./public/images/Screenshot%20(433).png)

### Photo 09

![Photo 09](./public/images/Screenshot%20(434).png)

### Photo 10

![Photo 10](./public/images/Screenshot%20(435).png)

### Photo 11

![Photo 11](./public/images/Screenshot%20(436).png)

### Photo 12

![Photo 12](./public/images/Screenshot%20(437).png)

### Photo 13

![Photo 13](./public/images/Screenshot%20(438).png)

### Photo 14

![Photo 14](./public/images/Screenshot%20(439).png)

### Photo 15

![Photo 15](./public/images/Screenshot%20(440).png)

### Photo 16

![Photo 16](./public/images/Screenshot%20(441).png)

### Photo 17

![Photo 17](./public/images/Screenshot%20(442).png)

### Photo 18

![Photo 18](./public/images/Screenshot%20(443).png)

### Photo 19

![Photo 19](./public/images/Screenshot%20(444).png)

### Photo 20

![Photo 20](./public/images/Screenshot%20(445).png)

### Photo 21

![Photo 21](./public/images/Screenshot%20(446).png)

### Photo 22

![Photo 22](./public/images/Screenshot%20(447).png)
