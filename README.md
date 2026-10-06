MK Marine Services

A modern website and internal operations portal built for MK Marine Services.

The application combines a professional public-facing website with a centralized portal for managing day-to-day marine business operations, including clients, vessels, enquiries, products, quotations, sales, purchases, payments, suppliers, tasks, reports and internal communication.

⸻

Tech Stack

* Next.js
* TypeScript
* React
* Tailwind CSS
* Next.js App Router
* Next Font
* Responsive UI
* Cookie-based portal authentication

⸻

Getting Started

Requirements

* Node.js 18.18 or newer
* Node.js 20 LTS recommended
* npm

Installation

cd mk-marine
npm install
npm run dev

Start the application with:

npm run dev

Then open:

localhost:3000

⸻

Website

The public website provides information about MK Marine Services and allows visitors to explore the company’s services and contact the team.

Main pages

Page	Route
Home	/
Services	/services
Marine Spare Parts	/marine-spare-parts
Vessel Support	/vessel-support
About	/about
Contact	/contact
Request a Quote	/request-quote
Privacy Policy	/privacy
Terms	/terms
Cookies	/cookies

Website features

* Responsive navigation
* Company introduction
* Marine services presentation
* Marine spare parts section
* Vessel support information
* About company section
* Contact information
* Request a Quote form
* Clear calls to action
* Responsive layouts for desktop, tablet and mobile
* Consistent typography and branding
* Shared header and footer

⸻

Operations Portal

The private portal provides a centralized workspace for managing the company’s operations.

Portal access is available through:

/portal/login

After authentication, users are taken to the main portal dashboard.

The portal uses a shared layout with:

* Sidebar navigation
* Top navigation
* User information
* Sign out
* Consistent page layouts
* Reusable tables, cards, forms and status components

⸻

Dashboard

/portal/dashboard

The dashboard gives users a quick overview of current business activity.

It includes:

* Important items
* Recent activity
* Enquiry information
* Tasks
* Business updates
* Quick access to frequently used areas

The dashboard is designed to make it easy to see what requires attention without having to open every module individually.

⸻

Clients

/portal/clients
/portal/clients/[id]

The Clients module provides a central place to manage customer information.

It includes:

* Client listing
* Client details
* Contact information
* Related business information
* Individual client pages
* Client-related activity

⸻

Vessels

/portal/vessels

The Vessels module organizes vessel-related information used by the business.

It provides a dedicated interface for viewing and managing vessel records.

⸻

Enquiries

/portal/enquiries
/portal/enquiries/[id]
/portal/enquiries/new

The Enquiries module handles the complete enquiry workflow.

Users can:

* View enquiries
* Open individual enquiry details
* Create a new enquiry
* Select a client
* Add project information
* Add vessel information
* Select products
* Add quantities
* Review selected products
* Add notes
* Review the enquiry before submission

Product Selector

The enquiry creation process includes a product selector that allows users to add products to an enquiry.

The summary updates as products and quantities are changed, giving the user a clear overview of the enquiry before it is submitted.

⸻

Important Notes

/portal/important-notes

A dedicated section for important internal information.

This allows the team to keep key information visible and organized instead of relying on separate communication channels.

⸻

Products

/portal/products

The Products module provides the marine product catalogue used throughout the portal.

Products can be viewed and referenced while preparing enquiries and quotations.

⸻

Quotations

/portal/quotations
/portal/quotations/[id]

The Quotations module provides a detailed quotation management interface.

It includes:

* Quotation listing
* Quotation details
* Client information
* Product line items
* Quantity
* Cost price
* Selling price
* Margin calculation
* Quotation status
* Client-facing notes
* Internal notes

Client-facing and internal information are kept separate so internal business notes are not mixed with information intended for customers.

⸻

Sales

/portal/sales
/portal/sales/[id]

The Sales module provides an overview of completed and ongoing sales.

It includes:

* Sales listing
* Sale details
* Client information
* Sale status
* Payment status
* Margin information
* Related transaction information

⸻

Purchases

/portal/purchases
/portal/purchases/[id]

The Purchases module provides an interface for managing supplier purchases and purchase orders.

It includes:

* Purchase listing
* Purchase details
* Supplier information
* Product line items
* Purchase information
* Order status
* Receiving information

