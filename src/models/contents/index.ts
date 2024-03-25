import { DefaultChartContent } from "./chart";

export type ContentType =
  | "chart"
  | "whook"
  | "event"
  | "news"
  | "store"
  | "charge";

export const CONTENT_ENDPOINTS: Record<ContentType, string> = {
  chart: "/chart",
  whook: "/whook",
  event: "/event",
  news: "/news",
  store: "/store",
  charge: "/charge",
};

export type DefaultContent = {
  title: string;
  subtitle?: string;
  src: string;
  amount?: number | string;
};

export type Content = DefaultContent & { id: number };

export const DEFAULT_DATA: Record<
  ContentType,
  DefaultContent | DefaultChartContent
> = {
  chart: {
    src: "/images/900523958_s150.jpg",
    title: "나는 아픈 건 딱 질색이니까",
    subtitle: "(여자)아이들",
    amount: 10000,
    rank: {
      current: 1,
      prev: 2,
    },
  },
  whook: {
    src: "/images/whook.webp",
    title: "후즈팬 앱 채팅 기능 '훅(WhooK)'",
    subtitle: "후즈팬",
    amount: 10,
  },
  event: {
    src: "/images/event.jpeg",
    title: "한터뮤직어워즈 초대권 증정 이벤트 🎉",
    subtitle: "한터뮤직어워즈",
  },
  news: {
    src: "/images/news.png",
    title: "[K-트렌드 리포트] 아이돌 최신 유행 거울 셀카에 대한 A to Z🤳",
    subtitle: "한터뉴스",
  },
  store: {
    src: "/images/store.jpg",
    title: "With YOU-th: 미니앨범 13집",
    subtitle: "트와이스",
    amount: "₩30,000",
  },
  charge: {
    src: "/images/wallet.png",
    title: "[한터캐시] 10만원 충전하기",
    amount: "₩99,000",
  },
};
