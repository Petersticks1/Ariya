ARIYA
WebApp — Product Requirements Document
Frontend Edition
WhatsApp + Email Order & Booking System

Version	1.1 — Frontend Only

Date	April 2026

Scope	Public-facing website with WhatsApp & Email integration. No admin panel, no database.

1. Overview
The ARIYA WebApp is a mobile-first, frontend-only website that showcases all ARIYA services, enables customers to explore catalogues and menus, and routes all orders, bookings, and membership sign-ups directly to the ARIYA team via WhatsApp and Email. There is no backend, no database, and no admin panel. The business handles all responses and fulfilment through its existing WhatsApp Business account and inbox.

1.1  Core Goals
•Present all ARIYA services in a clean, premium digital interface
•Let customers browse catalogues, menus, and packages without friction
•Route every request (order, booking, membership) to WhatsApp or Email
•Generate QR codes for physical display — linking to key service pages
•Work flawlessly on mobile, tablet, and desktop browsers

1.2  What Is Excluded
•Admin panel or back-office dashboard
•Database or server-side storage of any kind
•User accounts, login, or authentication
•Payment processing (handled offline after WhatsApp contact)
•Automated approval or notification workflows

2. Technology Stack
The app is built entirely as a static React application requiring no server infrastructure.

Service	Contact Channel	Details
Framework	React (Vite)	Fast build, modern developer experience
Styling	Tailwind CSS	Utility-first, responsive by default
Routing	React Router v6	Client-side page navigation
Forms	React Hook Form	Lightweight, validation-friendly
QR Codes	qrcode.react	Renders QR codes in-browser
Animation	Framer Motion (optional)	Smooth page transitions and microanimations
Hosting	Vercel / Netlify / GitHub Pages	Free static hosting, no backend needed

3. Communication Channels
All customer actions on the site funnel into one of two outbound channels. No data is stored on the site itself.

3.1  WhatsApp Click-to-Chat
Every booking form and order button opens a pre-filled WhatsApp conversation using the standard Click-to-Chat URL format:

https://wa.me/234XXXXXXXXXX?text=ENCODED_MESSAGE

The ENCODED_MESSAGE is a formatted, URL-encoded string built from the form fields. When tapped, WhatsApp opens with the message pre-filled, ready for the customer to send. The ARIYA team receives it in WhatsApp Business and responds directly.

3.2  Email (mailto: Links)
For formal or detailed requests — such as catering quotes or event centre enquiries — a secondary Email button generates a mailto: link with a pre-filled subject line and body. This opens the device's default mail app. Email is presented as an alternative, not a replacement, for WhatsApp.

3.3  Message Format Standard
Every service has a defined message template. All messages follow this structure:
•A bold header identifying the service (e.g., *GYM MEMBERSHIP REGISTRATION*)
•Labelled fields, one per line (e.g., Name: [value])
•A footer timestamp (auto-appended by the app)

4. Pages & URL Routes
Service	Contact Channel	Details
/	Home	Service overview, hero section, quick-access grid
/lounge	Lounge	Menu, ambience info, VIP room booking CTA
/kitchen	Kitchen	Food menu, pre-order form
/gym	Gym	Packages (Bronze/Silver/Gold), membership form
/carwash	Car Wash	Membership tiers, sign-up form
/event-booking	Event Centre	Event booking form, policies
/vip-booking	VIP Room	VIP room booking form
/salon	Salon	Service list, appointment booking form
/catering	Catering	Request form, menu guidance
/minimart	Minimart	Product catalogue grid, order via WhatsApp
/fabrics	Fabrics	Fabric catalogue, request via WhatsApp

5. Feature Modules
5.1  Home Page
The homepage is the digital front door for ARIYA. It communicates the brand identity and directs visitors to relevant services quickly.

•Full-width hero section with ARIYA branding and tagline
•Service grid — card for each service with icon, name, and 'Explore' CTA
•Floating WhatsApp button (bottom-right, persistent across all pages)
•Footer with phone number, email address, social links, and QR code download section

