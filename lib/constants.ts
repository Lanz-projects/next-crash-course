export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "Next.js Conf 2026",
    image: "/images/event-full.png",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA",
    date: "2026-03-10",
    time: "09:00 AM - 05:00 PM"
  },
  {
    title: "React Summit",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-04-22",
    time: "10:00 AM - 06:00 PM",
  },
  {
    title: "JSConf EU",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "2026-05-14",
    time: "09:30 AM - 05:30 PM",
  },
  {
    title: "TSConf: TypeScript Summit",
    image: "/images/event3.png",
    slug: "tsconf-2026",
    location: "Remote / Online",
    date: "2026-02-18",
    time: "11:00 AM - 04:00 PM UTC",
  },
  {
    title: "HackMIT 2026",
    image: "/images/event4.png",
    slug: "hackmit-2026",
    location: "Cambridge, MA",
    date: "2026-01-31",
    time: "06:00 PM - 08:00 PM",
  },
  {
    title: "Cloud Native DevOps Meetup",
    image: "/images/event5.png",
    slug: "cloud-native-devops-2026",
    location: "London, UK",
    date: "2026-06-09",
    time: "18:30 - 21:00",
  },
  {
    title: "AI & Developer Tools Expo",
    image: "/images/event6.png",
    slug: "ai-devtools-expo-2026",
    location: "New York, NY",
    date: "2026-07-16",
    time: "09:00 AM - 04:00 PM",
  },
];

export default events;