⸻

Payments

/portal/payments

The Payments module organizes financial transactions.

It provides separate views for:

Client Payments

Payments received from customers.

Supplier Payments

Payments made to suppliers.

The module also includes:

* Payment totals
* Transaction tables
* Payment information
* Related records
* Payment status

⸻

Suppliers

/portal/suppliers
/portal/suppliers/[id]

The Suppliers module provides a centralized view of supplier information.

It includes:

* Supplier listing
* Supplier details
* Products supplied
* Purchase history
* Supplier-related information

⸻

Reports

/portal/reports

The Reports section provides an overview of business performance and activity.

It includes:

* Report filters
* Key statistics
* Quotation pipeline
* Business summaries
* Data overview

⸻

Tasks

/portal/tasks

The Tasks module provides a dedicated workspace for managing internal work and follow-ups.

It helps keep operational tasks organized within the same system.

⸻

Settings

/portal/settings

The Settings section contains the main administrative areas of the portal.

Users

Provides a centralized user management interface.

Roles & Permissions

Includes a permission matrix for managing access across different areas of the portal.

Company Information

Provides the interface for maintaining company-related information.

Audit Log

Provides an area for tracking important system activity and administrative actions.

⸻

Authentication

The portal has a dedicated authentication flow and protected portal routes.

Users sign in through:

/portal/login

Portal pages are protected through middleware, and users can sign out directly from the portal navigation.

The authentication layer is structured so it can be extended with full production authentication and database-backed users.

⸻

Shared Activity

The portal is designed for multiple team members working with the same business information.

The dashboard includes activity-related sections such as:

* Important for You
* Recent Activity
* Internal updates

This provides a central view of activity across the business and gives users visibility into work happening within the portal.

⸻

UI & Design System

The application uses a shared design system to keep the website and portal visually consistent.

Typography

The project uses:

* Fraunces for major headings
* Inter for interface and body text

Fonts are loaded through Next.js using next/font.

Color System

Core colors are defined centrally in:

tailwind.config.ts

This includes the project’s:

* Navy
* Ocean
* Gold
* Ink
* Border
* Supporting UI colors

Reusable Components

Shared UI components are located in:

components/ui/

These include components such as:

* Buttons
* Status badges
* Priority tags
* Current status indicators
* Activity timelines
* Panels
* Form elements

Portal-specific components are located in:

components/portal/

The public website components are located in:

components/site/

⸻

Project Structure

app/
├── page.tsx
│
├── services/
├── about/
├── contact/
├── marine-spare-parts/
├── vessel-support/
├── request-quote/
├── privacy/
├── terms/
├── cookies/
│
└── portal/
    ├── login/
    │   └── page.tsx
    │
    ├── page.tsx
    │
    └── (shell)/
        ├── layout.tsx
        ├── dashboard/
        ├── clients/
        ├── vessels/
        ├── enquiries/
        ├── important-notes/
        ├── products/
        ├── quotations/
        ├── sales/
        ├── purchases/
        ├── payments/
        ├── suppliers/
        ├── reports/
        ├── tasks/
        └── settings/
components/
├── ui/
├── portal/
└── site/
lib/
├── types.ts
├── demo-data.ts
├── auth.ts
└── current-user.ts
public/
└── logo.jpg
middleware.ts
tailwind.config.ts

The (shell) directory is a Next.js route group. It allows the portal pages to share the same sidebar and topbar without adding shell to the URL.

⸻

Data & Application Architecture

The application currently has its domain structure separated into the lib directory.

lib/types.ts

Contains the TypeScript types used across the application.

lib/demo-data.ts

Contains the current application data used by the portal.

lib/auth.ts

Handles the current portal authentication flow.

lib/current-user.ts

Provides the currently authenticated portal user to the application.

The homepage hero, the "In the Field" gallery, and the Marine Spare Parts
page use real marine photography — cargo ship, port/crane, industrial
pipework — sourced from Unsplash (free under the [Unsplash
License](https://unsplash.com/license), no permission or payment needed).
They're loaded directly from `images.unsplash.com` via plain `<img>` tags,
so you'll need internet access when running `npm run dev` for them to
load. 