5.2  Lounge & Ariya Kitchen
Two separate pages sharing a consistent menu card component. Each item displays an image, name, price, and category badge. Customers can pre-order or place food requests through WhatsApp.

•Category tabs — Drinks / Starters / Main Course / Desserts
•Search and filter by category
•'Pre-Order via WhatsApp' button per item or as a bulk cart
•VIP Room booking CTA on the Lounge page (links to /vip-booking)

WhatsApp Message Format — Food Pre-Order
*FOOD PRE-ORDER*
Item: [Item Name]
Quantity: [Number]
Preferred Time: [Time]
Table / Takeaway: [Choice]
Customer Name: [Name]

5.3  VIP Room Booking
Allows customers to request a VIP room for a specific date and time. Availability is not shown in the frontend — the ARIYA team confirms via WhatsApp after receiving the request.

Field	Input Type	Required?
Full Name	Text input	Required
Phone Number	Tel input	Required
Date	Date picker	Required
Time Slot	Dropdown (e.g. 6 PM – 9 PM)	Required
Number of Guests	Number input	Required
Menu Pre-Order	Multi-select checklist	Optional
Special Requests / Notes	Textarea	Optional

UI Rule: If the selected date is within 72 hours of the current time, display a highlighted notice: 'Short-notice bookings may not be guaranteed. We will confirm availability via WhatsApp.' The form submission is still enabled.

WhatsApp Message Format — VIP Room
*VIP ROOM BOOKING*
Name: [Name]
Phone: [Phone]
Date: [Date]
Time: [Time]
Guests: [Count]
Pre-Order: [Items]
Special Requests: [Notes]

5.4  Event Centre Booking
Customers submit an event enquiry. The ARIYA team follows up via WhatsApp or Email to discuss logistics, pricing, and availability.

Field	Input Type	Required?
Full Name	Text input	Required
Phone Number	Tel input	Required
Email Address	Email input	Required
Event Type	Dropdown (Wedding / Corporate / Birthday / Other)	Required
Event Date	Date picker	Required
Expected Guest Count	Number input	Required
Equipment Needs	Multi-select (PA / Projector / Chairs / Lighting)	Optional
Menu / Catering Preference	Textarea	Optional
Additional Notes	Textarea	Optional

Dual Contact Option
This page provides two submit buttons: 'Send via WhatsApp' and 'Send via Email'. Both compile the same form data into the relevant format.

WhatsApp Message Format — Event Centre
*EVENT CENTRE BOOKING REQUEST*
Name: [Name]
Phone: [Phone]
Email: [Email]
Event Type: [Type]
Date: [Date]
Guests: [Count]
Equipment: [Needs]
Menu Request: [Preferences]
Notes: [Notes]

5.5  Gym Membership
Displays the three membership tiers with pricing, perks, and a sign-up form per package.

•Bronze — entry-level access, basic equipment
•Silver — full equipment access + 1 personal training session/month
•Gold — unlimited access + 2 PT sessions/month + locker

Field	Input Type	Required?
Full Name	Text input	Required
Phone Number	Tel input	Required
Email Address	Email input	Optional
Selected Package	Pre-filled from page (Bronze/Silver/Gold)	Required
Preferred Start Date	Date picker	Required
Health Notes / Conditions	Textarea	Optional

WhatsApp Message Format — Gym Membership
*GYM MEMBERSHIP REGISTRATION*
Name: [Name]
Phone: [Phone]
Package: [Bronze/Silver/Gold]
Start Date: [Date]
Notes: [Health notes]

5.6  Car Wash Membership
Displays available car wash plans with clear feature breakdowns and a membership sign-up form.

•Weekly — Basic exterior wash, 5x per week
•Monthly Basic — Interior + exterior, standard care
•Monthly Premium — Full detail, priority scheduling
•Monthly Deluxe — Premium + paint protection treatment

