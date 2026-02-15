# Event Platform 🎉

A full-stack event management platform built with Next.js that enables seamless event creation, management, and discovery. Features dynamic event showcasing, robust CRUD operations, cloud-based image management, and integrated analytics.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

## ✨ Features

### Core Functionality

- **Dynamic Event Homepage** - Browse and discover upcoming events with an intuitive interface
- **Full CRUD Operations** - Create, read, update, and delete events through robust API routes
- **Image Management** - Cloudinary-powered image uploads with optimization and CDN delivery
- **Event Discovery** - Smart suggestions for similar events based on user interests

### Technical Highlights

- Server-side rendering for optimal performance
- RESTful API architecture
- Cloud-based asset management

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Cloudinary account (for image uploads)

### Installation

1. Clone the repository

```bash
git clone https://github.com/Kafoor-Nimas/Dev_Events.git
cd project
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=your_database_url

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# App URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
project/
├── app/
│   ├── api/              # API routes
│   ├── event/           # Event pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── EventCard.tsx     # Event display component
│   ├── BookEvent.tsx     # Book Event
│   └── ...
├── lib/
│   ├── actions/
│   └── utils.ts          # Helper functions
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Image Management:** Cloudinary
- **Database:** MongoDB
- **Analytics:** PostHog

## 📸 Screenshots

### Home Page

![Home Page](/public/images/home-page.png)

### Event Page

![Event Page](/public/images/event-page.png)

```


## 🎯 Usage

### Creating an Event

1. Navigate to the "Create Event" page
2. Fill in event details (name, description, date, location)
3. Upload an event image
4. Submit to publish your event

### Browsing Events

- View all upcoming events on the homepage
- Click on any event card to see detailed information
- Register for events with a single click

### Managing Events

- Edit your created events from the event detail page
- Delete events you no longer need
- Track registrations and engagement

## 🔧 API Routes

```

GET /api/events # Get all events
GET /api/events/:id # Get single event
POST /api/events # Create new event
PUT /api/events/:id # Update event
DELETE /api/events/:id # Delete event
POST /api/upload # Upload image to Cloudinary

```

## 📊 Analytics Features

- Page view tracking
- Event registration metrics
- User engagement insights
- Popular event categories
- Performance optimization recommendations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports & Support

If you encounter any bugs or need assistance, join our active Discord community with over 50,000+ members where developers help each other out!

[Discord Invite Link]

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@yourusername](https://github.com/yourusername)
- Portfolio: [your-portfolio.com]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Cloudinary for seamless image management
- The 50k+ Discord community for support and guidance
- Everyone who provided feedback and suggestions

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Payment integration for paid events
- [ ] Email notifications
- [ ] Calendar integration
- [ ] Advanced search and filtering
- [ ] Social sharing features
- [ ] Mobile app version

---

⭐ If you found this project helpful, please consider giving it a star!

Made with ❤️ and Next.js
```
