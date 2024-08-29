import VIDEO_PRODUCTION_DASHBOARD from "@/components/sub-section/page/work/dashboard/video-production-dashboard";
import CUSTOMER_SERVICE_DASHBOARD from "@/components/sub-section/page/work/dashboard/customer-service-dashboard";

export interface LineChartData {
  xValue: string;
  line1: number;
  line2?: number;
}

export interface Work {
  position: string;
  image: {
    card: string;
    background: string;
  };
  Component: {
    Heading: {
      title: string;
      imageUrl: string;
    };
    Dashboard: React.ReactNode[];
  };
}

const WORK_EXP_DATA: Work[] = [
  {
    position: "Video Actor",
    image: {
      card: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934239/image/page/work/experience/video-production/ag5nmwrhfffwmkag9wka.jpg",
      background:
        "https://res.cloudinary.com/dohewcyes/image/upload/v1724934239/image/page/work/experience/video-production/ag5nmwrhfffwmkag9wka.jpg",
    },
    Component: {
      Heading: {
        title: "I take video for education",
        imageUrl:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1724934240/image/page/work/experience/video-production/mmvrztswjd9pb0ny1eyp.png",
      },
      Dashboard: VIDEO_PRODUCTION_DASHBOARD,
    },
  },
  {
    position: "Online Shop",
    image: {
      card: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934240/image/page/work/experience/customer-service/el0dbu97fuvjxzy2gygc.jpg",
      background:
        "https://res.cloudinary.com/dohewcyes/image/upload/v1724934240/image/page/work/experience/customer-service/el0dbu97fuvjxzy2gygc.jpg",
    },
    Component: {
      Heading: {
        title: "I manage online shop",
        imageUrl:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1724934239/image/page/work/experience/customer-service/voomzj55w0ubxcit9v0q.png",
      },
      Dashboard: CUSTOMER_SERVICE_DASHBOARD,
    },
  },
];

export default WORK_EXP_DATA;