Field	Input Type	Required?
Full Name	Text input	Required
Phone Number	Tel input	Required
Car Make & Model	Text input	Required
Plate Number	Text input	Required
Selected Plan	Pre-filled from selected package	Required
Preferred Start Date	Date picker	Required

WhatsApp Message Format — Car Wash
*CAR WASH MEMBERSHIP*
Name: [Name]
Phone: [Phone]
Car: [Make & Model]
Plate: [Number]
Plan: [Selected Plan]
Start Date: [Date]

5.7  Salon Booking
Lists available salon services with a simple appointment booking form.

Field	Input Type	Required?
Full Name	Text input	Required
Phone Number	Tel input	Required
Service Type	Dropdown (Hair / Nails / Makeup / Braiding / Other)	Required
Stylist Preference	Dropdown or 'No Preference'	Optional
Preferred Date	Date picker	Required
Preferred Time	Time dropdown	Required
Additional Notes	Textarea	Optional

WhatsApp Message Format — Salon
*SALON BOOKING*
Name: [Name]
Phone: [Phone]
Service: [Type]
Stylist: [Preference]
Date: [Date]
Time: [Time]
Notes: [Notes]

5.8  Catering Request
For external events requiring ARIYA Kitchen catering. This form doubles as a detailed enquiry and generates both a WhatsApp and Email contact option.

Field	Input Type	Required?
Full Name	Text input	Required
Phone Number	Tel input	Required
Email Address	Email input	Required
Event Type	Dropdown (Wedding / Corporate / Birthday / Funeral / Other)	Required
Event Date	Date picker	Required
Event Location / Address	Text input	Required
Expected Guest Count	Number input	Required
Menu Preferences / Dietary Needs	Textarea	Required
Budget Range	Dropdown (optional ranges)	Optional
Additional Notes	Textarea	Optional

WhatsApp Message Format — Catering
*CATERING REQUEST*
Name: [Name]
Phone: [Phone]
Email: [Email]
Event Type: [Type]
Date: [Date]
Location: [Address]
Guests: [Count]
Menu: [Preferences]
Budget: [Range]
Notes: [Notes]

5.9  Minimart Catalogue
A browsable product catalogue. Customers view items and send an order via WhatsApp. No cart or checkout flow exists — all orders are conversational.

•Product grid with image, name, price, and category badge
•Category filter bar (Beverages / Snacks / Household / Personal Care / Other)
•Search bar with live filtering
•'Order via WhatsApp' button on each product card

WhatsApp Message Format — Minimart
*MINIMART ORDER*
Product: [Name]
Price: [Price]
Quantity: [Qty]
Customer Name: [Name]
Delivery or Pickup: [Choice]
Phone: [Number]

5.10  Fabric Catalogue
Displays available fabric types with images, price per yard, and available yardage. Customers request directly via WhatsApp.

•Fabric grid with image, name, category, price per yard, available yards
•Filter by fabric type (Cotton / Ankara / Lace / Velvet / Silk / Other)
•'Request via WhatsApp' button per fabric card

WhatsApp Message Format — Fabric
*FABRIC REQUEST*
Fabric Name: [Name]
Category: [Type]
Price per Yard: [Price]
Yards Needed: [Number]
Customer Name: [Name]
Phone: [Number]

6. QR Code Navigation
QR codes allow ARIYA to bridge physical signage with the digital experience. A customer scans a QR code on a table card, brochure, or poster and is taken directly to the relevant page.

Service	Contact Channel	Details
Lounge Menu	/lounge	Table cards, posters inside lounge
Kitchen Menu	/kitchen	Menu boards, takeaway bags
Gym	/gym	Gym entrance, fitness posters
Car Wash	/carwash	Car wash reception area
Event Centre	/event-booking	Brochures, event display board
Salon	/salon	Salon reception, service menu
Minimart	/minimart	Product shelves, store entrance

QR codes are generated client-side using the qrcode.react library. A dedicated QR download page can be provided for printing. Each QR code includes the ARIYA logo centred as an overlay.

7. UI Design System
7.1  Visual Identity
•Colour palette: Black (#1A1A1A) background, Gold (#B8972A) accents, White text
•Typography: Uppercase headings for premium feel; clean sans-serif body (Inter or DM Sans)
•Card design: Rounded corners, subtle shadow, gold border-left accent
•Buttons: Large tap targets (min 48px height), gold fill for primary, outlined for secondary

7.2  Persistent UI Elements
•Floating WhatsApp button — fixed bottom-right on all pages, branded green with WhatsApp icon
•Sticky top navigation bar — Logo left, service links right, collapses to hamburger on mobile
•'Back to Top' scroll button on long pages

7.3  Mobile-First Behaviour
•All layouts stack vertically on screens narrower than 768px
•Touch-friendly tap targets (no hover-only interactions)
•Bottom sticky 'Book Now' CTA bar on service detail pages
•Swipeable image galleries on menu and catalogue pages

7.4  Performance
•Images: WebP format, lazy-loaded, max 200KB per image
•No third-party analytics or tracking scripts unless explicitly requested
•Target: 90+ Lighthouse score on mobile

8. Suggested Folder Structure
/src
  /pages
    Home.jsx
    Lounge.jsx
    Kitchen.jsx
    Gym.jsx
    CarWash.jsx
    VIPBooking.jsx
    EventBooking.jsx
    Salon.jsx
    Catering.jsx
    Minimart.jsx
    Fabrics.jsx
  /components
    ServiceCard.jsx
    BookingForm.jsx
    PackageCard.jsx
    MenuCard.jsx
    WhatsAppButton.jsx
    QRCodeDisplay.jsx
    CategoryFilter.jsx
  /utils
    whatsappMessage.js   // message template builders
    emailTemplate.js     // mailto link builders
  /data
    products.js          // minimart catalogue
    fabrics.js           // fabric catalogue
    menuItems.js         // lounge & kitchen menu
    packages.js          // gym & car wash tiers
  /assets
    images/
    icons/
  App.jsx
  main.jsx

9. Static Data Management
Since there is no backend, all catalogue content (products, menu items, fabric listings, packages) is stored as static JavaScript data files in /src/data/. To update content, the data files are edited and the site is redeployed. This is a deliberate simplicity trade-off appropriate for the current phase.

•products.js — minimart product list: name, category, price, image path, WhatsApp CTA
•menuItems.js — lounge and kitchen items: name, category, price, image, availability flag
•fabrics.js — fabric name, type, price per yard, available yards, image
•packages.js — gym and car wash tier names, prices, and feature lists

Future enhancement: A simple headless CMS (e.g. Contentful Free Tier or Notion API) can be integrated later to allow non-technical staff to update content without touching code.

10. Why This Approach Works for ARIYA
Service	Contact Channel	Details
Zero infrastructure cost	No servers, no hosting fees beyond static deployment	Deploy free on Vercel or Netlify
Instant go-live	No database setup or DevOps configuration required	Live within days of development
Nigerian market fit	WhatsApp is the dominant business communication channel in Nigeria	Customers are already on WhatsApp
Business stays in control	All conversations happen in WhatsApp Business, a tool staff already use	No new tools to learn
Relationship-first	Conversational orders build customer rapport naturally	Upselling happens in chat
Easy to scale	Backend or admin panel can be added later without rewriting frontend	Modular upgrade path

11. Out of Scope (This Version)
•Admin panel or content management dashboard
•User accounts, profiles, or login system
•Real-time availability calendars
•Online payment gateway (Paystack, Flutterwave, etc.)
•SMS or push notifications
•Loyalty point tracking
•Automated booking confirmation emails

These features are recommended for a future v2.0 phase once the business has validated digital demand and is ready to invest in a backend infrastructure.

ARIYA — Elevating Every Experience
This document is confidential and intended for internal use only.